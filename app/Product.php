<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use App\ProductSize;
use App\Size;
use App\ProductComment;
class Product extends Model
{

    public function sizes(){
      return $this->belongsToMany(Size::class, "productsizes");
    }
    // public function sizes(){
    //   return $this->belongsToMany(Size::class)->using("App\ProductSize", "productsizes");
    // }

    public function comments(){
      return $this->hasMany(ProductComment::class,"product_id","id");
    }

    public static function getDetail($id){
      $result = DB::select("call getProductDetail(?)",[intval($id)]);
      return $result;
    }

    public static function getSpecialProducts($id){
      return  DB::select("call getSpecialProducts(?)",[intval($id)]);
    }

    public static function getFilteredProducts($page,$r){
      $start = 9;
      $next = ($page * $start)- $start;
      // $count = Product::count();
      $product = new Product();
      $product = $product->newQuery();
      $brand = $r->brand;
      $category = $r->category;
      $price = $r->price;
      $sex = $r->sex;

    // $product = Product::join("productcomments","products.id", "=","productcomments.product_id")->
    $product->join("productcomments","products.id", "=","productcomments.product_id")->
     selectRaw(' products.id as id , products.name as name, round(avg(productcomments.rating),1) as rating,if( products.discount > 0 , round((products.price *(products.discount / 100)),2),products.discount) as discount_price,  products.price as price, products.discount as discount, products.image as image');

      if($brand){
        $product->whereIn("products.brand", $brand);
      }
      if($category){
        $product->whereIn("products.type", $category);
      }
      if($price){
        $product->whereBetween("products.price", $price);
      }
      if($sex){
        $product->where("products.sex", $sex);
      }



     $all = $product->groupBy("id")->get();
     $data = $product->groupBy("id")->offset($next)->limit($start)->get();

     // $product->groupBy("products.id")->orderBy("products.created_at", "desc")
     // ->offset($next)->limit($start)->get();
     return [
       "page" => intval($page),
       "lastPage" => floor(count($all)/ $start),
       "data" => $data,
       "requests" => $r->all()
     ];
     // return $p;
     // return $product->toSql();
     // return $product;
   }//getFilteredProducts
}
