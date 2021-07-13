<?php

namespace App\Classes;

class Decode{
    public static function this($req){
        return json_decode($req);
    }
}
?>