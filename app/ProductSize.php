<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Pivot;
use App\Product;
use App\Size;
class ProductSize extends Model
{
    protected $table ="productsizes";
    //
    // public function products(){
    //   return $this->belongsTo(Product::class);
    // }
    // public function sizes(){
    //   return $this->belongsTo(Size::class);
    // }
}
