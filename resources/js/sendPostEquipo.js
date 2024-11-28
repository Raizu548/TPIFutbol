let form_agendar_equipo = document.getElementById('agregar-equipo'),
    nombreEquipo = document.getElementById('nombreEquipo'),
    division = document.getElementById('division'),
    categoria = document.getElementById('categoria'),
    nombreTecnico = document.getElementById('nombreTecnico'),
    apellido = document.getElementById('apellido'),
    direccion = document.getElementById('direccion'),
    telefono = document.getElementById('telefono'),
    nacimiento = document.getElementById('nacimiento');

form_agendar_equipo.addEventListener('submit', (e) => {
    // e.preventDefault
    console.log('envio el formulario');
    let data = {
        nombre: nombreTecnico.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        nacimiento: nacimiento.value,
        nombre_equipo: nombreEquipo.value,
        division: division.value,
        categoria: categoria.value
    }
    console.log(data)

    fetch('https://football-tournamets-dadb-production.up.railway.app/persona/tecnico_equipo', {
        method: 'POST', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        },
        body: JSON.stringify(data)
    })
    .then(res => {console.log('se creo el equipo'); console.log(res)})
    .catch(error => console.error('Error:', error));
})