<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\Size;
class ProductSize extends Model
{
    protected $table ="productsizes";

    public function products(){
      return $this->belongsTo(Product::class);
    }
    public function sizes(){
      return $this->belongsTo(Size::class);
    }
}
