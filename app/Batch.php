<?php

namespace App;

use App\Classes\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\User;

class Batch extends Model
{
    //
    private $batch;
    public $hinbanid = null;

    public function disapproveClassALogistics($req)
    {
        $batch = Batch::find($req->id);
        $batch->logisticsFields = $req->approval;
        $batch->logisticsUpdatedBy = null;
        $batch->logisticsFieldUpdatedDate = null;
        $batch->logisticsRecievedDate = null;
        $batch->logisticsRecievedBy = null;
        $batch->logisticsRecieve = null;
        $batch->classAApproval = 0;
        $batch->classARecieve = 0;
        $batch->rndJaApproval = 0;
        $batch->update();

        $this->batch = $batch;
    }

    public function arrange($batch, $request, $timestamp)
    {

        // print_r($request->file('attachment_file')->getClientOriginalName());
        // return false;

        $batchcount = count(Batch::select('created_at')->whereMonth('created_at', date('m'))->whereYear('created_at', date('Y'))->get());
        $buffer = strlen($batchcount) < 4 ? '000' : '0000';
        $strcnt = strlen($batchcount) < 4 ? 10 : 11;
        $approver = $batch->rndApprover == null ? $batch->registeredBy : $batch->rndApprover;
        // print_r($batch->rndApprover == null);

        $company = $batch->class == 'C' ? User::where('id', $approver)->get()[0]['company'] :  User::where('id', 99)->get()[0]['company'];

        $hinbanId = substr("{$batch->class}" . substr($company, 0, 1) . date('ym') . '-' . $buffer, 0, $strcnt - ((int)strlen($batchcount))) . ((int)($batchcount) + 1);
        $this->hinbanId = $hinbanId;
        $user_rights = User::select('rights')->where('id', $batch->registeredBy)->get()[0]['rights'];

        $this->batch = [
            'class' => $batch->class,
            'hinbanId' => $hinbanId,
            'shipmentWeek' => $batch->shipmentWeek,
            'shipmentYear' => $batch->shipmentYear,
            'toCsv' => 0,
            'encodedBy' => $batch->registeredBy,
            'rndJaRecieve' => 0,
            'rndJaApprover' => $user_rights == 3 ? $batch->rndApprover : $batch->registeredBy,
            'rndJaApproval' => $batch->rndJAApproval,
            'classAApproval' => $batch->class == 'A' ? 0 : null,
            'classARecieve' =>  $batch->class == 'A' ? 0 : null,
            'ntsField' => 0,
            'created_at' => $timestamp
        ];

        return $this;
    }

    public function create()
    {
        $this->insert($this->batch);
    }
}
