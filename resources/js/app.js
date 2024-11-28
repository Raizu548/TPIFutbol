// import './bootstrap';
console.log('hola');

fetch('https://football-tournamets-dadb-production.up.railway.app/api/endpoint/query', {
    method: 'GET', // o 'POST', 'PUT', 'DELETE' según sea necesario
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer tuTokenAquí' // Si es necesario un token de autenticación
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  