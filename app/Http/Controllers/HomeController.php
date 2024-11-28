<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Torneo;
use phpDocumentor\Reflection\Types\This;

class HomeController extends Controller
{
    public $torneos;

    public function __construct() { 
        $this->torneos = [ 
            // new Torneo(1, 'Torneo 1', '21/11/24 - 31/12/24', '09/01/25'), 
            // new Torneo(2, 'Torneo 2', '01/01/25 - 28/02/25', '10/03/25'), 
            // new Torneo(3, 'Torneo 3', '01/03/25 - 30/03/25', '15/04/25') 
        ];
    }


    public function __invoke(){
        return view('inicio');
    }

    public function verTorneo() { 
        return view('torneo', ['torneos' => $this->torneos]);
    }

    public function show($id) { 
        $torneo = collect($this->torneos)->firstWhere('id', $id); 
        return view('torneoequipoview', ['torneo' => $torneo]);
    }

    public function verEquipos(){
        return view('equipoview');
    }

    public function showJugadoresEquipo($id){
        return view('jugadoresview');
    }

    public function listarTorneo($data){

        $this->torneos = [];
        foreach ($data as $value) {

            $torneo = new Torneo($value['torneoid'],$value['nombre'],$value['periodo_inscripcion'],$value['periodo_inicio']);

            $this->torneos[] = $torneo;
        }
    }

}
