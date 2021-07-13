<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    //
    public function register(Request $req){
        
        $validator = Validator::make([
            'employeeId' => $req['employeeId'],
            'firstName' =>  $req['firstName'],
            'lastName' =>  $req['lastName'],
            'department' => $req['department'],
            "email" => $req['email'],
            "password" =>$req['password'],
            "password_confirmation" =>$req['password_confirmation']
        ],[
            'employeeId' =>  ['required','unique:users'],
            'firstName' =>  ['required'],
            'lastName' =>  ['required'],
            'department' =>  ['required'],
            "email" => ['required','email','unique:users'],
            "password" => ['required', 'min:4', 'confirmed']
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
         }

               
        User::insert([
            "employeeId" => $req->employeeId,
            "firstName" => $req->firstName,
            "lastName" => $req->lastName,
            "firstNameJp" => $req->firstNameJp,
            "lastNameJp" => $req->lastNameJp,
            "department" => $req->department,
            'email' => $req->email,
            'rights' => isset($req->firstNameJp) ? 2 : 3 ,
            "password" => Hash::make(md5($req->password))
        ]);

    }
}
