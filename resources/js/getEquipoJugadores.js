let jugadores = [];
let contenedor = document.getElementById('jugadores-content');

getJugadores();

function redirigirAgregarJugador() {
    let pathname = window.location.pathname.split('/');
    let id = pathname[pathname.length - 1];

    console.log(id)
    window.sessionStorage.setItem('equipo_id', id)
    window.location.href = `/laravel/tpifutbol/public/equipo/${id}/jugador/crear`; 
}

async function getJugadores() {
    await fetch('https://football-tournamets-dadb-production.up.railway.app/persona/jugador/all', {
        method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        jugadores = data
        data.forEach(jugador => {
            contenedor.innerHTML += renderizarJugador(jugador);
        });
        // data.forEach(element => contenedor.innerHTML += equipoItem(element));
    })
    .catch(error => console.error('Error:', error));
}

function renderizarJugador(data) {
    return `
    <tr> 
        <td>${data.nombre}</td> 
        <td>${data.apellido}</td> 
        <td>${data.direccion}</td> 
        <td>${data.telefono}</td> 
        <td>${data.numero_socio}</td> 
        <td>${data.categoria}</td> 
    </tr>`
}