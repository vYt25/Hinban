<?php

namespace App\Classes;

class Timestamp{
    public function __construct(){
        date_default_timezone_set('Asia/Manila');
    }

    public static function get(){
        return date('Y-m-d H:i:s');
    }
}

?>