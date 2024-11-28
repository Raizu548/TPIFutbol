console.log('hola2')

let form_agendar_torneo = document.getElementById('agregar-torneo'),
    nombre = document.getElementById('nombre'),
    periodo_inscripcion = document.getElementById('inscripcion_inicio'),
    periodo_inicio = document.getElementById('fecha_inicio'),
    division = document.getElementById('division'),
    categoria = document.getElementById('categoria');

form_agendar_torneo.addEventListener('submit', (e) => {
    // e.preventDefault()
    console.log('envio el formulario');
    console.log(nombre.value);
    let data = {
        nombre: nombre.value,
        periodo_inicio: periodo_inicio.value,
        periodo_inscripcion: periodo_inscripcion.value,
        division: division.value,
        categoria: categoria.value
    }
    console.log(data);
    fetch('https://football-tournamets-dadb-production.up.railway.app/torneo/torneo', {
        method: 'POST', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        },
        body: JSON.stringify(data)
    })
    .then(res => console.log('paso'))
    .catch(error => console.error('Error:', error));

})


// function sendPost() {
//     console.log('enviar post')
// }

// fetch('https://football-tournamets-dadb-production.up.railway.app/api/endpoint/query', {
//     method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
//     }
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));