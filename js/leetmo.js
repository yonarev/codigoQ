function leerArchivo() {
  var archivo = document.getElementById("archivo").files[0];
  if (!archivo) {
    alert("Por favor seleccione un archivo.");
    return;
  }
  var lector = new FileReader();
  lector.onload = function(evento) {
    var datos = evento.target.result;
    localStorage.clear();
    var datosJSON = JSON.parse(datos);
    for (var clave in datosJSON) {
      localStorage.setItem(clave, datosJSON[clave]);
    }
    alert("Los datos se han recuperado del archivo.");
  }
  lector.readAsText(archivo);
}
