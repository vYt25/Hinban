<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/generatePassword', function () {
    return Hash::make(md5('0296'));
});

// Route::get('/test', function (Request $request) {
//     App\User::where('employeeId', 37758)->update(['password' => Hash::make(md5(37758))]);
//     // return App\User::all();
//     // return $items = App\Item::select('items.*','categories.DIV_CD','request_kinds.REQ_KIND_NO as reqKindNo',DB::raw("((items.sizeL*items.sizeH*items.sizeW)/1000000000) as cbmQty"),'units.PRC_UNT as prcUnt')
//     // ->where('.created_at','2020-06-02 13:02:25')
//     // ->join('categories','categories.CAT_CD','items.catCD')
//     // ->join('request_kinds','request_kinds.REQ_KIND_CD','items.reqKind')
//     // ->join('units','units.UNIT_CD','items.unit')
//     // ->get();
// });


// Route::any('sampleonly', function () {
//     echo 'test';
// });

Route::post('/register', 'RegisterController@register');

Route::post('/login', 'LoginController@login');

Route::post('/logout', 'LoginController@logout');

Route::get('/lists', 'HomeController@lists');

Route::middleware('auth:sanctum')->get('notification', 'HomeController@notification');

Route::middleware('auth:sanctum')->get('getHinbanAll', 'HinbanController@getHinbanAll');

Route::middleware('auth:sanctum')->post('getHinbanDetails', 'HinbanController@getHinbanDetails');

Route::middleware('auth:sanctum')->post('recieveHinbanByLogistics', 'HinbanController@recieveHinbanByLogistics');

Route::middleware('auth:sanctum')->post('updateHinban', 'HinbanController@updateHinban');

Route::get('request_kind', 'HinbanController@request_kind')->name('request_kind');

Route::middleware('auth:sanctum')->post('getRevisionList', 'HinbanController@getRevisionList');

Route::get('export/', 'ExportController@export');

Route::middleware('auth:sanctum')->get('getUsers', 'UserControlller@getUsers');

Route::middleware('auth:sanctum')->post('setUserAccess', 'UserControlller@setUserAccess');

Route::middleware('auth:sanctum')->post('updateHinbanFieldsByLogistics', 'HinbanController@updateHinbanFieldsByLogistics');

Route::middleware('auth:sanctum')->any('updateAccountDetails', 'AccountController@updateAccountDetails');

Route::middleware('auth:sanctum')->post('saveAsDraft', 'SaveController@saveAsDraft');

Route::middleware('auth:sanctum')->post('draftList', 'HomeController@draftList');

Route::middleware('auth:sanctum')->post('draftDelete', 'HomeController@draftDelete');

Route::middleware('auth:sanctum')->post('deleteUserAccess', 'UserControlller@deleteUserAccess');

Route::middleware('auth:sanctum')->post('rndJaRecieveHinban', 'HinbanController@rndJaRecieveHinban');

Route::middleware('auth:sanctum')->post('rndJaActions', 'HinbanController@rndJaActions');

Route::middleware('auth:sanctum')->get('rndJapaneseAdvisors', 'HomeController@rndJapaneseAdvisors');

Route::middleware('auth:sanctum')->post('deleteUserAccessUndo', 'UserControlller@deleteUserAccessUndo');

Route::middleware('auth:sanctum')->post('disapproveByLogistics', 'ApprovalController@disapproveByLogistics');

Route::middleware('auth:sanctum')->post('classARecieve', 'RecievingController@classARecieve');

Route::middleware('auth:sanctum')->post('approvalClassA', 'ApprovalController@approvalClassA');

Route::middleware('auth:sanctum')->post('disapprovalClassA', 'ApprovalController@disapprovalClassA');

Route::middleware('auth:sanctum')->post('updateDisaproveClassALogistics', 'ApprovalController@updateDisaproveClassALogistics');

Route::middleware('auth:sanctum')->post('getDisapprovalList', 'HinbanController@getDisapprovalList');

Route::middleware('auth:sanctum')->post('ntsApproval', 'ApprovalController@ntsApproval');


//==========================================================================================================//
//                                        Category                                                          //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addCategory', 'MasterlistController@addCategory');

Route::middleware('auth:sanctum')->post('updateCategory', 'MasterlistController@updateCategory');

Route::middleware('auth:sanctum')->post('deleteCategory', 'MasterlistController@deleteCategory');

Route::middleware('auth:sanctum')->post('undoDeleteCategory', 'MasterlistController@undoDeleteCategory');

//==========================================================================================================//
//                                        Color                                                             //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addColor', 'MasterlistController@addColor');

Route::middleware('auth:sanctum')->post('updateColor', 'MasterlistController@updateColor');

Route::middleware('auth:sanctum')->post('deleteColor', 'MasterlistController@deleteColor');

Route::middleware('auth:sanctum')->post('undoDeleteColor', 'MasterlistController@undoDeleteColor');

//==========================================================================================================//
//                                        Country                                                           //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addCountry', 'MasterlistController@addCountry');

