// Establecemos la fecha actual como valor por omisión del campo de fecha
var fechaActual = new Date();
var anio = fechaActual.getFullYear();
var mes = (fechaActual.getMonth()+1).toString().padStart(2, '0');
var dia = fechaActual.getDate().toString().padStart(2, '0');
var fechaPorOmision = anio + '-' + mes + '-' + dia;
// TECLA F2
document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        guardarNota(event)
        mostrarFechaHora()
    }
});
// Capturar el evento de presionar la tecla F3
document.addEventListener("keydown", function(event) {
    if (event.key === "F3") {
        insertarFechaHora();
        event.preventDefault(); // Evita que se recargue la página
    }
});
// GUARDA BITACOARA AUTO
function grabarAutomaticoBit(event) {
    setInterval(function() {
      guardarNota(event);
    }, 60000);
}
// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
//PARA f5
const textarea = document.getElementById("nota");
document.getElementById("fechaBit").value = fechaPorOmision;
// Función para cargar la nota correspondiente a la fecha seleccionada
function cargarNota() {
    // Obtenemos la fecha seleccionada
    let fecha = document.getElementById("fechaBit").value;
    // Convertimos la fecha al formato "dd-mm-yyyy"
    let fechaFormateada = fecha.split("-").reverse().join("-");
    // VALIDA SI ESTA EN LOCAL
    let nota=localStorage.getItem("bitacora")
    if(nota==='undefined'){
        alert('no Hay Bitacora en LocalStorage')
        return
    }
    // Obtenemos la lista de notas almacenadas en el Local Storage
    let bitacora = JSON.parse(localStorage.getItem("bitacora")) || [];
    // Buscamos la nota correspondiente a la fecha seleccionada
    let notaEncontrada = bitacora.find(function(nota){
        return nota.fecha == fechaFormateada;
    });
    // Si encontramos una nota para la fecha seleccionada, la cargamos en el campo de nota
    if (notaEncontrada) {
        document.getElementById("nota").value = notaEncontrada.nota;
    } else {
        document.getElementById("nota").value = "";
    }
}
//presentamo el dia
presentaDia()
// Cargamos la nota correspondiente a la fecha seleccionada al cargar la página
cargarNota();
function guardarNota(event) {
    event.preventDefault()
    // Obtenemos la fecha y la nota del formulario
    var fecha = document.getElementById("fechaBit").value;
    var nota = document.getElementById("nota").value;
    // Convertimos la fecha al formato "dd-mm-yyyy"
    var fechaFormateada = fecha.split("-").reverse().join("-");
    // Obtenemos la lista de notas almacenadas en el Local Storage
    var bitacora = JSON.parse(localStorage.getItem("bitacora")) || [];
    // Creamos un nuevo objeto con la fecha y la nota ingresadas
    var nuevaNota = {
        fecha: fechaFormateada,
        nota: nota
    };
    // Buscamos la nota correspondiente a la fecha seleccionada
    var notaExistente = bitacora.find(function(nota) {
        return nota.fecha == fechaFormateada;
    });
    // Si encontramos una nota para la fecha seleccionada, la reemplazamos con la nueva nota
    if (notaExistente) {
        var indiceNotaExistente = bitacora.indexOf(notaExistente);
        bitacora[indiceNotaExistente] = nuevaNota;
    } else {
         // Si no encontramos una nota para la fecha seleccionada, agregamos la nueva nota a la lista
         bitacora.push(nuevaNota);
    }
    // Almacenamos la lista de notas en el Local Storage
    localStorage.setItem("bitacora", JSON.stringify(bitacora));
    // mostrarFechaHora()
        console.log('la nota en la bitacora fue grabada')
        mensajeAyuda('la nota en la bitacora fue grabada')
    // event.preventDefault()
}
// Agregamos un evento al campo de fecha para que se cargue la nota correspondiente al seleccionar una fecha
document.getElementById("fechaBit").addEventListener("change", cargarNota);

