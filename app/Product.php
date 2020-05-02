<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use App\ProductSize;
use App\ProductComment;
class Product extends Model
{

    public function sizes(){
      return $this->hasMany(ProductSize::class,"product_id");
    }

    public function comments(){
      return $this->hasMany(ProductComment::class,"product_id");
    }

    public static function getDetail($id){
      $result = DB::select("call getProductDetail(?)",[intval($id)]);
      return $result;
    }
}
