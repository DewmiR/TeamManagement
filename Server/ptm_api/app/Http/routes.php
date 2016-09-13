<?php

/*
  |--------------------------------------------------------------------------
  | Application Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register all of the routes for an application.
  | It's a breeze. Simply tell Laravel the URIs it should respond to
  | and give it the controller to call when that URI is requested.
  |
 */

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);


Route::get('get_users','ApiController@getAllUsers');
Route::get('get_courses','ApiController@getAllCourses');


Route::post('checkUser','ApiController@checkUser');
Route::post('addUser','ApiController@addUser');
Route::post('refresh','ApiController@refresh');
Route::post('checkForNewMessages','ApiController@checkForNewMessages');
Route::post('checkForNewMessagesMany','ApiController@checkForNewMessagesMany');
Route::post('statesUpdate','ApiController@statesUpdate');

Route::post('getSendToManyNumbers','ApiController@getSendToManyNumbers');
Route::post('getSendToManyMessages','ApiController@getSendToManyMessages');
Route::post('SendToManyStatesUpdate','ApiController@SendToManyStatesUpdate');
Route::post('sendInbox','ApiController@sendInbox');


Route::get('register', 'UserController@saveRegistration');


