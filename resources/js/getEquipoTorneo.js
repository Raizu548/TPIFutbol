

let contenedor = document.getElementById('equipo-content');
getEquipo();

async function getEquipo(){
    let pathname = window.location.pathname.split('/');
    let id = pathname[pathname.length - 1];

    await fetch(`https://football-tournamets-dadb-production.up.railway.app/torneo/equipos/${id}`, {
        method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        }
      })
      .then(response => response.json())
      .then(data => {console.log(data);
        data.forEach(element => {
           contenedor.innerHTML += equipoItem(element)
        });
        // torneos = data;
      })
      .catch(error => console.error('Error:', error));
  

}

function equipoItem(equipo) {
    console.log(equipo)
    return `
        <tr>
            <td><a href="/laravel/tpifutbol/public/torneo/${equipo.equipoid}"> ${equipo.nombre} </a></td>
        </tr>
    `
}