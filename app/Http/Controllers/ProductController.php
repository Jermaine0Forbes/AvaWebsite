<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use DB;
class ProductController extends Controller
{
    public function index(){
        $product = Product::select(["name","price","discount","accessory"])
        ->where("id",1)
        ->get();
        $comment = Product::find(1)
        ->comments()
        ->selectRaw("round(avg(rating),1) as rating, product_id as id")
        ->groupBy("product_id")
        ->get();

        $size = Product::find(1)
        ->sizes()
        ->pluck("name");
       $product = array_merge($product->toArray(), $comment->toArray() );
       $product["size"]= $size;
       // $product->size = $size;
       // $product = $product->toBase()->merge($comment->toBase());

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
