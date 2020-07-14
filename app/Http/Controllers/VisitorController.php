<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Browser;
use Torann\GeoIP\Facades\GeoIP as gip;
use App\Visitor;

class VisitorController extends Controller
{
    public function store(Request $request){
      $geo = geoip($request->ip());
      $data = [
        "ip" => request()->ip(),
        "path" => $request->path,
        "screen_height" => $request->height,
        "screen_width" => $request->width,
        "country" => $geo->iso_code,
        "zip" => $geo->postal_code,
        "region" => $geo->state,
        "city" => $geo->city,
        "latitude" => $geo->lat,
        "longitude" => $geo->lon,
        "browser" => Browser::browserFamily(),
        "browser_version" => Browser::browserVersion(),
        "os" => Browser::platformFamily(),
        "os_version" => Browser::platformVersion(),
        "is_bot" => Browser::isBot(),
        "device_vendor" => Browser::deviceFamily(),
        "device_brand" => Browser::deviceModel(),
      ];

      Visitor::create($data);
      return  "data saved";
    }
}
