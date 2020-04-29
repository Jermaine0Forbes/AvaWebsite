<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ProductComment;
use Faker\Generator as Faker;

$factory->define(ProductComment::class, function (Faker $faker) {

  $fiveStar = ["This was an excellent product", "I love the way it looks on me", "Great price for a great product"];
  $fourStar = ["This fits really well","All my friends are jealous","I'm glad I was able to find this"];
  $threeStar = ["It could have been better","This is okay for the price","I really want to love it, but"];
  $twoStar = ["This makes me look fat","Product not as advertised","I feel cheated"];
  $oneStar = ["I hate this","My friends make fun of me for wearing this","I want my money back!"];

  $rating = $faker->numberBetween(5,1);

  switch ($rating) {
    case 5:
      $title = $faker->randomElement($fiveStar);
      break;
    case 4:
      $title = $faker->randomElement($fourStar);
      break;
    case 3:
        $title = $faker->randomElement($threeStar);
      break;
    case 2:
        $title = $faker->randomElement($twoStar);
      break;

    default:
        $title = $faker->randomElement($oneStar);
      break;
  }
  $pId = $faker->numberBetween(1,200);
  $uId = $faker->numberBetween(1,100);
  $summary = $faker->paragraph(1);
  $date = $faker->dateTimeBetween("-2 years", "now", "UTC");

    return [
        "product_id" => $pId,
        "user_id" => $uId,
        "title" => $title,
        "summary" => $summary,
        "rating" => $rating,
        "created_at" => $date,
        "updated_at" => $date,
    ];
});
