<?php

namespace App\Http\Controllers;

use App\Unit;
use App\Color;
use App\Country;
use App\Process;
use App\Category;
use App\Division;
use App\Material;
use App\RequestKind;
use App\Classes\Timestamp;
use Illuminate\Http\Request;

class MasterlistController extends Controller
{
    public $timestamp = null;

    public function __construct()
    {
        $this->timestamp = Timestamp::get();
    }

    public function undoDeleteUnit(Request $req)
    {
        $unit = Unit::find($req->id);
        $unit->deleted_at = null;
        $unit->update();
    }

    public function deleteUnit(Request $req)
    {
        $unit = Unit::find($req->id);
        $unit->deleted_at = $this->timestamp;
        $unit->update();
        return $this->timestamp;
    }

    public function addUnit(Request $req)
    {
        $unit = new Unit;
        $unit->UNIT_CD = $req->UNIT_CD;
        $unit->UNIT_SINGLE = $req->UNIT_SINGLE;
        $unit->UNIT_PLURAL = $req->UNIT_PLURAL;
        $unit->UNIT_JP = $req->UNIT_JP;
        $unit->PRC_UNT = $req->PRC_UNT;
        $unit->created_at = $this->timestamp;
        $unit->save();

        return Unit::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteRequestKind(Request $req)
    {
        $requestKind = RequestKind::find($req->id);
        $requestKind->deleted_at = null;
        $requestKind->update();
    }

    public function deleteRequestKind(Request $req)
    {
        $requestKind = RequestKind::find($req->id);
        $requestKind->deleted_at = $this->timestamp;
        $requestKind->update();
        return $this->timestamp;
    }

    public function addRequestKind(Request $req)
    {
        $requestKind = new RequestKind;
        $requestKind->REQ_KIND_CD = $req->REQ_KIND_CD;
        $requestKind->REQ_KIND_NO = $req->REQ_KIND_NO;
        $requestKind->REQ_KIND_DTL_NAME = $req->REQ_KIND_DTL_NAME;
        $requestKind->REQ_KIND_DTL_NAME_JP = $req->REQ_KIND_DTL_NAME_JP;
        $requestKind->MIX_KBN = $req->MIX_KBN;
        $requestKind->NON_PREFAB_KBN = $req->NON_PREFAB_KBN;
        $requestKind->created_at = $this->timestamp;
        $requestKind->save();

        return RequestKind::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteProcess(Request $req)
    {
        $process = Process::find($req->id);
        $process->deleted_at = null;
        $process->update();
    }

    public function deleteProcess(Request $req)
    {
        $process = Process::find($req->id);
        $process->deleted_at = $this->timestamp;
        $process->update();
        return $this->timestamp;
    }

    public function addProcess(Request $req)
    {
        $process = new Process;
        $process->processCode = $req->processCode;
        $process->processName = $req->processName;
        $process->created_at = $this->timestamp;
        $process->save();

        return Process::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteMaterial(Request $req)
    {
        $material = Material::find($req->id);
        $material->deleted_at = null;
        $material->update();
    }

    public function deleteMaterial(Request $req)
    {
        $material = Material::find($req->id);
        $material->deleted_at = $this->timestamp;
        $material->update();
        return $this->timestamp;
    }

    public function addMaterial(Request $req)
    {
        $material = new Material;
        $material->MAT_CD = $req->MAT_CD;
        $material->MAT_NM = $req->MAT_NM;
        $material->MAT_NM_JP = $req->MAT_NM_JP;
        $material->created_at = $this->timestamp;
        $material->save();

        return Material::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteDivision(Request $req)
    {
        $div = Division::find($req->id);
        $div->deleted_at = null;
        $div->update();
    }

    public function deleteDivision(Request $req)
    {
        $div = Division::find($req->id);
        $div->deleted_at = $this->timestamp;
        $div->update();
        return $this->timestamp;
    }

    public function addDivision(Request $req)
    {
        $div = new Division;
        $div->DIV_CD = $req->DIV_CD;
        $div->DIV_NM = $req->DIV_NM;
        $div->COM_CD = $req->COM_CD;
        $div->created_at = $this->timestamp;
        $div->save();

        return Division::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteCountry(Request $req)
    {
        $country = Country::find($req->id);
        $country->deleted_at = null;
        $country->update();
    }

    public function deleteCountry(Request $req)
    {
        $country = Country::find($req->id);
        $country->deleted_at = $this->timestamp;
        $country->update();
        return $this->timestamp;
    }

    public function addCountry(Request $req)
    {
        $country = new Country;
        $country->country_code = $req->country_code;
        $country->country_name = $req->country_name;
        $country->country_name_jp = $req->country_name_jp;
        $country->created_at = $this->timestamp;
        $country->save();

        return Country::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteColor(Request $req)
    {
        $color = Color::find($req->id);
        $color->deleted_at = null;
        $color->update();
    }

    public function deleteColor(Request $req)
    {
        $color = Color::find($req->id);
        $color->deleted_at = $this->timestamp;
        $color->update();
        return $this->timestamp;
    }

    public function addColor(Request $req)
    {

        $color = new Color;
        $color->CLR_CD = $req->CLR_CD;
        $color->CLR_NM = $req->CLR_NM;
        $color->CLR_NM_JP = $req->CLR_NM_JP;
        $color->created_at = $this->timestamp;
        $color->save();

        return Color::limit(1)->orderBy('id', 'desc')->first();
    }

    public function undoDeleteCategory(Request $req)
    {
        $cat = Category::find($req->id);
        $cat->deleted_at = null;
        $cat->update();
    }

    public function addCategory(Request $req)
    {
        $cat = new Category;
        $cat->CAT_CD = (string)$req->CAT_CD;
        $cat->CAT_NM = $req->CAT_NM;
        $cat->CAT_NM_JP = $req->CAT_NM_JP;
        $cat->DIV_CD = $req->DIV_CD;
        $cat->TAX_DEPARTMENT_CD = $req->TAX_DEPARTMENT_CD;
        $cat->MEGASOLOR_KBN = $req->MEGASOLOR_KBN;
        $cat->NCV_KBN = $req->NCV_KBN;
        $cat->created_at = $this->timestamp;
        $cat->save();
        return Category::limit(1)->orderBy('id', 'desc')->first();
    }
    public function deleteCategory(Request $req)
    {

        $cat = Category::find($req->id);
        $cat->deleted_at = $this->timestamp;
        $cat->update();
        return $this->timestamp;
    }
    public function updateUnit(Request $req)
    {

        $unit = Unit::find($req->id);
        $unit->UNIT_SINGLE = $req->UNIT_SINGLE;
        $unit->UNIT_PLURAL = $req->UNIT_PLURAL;
        $unit->UNIT_JP = $req->UNIT_JP;
        $unit->updated_at = $this->timestamp;
        $unit->update();
    }

    public function updateRequestKind(Request $req)
    {

        $requestKind = RequestKind::find($req->id);
        $requestKind->REQ_KIND_CD = $req->REQ_KIND_CD;
        $requestKind->REQ_KIND_NO = $req->REQ_KIND_NO;
        $requestKind->REQ_KIND_DTL_NAME = $req->REQ_KIND_DTL_NAME;
        $requestKind->REQ_KIND_DTL_NAME_JP = $req->REQ_KIND_DTL_NAME_JP;
        $requestKind->MIX_KBN = $req->MIX_KBN;
        $requestKind->NON_PREFAB_KBN = $req->NON_PREFAB_KBN;
        $requestKind->updated_at = $this->timestamp;
        $requestKind->update();
    }

    public function updateProcess(Request $req)
    {

        $process = Process::find($req->id);
        $process->processName = $req->processName;
        $process->processCode = $req->processCode;
        $process->updated_at = $this->timestamp;
        $process->update();
    }

    public function updateMaterial(Request $req)
    {

        $material = Material::find($req->id);
        $material->MAT_CD = $req->MAT_CD;
        $material->MAT_NM = $req->MAT_NM;
        $material->MAT_NM_JP = $req->MAT_NM_JP;
        $material->updated_at = $this->timestamp;
        $material->update();
    }

    public function updateDivision(Request $req)
    {

        $division = Division::find($req->id);
        $division->DIV_CD = $req->DIV_CD;
        $division->DIV_NM = $req->DIV_NM;
        $division->COM_CD = $req->COM_CD;
        $division->updated_at = $this->timestamp;
        $division->update();
    }

    public function updateCountry(Request $req)
    {

        $country = Country::find($req->id);
        $country->country_code = $req->country_code;
        $country->country_name = $req->country_name;
        $country->country_name_jp = $req->country_name_jp;
        $country->updated_at = $this->timestamp;
        $country->update();
    }

    public function updateColor(Request $req)
    {

        $color = Color::find($req->id);
        $color->CLR_CD = $req->CLR_CD;
        $color->CLR_NM = $req->CLR_NM;
        $color->CLR_NM_JP = $req->CLR_NM_JP;
        $color->updated_at = $this->timestamp;
        $color->update();
    }

    public function updateCategory(Request $req)
    {

        $category = Category::find($req->id);
        $category->CAT_CD = $req->CAT_CD;
        $category->CAT_NM = $req->CAT_NM;
        $category->CAT_NM_JP = $req->CAT_NM_JP;
        $category->TAX_DEPARTMENT_CD = $req->TAX_DEPARTMENT_CD;
        $category->MEGASOLOR_KBN = $req->MEGASOLOR_KBN;
        $category->NCV_KBN = $req->NCV_KBN;
        $category->updated_at = $this->timestamp;
        $category->update();
    }
}
