<?php

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

Route::get("/test", "HomeController@test");

// Route::get('/{path?}', "HomeController@index");



// Route::view('{reactRoutes}', "HomeController@index")
// ->where("reactRoutes",'^((?!api).)*$');
Route::view('/{path?}/{id?}', "react");
// Route::view('/{path?}', "react");

// Route::any('{query}',
//     function() { return redirect('/'); });
// Route::get('/',"HomeController@index");
// Route::get('/', function () {
//     return view('home', ['title'=>"Ava Fashion", 'id' => "home"]);
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
