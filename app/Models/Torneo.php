<?php

namespace App\Models;

class Torneo{

    public $id;
    public $nombre;
    public $periodo_inscripcion;
    public $periodo_inicio;


    public function __construct($id,$nombre,$periodo_inscripcion,$periodo_inicio)
    {
        $this->nombre = $nombre;
        $this->id = $id;
        $this->periodo_inscripcion = $periodo_inscripcion;
        $this->periodo_inicio = $periodo_inicio;

    }

    

}