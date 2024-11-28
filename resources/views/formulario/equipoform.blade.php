@extends('../layouts.app')

@section('content')

    <div class="container"> 
        <h1>Nuevo equipo</h1> 
        {{-- Volver a la parte de mostrar equipos del torneo que estaba seleccionado --}}
        <form action="{{ route('inicio') }}" method="POST" id="agregar-equipo"> @csrf 
            <div class="form-group"> 
                <label for="nombreEquipo">Nombre del equipo:</label> 
                <input type="text" id="nombreEquipo" name="nombreEquipo" required> 
            </div> 
            <div class="form-group"> 
                <label for="division">Divicion:</label> 
                <input type="text" id="division" name="division" required> 
            </div> 
            <div class="form-group"> 
                <label for="categoria">Categoria:</label> 
                <input type="text" id="categoria" name="categoria" required> 
            </div>
            <h1 class="border-y-2"> Tecnico </h1>
            <div class="form-group"> 
                <label for="nombreTecnico">Nombre:</label> 
                <input type="text" id="nombreTecnico" name="nombreTecnico" required> 
            </div>
            <div class="form-group"> 
                <label for="apellido">Apellido:</label> 
                <input type="text" id="apellido" name="apellido" required> 
            </div>
            <div class="form-group"> 
                <label for="direccion">Direccion:</label> 
                <input type="text" id="direccion" name="direccion" required> 
            </div>
            <div class="form-group"> 
                <label for="telefono">Telefono:</label> 
                <input type="number" id="telefono" name="telefono" required> 
            </div>
            <div class="form-group"> 
                <label for="nacimiento">Fecha de nacimiento:</label> 
                <input type="date" id="nacimiento" name="nacimiento" required> 
            </div>
            <button type="submit">Guardar torneo</button> 
        </form>
    </div>

    <script src="{{ asset('..\resources\js\sendPostEquipo.js') }}"></script>

@endsection