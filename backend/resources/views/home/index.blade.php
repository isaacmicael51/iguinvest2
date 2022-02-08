@extends('layouts.app') 
@section('content')
  <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="pt-4">Imoveis super destaque</h2>
            @include('layouts.carouselHome')
        </div>
      </div>
    </div>
@endsection