<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HrdsqlReqKind extends Model
{
    //
    protected $connection = 'sqlsrv';
    protected $table = 'ConstructionMaterials';
}
