<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
class Size extends Model
{
    public function products(){
      return $this->belongsToMany("App\Product")->using("App\ProductSize", "productsizes");
    }
}
