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
}
