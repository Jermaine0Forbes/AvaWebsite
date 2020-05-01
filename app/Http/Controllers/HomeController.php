<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker\Generator as Faker;

class HomeController extends Controller
{
    public function index(){
      return view("react", ["title" => "Ava Fashion | For all the fashion you need"]);
    }

    public function test(){
      // $f = new Faker();
      // echo $f->name;
      return "foo";
    }
}
