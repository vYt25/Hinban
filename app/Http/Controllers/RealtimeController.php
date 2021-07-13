<?php

namespace App\Http\Controllers;

use App\Batch;
use App\BatchAttachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RealtimeController extends Controller
{
    public function getBatchObject(Request $req)
    {
        $batchObj =  Batch::select(
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
            ->where('batches.id', $req->id)
            ->first();

        if ($batchObj['class'] == 'C') {
            $batchObj['approverRecieve'] = $batchObj['rndJaRecieve'] == 1 ? true : false;
        } else {
            $batchObj['approverRecieve'] = $batchObj['classARecieve'] == 1 ? true : false;
        }
        $batchObj['logisticsRecieve'] =  $batchObj['logisticsRecieve'] == 1 ? true : false;
        $batchObj['attachment'] = BatchAttachment::select('filename')->where('hinban_code', $batchObj['hinbanId'])->get();

        return $batchObj;
    }
}
