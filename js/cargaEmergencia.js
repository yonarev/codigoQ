// Manejador del evento click del botón "Cargar archivo JSON"
document.getElementById("cargar").addEventListener("click", function() {
    // Hacer clic en el input file para abrir el selector de archivos
    document.getElementById("archivo").click();
});
//RECUPERA EN LOCAL STORAGE LAS LLAMADAS DESDE ARCHVO JSON
document.getElementById("archivo").addEventListener("change", function() {
    // Obtener el archivo seleccionado
    let archivo = this.files[0];
    // Leer el contenido del archivo como texto
    var lector = new FileReader();
    lector.onload = function() {
        debugger
    // Parsear el contenido del archivo como un objeto JSON
    let listaLLamadas = JSON.parse(lector.result);
    //calculo numero de llamadas
    let totalLLamadas=listaLLamadas.length
    // Almacenar la lista de personas en Local Storage
    localStorage.setItem("llamadas", JSON.stringify(listaLLamadas));
    
    // Mostrar un mensaje de éxito
    alert("Archivo cargado con éxito, Hay "+totalLLamadas+" Llamadas");
    }
    lector.readAsText(archivo);
});
// Manejador del evento click del botón "Cargar archivo JSON"
document.getElementById("cargar").addEventListener("click", function() {
    // Hacer clic en el input file para abrir el selector de archivos
    document.getElementById("archivo").click();
});


