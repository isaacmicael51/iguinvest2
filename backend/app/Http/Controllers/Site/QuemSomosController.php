<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuemSomosController extends Controller
{
    public function index()
    {
        
        return view('quemsomos.index');
    }
}