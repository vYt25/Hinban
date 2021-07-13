<?php

namespace App\Http\Controllers;

// use Dotenv\Exception\ValidationException;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        // $request['password'] = md5($request['password']);
        // return $request;
        $request['password'] = md5($request['password']);

        $request->validate([
            'employeeId' => ['required'],
            'password' => ['required']
        ]);
        if (Auth::attempt($request->only('employeeId', 'password'))) {
            // $user = User::select('users.*', 'rights.id as rights', 'rights.userAccess')->where('employeeId', $request->employeeId)->join('rights', 'rights.id', 'users.rights')->first();
            $user =  User::where('employeeId', $request->employeeId)->first();
            // return $user;

            if ($user['deleted_at'] != null) {
                return 'Your Account was Disabled!';
            } else {
                // $user = User::where('email', $request->email)->join('rights','rights.id','users.rights')->first();
                $response = [
                    'user' => $user,
                    'token' => $user->createToken('my-app-token')->plainTextToken
                ];
            }

            return response($response, 201);
        }

        return 'Invalid Employee ID Or Password!';
    }

    public function logout(Request $req)
    {
        DB::table('personal_access_tokens')->where('id', explode('|', $req->token)[0])->delete();
        Auth::logout();
    }
}
