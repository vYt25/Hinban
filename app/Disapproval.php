<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Disapproval extends Model
{
    public function create($batch, $req)
    {
        $batch_obj = Batch::find($req->id);
        $this->insert([
            'hinbanId' => $batch_obj->hinbanId,
            'disapprovalReason' => $req->reason,
            'approver' => $req->user
        ]);
        // $disapproveReason->hinbanId = $batch->batch['hinbanId'];
        // $disapproveReason->disapprovalReason = $req->reason;
        // $disapproveReason->approver = $req->user;
        // $disapproveReason->save();
    }
}
