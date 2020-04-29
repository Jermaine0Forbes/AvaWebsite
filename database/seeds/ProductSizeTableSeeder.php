<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\ProductSize;
class ProductSizeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

     private $id;

    public function insertSizes($size){
      foreach ($size as &$val) {
        ProductSize::create(["product_id" => $this->id, "size_id" => $val]);
      }
    }
    public function run()
    {
        $generalSize = [1,2,3,4];
        $shoeSize = [5,6,7,8,9,10,11];
        $waistSize = [12,13,14,15,16,17,18,19];
        $general = [
          "jacket",
          "coat",
          "vest",
          "suit",
          "blouse",
          "dress",
          "legging",
          "shirt",
          "sweater",
          "gloves",
          "hat",
        ];
        $shoe = [
          "shoes",
          "boots",
        ];
        $waist = [
          "skirt",
          "pants",
          "jeans",
          "shorts",
          "belt",
        ];

        $size = Product::count();
        for ($i=0; $i < $size; $i++) {
          $this->id = $i+1;
          $type =  Product::where("id",$this->id)->pluck("type")[0];

            if(in_array($type,$general)){
              $this->insertSizes($generalSize);
            }elseif (in_array($type,$shoe)) {
              $this->insertSizes($shoeSize);
            }elseif (in_array($type,$waist)) {
              $this->insertSizes($waistSize);
            }

        }//for loop
    }//run
}
