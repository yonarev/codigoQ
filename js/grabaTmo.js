// Obtener los datos de localStorage
var datos = JSON.stringify(localStorage);
// Crear un objeto Blob con los datos
var blob = new Blob([datos], {type: "application/json"});
// Crear un objeto URL para el objeto Blob
var url = URL.createObjectURL(blob);
// Crear un elemento <a> para descargar el archivo
var link = document.createElement("a");
link.href = url;
link.download = "tiemposLab.json";
// Simular un click en el enlace para descargar el archivo
document.body.appendChild(link);
link.click();
// Liberar el objeto URL
URL.revokeObjectURL(url);
// Eliminar el enlace del DOM
document.body.removeChild(link);
