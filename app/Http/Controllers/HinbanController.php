<?php

namespace App\Http\Controllers;

use App\Item;
use App\User;
use App\Batch;
use App\Revision;
use App\Disapproval;
use App\HrdsqlReqKind;
use App\BatchAttachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HinbanController extends Controller
{
    // 
    public function getDisapprovalList(Request $req)
    {
        $batch = Batch::find($req->id);
        return Disapproval::where('hinbanId', $batch->hinbanId)->select('disapprovals.*', 'users.firstName', 'users.lastName')->join('users', 'users.id', 'disapprovals.approver')->orderBy('id', 'desc')->get();
    }

    public function rndJaActions(Request $req)
    {

        Batch::where('id', $req->id)->update(['rndJaApproval' => $req->approval, 'logisticsFields' => null]);
    }

    public function rndJaRecieveHinban(Request $req)
    {
        Batch::where('id', $req->id)->update(['rndJaRecieve' => $req->status]);
        // Batch::where('id',$req->id)->update(['rndJaRecieve'=>$req->status]);
    }

    public function updateHinbanFieldsByLogistics(Request $req)
    {

        date_default_timezone_set('Asia/Manila');
        $timeStamp = date('Y-m-d H:i:s');


        try {
            DB::beginTransaction();

            Batch::where('id', $req->data['id'])->update([
                'logisticsFields' => 1,
                'logisticsUpdatedBy' => $req->data['updatedBy'],
                'logisticsFieldUpdatedDate' => $timeStamp,
            ]);

            foreach ($req->data['items'] as $key => $val) {
                Item::where('id', $val['id'])->update([
                    'hsCode' => $val['hsCode'],
                    'processFlag' => explode('/', $val['processFlag'])[0],
                    'groupCode' => $val['groupCode']
                ]);
            }
            // echo 'ok';
            DB::commit();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    public function getRevisionLisT(Request $req)
    {
        return Revision::select(
            'revisions.id',
            'revisions.batchid',
            'revisions.created_at',
            'reasonForRevision',
            DB::raw("CONCAT( users.firstName,' ',users.lastName) as revisedBy")
        )
            ->where('revisions.batchId', $req->data['id'])
            ->join('users', 'users.id', 'revisions.revisedBy')
            ->orderBy('id', 'desc')
            ->get();
    }

    public function updateHinban(Request $req)
    {
        date_default_timezone_set('Asia/Manila');
        $timeStamp = date('Y-m-d H:i:s');
        $batch =  $req->data['details'];
        $items =  $req->data['items'];
        $value =  Batch::select('created_at')->where('id', $req->data['details']['id'])->get()[0]['created_at'];
        $rev =  (int)count(Revision::where('batchId', $req->data['details']['id'])->get()) + 1;
        $user = User::find($batch['encodedBy']);
        // print_r($user);


        DB::beginTransaction();


        try {

            $batchUpdate = Batch::find($req->data['details']['id']);

            $batchUpdate->class =  $batch['class'];
            $batchUpdate->shipmentWeek =  $batch['shipmentWeek'];
            $batchUpdate->shipmentYear =  $batch['shipmentYear'];
            $batchUpdate->logisticsFields =  null;

            if ($batchUpdate->class == 'C') {
                $batchUpdate->rndJaApproval =  0;
            } else {
                $batchUpdate->classAApproval = 0;
            }

            if ($user['rights'] == 2) {
                $batchUpdate->rndJaApproval = 1;
            }

            $batchUpdate->updated_at =  $batch['class'];
            $batchUpdate->update();

            Revision::insert([
                'reasonForRevision' => $batch['revisionReason'],
                'rev' => $rev,
                'revisedBy' => $req->data['details']['revisedBy'],
                'batchId' => $batch['id'],
                'created_at' => $timeStamp,
            ]);

            foreach ($items as $key => $val) {
                Item::where('created_at', $value)->where('id', $val['id'])->update([
                    'hinbanCode' => $val["hinbanCode"],
                    'color' => explode('/', $val["color"])[0],
                    'hinbanNameJp' => $val["hinbanNameJp"],
                    'hinbanName' => $val["hinbanName"],
                    'sizeL' => (int)$val["sizeL"],
                    'sizeW' => (int)$val["sizeW"],
                    'sizeH' => (int)$val["sizeH"],
                    'cbmQty' => (int)$val["cbmQty"],
                    'kgQty' => (int)$val["kgQty"],
                    'unitPrc' => (int)$val["unitPrc"],
                    'unit' => explode('/', $val["unit"])[0],
                    'matCd' => explode('/', $val["matCd"])[0],
                    'catCd' => explode('/', $val["catCd"])[0],
                    'reqKind' => explode('/', $val["reqKind"])[0],
                    'useFor' => explode('/', $val["useFor"])[0],
                    'manufactureName' => $val["manufactureName"],
                    'description' => $val["description"],
                    'processingDescription' => $val["processingDescription"],
                    'updated_at' => $timeStamp
                ]);
            }

            DB::commit();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    public function request_kind()
    {

        return HrdsqlReqKind::all();
    }

    public function recieveHinbanByLogistics(Request $req)
    {
        date_default_timezone_set('Asia/Manila');
        $timestamp = $req->data['status'] == false ? null : date('Y-m-d H:i:s');
        $batch = Batch::find($req->data['id']);
        $batch->logisticsRecieve = $req->data['status'] ? 1 : 0;
        $batch->logisticsRecievedDate =  $timestamp;
        $batch->logisticsRecievedBy = $req->data['status'] ? $req->data['logisticsRecievedBy'] : null;
        $batch->update();
    }

    public function getHinbanAll()
    {
        $batches =  Batch::select(
            'batches.*',
            DB::raw("CONCAT(encodedBy.firstName,' ',encodedBy.lastName) as encoderName"),
            DB::raw("CONCAT(applicant.firstName,' ',applicant.lastName) as applicantName"),
            'revisions.rev',
            'users.rights',
            'disapprovals.disapprovalCount'
        )
            ->join('users as encodedBy', 'encodedBy.id', 'batches.encodedBy')
            ->join('users', 'users.id', 'batches.encodedBy')
            ->leftJoin('users as applicant', 'applicant.id', 'batches.rndJaApprover')
            ->leftJoin(
                DB::raw('(SELECT batchId, COUNT(*) as Rev From revisions GROUP BY batchId) revisions'),
                function ($join) {
                    $join->on('revisions.batchId', '=', 'batches.id');
                }
            )
            ->leftJoin(
                DB::raw('(SELECT hinbanID, COUNT(*) as disapprovalCount From disapprovals GROUP BY hinbanID) disapprovals'),
                function ($join) {
                    $join->on('disapprovals.hinbanID', '=', 'batches.hinbanID');
                }
            )
            ->orderBy('id', 'desc')
            ->get();

        foreach ($batches as $batch) {
            if ($batch['class'] == 'C') {
                $batch['approverRecieve'] = $batch['rndJaRecieve'] == 1 ? true : false;
            } else {
                $batch['approverRecieve'] = $batch['classARecieve'] == 1 ? true : false;
            }
            $batch['logisticsRecieve'] =  $batch['logisticsRecieve'] == 1 ? true : false;
            $batch['attachment'] = BatchAttachment::select('filename')->where('hinban_code', $batch['hinbanId'])->get();
        }

        return $batches;
    }

    public function getHinbanDetails(Request $req)
    {
        $created_at = Batch::select('created_at')->where('id', $req->data)->get()[0]->created_at;

        $items =   Item::select(
            'items.*',
            DB::raw("CONCAT(colors.CLR_CD,'/',colors.CLR_NM_JP) as color"),
            DB::raw("CONCAT(units.UNIT_CD,'/',units.UNIT_PLURAL) as unit"),
            DB::raw("CONCAT(materials.MAT_CD,'/',materials.MAT_NM_JP) as matCd"),
            DB::raw("CONCAT(categories.CAT_CD,'/',categories.CAT_NM_JP) as catCd"),
            DB::raw("CONCAT(request_kinds.REQ_KIND_CD,'/',request_kinds.REQ_KIND_DTL_NAME_JP) as reqKind"),
            DB::raw("CONCAT(countries.country_code,'/',countries.country_name_jp) as useFor"),
            DB::raw("request_kinds.REQ_KIND_NO as reqKindNo"),
            DB::raw("CONCAT(divisions.DIV_CD,'/',divisions.DIV_NM) as p_div_cd"),
            DB::raw("CONCAT(divisions.DIV_CD,'/',divisions.COM_CD) as e_div_cd"),
            DB::raw("((items.sizeL*items.sizeH*items.sizeW)/1000000000) as cbmQty"),
            DB::raw("CONCAT(processes.id,'/',processes.processName) as processFlag")
        )
            ->where('items.created_at', $created_at)
            ->distinct('items.id')
            ->join('colors', 'colors.CLR_CD', 'items.color')
            ->join('units', 'units.UNIT_CD', 'items.unit')
            ->join('materials', 'materials.MAT_CD', 'items.matCd')
            ->join('categories', 'categories.CAT_CD', 'items.catCd')
            // ->join('request_kinds','request_kinds.REQ_KIND_CD','items.reqKind')
            ->join('request_kinds', function ($join) {
                $join->on('request_kinds.REQ_KIND_CD', 'items.reqKind');
                $join->on('request_kinds.REQ_KIND_NO', 'items.reqKindNo');
            })
            ->join('countries', 'countries.country_code', 'items.useFor')
            ->join('divisions', 'divisions.DIV_CD', 'categories.DIV_CD')
            ->leftJoin('processes', 'processes.id', 'items.processFlag')
            ->get();
        foreach ($items as $key => $val) {
            $items[$key]['cbmQty'] = number_format((float)$items[$key]['cbmQty'], 4);
            $items[$key]['insert'] = '<i class="fa fa-upload browseafile"></i>';
            $items[$key]['preview'] = '<i class="fa fa-search-plus preview" @click="dialogVisible = true"></i>';
        }

        return $items;
    }

    public function test()
    {
        return Item::where('id', 69)->get();
    }
}
