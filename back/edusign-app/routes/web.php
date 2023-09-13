<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['cors'])->group(function () {
    Route::get('/example', function (){
        return response()->json('texte:OK');
    });
    Route::get('/qrcode', function(){
        return response()->json('hash:test');
    });
});

Route::get('/users', [UserController::class, 'index'])->name('users');


Route::get('/login', function (){
    return response()->json('token:test');
});

