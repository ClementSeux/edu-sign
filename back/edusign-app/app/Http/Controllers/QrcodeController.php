<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use http\Env\Response;
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
        $key= 'base64:0H+BMjqwP2qAKOqIthUWuH+3HB7/n/KutmKUBJ9ArHE=';
        $encryptedData = Crypt::encryptString(Carbon::now('Europe/Paris'), $key);

        return response()->json(['hash' => $encryptedData]);
    }

    public function compareHashes(Request $request){
        $accepted = 'http://10.47.131.189:5173/confirmation';
        $refused = 'http://10.47.131.189:5173';
        $key= 'base64:0H+BMjqwP2qAKOqIthUWuH+3HB7/n/KutmKUBJ9ArHE=';

        $requestHash = $request->query('hash');
        $decryptedData = Crypt::decryptString($requestHash, $key);
        $carbonDate = Carbon::make($decryptedData);

        $difference = $carbonDate->diffInSeconds(Carbon::now('Europe/Paris')->addHour(2));

        // dd($difference);

        if ($difference <= 30 ){
            DB::table('presences')->insert([
                'user' => $request->query('id'),
                'event' => '1',
            ]);
            return response()->json(['reponse' => 'ok']);
        } else {
            return response()->json(['reponse' => 'pas ok']);
        }
    }
}
