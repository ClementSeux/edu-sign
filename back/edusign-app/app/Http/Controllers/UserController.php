<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
       $users = User::select('id','login','firstname','name','status')->get();
       return Response()->json($users);
    }


}
