<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class QrcodeController extends Controller
{
    public function index(){
        $hash = Hash::make(Carbon::now('Europe/London'));
        return response()->json(['hash' => $hash]);
    }

    public function compareHashes($hash){
        $requestHash = '2';
        if ($requestHash != $hash){
            return 'false';
        } else {
            return 'true';
        }
    }
}
