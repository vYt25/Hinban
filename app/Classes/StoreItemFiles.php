<?php

namespace App\Classes;

use App\Interfaces\StoreInterface;
use Illuminate\Support\Facades\Storage;

class StoreItemFiles implements StoreInterface{

    public function store($request){
        foreach($request->file('files') as $key => $val){
            $filename =  $request->file('files')[$key]->getClientOriginalName();
            Storage::disk('public') -> put("attachments/".date('Y-m-d').'/'.$filename, file_get_contents($request->file('files')[$key]->getRealPath()));
        }
    }
}


?>