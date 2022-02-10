<?php
// Traz os imoveis Super Destaque
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class TodosOsImoveisController extends Controller
{
    public  $chave = '';
    public function __construct()
    {
        $this->chave = 'wSK7Jlc7sQfuJ5Gx8/3v61ce5zEqL2vNNzZ8cHert2E=';
    }

    public function filtros($page, $codigoTipo, $var2)
    {
        $finalidade = '"finalidade":"2",';
        $numeroPagina = '"numeroPagina":"' . $page . '",';
        $numeroRegistros = '"numeroRegistros":"20",';

        $params = "$finalidade $numeroPagina $numeroRegistros";
        //aqui vc coloca os if q vc precisar
        if ($codigoTipo > 0) {
            $codigoTipo = '"codigoTipo":"' . $codigoTipo . '",';
            $params .= $codigoTipo;
        }

        $ordenacao = '"ordenacao":"valorasc"';

        return $params .= $ordenacao;
    }

    public function index($page = 1, $codigoTipo = 0, $var2 = 0)
    {

        $client = new \GuzzleHttp\Client();
        $params = $this->filtros($page, $codigoTipo, $var2);
        $url = 'https://api.imoview.com.br/Imovel/RetornarImoveisDisponiveis?parametros={' . $params . '}';

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
