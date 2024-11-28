@extends('layouts.app')

@section('content')


    <div class="container"> 
        <h1>Lista de Torneos</h1> 
        <table> 
            <thead> 
                <tr> 
                    <th>Nombre</th> 
                    <th>Periodo de inscripción</th> 
                    <th>Fecha de Inicio</th> 
                </tr> 
            </thead> 
            <tbody id="torneo-content"> 
                {{-- @foreach ($torneos as $torneo)
                    <tr>
                        <td><a href="{{ route('torneoview', ['id' => $torneo->id]) }}"> {{ $torneo->nombre }} </a></td>
                        <td>{{ $torneo->periodo_inscripcion }}</td>
                        <td>{{ $torneo->fecha_inicio }}</td>
                    </tr>
                @endforeach --}}
            </tbody> 
        </table> 
        <button onclick="window.location.href='{{ route('inicio') }}'">inicio</button>
        <button onclick="window.location.href='{{ route('torneoform') }}'">Añadir nuevo torneo</button>
    </div>

    <script type="module" src="{{ asset('..\resources\js\getTorneo.js') }}"></script>

@endsection

    
