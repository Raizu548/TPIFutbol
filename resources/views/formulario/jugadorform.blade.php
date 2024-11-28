@extends('../layouts.app')

@section('content')

    <div class="container"> 
        <h1>Registrar jugador</h1> 
        {{-- Volver a la parte de mostrar equipos del torneo que estaba seleccionado --}}
        <form action="{{ route('inicio') }}" method="POST" id="agregar-jugador"> @csrf 
            <div class="form-group"> 
                <label for="nombre">Nombre:</label> 
                <input type="text" id="nombre" name="nombre" required> 
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
            <div class="form-group"> 
                <label for="numero_socio">Numero de socio:</label> 
                <input type="number" id="numero_socio" name="numero_socio" required> 
            </div>
            <div class="form-group"> 
                <label for="categoria">Categoria:</label> 
                <input type="text" id="categoria" name="categoria" required> 
            </div>
            <button type="submit">Guardar</button> 
        </form>
    </div>

    <script src="{{ asset('..\resources\js\sendPostJugador.js') }}"></script>

@endsection