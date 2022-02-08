<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Site\QuemsomosController;
use App\Http\Controllers\Site\BuscaImoveisController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [HomeController::class, 'index']);


Route::get('/quemsomos', [QuemSomosController::class, 'index']);
Route::get('/buscaimoveis', [BuscaImoveisController::class, 'index']);
Route::get('imoveisDisponiveis/{codigoTipo?}', [ImoveisDisponiveisController::class, 'index']);
Route::get('imoveisDisponiveis/{codigoTipo?}', [TiposDeImoveisDisponiveisController::class, 'index']);
