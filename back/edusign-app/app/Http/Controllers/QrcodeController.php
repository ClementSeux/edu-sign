<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;

class QrcodeController extends Controller
{
    public function index(){
        $hash = Hash::make(Carbon::now('Europe/Paris'));
           // $hash = (Carbon::now('Europe/Paris'));
        return response()->json(['hash' => $hash]);
    }

    public function compareHashes(Request $request){
        $accepted = 'http://10.47.131.189:5173/confirmation';
        $refused = 'http://10.47.131.189:5173';

        $now = Carbon::now('Europe/Paris');
        $requestHash = Carbon::now('Europe/Paris');
        // $requestHash = $request->query('hash');



        $difference = $requestHash->diffInSeconds($now);
        if ($difference <= 30 ){
            DB::table('presences')->insert([
                'user' => $request->query('id'),
                'event' => '1', // Remplacez $eventId par l'ID de l'événement correspondant
            ]);
            return Redirect::to($accepted);
        } else {
            return Redirect::to($refused);
        }
    }
}
