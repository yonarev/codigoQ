
function eliminarCorreos() {
	localStorage.removeItem("correos");
	alert("Se ha eliminado los 'correos' del Local Storage.");
    location.reload()
}
// Función para eliminar 'llamadas' del Local Storage
function eliminarLlamadas() {
	localStorage.removeItem("llamadas");
	alert("Se han eliminado las 'llamadas' del Local Storage.");
    location.reload()
}

function eliminarDeLocal(clave){
    if(clave===''){return}
    localStorage.removeItem(clave);
	alert("Se han eliminado el KEY: "+clave+" de Local Storage.");
    location.reload()
}
// Función para eliminar tiempos
function eliminarTiempos() {
    localStorage.removeItem("data");
    alert("Se ha eliminado los tiempos de Local Storage.");
    location.reload()
}
// Función para eliminar todo el Local Storage
function eliminarLocalStorage() {
	localStorage.clear();
	alert("Se ha eliminado todo el contenido de Local Storage.");
    location.reload()
}
// Función para cargar los datos del archivo JSON en localStorage
function cargaBaseCompleta() {
	// Obtener el archivo seleccionado por el usuario
	let archivo = document.getElementById('archivoTotJSON').files[0];
	// Crear un objeto de tipo FileReader para leer el archivo
	let lector = new FileReader();
	// Configurar el evento onload del FileReader
	lector.onload = function(evento) {
		// Obtener los datos del archivo en formato JSON
		let datosJSON = evento.target.result;
		// Convertir los datos JSON en un objeto JavaScript
		let datos = JSON.parse(datosJSON);
		// Guardar los datos en localStorage
		localStorage.setItem('asuntos', datos.asuntos);
		localStorage.setItem('listaDatos', datos.listaDatos);
		localStorage.setItem('correos', datos.correos);
		localStorage.setItem('bitacora', datos.bitacora);
		localStorage.setItem('llamadas', datos.llamadas);
		// Mostrar un mensaje de éxito
		alert('Todos Los datos se han cargado correctamente en localStorage. \n Asuntos,ListaDatos,Correos,Bitacora,llamadas');
        location.reload()
    };
	// Leer el archivo como texto
	lector.readAsText(archivo);
}
//graba base completa con llamadas
function grabaBaseCompleta(){
  // Obtener los datos de localStorage y validar que no sean nulos o vacíos
  let listadeDatos= localStorage.getItem('listaDatos') || '';
  let asuntos = localStorage.getItem('asuntos') || '';
  let correos = localStorage.getItem('correos') || '';
  let bitacora = localStorage.getItem('bitacora') || '';
  let llamadas = localStorage.getItem('llamadas') || '';
  let datos = {
    asuntos: asuntos,
    listaDatos: listadeDatos,
    correos: correos,
    bitacora:bitacora,
    llamadas:llamadas
  };
  // Convertir el objeto a formato JSON
  let datosJSON = JSON.stringify(datos);
  // Crear el nombre del archivo con la fecha y hora actual y el nombre "DatLab"
  // let fechaHora = new Date().toLocaleString().replace(/\//g, '-').replace(/:/g, '-').replace(/ /g, '_');
  let nombreArchivo = 'DatLabTot.json';
  // Crear un objeto de tipo Blob con los datos JSON
  let blob = new Blob([datosJSON], {type: 'application/json'});
  // Crear un objeto de tipo URL con el Blob
  let url = URL.createObjectURL(blob);
  // Crear un enlace para descargar el archivo
  let a = document.createElement('a');
  a.href = url;
  a.download = nombreArchivo;
  a.click();
  // Liberar la memoria del objeto URL
  URL.revokeObjectURL(url);
}
function convertirAxls() {
    var fileInput = document.getElementById("json-file");
    var file = fileInput.files[0];
    // DEFINE EL NOMBRE COMPLETO DEL ARCHIVO A GRABAR
    let nombreArchivoConExtension=file.name
    const indicePunto = nombreArchivoConExtension.lastIndexOf(".");
    const nombreArchivoSinExtension = nombreArchivoConExtension.substring(0, indicePunto);
    const archivoFinal=nombreArchivoSinExtension+'.xls'
    var reader = new FileReader();
    reader.onload = function(event) {
      var data = JSON.parse(event.target.result);
      var workbook = XLSX.utils.book_new();
      var sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, "Hoja1");
      XLSX.writeFile(workbook, archivoFinal);
    };
    reader.readAsText(file);
  }