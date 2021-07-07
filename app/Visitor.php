<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model;

class Visitor extends Model
{
    protected $collection = "visitors";
    protected $connection = "mongodb";


    protected $fillable =  [
      "ip",
      "path" ,
      "screen_height" ,
      "screen_width",
      "country" ,
      "zip" ,
      "region",
      "city" ,
      "latitude",
      "longitude",
      "browser" ,
      "browser_version" ,
      "os" ,
      "os_version" ,
      "is_bot",
      "device_vendor",
      "device_brand" ,
    ];
}
