<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TokenController extends Controller
{
    public function index(Request $request){
        $token = mt_rand(1, 1000);
        $id = $request->query('id');

        DB::table('users')->where('id', $id)->update(['token' => $token]);


        return response()->json(['token' => $token]);
    }
}
