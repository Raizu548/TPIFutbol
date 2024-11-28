@extends('layouts.app')

@section('content')


    <div class="flex flex-col items-center">
        <h1 class="text-4xl ">Gestion</h1>
        <div class="flex flex-col">
            <button class="p-2 my-2 bg-blue-500 text-white" onclick="window.location.href='{{ route('torneoform') }}'">
                Crear Torneo
            </button>
            <button class="p-2 my-2 bg-blue-500 text-white" onclick="window.location.href='{{ route('equipoform') }}'">
                Crear Equipo
            </button>
            <button class="p-2 my-2 bg-blue-500 text-white" onclick="window.location.href='{{ route('verTorneo') }}'">
                Ver Torneos
            </button>
            <button class="p-2 my-2 bg-blue-500 text-white" onclick="window.location.href='{{ route('verEquipo') }}'">
                Ver Equipos
            </button>
        </div>
    </div>

    {{-- <script type="module" src="{{ asset('..\resources\js\getTorneo.js') }}"></script> --}}

@endsection