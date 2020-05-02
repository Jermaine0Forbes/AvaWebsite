<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use DB;
class ProductController extends Controller
{
    public function index(){
        $product = Product::find(1)->comments()->selectRaw()->get();
        return response()->json($product);
        // $product = Product::find(1)->toArray();
        // return response()->json($product);
    }
    public function getProduct($id){
      // $product = Product::find($id);
      $product = Product::getDetail($id)[0];
      return response()->json($product);
    }
    public function recent(){
        $product = DB::select("call getRecentProducts()");
        // $product = Product::select("name","price","rating")->limit(10)->latest()->get();
        return response()->json($product);
    }
}
