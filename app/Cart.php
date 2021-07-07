<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Cart extends Model
{
  protected $collection = "carts";
  protected $connection = "mongodb";

  protected $fillable = [
    "id",
    "name",
    "email",
    "quantity",
    "total",
    "cart"
  ];
}
