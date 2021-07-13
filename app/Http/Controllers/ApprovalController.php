<?php

namespace App\Http\Controllers;

use App\Item;
use App\Batch;
use App\Disapproval;
use App\Classes\Timestamp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApprovalController extends Controller
{
    private $timestamp = null;

    public function __construct()
    {
        $this->timestamp = Timestamp::get();
    }

    public function ntsApproval(Request $req)
    {

        // return $req->items;


        try {

            DB::beginTransaction();

            foreach ($req->items as $key => $val) {
                $item = Item::find($val['id']);
                $item->hsCode = $val['hsCode'];
                $item->update();
            }

            Batch::where('id', $req->id)->update([
                'ntsField' => 1
            ]);

            DB::commit();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    public function updateDisaproveClassALogistics(Request $req)
    {
        // return $req;
        try {

            DB::beginTransaction();
            $batch = new Batch;
            $batch->disapproveClassALogistics($req);

            $disapproveReason = new Disapproval();
            $disapproveReason->create($batch, $req);


            DB::commit();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }

    public function disapprovalClassA(Request $req)
    {

        $batch = Batch::find($req->id);
        $batch->classAApproval = 2;
        $batch->classARecieve = 0;
        $batch->update();

        $disapproval = new Disapproval;
        $disapproval->disapprovalReason = $req->reason;
        $disapproval->approver = $req->user;
        $disapproval->hinbanId = $batch->hinbanId;
        $disapproval->save();
    }


    public function approvalClassA(Request $req)
    {

        $batch = Batch::find($req->id);
        $batch->classAApproval = $req->approval;

        if ($req->approval == 2) {
            $batch->classARecieve =  0;
        } else {
            $batch->rndJaApproval = 1;
            $batch->ClassAApprovedDate = $this->timestamp;
        }

        $batch->logisticsFields = null;
        $batch->logisticsRecievedBy = null;
        $batch->logisticsRecieve = null;


        if (isset($req->reason)) {
            $disapproval = new Disapproval;
            $disapproval->disapprovalReason = $req->reason;
            $disapproval->approver = $req->user;
            $disapproval->hinbanId = $batch->hinbanId;
            $disapproval->save();
        }

        $batch->update();
    }

    public function disapproveByLogistics(Request $req)
    {
        // return $req;
        try {
            DB::beginTransaction();

            $batch = Batch::find($req->id);
            if ($batch->class == 'A') {
                $batch->logisticsRecievedDate = 0;
                $batch->logisticsFields = 2;
                $batch->classARecieve = null;
                $batch->classAApproval = null;
            } else {
                $batch->rndJaApproval = 0;
                $batch->logisticsRecieve = null;
                $batch->logisticsRecievedBy = null;
                $batch->logisticsFields = 2;
                $batch->logisticsUpdatedBy = null;
            }


            $batch->update();


            $disapproval = new Disapproval;
            $disapproval->disapprovalReason = $req->disapproveReason;
            $disapproval->approver = $req->user;
            $disapproval->hinbanId = $batch->hinbanId;
            $disapproval->save();

            DB::commit();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }
}
