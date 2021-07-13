<?php

namespace App\Http\Controllers;

use App\Item;

use App\User;
use App\Batch;
use App\Classes\Timestamp;
use Illuminate\Http\Request;
use App\Exports\HinbanExport;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class ExportController extends Controller
{
    //
    public function __construct()
    {
        $this->timestamp = Timestamp::get();
    }

    public function export(Request $req)
    {
        $batch = $this->getBatches($req);

        $items = $this->getItems($batch);

        $arrangedItems = $this->arrangeArray($items, $batch);

        return Excel::download(new HinbanExport($arrangedItems), 'hinban.csv');
    }

    public function getItems($batch)
    {
        return Item::select(
            'items.*',
            'categories.DIV_CD',
            'request_kinds.REQ_KIND_NO as reqKindNo',
            DB::raw("((items.sizeL*items.sizeH*items.sizeW)/1000000000) as cbmQty"),
            'units.PRC_UNT as prcUnt'
        )
            ->where('items.created_at', $batch[0]->created_at)
            ->join('categories', 'categories.CAT_CD', 'items.catCD')
            ->join('request_kinds', function ($join) {
                $join->on('request_kinds.REQ_KIND_CD', '=', 'items.reqKind');
                $join->on('request_kinds.REQ_KIND_NO', '=', 'items.reqKindNo');
            })
            ->join('units', 'units.UNIT_CD', 'items.unit')
            ->distinct('id')
            ->get();
    }

    public function getBatches($req)
    {

        // $batch = Batch::select('batches.*', 'users.lastName as logisticsUpdatedBy')
        //     ->where('batches.id', $req->input('id'))
        //     ->leftjoin('users', 'users.id', 'batches.logisticsUpdatedBy')
        //     ->get();
        $batch = Batch::select('batches.*', 'users.lastName as logisticsUpdatedBy')
            ->leftjoin('users', 'users.id', 'batches.logisticsUpdatedBy')->where('batches.id', $req->id)->get();

        foreach ($batch as $key => $val) {
            $val['registeredBy'] = User::select('lastName')->where('id', $val['encodedBy'])->get()[0]['lastName'];
        }

        return $batch;
    }

    public function arrangeArray($items, $batch)
    {
        $arrangedItems = [];
        $arrayKeys = $this->getItemkeys();
        $arrangedItems[] = $arrayKeys;
        foreach ($items as $item) {
            $temp = $arrayKeys;
            $temp['HINBAN'] = $item['hinbanCode'];
            $temp['CLR'] = $item['color'];
            $temp['HINBAN_NM_JP'] = $item['hinbanNameJp'];
            $temp['HINBAN_NM'] = $item['hinbanName'];
            $temp['SIZE_L'] = $item['sizeL'];
            $temp['SIZE_W'] = $item['sizeW'];
            $temp['SIZE_H'] = $item['sizeH'];
            $temp['CBM_QTY'] = $item['cbmQty'];
            $temp['KG_QTY'] = $item['kgQty'];
            $temp['UNIT_PRC'] = $item['unitPrc'];
            $temp['PRC_UNT'] = $item['prcUnt'];
            $temp['UNIT'] = $item['unit'];
            $temp['MAT_CD'] = $item['matCd'];
            $temp['CAT_CD'] = $item['catCd'];
            $temp['KIND_CD'] = implode('', explode('.', explode('-', $item['hsCode'])[0]));
            $temp['REQ_KIND'] = $item['reqKind'];
            $temp['REQ_KIND_NO'] = $item['reqKindNo'];
            $temp['E_DIV_CD'] = $item['DIV_CD'];
            $temp['P_DIV_CD'] = $item['DIV_CD'];
            $temp['CUSTOM_CD'] = $item['hsCode'];
            $temp['PROCESS_FLG'] = $item['processFlag'];
            $temp['CLASS'] = $batch[0]['class'];
            $temp['APRV_EMP_IMPEX'] = $batch[0]['logisticsUpdatedBy'];
            // $temp['APRV_EMP_IMPEX'] = '';

            $temp['APRV_EMP_DEV'] = $batch[0]['registeredBy'];
            // $temp['APPRV_EMP_FACT'] = null;

            $temp['ENT_DT'] = $this->timestamp;
            $temp['UPD_DT'] = $this->timestamp;

            $temp['USE_FOR'] = $item['useFor'];
            $arrangedItems[] = $temp;
        }

        return $arrangedItems;
    }



    public function getItemKeys()
    {

        return json_decode(file_get_contents(base_path('resources/json/csvArrayPattern.json')), true);
    }
}
