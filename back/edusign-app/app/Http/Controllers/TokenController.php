<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TokenController extends Controller
{
    public function index(Request $request){
        $token = mt_rand(1, 1000);
        $id = $request->query('id');
        $requestPassword = 'nbn2#eVoIN';
        // $password = User::select(['*'])->where('id', $id)->get('password');

//        if ($requestPassword == $password){
           DB::table('users')->where('id', $id)->update(['token' => $token]);
//            return response()->json(['token' => $token]);
//        } else {
//            return response()->json(['status' => 'Authentification failed']);
//        }

        return response()->json(['token' => $token]);

    }
}
