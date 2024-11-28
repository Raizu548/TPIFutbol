

let contenedor = document.getElementById('equipo-content');
let equipos = [],
    torneos = [];

getEquipo();

async function getEquipo(){

    await fetch('https://football-tournamets-dadb-production.up.railway.app/equipo/all', {
        method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        equipos = data
        data.forEach(element => contenedor.innerHTML += equipoItem(element));
    })
    .catch(error => console.error('Error:', error));

    // Definimos los botones para desplegar el modal y el contendor
    let buttons = document.querySelectorAll('.js-open-modal'),
        contendor_modal = document.getElementById('content-modal');
    // Agregamos la funcionalidad para abrir el modal y crearlo
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let id = button.getAttribute('data-id');
            contendor_modal.innerHTML += createModal(obtenerEquipo(id))
            getTorneos()

            // Funcionalidad para cerra el modal
            let btn_cerrar = document.getElementById('btn-cerrar');
            if (btn_cerrar) {
                btn_cerrar.addEventListener('click', () => {
                    document.querySelector('#content-modal > div').remove();
                });
            }

            // Funcionalidad para enviar el formulario
            let formulario = document.getElementById('fomulario-inscipcion');
            formulario.addEventListener('submit', (e) => {
                let torneo_id = document.getElementById('nombre_tornoe').value;
                enviarInscripcion(id,torneo_id)
            });
        })
    })
}

async function getTorneos() {
    await fetch('https://football-tournamets-dadb-production.up.railway.app/torneo/torneo',
        {
            method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
            }
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let select = document.getElementById('nombre_tornoe');
        data.forEach(torneo => select.innerHTML += `<option value="${torneo.torneoid}">${torneo.nombre}</option>`)
    })
    .catch(error => console.error('Error:', error));
}

async function enviarInscripcion(equipo_id, torneo_id) {
    console.log(equipo_id);
    console.log(torneo_id);
    if (torneo_id != 'default' && torneo_id != null) {
        let data = {
            equipo_id: equipo_id,
            torneo_id: torneo_id
        }
        console.log(data)
        await fetch('https://football-tournamets-dadb-production.up.railway.app/equipo/inscripcion', {
            method: 'POST', // o 'POST', 'PUT', 'DELETE' según sea necesario
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
            },
            body: JSON.stringify(data)
        })
        .then(res => {console.log('se asigno el equipo'); console.log(res)})
        .catch(error => console.error('Error:', error));
    }
}

function obtenerEquipo(id) {
    return equipos.find((item => item.equipoid == id))
}

// -------------------- VISTAS ----------------------
function equipoItem(equipo) {
    console.log(equipo)
    return `
        <tr>
            <td><a href="/laravel/tpifutbol/public/equipo/${equipo.equipoid}"> ${equipo.nombre} </a></td>
            <td>${equipo.division}</td>
            <td>${equipo.categoria}</td>
            <td>
              <button data-id="${equipo.equipoid}" class="w-full hover:text-blue-400 js-open-modal">Agregar torneo</button>
            </td>
        </tr>
    `
}

function createModal(data) {
    return `
        <div class="bg-gray-700 w-[500px] h-96 rounded-lg p-4">
            <div class="w-full text-end">
                <a id="btn-cerrar" class="border rounded-md p-2 text-white hover:cursor-pointer">X</a>
            </div>
            <div class="flex flex-col items-center h-full justify-center text-white">
                <h2 class="text-xl">Elige un toreno para el equipo</h2>
                <div class="my-3">${data.nombre}</div>
                <form action="" id="fomulario-inscipcion" class="flex flex-col">
                    <select id="nombre_tornoe" id="nombre_tornoe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="default" selected>Selecciona un toreno</option>
                    </select>
                    <button id="btn-inscribir" class="mt-4 border rounded-lg border-gray-100 p-2" type="submit">Inscribir</button>
                </form>
            </div>
        </div>`
}


