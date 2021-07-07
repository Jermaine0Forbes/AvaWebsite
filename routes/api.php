<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get("/products", "ProductController@index");
Route::any("/products/filter/{page}","ProductController@getFiltered");
Route::get("/product/{id}", "ProductController@getProduct");
Route::get("/product/comments/{id}", "ProductController@getComments");
Route::get("/recent/products", "ProductController@recent");
Route::get("/special/products", "ProductController@getSpecial");

Route::post("/visit", "VisitorController@store");

Route::post("/register","LoginController@register");
Route::post("/login","LoginController@login");
