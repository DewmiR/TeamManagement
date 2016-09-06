<?php namespace App\Http\Controllers;
use DB;






class ApiController extends Controller {


    public function index(){
        return view('home');
    }

    public function getAllUsers(){
        $users = DB::table('users')->get();
        return json_encode($users);
        //return "working";
    }

    


}
