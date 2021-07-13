<?php

namespace App;

use App\Classes\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Draft extends Model
{
    //

    public function create($req){
        $user = $this->arrange($req);

        Draft::insert([
            "userId" => $req->user,
            "draftTitle" => $req->draftTitle,
            "batch" => json_encode($req->batch),
            "items" => json_encode($this->arrange($req)),
            "created_at" => Timestamp::get()
        ]);
    }

    public function arrange($req){
        $items = $req->items;
        foreach($items as $key => $val){
            $items[$key]['image'] = null;
        }
        return $items;
    }
}