//GRABA EN DISCO DURO EL ARCHIVO JSON
function guardarBitacora() {
    event.preventDefault();
    // leer los datos existentes de la bitácora del almacenamiento local
    let bitacora = localStorage.getItem("bitacora");
    if (bitacora === null) {
        bitacora = [];
    } else {
        bitacora = JSON.parse(bitacora);
    }
    // agregar los nuevos datos a la bitácora
    let fecha = new Date().toLocaleDateString();
    let nota = "Nueva nota";
    bitacora.push({fecha: fecha, nota: nota});
    // guardar los datos actualizados en el almacenamiento local
    localStorage.setItem("bitacora", JSON.stringify(bitacora));
    // crear un objeto de enlace para descargar el archivo JSON
    var enlace = document.createElement("a");
    enlace.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bitacora));
   
    let nombreArchivo= nombreArchivoJson('bitacora')
    enlace.download = nombreArchivo;
    // hacer clic en el enlace para descargar el archivo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
//LEE EL ARCHIVO A LOCAL
function leerJSON() {
    var archivo = document.getElementById("archivoJSON").files[0];
    var lector = new FileReader();
    lector.onload = function(event) {
        var contenido = event.target.result;
        var bitacora = JSON.parse(contenido);
        localStorage.setItem("bitacora", JSON.stringify(bitacora));
        console.log("Bitácora subida a LocalStorage");
    };
    lector.readAsText(archivo);
}
//para f5
// Función para insertar la fecha y hora actual en el textarea
function insertarFechaHora() {
    const fechaHora = new Date().toLocaleString();
    textarea.value += fechaHora;
}
function presentaDia(){
     // Obtenemos la fecha actual
     let today = new Date();
     // Generamos una cadena de texto con el formato deseado
     let textoDelDia = `${today.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
     // Insertamos el texto del día en la etiqueta "p" con id "textoDelDia"
     document.getElementById('textoDelDia').innerHTML = textoDelDia;
}
//     // Mostrar la cadena en el elemento con el id "fechaHora"
//     document.getElementById("fechaHora").innerHTML = fechaHoraOkStr;
// }
function mostrarFechaHora() {
    // Obtener la fecha y hora actual
    let fechaHoraActual = new Date();
    // Crear una cadena con la fecha y hora formateadas
    let fechaHoraActualStr = `Ultima grabacion: ${fechaHoraActual.toLocaleDateString()} a las ${fechaHoraActual.toLocaleTimeString()}`;
    // Mostrar la cadena en el elemento con el id "fechaHora"
    document.getElementById("horaGrabaBit").innerText = fechaHoraActualStr;
    // document.getElementById("fechaHora").innerHTML = fechaHoraActualStr;
}
//PRESENTA FECHA HORA
// Función para agregar un cero a la izquierda de un número si es necesario
function agregarCero(num) {
    return (num < 10 ? "0" : "") + num;
  }
function actualizarHora() {
  // Obtener la fecha y hora actual
  var fechaActual = new Date();
  // Obtener los componentes de la fecha y hora
  var dia = agregarCero(fechaActual.getDate());
  var mes = agregarCero(fechaActual.getMonth() + 1);
  var anio = fechaActual.getFullYear();
  var hora = agregarCero(fechaActual.getHours());
  var minutos = agregarCero(fechaActual.getMinutes());
  var segundos = agregarCero(fechaActual.getSeconds());
  // Mostrar la fecha y hora en el formato deseado
  let fechaString=dia + "/" + mes + "/" + anio + " " 
  document.getElementById("fechaBit").textContent = fechaString;
  var horaString = hora + ":" + minutos + ":" + segundos;
  document.getElementById("horaBit").textContent = horaString;
}

function setHoy(event) {
    event.preventDefault()
    // Obtener la fecha de hoy
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1; // Los meses van de 0 a 11, sumamos 1 para obtener el mes correcto
    let anio = hoy.getFullYear();

    // Formatear la fecha al formato "yyyy-mm-dd"
    let fechaFormateada = anio + "-" + (mes < 10 ? "0" + mes : mes) + "-" + (dia < 10 ? "0" + dia : dia);

    // Establecer la fecha en el campo de fechaBit
    document.getElementById("fechaBit").value = fechaFormateada;

    // Cargar la nota correspondiente a la fecha de hoy
    cargarNota();
}
