<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
    <title>Lading Page</title>
   <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <link rel="stylesheet" href="/main.css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script defer src= "https://use.fontawesome.com/releases/v5.0.6/js"></script>
     
     <link rel = " stylesheet" href="main.css">
  </head>
  <body>

    <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          Lading Page
        </a>
        <div class="grid_5">
                
            @if ($product->tipo_media=='video')
            <a href="{{ $product->tipo_media->path }}" class="fh5co-card-item image-popup">
                <figure>
                    <div class="overlay"><i class="ti-plus"></i></div>
                    <img src="{{ $product->tipo_media->path }}" alt="Image" class="img-responsive">
                </figure>
            </a>
            @endif
            @if ($product->tipo_media=='imagen')
            <a href="{{ $product->tipo_media->path }}" class="fh5co-card-item image-popup">
                <figure>
                    <div class="overlay"><i class="ti-plus"></i></div>
                    <img src="{{ $product->tipo_media->path }}" alt="Image" class="img-responsive">
                </figure>
            </a>
            @endif
        </div>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#home-section" class="nav-link">Inicio</a>
            </li>
            <li class="nav-item">
              <a href="#info-section" class="nav-link">Contáctanos</a>
            </li>
          <!--  <li class="nav-item">
              <a href="#" class="nav-link">Create</a>
            </li>-->
            <!-- <li class="nav-item">
              <a href="#" class="nav-link">Share</a>
            </li>-->
          </ul>
        </div>
      </div>
    </nav>

    <!-- HOME -->
    <header id="home-section">
      <div class="dark-overlay">
        <div class="home-inner">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 d-none d-sm-block">
                <h1 class="display-4"> Imagen <strong>ipsum dolor</strong> sit amet, consectetur adipisicing.</h1>
                <div class="col-md-6">
                  <img src="img/img2.png" alt="" class="img-fluid mb-3 rouded-circle">
                </div>
                <div class="d-flex flex-row">
                  <div class="p-4 align-self-start">
                    <i class="fas fa-certificate"></i>
                  </div>
                </div>

              </div>
              <!-- SECOND COLUMN -->
              <div class="col-lg-4">
                <div class="card text-center" style="background-color: #c0392b; padding: 30px; border-radius: 20px;">
                  <div class="">
                    <h3>Formulario de registro</h3>
                    <p></p>
                    </div>
                    <form>
                      <div class="form-group">
                        <input type="text" class=" form-control-lg" placeholder="Nombres">
                      </div>
                      <div class="form-group">
                        <input type="text" class=" form-control-lg" placeholder="Apellidos">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control-lg" placeholder="Correo Electronico">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control-lg" placeholder="Direccion">
                      </div>
                      <div class="form-group">
                        <input type="text" class=" form-control-lg" placeholder="Celular">
                      </div >
                      <input type="submit"  class="btn btn-outline-light "style=" border-radius: 10px;  padding: 10px; background-color: #FA8072;" value="Paypal">
                      <input type="submit"  class="btn btn-outline-light " style=" border-radius: 10px; padding: 10px; background-color: #FA8072;" value="Enviar"> 
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- INFO HEAD -->

   <!--<section class="info-head-section">
      <div class="home-inner">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <div class="p-5">
              <h1 class="display-4">Info</h1>
              <p class="lead"></p>
              <a href="#" class="btn btn-outline-secondary">Lorem ipsum dolor.</a>
            </div>
          </div>
        </div>
      </div>
    </section>-->

   <!--<section class="info-section bg-light text-muted py-5" id="info-section">
    <div class="home-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="img/img2.png" alt="" class="img-fluid mb-3 rouded-circle">
          </div>
          <div class="col-md-6">
            <h3>SERVICES AND PRODUCTS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime quos obcaecati quod iusto. Debitis, eius, at! Labore totam quaerat nisi commodi ullam nesciunt eligendi, accusamus corporis in optio sapiente.</p>
            
            <div class="d-flex flex-row">
              <div class="p-4 align-self-start">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque nam eos soluta, est velit magnam modi delectus amet, eveniet.
              </div>
            </div>
           
            <div class="d-flex flex-row">
              <div class="p-4 align-self-start">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque nam eos soluta, est velit magnam modi delectus amet, eveniet.
              </div>
            </div>

            <div class="d-flex flex-row">
              <div class="p-4 align-self-start">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="p-4 align-self-end">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque nam eos soluta, est velit magnam modi delectus amet, eveniet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>-->

    <!-- HEAD SECTION -->
   

 
    
    <!--<footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12 p-5">
          
            <p class="text-center">&copy; </p>
          </div>

        </div>
      </div>
    </footer>-->

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
