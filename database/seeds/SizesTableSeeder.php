<?php

use Illuminate\Database\Seeder;
use App\Size;
use Carbon\Carbon;
class SizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Size::insert([
        ["name" => "Small", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "Medium", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "Large", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "X-Large", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "6", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "7", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "8", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "9", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "10", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "11", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "12", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "26", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "28", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "30", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "32", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "34", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "36", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "38", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
        ["name" => "40", "created_at" => Carbon::now() ,"updated_at" => Carbon::now()],
      ]);
    }
}
