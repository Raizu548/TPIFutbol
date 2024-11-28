export default function formatFecha(fecha) {
    let date = new Date(fecha); 
    let formattedDate = date.toISOString().split('T')[0];
    formattedDate = formattedDate.replaceAll('-','/');
    return formattedDate;
}