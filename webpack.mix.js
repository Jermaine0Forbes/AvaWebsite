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

mix.options({ hmrOptions:{
                    host:"ava.io", 
                    port:"8000",
                    }
            })
   .react('resources/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
// mix.browserSync({ proxy:'ava.io',host:"104.236.44.154", port:"8000", open:false})
//    .react('resources/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
