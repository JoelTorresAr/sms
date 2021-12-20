const mix = require('laravel-mix');

mix.styles([
    'resources/provider/css/style.css',
    'resources/provider/css/config.css'
], 'public/css/plantilla.css')

//LANDING
mix.styles([
    'resources/newProvider/css/main.css',
    'resources/newProvider/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css',
    'resources/newProvider/js/plugins/bootsnav_files/skins/color.css',
    'resources/newProvider/js/plugins/bootsnav_files/css/animate.css',
    'resources/newProvider/js/plugins/bootsnav_files/css/bootsnav.css',
    'resources/newProvider/js/plugins/bootsnav_files/css/overwrite.css',
    'resources/newProvider/js/plugins/owl-carousel/owl.carousel.css',
    'resources/newProvider/js/plugins/owl-carousel/owl.theme.css',
    'resources/newProvider/js/plugins/owl-carousel/owl.transitions.css',
    'resources/newProvider/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css',
], 'public/css/landing.css')

.scripts([
    'resources/newProvider/js/main.js',
    'resources/newProvider/bootstrap-3.3.7/bootstrap-3.3.7-dist/js/bootstrap.min.js',
    'resources/newProvider/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/jquery.magnific-popup.js',
    'resources/newProvider/js/plugins/typed.js-master/typed.js-master/dist/typed.min.js',
    'resources/newProvider/js/plugins/bootsnav_files/js/bootsnav.js',
    'resources/newProvider/js/plugins/owl-carousel/owl.carousel.min.js',
], 'public/js/main.js')


//END LANDING

.js('resources/js/app.js', 'public/js')

.copy('resources/provider/css/plugins', 'public/css/plugins')
.copy('resources/provider/js/plugins', 'public/js/plugins')
.copy('resources/provider/js/pages', 'public/js/pages')
.copy('resources/css/style_pdf_print.css', 'public/css')

.scripts([
    'resources/provider/js/vendor-all.min.js',
    'resources/provider/js/plugins/bootstrap.min.js',
    'resources/provider/js/ripple.js',
    'resources/provider/js/pcoded.min.js'
], 'public/js/plantilla.js')

.copy('resources/provider/fonts', 'public/fonts')
.copy('resources/provider/images', 'public/images');
