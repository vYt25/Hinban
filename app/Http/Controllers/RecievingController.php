<?php

namespace App\Http\Controllers;

use App\Batch;
use App\Classes\Timestamp;
use Illuminate\Http\Request;

class RecievingController extends Controller
{

    public $timestamp = null;

    public function __construct()
    {
        $this->timestamp = Timestamp::get();
    }

    public function classARecieve(Request $req)
    {

        $batch = Batch::find($req->id);
        $batch->classARecieve = $req->status;
        $batch->classARecievedDate = $req->status ?  $this->timestamp : null;
        $batch->update();
    }
}
