<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CidadesDisponiveisController extends Controller
{
    public  $chave = '';
    public function __construct()
    {
        $this->chave = 'wSK7Jlc7sQfuJ5Gx8/3v61ce5zEqL2vNNzZ8cHert2E=';
    }

    public function filtros($codigoTipo, $var2)
    {
        $finalidade = '"finalidade":"2",';
        $numeroPagina = '"numeroPagina":"1",';
        $numeroRegistros = '"numeroRegistros":"5",';
        $destaque = '"destaque":"3",';

        $params = "$finalidade $numeroPagina $numeroRegistros $destaque";
        //aqui vc coloca os if q vc precisar
        if ($codigoTipo > 0) {
            $codigoTipo = '"codigoTipo":"2",';
            $params .= $codigoTipo;
        }
        $ordenacao = '"ordenacao":"valorasc"';

        return $params .= $ordenacao;
    }

    public function index($codigoTipo = 0, $var2 = 0)
    {
        $client = new \GuzzleHttp\Client();
        $params = $this->filtros($codigoTipo, $var2);
        $url = 'https://api.imoview.com.br/Imovel/RetornarCidadesDisponiveis?parametros={' . $params . '}';

        $res = $client->request('GET', $url, [
            'headers' => [
                'Accept'     => 'application/json',
                'chave'      => $this->chave
            ]
        ]);

        $data = json_decode($res->getBody());
        return $data;
    }
}
