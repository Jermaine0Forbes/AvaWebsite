<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->decimal('price',5,2);
            $table->string('image');
            $table->enum('sex',["male", "female", "any"]);
            $table->enum('brand',["nike", "gucci", "louis vuitton", "ralph lauren", "tommy hilfiger", "calvin klein", "versace"]);
            $table->string('type');
            $table->tinyInteger('accessory')->default(0);
            $table->tinyInteger('discount')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
