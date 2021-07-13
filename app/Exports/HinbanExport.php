<?php

namespace App\Exports;

use App\Item;
use App\User;
use App\Batch;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class HinbanExport implements FromCollection, WithHeadings, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $values = null;

    public function __construct($values)
    {
        $this->values = $values;
    }


    public function collection()
    {
        // $sheet->setAutoSize(true);
        return collect($this->values);
    }

    public function headings(): array
    {
        return [
            "HINBAN",
            "CLR",
            "HINBAN_NM_JP",
            "HINBAN_NM",
            "SIZE_L",
            "SIZE_W",
            "SIZE_H",
            "CBM_QTY",
            "CBM_QTY1",
            "CBM_QTY2",
            "CBM_QTY3",
            "KG_QTY",
            "KG_QTY1",
            "KG_QTY2",
            "KG_QTY3",
            "UNIT_PRC",
            "UNIT",
            "PRC_UNT",
            "KG_FLG",
            "CBM_FLG",
            "TUBO_FLG",
            "SQM_FLG",
            "MTR_FLG",
            "FLOOR_FLG",
            "MAT_CD",
            "CAT_CD",
            "USE_FOR_JP",
            "KIND_CD",
            "REQ_KIND",
            "REQ_KIND_NO",
            "P_DIV_CD",
            "E_DIV_CD",
            "CUSTOM_CD",
            "PROCESS_FLG",
            "CLASS",
            "APRV_EMP_IMPEX",
            "APRV_EMP_DEV",
            "APRV_EMP_FACT",
            "USE_FOR",
            "HS_CODE_STATUS",
            "HS_CODE_REMARKS",
            "ENT_DT",
            "UPD_DT",
            "DEL_DT"
        ];
    }
}
