<?php

namespace App\Http\Controllers;

use App\User;
use App\Classes\Timestamp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserControlller extends Controller
{
    public $timestamp = null;

    public function __construct()
    {
        $this->timestamp = Timestamp::get();
    }

    private function undefineChecker($val, $field)
    {
        return isset($val[$field]) ? $val[$field] : null;
    }

    public function SyncToJess(Request $req)
    {
        $user =  User::where('id', 99)->first();
        return Hash::make(md5(0041));
        $user->password = Hash::make(md5('0041'));
        return 'updated';

        foreach ($req->ja as $key => $val) {
            $existing = User::where('employeeId', $val['id'])->get();
            if (count($existing) > 0) {
                $user = User::find($existing[0]['id']);
                $user->password = Hash::make($val['Password']);
                $user->company = $this->undefineChecker($val, 'Comp_Name');
                $user->email =  $this->undefineChecker($val, 'WorkMailAdd');
                $user->department = $this->undefineChecker($val, 'Dept_Name');
                $user->updated_at = $this->timestamp;
                $user->update();
            } else {
                $user = new User;
                $user->firstName = $val['FirstNameEng'];
                $user->lastName = $val['LastNameEng'];
                $user->email = $this->undefineChecker($val, 'WorkMailAdd');
                $user->password = Hash::make($val['Password']);
                $user->created_at = $this->timestamp;
                $user->updated_at = $this->timestamp;
                $user->firstNameJp = $val['FirstNameKana'];
                $user->lastNameJp = $val['LastNameKana'];
                $user->department = $this->undefineChecker($val, 'Dept_Name');
                $user->employeeId = $val['id'];
                $user->rights = 2;
                $user->company = $this->undefineChecker($val, 'Comp_Name');
                $user->save();
            }
        }
    }

    public function deleteUserAccessUndo(Request $req)
    {
        User::where('id', $req->data)->update(['deleted_at' => null]);
        return User::all();
    }

    public function deleteUserAccess(Request $req)
    {
        User::where('id', $req->data)->update(['deleted_at' => date('Y-m-d H:i:s')]);
        return User::all();
    }

    public function setUserAccess(Request $req)
    {
        $values = explode('/', $req->data);
        User::where('id', $values[0])->update(['rights' => $values[1]]);
        return User::all();
    }

    public function getUsers()
    {
        $administrator =  User::where('rights', 1)->orderBy('firstName', 'asc')->get();
        $ja =  User::where('rights', 2)->orderBy('firstName', 'asc')->get();
        $localstaff =  User::where('rights', 3)->orderBy('firstName', 'asc')->get();
        return $administrator->merge($ja)->merge($localstaff);
    }
}
