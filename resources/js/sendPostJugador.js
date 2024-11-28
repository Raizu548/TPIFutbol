
let form_agendar_jugador = document.getElementById('agregar-jugador'),
    nombre = document.getElementById('nombre'),
    apellido = document.getElementById('apellido'),
    direccion = document.getElementById('direccion'),
    telefono = document.getElementById('telefono'),
    nacimiento = document.getElementById('nacimiento'),
    numero_socio = document.getElementById('numero_socio'),
    categoria = document.getElementById('categoria'),
    equipo_id = window.sessionStorage.getItem('equipo_id');

form_agendar_jugador.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('envio el formulario');
    let data = {
        nombre: nombre.value,
        apellido: apellido.value,
        direccion: direccion.value,
        telefono: telefono.value,
        nacimiento: nacimiento.value,
        numero_socio: numero_socio.value,
        categoria: categoria.value,
        equipo: equipo_id
    }
    console.log(data)

    fetch('https://football-tournamets-dadb-production.up.railway.app/persona/jugador', {
        method: 'POST', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        },
        body: JSON.stringify(data)
    })
    .then(res => {console.log('se creo el jugador'); console.log(res)})
    .catch(error => console.error('Error:', error));
})