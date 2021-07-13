<?php
namespace App\Classes;

use App\Interfaces\StoreInterface;
use Illuminate\Support\Facades\Storage;


class StoreBatchFiles implements StoreInterface{

    public function store($request){
        foreach($request->file('attachment_file') as $key => $val){
            Storage::disk('public')->put('batch_files/'.date('Y-m-d').'/'.$val->getClientOriginalName(), file_get_contents($val->getRealPath()));

        }
        // Storage::disk('public')->put('batch_files/'.date('Y-m-d').'/'.$request->file('attachment_file')->getClientOriginalName(), file_get_contents($request->file('attachment_file')->getRealPath()));


    }
}


?>