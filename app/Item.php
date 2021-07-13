<?php

namespace App;

use App\Classes\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    private $items = [];

    public function arrange($items, $request)
    {

        foreach ($items as $key => $val) {
            $this->items[] = [
                'hinbanCode' => $val->hinban,
                'color' => explode('/', $val->clr)[0],
                'hinbanNameJp' => $val->hinban_nm_jp,
                'hinbanName' => $val->hinban_nm,
                'sizeL' => (int)$val->size_l,
                'sizeW' => (int)$val->size_w,
                'sizeH' => (int)$val->size_h,
                'cbmQty' => (int)$val->cbm_qty,
                'kgQty' => (int)$val->kg_qty,
                'unitPrc' => $val->unit_prc,
                'unit' => explode('/', $val->unit)[0],
                'matCd' => explode('/', $val->mat_cd)[0],
                'catCd' => explode('/', $val->cat_cd)[0],
                'reqKind' => explode('/', $val->req_kind)[0],
                'reqKindNo' => $val->req_kind_no,
                'useFor' => explode('/', $val->use_for)[0],
                'description' => $val->description,
                'manufactureName' => $val->manufacture_name,
                'processingDescription' => $val->processing_description,
                'attachments' => date('Y-m-d') . '/' . $val->fileName,
                'created_at' => Timestamp::get()
            ];
        }
        return $this;
    }

    public function create()
    {
        $this->insert($this->items);
    }
}
