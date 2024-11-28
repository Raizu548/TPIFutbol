import formatFecha from './helpers.js';

console.log('pp')

let contenedor = document.getElementById('torneo-content');
getTorneo();


async function getTorneo(){

    await fetch('https://football-tournamets-dadb-production.up.railway.app/torneo/torneo', {
        method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        }
      })
      .then(response => response.json())
      .then(data => {console.log(data);
        data.forEach(element => {
           contenedor.innerHTML += torneoItem(element)
        });
        // torneos = data;
      })
      .catch(error => console.error('Error:', error));
  

}

function torneoItem(torneo) {
    console.log(torneo)
    return `
        <tr>
            <td><a href="/laravel/tpifutbol/public/torneo/${torneo.torneoid}"> ${torneo.nombre} </a></td>
            <td>${formatFecha(torneo.periodo_inscripcion)}</td>
            <td>${formatFecha(torneo.periodo_inicio)}</td>
        </tr>
    `
}

// function formatFecha(fecha) {
//     let date = new Date(fecha); 
//     let formattedDate = date.toISOString().split('T')[0];
//     formattedDate = formattedDate.replaceAll('-','/');
//     return formattedDate
// }
