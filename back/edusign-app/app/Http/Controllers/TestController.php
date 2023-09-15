<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;

class TestController extends Controller
{
    public function index(){
        $hashedData = Carbon::now();

        $key= 'base64:0H+BMjqwP2qAKOqIthUWuH+3HB7/n/KutmKUBJ9ArHE=';

        $encryptedData = Crypt::encryptString($hashedData, $key);
        $decryptedData = Crypt::decryptString($encryptedData, $key);

        return $decryptedData;
    }
}
