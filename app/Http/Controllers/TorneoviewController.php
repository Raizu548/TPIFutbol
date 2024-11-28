<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TorneoviewController extends Controller
{
    public function showtorneo(){
        return view('torneoview');
    }

    public function create(){
        return view('formulario.torneoform');
    }

    public function showEquipo(){
        return view('formulario.equipoform');
    }

    public function agregarJugador(){
        return view('formulario.jugadorform');
    }

    public function guardarTorneo(){

    }
    
}
