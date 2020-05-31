<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductComment;
use DB;
class ProductController extends Controller
{
    public function index(){
       //  $product = Product::select(["name","price","discount","accessory"])
       //  ->where("id",1)
       //  ->get();
       //  $comment = Product::find(1)
       //  ->comments()
       //  ->selectRaw("round(avg(rating),1) as rating, product_id as id")
       //  ->groupBy("product_id")
       //  ->get();
       //
       //  $size = Product::find(1)
       //  ->sizes()
       //  ->pluck("name");
       // $product = array_merge($product->toArray(), $comment->toArray() );
       // $product["size"]= $size;
       // $product->size = $size;
       // $product = $product->toBase()->merge($comment->toBase());

       // $product = Product::join("productcomments","products.id", "=","productcomments.product_id")->
       // selectRaw(" products.id as id , products.name as name, round(avg(productcomments.rating),1) as rating,
       //  if( products.discount > 0 , round((products.price *(products.discount / 100)),2),products.discount) as discount_price,
       //  products.price as price, products.discount as discount")
       // ->groupBy("products.id")->count();
       $product = Product::count();

        return response()->json($product);
        // $product = Product::find(1)->toArray();
        // return response()->json($product);
    }

    public function getComments($id){
      if(is_numeric($id)){
        $id = intval($id);
        $comments = DB::select("call getComments(?)",[$id]);
        return response()->json($comments);
      }

      return response(500)->json("something ain't right");

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

    public function getSpecial(){
       $product = Product::getSpecialProducts(10);
       return response()->json($product);
    }

    public function getFiltered($page, Request $req){
      $product = Product::getFilteredProducts($page, $req);
      return response()->json($product);
    }
}
