<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker\Generator as Faker;

class HomeController extends Controller
{
    public function index(){
      return view("example", ["title" => "Default React App"]);
    }

    public function test(){
      // $f = new Faker();
      // echo $f->name;
      return "foo";
    }
}
