@extends('layouts.app')

@section('content')
    
    <div class="container"> 
        <h1 id="titulo-torneo"></h1> 
        <table> 
            <thead> 
                <tr> 
                    <th>Equipo</th> 
                </tr> 
            </thead> 
            <tbody id='equipo-content'> 
                {{-- <tr> 
                    <td>Equipo 1</td> 
                </tr> 
                <tr> 
                    <td>Equipo 2</td> 
                </tr> <!-- Añade más filas según sea necesario -->  --}}
            </tbody> 
        </table> 
        <button onclick="window.location.href='{{ route('equipoform') }}'">Añadir nuevo Equipo</button>
    </div>

    <script src="{{ asset('..\resources\js\getEquipoTorneo.js') }}"></script>

@endsection