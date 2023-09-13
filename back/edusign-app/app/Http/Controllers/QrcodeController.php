<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;

class QrcodeController extends Controller
{
    public function index(){
        $hash = Hash::make(Carbon::now('Europe/Paris'));
        return response()->json(['hash' => $hash]);
    }

    public function compareHashes(Request $request){
        $accepted = 'http://10.104.133.65:5173/confirmation';
        $refused = 'http://10.104.133.65:5173';

        $now = Carbon::now('Europe/Paris');
        $requestHash = Carbon::now('Europe/Paris')->addSecond(25) ;

//         dd($request->all());
        $difference = $requestHash->diffInSeconds($now);
        if ($difference <= 30 ){
            return Redirect::to($accepted);
        } else {
            return Redirect::to($refused);
        }


    }
}