Route::middleware('auth:sanctum')->post('updateCountry', 'MasterlistController@updateCountry');

Route::middleware('auth:sanctum')->post('deleteCountry', 'MasterlistController@deleteCountry');

Route::middleware('auth:sanctum')->post('undoDeleteCountry', 'MasterlistController@undoDeleteCountry');

//==========================================================================================================//
//                                        Division                                                          //
//==========================================================================================================//
Route::middleware('auth:sanctum')->post('addDivision', 'MasterlistController@addDivision');

Route::middleware('auth:sanctum')->post('updateDivision', 'MasterlistController@updateDivision');

Route::middleware('auth:sanctum')->post('deleteDivision', 'MasterlistController@deleteDivision');

Route::middleware('auth:sanctum')->post('undoDeleteDivision', 'MasterlistController@undoDeleteDivision');

//==========================================================================================================//
//                                        Material                                                          //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addMaterial', 'MasterlistController@addMaterial');

Route::middleware('auth:sanctum')->post('updateMaterial', 'MasterlistController@updateMaterial');

Route::middleware('auth:sanctum')->post('deleteMaterial', 'MasterlistController@deleteMaterial');

Route::middleware('auth:sanctum')->post('undoDeleteMaterial', 'MasterlistController@undoDeleteMaterial');

//==========================================================================================================//
//                                        Process                                                           //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addProcess', 'MasterlistController@addProcess');

Route::middleware('auth:sanctum')->post('updateProcess', 'MasterlistController@updateProcess');

Route::middleware('auth:sanctum')->post('deleteProcess', 'MasterlistController@deleteProcess');

Route::middleware('auth:sanctum')->post('undoDeleteProcess', 'MasterlistController@undoDeleteProcess');


//==========================================================================================================//
//                                        Request Kind                                                      //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('addRequestKind', 'MasterlistController@addRequestKind');

Route::middleware('auth:sanctum')->post('updateRequestKind', 'MasterlistController@updateRequestKind');

Route::middleware('auth:sanctum')->post('deleteRequestKind', 'MasterlistController@deleteRequestKind');

Route::middleware('auth:sanctum')->post('undoDeleteRequestKind', 'MasterlistController@undoDeleteRequestKind');


//==========================================================================================================//
//                                        Unit                                                              //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('updateUnit', 'MasterlistController@updateUnit');

Route::middleware('auth:sanctum')->post('addUnit', 'MasterlistController@addUnit');

Route::middleware('auth:sanctum')->post('updateUnit', 'MasterlistController@updateUnit');

Route::middleware('auth:sanctum')->post('deleteUnit', 'MasterlistController@deleteUnit');

Route::middleware('auth:sanctum')->post('undoDeleteUnit', 'MasterlistController@undoDeleteUnit');


//==========================================================================================================//
//                                        Realtime Getters                                                  //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('getBatchObject', 'RealtimeController@getBatchObject');

//==========================================================================================================//
//                                        Sync Japanese Adviser credentials to JESS                         //
//==========================================================================================================//

Route::middleware('auth:sanctum')->post('SyncToJess', 'UserControlller@SyncToJess');








// Route::get('test', function () {
//     return date('ymd');
// });

// Route::post('registerUsers',function(Request $req){

//     $users = [];
//     foreach($req->users as $key=>$val){
//         // if(isset($val['WorkMailAdd'])){
//             // $users[] = [
//                 // "employeeId"=> $val['id'],
//                 // "firstName"=> $val['FirstNameEng'],
//                 // "lastName"=>$val['LastNameEng'] ,
//                 // "firstNameJp"=> $val['FirstNameKana'],
//                 // "lastNameJp"=> $val['LastNameKana'] ,
//                 // "department"=> isset($val['Dept_Name']) ? $val['Dept_Name'] : null,
//                 // "created_at"=> date('Y-m-d H:i:s'),
//                 // "rights"=> 2,
//                 // 'email'=> isset($val['WorkMailAdd']) ? $val['WorkMailAdd'] : null,
//                 // 'password'=> Hash::make($val['Password'])
//             // ];
//         // }
//         User::where('employeeId',$val['id'])->update(['company'=> isset($val['Comp_Name']) ? $val['Comp_Name'] : null ]);
//         // echo isset($val['Comp_Name']) ? $val['Comp_Name']: null;
//         // echo '<br>';
//     }

// });

// Route::get('changePassword', function (Request $req) {
//     // return Hash::make($req->input()['password']);
//     return User::where('employeeId', '0041')->update(['password' => Hash::make('c9df945f744f1f5927f66cf11a8a990f')]);
//     //hagiwara old pw = $2y$10$6kQne4perU7dHHZGjOzWLet0CXLMddLauDUq.y/whOGU4f3QGNAuC
//     //->update(['password'=>Hash::make('3137dc292d794a841c332523bc07a585')])
//     //return 'updated';

// });

// Route::middleware('auth:sanctum')->get('/lists','HomeController@lists');

// Route::get('/oracle', function () {
//     return DB::connection('IMPEX')->table('ME10_HINBAN')->limit(10)->get();
// });
