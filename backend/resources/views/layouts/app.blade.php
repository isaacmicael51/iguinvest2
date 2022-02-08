<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Iguassu Invest</title>
        @push('scripts')
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="https://npmcdn.com/flickity@2/dist/flickity.pkgd.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="/css/app.css">
            <link rel="stylesheet" href="/css/custom.css">
            <script src="/assets/js/api.js"></script>
            
        @endpush
        
        @stack('scripts');

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    </head>
    
    <body class="d-flex flex-column">
        <div id="page-content">
            @include('layouts.header')
            <div class="container-fluid m-0 p-0">
                <div class="row">
                  <div class="col-12">
                    <div class="hero">
                      <form class="form_busca__desktop d-none d-md-block">
                        <div class="form-group form_busca__desktop_container">
                          <select
                            class="form_busca__inputs ml-4"
                            name="cidade"
                            id="cidade"
                          >
                            <option>Qual a localização?</option>
                            <option value="">Foz do Iguaçu</option>
                          </select>
                          <select
                            class="form_busca__inputs"
                            name="tipoImovel"
                            id="tipoImovel"
                          >
                            <option>Tipo de imóvel?</option>
                            <option value="">apartamento</option>
                          </select>
                          <input type="range" class="range-style" />
          
                          <button
                            class="form_busca__button ml-2"
                            type="button"
                            id="pesquisar"
                          >
                            Pesquisar
                          </button>
                        </div>
                      </form>
                      <input type="text" class="form_busca__mobile d-md-none" />
                    </div>
                  </div>
                </div>
              </div>
                <div class="container">
                    @yield('content')
                </div>
        </div>
      @include('layouts.footer')

     <script>
         $(".carousel-flick").flickity({
            // options
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            groupCells: true,
        });
     </script>
    </body>
</html>
