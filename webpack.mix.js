const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.react('resources/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');

mix.browserSync("ava.co")
   .react('resources/react/app.js', 'public/js')
   .sass('resources/assets/sass/style.scss', 'public/css');
