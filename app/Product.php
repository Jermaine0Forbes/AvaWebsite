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

    public static function getFilteredProducts($page){
      $start = 9;
      $next = $page * $start;
      return Product::join("productcomments","products.id", "=","productcomments.product_id")->
     selectRaw(" products.id as id , products.name as name, round(avg(productcomments.rating),1) as rating,
      if( products.discount > 0 , round((products.price *(products.discount / 100)),2),products.discount) as discount_price,
      products.price as price, products.discount as discount, products.image as image")
     ->groupBy("id")->orderBy("products.created_at", "desc")->offset($next)->limit($start)->get();
    }
}
