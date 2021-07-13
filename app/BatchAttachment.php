<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BatchAttachment extends Model
{
    //
    private $files = [];

    public function arrange($batch,$request,$timestamp,$hinbanId){

        foreach($request->file('attachment_file') as $key => $val){
            $this->files[]=[
                'hinban_code'=> $hinbanId,
                'filename'=> 'batch_files/'.date('Y-m-d').'/'.$val->getClientOriginalName(),
                'created_at'=> $timestamp,
            ];
        }
        return $this;
        
    }

    public function create(){
        $this->insert($this->files);
    }
}
