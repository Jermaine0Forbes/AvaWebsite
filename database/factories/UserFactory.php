<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Carbon\Carbon;
use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        "first_name" => $faker->firstName,
        "last_name" => $faker->lastName,
        "email" => $faker->unique()->email,
        "password" => bcrypt("password"),
        "created_at" => $faker->dateTimeInInterval("-3 years", "+15 days" ,"UTC"),
        "updated_at" => $faker->dateTimeInInterval("-3 years", "+15 days" ,"UTC"),
    ];
});
