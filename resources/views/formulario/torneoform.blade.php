@extends('../layouts.app')

@section('content')

    <div class="container"> 
        <h1>Agregar Nuevo Torneo</h1> 
        <form action="{{ route('inicio') }}" method="POST" id="agregar-torneo"> @csrf 
            <div class="form-group"> 
                <label for="nombre">Nombre del torneo:</label> 
                <input type="text" id="nombre" name="nombre" required> 
            </div> 
            <div class="form-group"> 
                <label for="inscripcion_inicio">Periodo de inscripción de inicio:</label> 
                <input type="date" id="inscripcion_inicio" name="inscripcion_inicio" required> 
            </div>  
            <div class="form-group"> 
                <label for="fecha_inicio">Fecha de inicio:</label> 
                <input type="date" id="fecha_inicio" name="fecha_inicio" required> 
            </div> 
            <div class="form-group"> 
                <label for="division">Divicion:</label> 
                <input type="text" id="division" name="division" required> 
            </div> 
            <div class="form-group"> 
                <label for="categoria">Categoria:</label> 
                <input type="text" id="categoria" name="categoria" required> 
            </div>
            <button type="submit">Guardar torneo</button> 
        </form>
    </div>

    <script src="{{ asset('..\resources\js\sendPostTorneo.js') }}"></script>

@endsection
