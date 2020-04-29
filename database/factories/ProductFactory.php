<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Carbon\Carbon;
use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {

  $accessory = $faker->numberBetween(0,1);
  $sex = $faker->randomElement(["male","female","any"]);

  $maleType = ["jacket", "coat", "vest", "suit"];
  $femaleType = ["blouse", "dress", "skirt","legging"];
  $regularType = [
                  "shirt",
                  "sweater",
                  "pants",
                  "jeans",
                  "shorts",
                  ];

  switch ($sex) {
    case 'male':
      $regularType = array_merge($regularType,$maleType);
      break;
    case 'female':
      $regularType = array_merge($regularType,$femaleType);
      break;
  }


  $accessoryType = [
                    "watch",
                    "shoes",
                    "boots",
                    "sunglasses",
                    "belt",
                    "gloves",
                    "scarf",
                    "hat",
                    "fragrance",
                    "jewelry"
                  ];

  $regularType = !empty($accessory ) ? $accessoryType : $regularType;
  $brandArr = ["nike",
              "gucci",
              "louis vuitton",
              "ralph lauren",
              "tommy hilfiger",
              "calvin klein",
              "versace"];


  $isDiscount = $faker->numberBetween(0,1);
  $discount = $isDiscount ? $faker->numberBetween(5,75) : 0;
  $price = $faker->randomFloat(2, 24.99, 215.99);
  $brand = $faker->randomElement($brandArr);
  $type = $faker->randomElement($regularType);
  $name = ucwords("$brand {$faker->city} $type");
  $imgName =  implode("+",explode(" ",$name));
  $date = $faker->dateTimeBetween("-3 years", "-1 years", "UTC");
    return [
          "name" => $name,
          "price" => $price,
          "image" => "https://via.placeholder.com/680x720/text=$imgName",
          "sex" => $sex,
          "brand" => $brand,
          "type" => $type,
          "accessory" => $accessory,
          "discount" => $discount,
          "created_at" => $date,
          "updated_at" => $date,
    ];
});
