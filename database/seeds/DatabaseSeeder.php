<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Product;
use App\ProductComment;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(SizesTableSeeder::class);
         factory(User::class,100)->create();
         factory(Product::class,200)->create();
         $this->call(ProductSizeTableSeeder::class);
          factory(ProductComment::class,400)->create();
    }
}
