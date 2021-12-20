<!DOCTYPE html>

<html lang="en">



<head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Landing PAGE Html5 Template">

    <meta name="keywords" content="landing,startup,flat">

    <meta name="author" content="Made By GN DESIGNS">



    <title>LANDING</title>

    <!--laravel-->

    <!--<link rel = " stylesheet" href="main.css">-->
    <link rel="stylesheet" href="{{ asset('css/landing.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/pagina/main.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/pagina/css/all.css') }}">
    <!-- END LARAVEL -->
  

    <!-- // PLUGINS (css files) // -->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>



<body style="background-color:{{ $product->color }};  ">

   
 


    <!--========================================

           Preloader

    ========================================-->

    <div class="page-preloader">

        <div class="spinner">

            <div class="rect1"></div>

            <div class="rect2"></div>

            <div class="rect3"></div>

            <div class="rect4"></div>

            <div class="rect5"></div>

        </div>

    </div>

    <!--========================================

           Header

    ========================================-->



    <!--//** Navigation**//-->

    <nav class="navbar navbar-default navbar-fixed white no-background bootsnav navbar-scrollspy"
        data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000"
        style="background-color:{{ $product->colorcabezera }}">



        <div class="container">

            <!-- Start Header Navigation -->

            <div class="navbar-header">

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">

                    <i class="fa fa-bars"></i>

                </button>

                <!--<a class="navbar-brand" href="#brand">

                    <img src="assets/img/logo.png" class="logo" alt="logo">

                </a>-->

            </div>

            <!-- End Header Navigation -->



            <!-- Collect the nav links, forms, and other content for toggling -->

            <div class="collapse navbar-collapse" id="navbar-menu">

                <ul class="nav navbar-nav navbar-right">

                   <!-- <li class="active scroll"><a href="#home">Inicio</a></li>-->

                    <!--<li class="scroll"><a href="#contact">Contactos</a></li>-->


                </ul>

                <ul class="nav navbar-nav navbar-center">
                    <li class="aactive scroll"> <a href="#des">{{ $product->titulo }}</a></span>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
    </nav>

  
    
    <!--//** Banner**//-->

    <section id="home" style="background-image: url({{url("storage/user/{$product->imagen_fondo->filename}")}})!important;" >

        <div class="container"> 

            <div class="row">

                <!-- Introduction -->

                <div class="col-md-7 caption">

                    <h2>
                        <span style="color:white">{{ $product->description }}</span>
                        <span class="typed-cursor"></span>
                    </h2>

                    <p style="color:white">{{ $product->detalle }}</p>

                    @if (!empty($product->file))
                        <a href="{{ $product->file->path }}" class="fh5co-card-item image-popup">
                            <figure>
                                <div class="overlay"><i class="ti-plus"></i></div>
                                <img src="{{ asset("storage/user/{$product->file->filename}") }}" alt="Image"
                                    style="width:60rem;height: 50rem;">
                            </figure>
                        </a>
                        <h2 style="color:rgb(255, 255, 255)">{{ $product->promesa }}</h2>


                        <!--  <a class="btn btn-blue image-popup-link" href="{{ $product->file->path }}">

                        <i class="material-icons">play_circle_filled</i>Ver Imagen

                    </a>-->
                 

                    @else
                        {!!$product->video_url !!}
                   
                    @endif

                </div>

                <!-- Sign Up -->

                <div class="col-md-4 col-md-offset-1">

                    <form class="signup-form " method="POST" style="background-color:{{ $product->colorformulario }} " >



                        <!--  <h2 class="text-center">Formulario</h2>-->
                        <h2 style="color:gray">{{ $product->titulo_formulario }}</h2>

                        <hr>

                        @csrf
                        <div class="form-group">

                            <input type="text" class=" form-control" placeholder="Nombres" id="nombres" name="nombres"
                                value="">
                        </div>
                        <div class="form-group">
                            <input type="text" class=" form-control" placeholder="Apellidos" id="apellidos"
                                name="apellidos" value="">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Correo Electronico" id="email"
                                name="email" value="">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="pago" id="pago"
                                name="email" value="">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Fecha pago" id="fechapago"
                                name="email" value="">
                        </div>

                        @if ($product->pago_is)
                            <a class="btn btn-app bg-warning">
                                <span class="badge bg-info">PayPal</span>
                                <i class="fab fa-paypal"
                                    style=" border-radius: 10px;  padding: 10px; background-color: #FA8072;"></i>
                            </a>
                        @endif
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-blue btn-block">Enviar</button>
                            </button>
                        </div>
                        <div class="form-group text-center" >
                            <div class="form-group" >
                              <label for="Pago"
                                ><input
                                  type="checkbox" style="height: 9px"
                                  class="mr-2"
                                />He leído y acepto la política de privacidad</label>
                            </div>
                        </div>
                        
                      <!---  <a href="tell:929967144" >Llamar al 929967144</a>-->
                      <div class="form-group text-center" >
                        <div class="icon-box" >
                        <img src="{{ asset('css/pagina/img/whatssap.png') }}" class="img-responsive center-block" alt="logo" style=" width: 49px;height: 50px; ">
                        <a href="https://wa.me/929967144">929967144</a>
                    </div>
                    </div>
                        <div class="form-group text-center" >
                            <div class="icon-box" >
                                <i class="material-icons" >phone</i>
                                <a href="tell:929967144" >929967144</a>
                            </div>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </section>



    <!--========================================

           Contact

    ========================================-->



    <!--<section id="contact" class="section-padding">

        <div class="container">

            <h2>Contáctanos</h2>

        </div>

         Contact Info 

        <div class="container contact-info">

            <div class="row">

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">place</i>

                        <h4>Dirección</h4>

                        <p>{{ $product->ubicacion }}</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">phone</i>

                        <h4>Llamanos al</h4>

                        <p>{{ $product->telefono }}</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">email</i>

                        <h4>Email</h4>

                        <p>{{ $product->correo_notificacion }}</p>

                    </div>

                </div>

            </div>

        </div> -->

        <!-- Google Map -->

        <div id="map"></div>

        <!-- Contact Form -->

        <!-- <div class="contact-forms">

            <div class="container">

                <h2>Drop us a Line</h2>

                <form class="contact-form">

                    <div class="col-md-6">

                        <div class="form-group">

                            <input type="text" class="form-control" placeholder="Full Name" required="required">

                        </div>

                        <div class="form-group">

                            <input type="email" class="form-control" placeholder="Email" required="required">

                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class="form-group">

                            <textarea class="form-control" rows="3" placeholder="Message"></textarea>

                        </div>

                    </div>

                    <button type="submit" class="btn btn-blue">Send Message</button>

                </form>

            </div>

        </div>

    </section>-->



    <!--========================================

           Footer

    ========================================-->



  <!--  <footer>

        <div class="container">

            <div class="row">

                <div class="footer-caption">

                    <img src="assets/img/logo.png" class="img-responsive center-block" alt="logo">

                    <hr>

                    <h5 class="pull-left">Vortex, &copy;2016 All rights reserved</h5>

                    <ul class="liste-unstyled pull-right">

                        <li><a href="#facebook"><i class="fa fa-facebook"></i></a></li>

                        <li><a href="#twitter"><i class="fa fa-twitter"></i></a></li>

                        <li><a href="#linkedin"><i class="fa fa-linkedin"></i></a></li>

                        <li><a href="#instagram"><i class="fa fa-instagram"></i></a></li>

                    </ul>

                </div>

            </div>

        </div>

    </footer> -->



    <!--========================================

           Modal

    ========================================-->



    <!-- Modal -->

    <div class="modal fade" id="SignIn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

        <div class="modal-dialog" role="document">

            <div class="modal-content">

                <div class="modal-header">

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>

                    <h4 class="modal-title text-center" id="myModalLabel">Sign In</h4>

                </div>

                <div class="modal-body">

                    <form class="signup-form">

                        <div class="form-group">

                            <input type="text" class="form-control" placeholder="User Name" required="required">

                        </div>

                        <div class="form-group">

                            <input type="text" class="form-control" placeholder="Password" required="required">

                        </div>

                        <div class="form-group text-center">

                            <button type="submit" class="btn btn-blue btn-block">Log In</button>

                        </div>

                    </form>

                </div>

                <div class="modal-footer text-center">

                    <a href="#">Forgot your password /</a>

                    <a href="#">Signup</a>

                </div>

            </div>

        </div>

    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>


    <script src="{{ asset('js/main.js') }}"></script>


    <script>
        // Animated typing text

        $(".animated-text").typed({
            strings: [
                "{!! $product->detalle !!}",
                "{!! $product->detalle !!}",
                "{!! $product->detalle !!}",
            ],
            typeSpeed: 40,
            loop: true,
        });
    </script>



</body>



</html>
