<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ImoveisDestaqueDisponiveisController;
use App\Http\Controllers\Api\TiposDeImoveisDisponiveisController;
use App\Http\Controllers\Api\CidadesDisponiveisController;
use App\Http\Controllers\Api\TodosOsImoveisController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('categories', [CategoryController::class, 'index']);
//TODO
Route::get('ImoveisDestaqueDisponiveis/{codigoTipo?}/{var2?}', [ImoveisDestaqueDisponiveisController::class, 'index']);
Route::get('tiposdeimoveisdisponiveis/', [TiposDeImoveisDisponiveisController::class, 'index']);
Route::get('cidadesdisponiveis/', [CidadesDisponiveisController::class, 'index']);
Route::get('imoveisDisponiveis/{page?}/{codigoTipo?}/{var2?}', [TodosOsImoveisController::class, 'index']);
