<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    //
    public function updateAccountDetails(Request $req){

        $val =  $req->input();
        
        User::where('id',$val['id'])->update([
            'firstName' => $val['firstName'],
            'lastName' => $val['lastName'],
            'email' => $val['email'],
            'password' => Hash::make(md5($val['password']))
        ]);
    }
    
}
