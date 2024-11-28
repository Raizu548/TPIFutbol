@extends('layouts.app')

@section('content')
    
    <div class="container"> 
        <h1 id="titulo"> Equipo </h1> 
        <table> 
            <thead> 
                <tr> 
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Teléfono</th>
                    <th>N° Socio</th>
                    <th>Categoría</th>
                </tr> 
            </thead> 
            <tbody id='jugadores-content'> 
                {{-- Jugadores agregado por js --}}
            </tbody> 
        </table> 
        {{-- <button id="agregar_jugador" onclick="window.location.href='{{ route('agregarJugador') }}'">Añadir nuevo Juegor</button> --}}
        <button id="agregar_jugador" onclick="redirigirAgregarJugador()">Añadir nuevo Juegor</button>
    </div>

    <script src="{{ asset('..\resources\js\getEquipoJugadores.js') }}"></script>

@endsection