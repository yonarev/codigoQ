//PARA TIEMPO TRANSCURRIDO LLAMADA
//tmo
var inicia, fin, dif;
var startTime;
var timerInterval;
// window.onload=iniciar()
var tiempoInicial = Date.now();
// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
//ACTUALIZA GRABA BITACORA
setInterval(grabarAutomaticoBit(), 60000);
 // window.onload=inicio()
// Definir una lista de colores
// const colores = ["#F0F8FF","#F5F5DC","#F5F5F5","#F0FFF0","#E6E6FA","#F0E68C","#EEE8AA","#FAEBD7"];
const colores = ["#f2f2f2", "#87ceeb", "#90ee90", "#ffffe0", "#ffa07a"];
// Función para cambiar el color de fondo cada 40 segundos
//PARA ENTER EN TEXT AREA DESARROLLO
const desarrollo = document.getElementById('desarrollo');
desarrollo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const value = this.value;
      this.value = value.substring(0, start) + '\n' + value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
});
//PARA ENTER EN TEXT AREA asunto
const asunto = document.getElementById('asunto');
asunto.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const value = this.value;
      this.value = value.substring(0, start) + '\n' + value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
});
//PARA ENTER EN TEXT AREA ASUNTO
const textareaAsunto = document.querySelector('textarea');
textareaAsunto.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const value = this.value;
      this.value = value.substring(0, start) + '\n' + value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
});
//ENTER GLOSA
const glosa = document.getElementById('glosa');
glosa.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const value = this.value;
      this.value = value.substring(0, start) + '\n' + value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
});

//ENTER BITACORA
const nota= document.getElementById('nota');
nota.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const start = nota.selectionStart;
      const end = nota.selectionEnd;
      const value = nota.value;
      nota.value = value.substring(0, start) + '\n' + value.substring(end);
      nota.selectionStart = nota.selectionEnd = start + 1;
    }
});
// RECORDATORIOS
// Obtener referencias a los elementos del formulario y la tabla
const formularioR = document.getElementById('recordatorio-form');
const nombreInput = document.getElementById('nombre-input');
const gestionInput = document.getElementById('gestion-input');
const idInput = document.getElementById('id-input');
const tabla = document.getElementById('recordatorios-table').querySelector('tbody');
// Obtener los recordatorios del LocalStorage al cargar la página
const recordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];
// Función para agregar un nuevo recordatorio a la lista y actualizar la tabla
// Asignar un listener de eventos al botón para eliminar todos los recordatorios
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
//CON CONTROL G
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "g") {
    // Aquí puedes añadir el código para guardar los datos
    console.log("Datos guardados");
    grabaLocal('local');
  }
});
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'G') {
        // Aquí llamas a la función que deseas ejecutar
        grabaLocal('local')
    }
    });
    const txtArea = document.querySelector('textarea');
		txtArea.addEventListener('input', () => {
		txtArea.style.height = 'auto';
		txtArea.style.height = `${txtArea.scrollHeight}px`;
});
// TECLA F4
document.addEventListener('keydown', function(event) {
  if (event.key === 'F4') {
    grabaLocal('local')
  }
});
// TECLA F5
document.addEventListener('keydown', function(event) {
  if (event.key === 'F5') {
    location.reload()
  }
});
// TECLA F6
document.addEventListener('keydown', function(event) {
  if (event.key === 'F6') {
    nuevoAsuntoAqui()
  }
});
//EVITA PREVENT
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});
window.addEventListener("onchange", function(event) {
    if (event.key === "onchange") {
        event.preventDefault();
    }
});
window.addEventListener("onchange", function(event) {
    if (event.key === "onupdate") {
        event.preventDefault();
    }
})
//al hacer click en boton
const boton = document.querySelector('button');
boton.addEventListener('click', (event) => {
    event.preventDefault();
    // Coloca aquí tu código para ejecutar cuando se haga clic en el botón
});
//al submit del form
const formulario = document.getElementById('formLlamada');
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se actualice al enviar el formulario
  // Aquí puedes agregar el código para enviar los datos del formulario sin recargar la página
});
//LLENA LISTA DE HORAS INICIO Y DESPLIEGUA
let data=''
let hayLlamadas=localStorage.getItem('llamadas')
if(hayLlamadas==='undefined'){
  alert('no hay llamadas en Local')
} else{
  data = JSON.parse(localStorage.getItem('llamadas'));
  const select = document.getElementById('horaIni');
  if(data!==null){
      data.forEach(item => {
          const option = document.createElement('option');
          option.value = item.horaInicio;
          option.textContent = item.horaInicio;
          select.appendChild(option);
      });
      select.style.display = 'block'; // Forzar la visualización del select
      select.style.visibility = 'visible'; // Forzar la visibilidad del select
  }
  select.addEventListener('change', (event) => {
    const horaSeleccionada = event.target.value;
    data.forEach(item => {
      if (item.horaInicio === horaSeleccionada) {
        document.getElementById("rac").value=item.rac 
        document.getElementById("fechaInicio").value=item.fechaInicio                    
        document.getElementById("horaInicio").value=item.horaInicio            
        document.getElementById("usuarioNombres").value=item.usuarioNombres  
        document.getElementById("usuarioApellidoPaterno").value=item.UsuarioApellidoPaterno
        document.getElementById("usuarioApellidoMaterno").value=item.UsuarioApellidoMaterno
        document.getElementById("numeroServicio").value=item.numeroServicio        
        document.getElementById("digitoVerificador").value=item.digitoVerificador
        document.getElementById("asunto").value=item.asunto                
        document.getElementById("glosa").value=item.glosa               
        document.getElementById("rut").value=item.rut     
        document.getElementById("celular").value=item.celular               
        document.getElementById("mail").value=item.mail              
        document.getElementById("direccion").value=item.direccion
        document.getElementById("referencia").value=item.referencia 
        document.getElementById("comuna").value=item.comuna
        document.getElementById("desarrollo").value=item.desarrollo           
        document.getElementById("recordatorio").value=item.recordatorio          
        document.getElementById("numeroAtencion").value=item.numeroAtencion        
        // document.getElementById("numeroAviso").value=item.numeroAviso
        // document.getElementById("numeroOrden").value=item.numeroOrden
        //presenta nro de servicio para recordatorio
        document.getElementById('id-input').value=item.numeroServicio 

      }
    });
  });
}
//DESPLIEGA AL SELECCIONAR
//para comprimir y expandir textarea ASUNTO
const textAsunto = document.querySelector('#asunto');
textAsunto.addEventListener('input', () => {
  textAsunto.style.height = 'auto';
  textAsunto.style.height = textAsunto.scrollHeight + 'px';
});
textAsunto.addEventListener('keydown', () => {
        setTimeout(() => {
          textAsunto.style.height = 'auto';
          textAsunto.style.height = textAsunto.scrollHeight + 'px';
        }, 0);
});
//para comrpimir y expandir textarea GLOSA
const textGlosa = document.querySelector('#glosa');
textGlosa.addEventListener('input', () => {
  textGlosa.style.height = 'auto';
  textGlosa.style.height = textGlosa.scrollHeight + 'px';
});
textGlosa.addEventListener('keydown', () => {
        setTimeout(() => {
          textGlosa.style.height = 'auto';
          textGlosa.style.height = textGlosa.scrollHeight + 'px';
        }, 0);
});
//para comrpimir y expandir textarea DESARROLLO
const textDesarrollo = document.querySelector('#desarrollo');
textDesarrollo.addEventListener('input', () => {
  textDesarrollo.style.height = 'auto';
  textDesarrollo.style.height = textDesarrollo.scrollHeight + 'px';
});
textDesarrollo.addEventListener('keydown', () => {
        setTimeout(() => {
          textDesarrollo.style.height = 'auto';
          textDesarrollo.style.height = textDesarrollo.scrollHeight + 'px';
        }, 0);
});
//ESCRIBE SIMULTANEO EN RECORDATORIO
const input1 = document.querySelector('#recordatorio');
const input2 = document.querySelector('#nombre-input');
input1.addEventListener('input', () => {
  input2.value = input1.value;
});
//ESCRIBE SIMULTANEO EL ID
const input3 = document.querySelector('#numeroServicio');
const input4 = document.querySelector('#id-input');
input3.addEventListener('input', () => {
  input4.value = input3.value;
});
//evita que vuelva a saltar desde nro de atencion con tab
const inputNumAt = document.querySelector('#numeroAtencion');
inputNumAt.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
  }
});
// Ejemplo de uso
let resultado = convertirPrimeraLetraMayus("ejemplo de texto");
console.log(resultado); // "Ejemplo de texto"
// Llamar a la función para cambiar el color de fondo cada 40 segundos
setInterval(cambiarColor, 37000);
//hora en pantalla
mueveReloj()
// Cargar la lista de asuntos al cargar la página
cargarAsuntos();
// Carga la lista de asuntos en el combobox al cargar la página
window.onload = function() {
  // Obtiene el select y la lista de asuntos en localStorage
  var select = document.getElementById("listaAsuntos");
  var asuntos = JSON.parse(localStorage.getItem("asuntos"));
  // Fija el asunto seleccionado en el combobox
  fijaAsunto();
  // Agrega el eveleeLocalLLamadas()ick al botón Set Asunto
  var btnSetAsunto = document.getElementById("btnSetAsunto");
  btnSetAsunto.addEventListener("click", setAsunto);
  // Agrega el evento change al select para mostrar el detalle del asunto seleccionado
  select.addEventListener("change", muestraDetalle);
};
// iniciar()
function iniciar(){
    // document.body.style.transform = "scale(0.9)";
    fechaActual()
    horaActual()
    //validaIngreso()
    obtenerLocalRac()
    //carga llamadas de local
    leeLocalLLamadas()
    //set gestion
    document.getElementById('gestion-input').value="Gestionar"

    let rac=document.getElementById('rac')
    if(!rac){
      rac.focus()
      rac.select()
    } else {
      document.getElementById("usuarioNombres").focus()
      document.getElementById("usuarioNombres").select()
    }
    startTimer() //tmo
    populateTable() //presenta siempre tmo abajo en tabla
}
//AUMENTA TEXT AREA
function autoResize(textarea) {
  textarea.style.height = textarea.scrollHeight + "px";
}
function cambiarColor() {
  // Obtener un número aleatorio entre 0 y la longitud de la lista de colores
  const indice = Math.floor(Math.random() * colores.length);
  // Cambiar el color de fondo del body usando el color correspondiente
  document.body.style.backgroundColor = colores[indice];
}
function mueveReloj(){
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()
  str_segundo = new String (segundo)
  if (str_segundo.length == 1)
  segundo = "0" + segundo
  str_minuto = new String (minuto)
  if (str_minuto.length == 1)
  minuto = "0" + minuto
  str_hora = new String (hora)
  if (str_hora.length == 1)
  hora = "0" + hora
  horaImprimible = hora + " : " + minuto + " : " + segundo
  document.getElementById('hora').value = horaImprimible;
  setTimeout("mueveReloj()",1000)
}
//RETORNA EL RESULTADO DEL PROMEDIO
function promedioTmo(){
    // Obtenemos los datos del Local Storage
    var data = JSON.parse(localStorage.getItem("data"));
    // Si no hay datos en Local Storage, mostramos un mensaje de error
    if (!data || data.length == 0) {
      return "No hay registros en Local Storage.";
    } else {
      // Calculamos la suma total de dif
      var suma = 0;
      for (var i = 0; i < data.length; i++) {
        var dif = data[i].dif.split(":");
        var segundos = parseInt(dif[0]) * 3600 + parseInt(dif[1]) * 60 + parseInt(dif[2]);
        suma += segundos;
      }
      // Calculamos el promedio
      var promedio = suma / data.length;

      // Convertimos el promedio a minutos y segundos
      var minutos = Math.floor(promedio / 60);
      var segundos = Math.round(promedio % 60);
      return "PROMEDIO: " + minutos + ":" + segundos;
    }
}
function showTime() {
  if (inicia && fin) {
      let segundos = Math.floor(dif / 1000);
      let minutos = Math.floor(segundos / 60);
      let horas = Math.floor(minutos / 60);
      segundos %= 60;
      minutos %= 60;
      let tmo=horas+":"+minutos+":"+segundos
      //obtiene numero de llamadas en local
      const myLocalStorageData = JSON.parse(localStorage.getItem("llamadas"));
      //si no hay tiempos en local
      if(myLocalStorageData){
        const objectsCount = myLocalStorageData.length;
        console.log(objectsCount);
        alert("Tiempo Llamada: "+tmo + "\n" + promedioTmo() + "\n" + "Hay " +objectsCount+" LLamadas")
        copyToClipboard(tmo)
        grabaTmo(tmo) 
      } else {
        alert('No hay tiempos en Local Storage')
      }
  } else {
      alert("ERR debe iniciar y terminar el temporizador primero");
  }
}
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
}
//graba en locla tmo
function grabaTmo(tmo) {
  if (inicia && fin) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({
      inicia: inicia,
      fin: fin,
      dif: tmo
    });
    localStorage.setItem("data", JSON.stringify(data));
    populateTable();
  }
}
//llena tabla tmo
function populateTable() {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  let table = document.getElementById("data-table");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = table.insertRow();
    let startTimeCell = row.insertCell();
    let endTimeCell = row.insertCell();
    let differenceCell = row.insertCell();
    startTimeCell.innerHTML = formatTime(new Date(data[i].inicia));
    endTimeCell.innerHTML = formatTime(new Date(data[i].fin));
    differenceCell.innerHTML = data[i].dif;
    // differenceCell.innerHTML = formatTime(new Date(data[i].dif));
  }
  let promedio=promedioTmo()
  let fila=table.insertRow()
  fila.innerHTML=promedio
}
//VALIDA PSW
function validaIngreso(){
    let initCodLab=sessionStorage.getItem('sesCodLab')
    if (initCodLab!=='CodLab'){
        let psw=prompt("Input key")
        if (psw==="Atentonim0"){
            sessionStorage.setItem('sesCodLab','CodLab')
        } else{
            sessionStorage.setItem('sesCodLab','')
            window.close()
        }
    }
}
//OBTIENE RAC DE SESSION
function obtenerLocalRac(){
    let rac=sessionStorage.getItem("rac")
    if(rac!=="null"){
        document.getElementById("rac").value=rac
        document.getElementById("rac").focus()
    } else {
        registraRac()
    }
}
//registra datos rac
function registraRac(){
    // let datosRac=prompt("Ingresa Datos del RAC")
    let datosRac= document.getElementById("rac").value
    if(datosRac){
        //graba en session
        sessionStorage.setItem("rac",datosRac)
        //muestra datos rac
        document.getElementById("rac").value=datosRac
        alert("Se guardaron los datos del Ejecutivo: "+datosRac)
    }
}
// FECHA ACTUAL
function fechaActual(){
    const fechaInput = document.getElementById('fechaInicio');
    // const fechaActual = new Date().toISOString().split('T')[0];
    let fechaNow=fechaAhora()
    fechaInput.value = fechaNow;
}
// HORA ACTUAL
function horaActual(){
    const horaInput = document.getElementById('horaInicio');
    // const horaActua = new Date().toLocaleTimeString('en-US', {hour12: false});
    const horaActual=horaAhora()
    horaInput.value = horaActual;
}
//COPIA AL PORTAPAPELS ?
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
//Convierte aprimera letra mayuscula
function convertirPrimeraLetraMayus(texto) {
  let textoMayus = texto.charAt(0).toUpperCase() + texto.slice(1);
  return textoMayus;
}
// SALUDO CORTESIA
function getSalutation() {
    const salutationInputs = document.getElementsByName('salutation');
    for (let i = 0; i < salutationInputs.length; i++) {
      if (salutationInputs[i].checked) {
        if (salutationInputs[i].value === 'Sr.') {
          console.log('Selected salutation is Sr.');
          copyToClipboard("Sr.")
          return "Sr"
        } else {
          console.log('Selected salutation is Sra.');
          copyToClipboard("Sra.")
          return "Sra."
        }
        break;
      }
    }
}
//sr o sra
function obtieneSaludo(){
    const salutationInputs = document.getElementsByName('salutation');
    for (let i = 0; i < salutationInputs.length; i++) {
      if (salutationInputs[i].checked) {
        if (salutationInputs[i].value === 'Sr.') {
          return "Sr."
        } else {
          return "Sra."
        }
        break;
      }
    }
}
//copia al portapapeles
function copiar(item){
  let nombre = document.getElementById(item);
    nombre.select();
    document.execCommand("copy");
    event.preventDefault(); 
}
//copia ID
function copiaId(){
  let id=document.getElementById('numeroServicio').value
  let idTotal=id+"-00"
  copyToClipboard(idTotal)
}
//borra elemento
function borrar(item){
  let nombre = document.getElementById(item);
  nombre.focus();
  nombre.value = "";
  event.preventDefault();
}
//junta los apellidos
function juntarApellidos(){
    let paterno=document.getElementById("usuarioApellidoPaterno").value;
    let materno=document.getElementById("usuarioApellidoMaterno").value;
    let apelli2=paterno+" "+materno;
    document.getElementById('apellidos').value= apelli2
    event.preventDefault();
}
//junta nombres y apellidos
function juntarNombresApellidos(){
    let nombres=document.getElementById('usuarioNombres').value
    let paterno=document.getElementById("usuarioApellidoPaterno").value;
    let materno=document.getElementById("usuarioApellidoMaterno").value;
    let nombresApellidos=nombres+" "+paterno+" "+materno;
    document.getElementById('apellidos').value= nombresApellidos
    copyToClipboard(nombresApellidos)
    event.preventDefault();
}
//junta direccion
function juntarDireccion(){
    let calle=document.getElementById('calle').value
    let numero=document.getElementById('numero').value
    let depto=document.getElementById('depto').value
    let comuna=document.getElementById('comuna').value
    let direccion=calle+" "+ numero +" "+depto +" "+comuna
    document.getElementById('direccion').value=direccion
}
// juntar referencia
function juntarReferencia(){
    let referencia=document.getElementById('referencia').value
    if (referencia){
      let referenciaTotal="Ref. "+referencia
      copyToClipboard(referenciaTotal)
    }
}
//PEGA TEXTOS EN glosa
function compilaTextos(){
    let saludo=obtieneSaludo()
    event.preventDefault();
    let nombre = document.getElementById('usuarioNombres').value
    let paterno=document.getElementById("usuarioApellidoPaterno").value;
    let materno=document.getElementById("usuarioApellidoMaterno").value;
    let apelli2=paterno+" "+materno;
    let asunto=document.getElementById("asunto").value;
    
    let compila=saludo+" "+ nombre+" "+paterno+" "+materno+" "+ "indica: "+asunto
    document.getElementById("glosa").value=compila
    document.getElementById("glosa").select()
    document.getElementById("glosa").focus()
    copiar('glosa')
}
function juntaContacto(opcion){
  //NUMERO DE SERV
  let id=document.getElementById('numeroServicio').value
  let idTotal=id+"-00"
  //NOMBRE COMPLETO
  let nombres=document.getElementById('usuarioNombres').value
  nombres=convertirPrimeraLetraMayus(nombres)
  let paterno=document.getElementById("usuarioApellidoPaterno").value;
  paterno=convertirPrimeraLetraMayus(paterno)
  let materno=document.getElementById("usuarioApellidoMaterno").value;
  materno=convertirPrimeraLetraMayus(materno)
  let nombresApellidos=nombres+" "+paterno+" "+materno;
  //RUT
  let rut=document.getElementById('rut').value
  //DIRECCION
  let calle=document.getElementById('calle').value.toLowerCase()
  calle=convertirPrimeraLetraMayus(calle).toLowerCase()
  let numero=document.getElementById('numero').value
  let depto=document.getElementById('depto').value
  let comuna=document.getElementById('comuna').value
  //COMUNA
  let refComuna=" "
  comuna=convertirPrimeraLetraMayus(comuna)
  if (comuna){
    refComuna="Comuna:"+comuna+"."
  }
  //REFERENCIA
  let referenciaTotal=""
  let referencia=document.getElementById('referencia').value
  if (referencia){
    referencia=convertirPrimeraLetraMayus(referencia)
    referenciaTotal="Ref. "+referencia +" "+refComuna
  } else {
    referenciaTotal=refComuna
  }
  //ASUNTO
  let asunto=document.getElementById('asunto').value
  asunto=convertirPrimeraLetraMayus(asunto)
  //MAIL
  let refMail=""
  let mail=document.getElementById('mail').value
  if(mail){
    refMailcorreo="Email:"+mail
  }
  // CELULAR
  let refCelular="";
  let celular=document.getElementById('celular').value
  if(celular){
    refCelular="Cel:"+celular
  }

  //SI ES NOMBRE PRIMERO O DESPUES
  let todo=""
  if(opcion===1){
    todo=obtieneSaludo()+" " +nombresApellidos+ " " +refCelular + 
    " "+refMail + " " + referenciaTotal + " "+asunto;
  } else {
    todo=obtieneSaludo()+" " +nombresApellidos+ " " + asunto+" "+refCelular + 
    " "+ refMail + " " + referenciaTotal ;
  }
  document.getElementById('glosa').value=todo;
  copiar('glosa');
  event.preventDefault();
}
// junta todo
function juntaTodo(){
  //VALIDA NO FALE NINYUN DATO
  let noFaltan=noFaltanDatos()
  if(noFaltan===false){
    // alert('siguen faltando datos')
    // return
  }
  //NUMERO DE SERV
  let id=document.getElementById('numeroServicio').value
  let idTotal=id+"-00"
  //NOMBRE COMPLETO
  let nombres=document.getElementById('usuarioNombres').value
  nombres=convertirPrimeraLetraMayus(nombres)
  let paterno=document.getElementById("usuarioApellidoPaterno").value;
  paterno=convertirPrimeraLetraMayus(paterno)
  let materno=document.getElementById("usuarioApellidoMaterno").value;
  materno=convertirPrimeraLetraMayus(materno)
  let nombresApellidos=nombres+" "+paterno+" "+materno;
  //RUT
  let rut=document.getElementById('rut').value
  //CELULAR
  let celular=document.getElementById('celular').value
  //CORREO
  let correo=document.getElementById('mail').value
  //DIRECCION
  let calle=document.getElementById('calle').value.toLowerCase()
  calle=convertirPrimeraLetraMayus(calle).toLowerCase()
  let numero=document.getElementById('numero').value
  let depto=document.getElementById('depto').value
  let comuna=document.getElementById('comuna').value
  comuna=convertirPrimeraLetraMayus(comuna)
  //REFERENCIA
  let referenciaTotal=""
  let referencia=document.getElementById('referencia').value
  if (referencia){
    referencia=convertirPrimeraLetraMayus(referencia)
    referenciaTotal="Ref. "+referencia
  } 
  //ASUNTO
  let asunto=document.getElementById('asunto').value
  asunto=convertirPrimeraLetraMayus(asunto)
  //SINTESIS
  let idOk="Id."+ idTotal
  let rutOk="Rut."+rut 
  let celOk="Celular."+celular
  let mailOk="Email."+correo 
  let refOk="Ref."+referencia
  let comunaOk="Comuna."+comuna
  if(!celular){celOk=""}
  if(!rut){rutOk=""}
  if(!referencia){refOk=""}
  if(!comuna){comunaOk=""}
  //TODO
  let todo=idOk+"\n"+obtieneSaludo()+" " +nombresApellidos+
  "\n"+rutOk+ "\n" + celOk + "\n"+ mailOk+"\n"
  + comunaOk + "\n" + refOk +"\n" +asunto;
  document.getElementById('glosa').value=todo
  copiar('glosa')
  event.preventDefault();
}
//traspasa asunto a desarrollo
function traspasaAsunto(){
  let asunto=document.getElementById('asunto').value
  let desarrollo=document.getElementById('desarrollo').value
  let tot=desarrollo+"\n"+asunto
  document.getElementById('desarrollo').value=tot
}
//traspasa desarrollo a glosa
function traspasaGlosa(){
  let glosa=document.getElementById('glosa').value
  let desarrollo=document.getElementById('desarrollo').value
  let tot=desarrollo+"\n"+glosa
  document.getElementById('desarrollo').value=tot
}
//junta todo lineal
function juntaTodoLineal(){
    //VALIDA NO FALE NINYUN DATO
    let noFaltan=noFaltanDatos()
    // if(noFaltan===false){
    //   alert('siguen faltando datos')
    //   return
    // }
    //NUMERO DE SERV
    let id=document.getElementById('numeroServicio').value
    let idTotal=id+"-00"
    //NOMBRE COMPLETO
    let nombres=document.getElementById('usuarioNombres').value
    nombres=convertirPrimeraLetraMayus(nombres)
    let paterno=document.getElementById("usuarioApellidoPaterno").value;
    paterno=convertirPrimeraLetraMayus(paterno)
    let materno=document.getElementById("usuarioApellidoMaterno").value;
    materno=convertirPrimeraLetraMayus(materno)
    let nombresApellidos=nombres+" "+paterno+" "+materno;
    //RUT
    let rut=document.getElementById('rut').value
    if(rut){
      rut=" Rut. "+rut 
    }
    //CELULAR
    let celular=document.getElementById('celular').value
    if(celular){
      celular=" Cel. "+celular 
    }
    //CORREO
    let correo=document.getElementById('mail').value
    if(correo){
      correo=" Mail. "+correo
    }
    //DIRECCION
    let calle=document.getElementById('calle').value
    calle=convertirPrimeraLetraMayus(calle)
    let numero=document.getElementById('numero').value
    let depto=document.getElementById('depto').value
    let comuna=document.getElementById('comuna').value.toLowerCase()
    // comuna=minusculas('comuna')
    comuna=convertirPrimeraLetraMayus(comuna)
    let direccion=calle+" "+ numero +" "+depto +" "+comuna
    //REFERENCIA
    let referenciaTotal=""
    let referencia=document.getElementById('referencia').value
    referencia=convertirPrimeraLetraMayus(referencia)
    if (referencia){
      referenciaTotal=" Ref. "+referencia +","+comuna
    }
    //ASUNTO
    let asunto=document.getElementById('asunto').value
    asunto=convertirPrimeraLetraMayus(asunto)
    //TODO
    // let todoLineal="Id. "+ idTotal+"  "+obtieneSaludo()+" " +nombresApellidos+ " Indica: " + asunto +"\n"+
    let todoLineal=obtieneSaludo()+" " +nombresApellidos + celular + correo + " Indica: "+"\n" 
    + asunto +" "+ referenciaTotal +"\n"
    // + rut //+ " Id. "+ idTotal  
    document.getElementById('glosa').value=todoLineal
    copiar('glosa')
    event.preventDefault();
}
// valida rut
function validarRut(rut) {
    rut = rut.replace(/[^\dk]/gi, ''); // Limpiar el RUT de cualquier carácter que no sea un dígito o la letra "k"
    if (rut.length < 2) return false; // Verificar que el RUT tenga al menos 2 caracteres (1 dígito y 1 verificador)
    const factor = [3, 2, 7, 6, 5, 4, 3, 2]; // Factor de multiplicación para cada dígito del RUT
    let suma = 0;
    let verif = rut.substr(-1).toUpperCase(); // Obtener el último carácter del RUT como el verificador
    let rutSinVerif = rut.substr(0, rut.length - 1); // Obtener el RUT sin el verificador
    for (let i = rutSinVerif.length - 1, j = 0; i >= 0; i--, j++) {
      suma += rutSinVerif.charAt(i) * factor[j % factor.length]; // Multiplicar cada dígito del RUT por el factor correspondiente y sumar los resultados
    }
    let resto = suma % 11; // Calcular el resto de la suma dividida por 11
    let digitoVerifCalculado = resto === 0 ? "0" : resto === 1 ? "K" : (11 - resto).toString(); // Calcular el dígito verificador correspondiente
    return digitoVerifCalculado === verif; // Comparar el dígito verificador calculado con el dígito verificador original del RUT y devolver el resultado de la validación (true o false)
}
function validaYaExiste(){
    const idActual=document.getElementById('numeroServicio').value
		const llamadas = JSON.parse(localStorage.getItem("llamadas"));
		// Buscar el campo "numeroServicio" en cada elemento de la lista
		if (llamadas) {
			for (let i = 0; i < llamadas.length; i++) {
				const llamada = llamadas[i];
				if (llamada.numeroServicio===idActual) {
					return true
				}
			}
      return false
		}
}
//GRABA LLAMADA EN LOCAL Y COMO ARCHIVO JSON
function grabaLocal(opcion){
    let yaExisteId=validaYaExiste()
    if(yaExisteId){
      alert('ya se ingreso este ID..renovar ID')
      return
    }
    let rac =document.getElementById("rac").value                  
    let fechaInicio=document.getElementById("fechaInicio").value                     
    let horaInicio=document.getElementById("horaInicio").value             
    let usuarioNombres=document.getElementById("usuarioNombres").value   
    let usuarioApellidoPaterno=document.getElementById("usuarioApellidoPaterno").value
    let usuarioApellidoMaterno=document.getElementById("usuarioApellidoMaterno").value
    let numeroServicio=document.getElementById("numeroServicio").value        
    let digitoVerificador=document.getElementById("digitoVerificador").value    
    let asunto=document.getElementById("asunto").value                
    let glosa=document.getElementById("glosa").value                 
    let rut=document.getElementById("rut").value                  
    let celular=document.getElementById("celular").value               
    let mail=document.getElementById("mail").value                
    let direccion=document.getElementById("direccion").value
    let calle=document.getElementById('calle').value
    let numeroDireccion=document.getElementById('numero').value
    let depto=document.getElementById('depto').value
    let comuna=document.getElementById('comuna').value
    let referencia=document.getElementById("referencia").value          
    let desarrollo=document.getElementById("desarrollo").value           
    let recordatorio=document.getElementById("recordatorio").value          
    let numeroAtencion=document.getElementById("numeroAtencion").value        
    // let numeroAviso=document.getElementById("numeroAviso").value
    // let numeroOrden=document.getElementById("numeroOrden").value
    //VALIDACION
    if(!rac){
      alert("Faltan datos Rac")
      document.getElementById("rac").focus()
      return false
    }
    //TMO
    stopTimer()
    showTime()
    let preguntaValidar=false
    let vale=true
    if (preguntaValidar){
        vale=validacionGraba()
    } 
    //VALIDA INGRESO DE DATOS EN FORM "no mover fx de aki"
    function validacionGraba(){
      if(!usuarioNombres){
        alert("Faltan Nombres del Usuario")
        document.getElementById("usuarioNombres").focus()  
        return false
      }
      if(!usuarioApellidoPaterno){
        alert("Falta Apellido Paterno del Usuario")
        document.getElementById("usuarioApellidoPaterno").focus()  
        return false
      }
      if(!usuarioApellidoMaterno){
        alert("Falta Apellido Materno del Usuario")
        document.getElementById("usuarioApellidoMaterno").focus()  
        return false
      }
      if(!numeroServicio){
        alert("Falta Numero de Servicio")
        document.getElementById("numeroServicio").focus()  
        return false
      }
      if(!rut){
        alert("Falta el Rut")
        document.getElementById('rut').focus()  
        return false
      }
      if(!celular){
        alert("Falta el Celular")
        document.getElementById('celular').focus()  
        return false
      }
      if(!mail){
        alert("Falta el Mail")
        document.getElementById('mail').focus()  
        return false
      }
      if(!comuna){
        alert("Falta la comuna")
        document.getElementById('comuna').focus()  
        return false
      }
      if(!glosa){
        alert("Falta la glosa")
        document.getElementById("glosa").focus()  
        return false
      }
      return true
    }
    if (vale){
      let horaFinal =horaAhora()  
      let indiceLlamada=indiceAhora()
      const llamada = {
          idNow:indiceLlamada, 
          // idLlamada:idLlamada,  //unico incrementeble administrable en lectura escritura de archivo json
          rac:rac,
          fechaInicio:fechaInicio,      
          horaInicio:horaInicio,             
          horaFinal:horaFinal,                                                                         
          usuarioNombres:usuarioNombres,                             
          UsuarioApellidoPaterno:usuarioApellidoPaterno,          
          UsuarioApellidoMaterno:usuarioApellidoMaterno,
          rut:rut,                         
          celular:celular,                 
          mail:mail,                    
          direccion:direccion,
          calle:calle,
          numeroDireccion:numeroDireccion,
          depto:depto,
          comuna:comuna,
          referencia:referencia,
          numeroServicio:numeroServicio,              
          digitoVerificador:digitoVerificador,         
          asunto:asunto,                    
          desarrollo:desarrollo,  
          glosa:glosa,
          recordatorio:recordatorio,                   
          numeroAtencion:numeroAtencion,              
          // numeroAviso:numeroAviso,
          // numeroOrden:numeroOrden,
      }
      const llamadaJSON = JSON.stringify(llamada);
      //GRABA EN LOCAL STORAGE
      let llamadas=localStorage.getItem('llamadas') //si hay en local
      if(llamadas!==null){
          let llamadasOk=JSON.parse(llamadas)
          llamadasOk.push(llamada)
          let listaJson=JSON.stringify(llamadasOk)
          localStorage.setItem('llamadas',listaJson)
      }else{ //si es cero graba el primero obj en la lista
          let lista=[];
          lista.push(llamada) //guarda objeto en lista
          const listaLLamada=JSON.stringify(lista)
          localStorage.setItem('llamadas',listaLLamada)
      }
      if(opcion==='local'){
        // alert('se grabo en Local Storage')
        console.log('se grabo en Local Storage');
      }
      if(opcion==='localYJson'){
        // GUARDA EL ARCHIVO JSON
        const blob = new Blob([llamadaJSON], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const enlace = document.createElement("a");
        enlace.href = url;
        enlace.download = "llamada"+indiceLlamada+".json";
        enlace.click();
      }
      leeLocalLLamadas()
    }
}
//EDITANDO LA LLAMADA EN PANTALLA EN LOCAL SOLO GRABA ASUNTO Y DESARROLLO
function guardarCambios() {
  // debugger
  let llamadas = JSON.parse(localStorage.getItem('llamadas')) || [];
  // Obtener los valores actualizados de la página
  let numeroServicio = document.getElementById('numeroServicio').value;
  let asunto = document.getElementById('asunto').value;
  let desarrollo = document.getElementById('desarrollo').value;
  // Obtener la llamada correspondiente en el arreglo
  let horaInicio = document.getElementById('horaInicio').value;
  let llamada = llamadas.find(function(l) {
    return l.horaInicio === horaInicio;
  });
  // Actualizar los valores en la llamada
  llamada.numeroServicio = numeroServicio;
  llamada.asunto = asunto;
  llamada.desarrollo = desarrollo;
  // Guardar los cambios en el almacenamiento local
  localStorage.setItem('llamadas', JSON.stringify(llamadas));
  // Mostrar un mensaje de éxito
  alert('Los cambios han sido guardados');
}
//borra local
function borraLocal(){
  let borra=confirm("Esta seguro de eliminar las llamadas de Local")
  if(borra){
    localStorage.removeItem('llamadas');
    localStorage.removeItem('data'); //tmo
  }
}
//GRABA EN ARCHIVO JSON TODAS LAS LLAMADAS
function grabaLLamadas(){
    const fecha = new Date();
    const anio = fecha.getFullYear().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    const nombreArchivo = `${dia}${mes}${anio}${hora}${minutos}${segundos}llamadas`;
    let llamadas=localStorageToJson("llamadas") 
    downloadObjectAsJson(llamadas,nombreArchivo)
    alert('Tadas las llamadas grabadas '+nombreArchivo +'Json')
}
//lee local storage y lo pasa a json
function localStorageToJson(localStorageKey) {
    const localStorageData = localStorage.getItem(localStorageKey);
    let jsonData = null;
    try {
      jsonData = JSON.parse(localStorageData);
    } catch (e) {
      console.error('Error al analizar los datos del local storage', e);
    }
    return jsonData;
}
// baja a archivo json
function downloadObjectAsJson(exportObj, exportName){
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
//busca json
function loadJSON(url, callback) {   
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true); 
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send(null);
}
//a mayusculas nombres
function mayusculasNombres() {
        let texto=document.getElementById('usuarioNombres')
        texto.value = texto.value.toUpperCase();
    }
//minusculas nombres
function minusculasNombres() {
    let texto = document.getElementById('usuarioNombres');
    let txt = document.getElementById('usuarioNombres').value;
    let txtMin=txt.toLowerCase()
    let txtMinOk=capitalizeFirstLetter(txtMin)
    texto.value=txtMinOk
}
//pay pat
function mayusculasPaterno() {
    let texto=document.getElementById('usuarioApellidoPaterno')
    texto.value = texto.value.toUpperCase();
}
// min pat
function minusculasPaterno() {
let texto = document.getElementById('usuarioApellidoPaterno');
let txt = texto.value;
let txtMin=txt.toLowerCase()
let txtMinOk=capitalizeFirstLetter(txtMin)
texto.value=txtMinOk
}
// may mat
function mayusculasMaterno() {
    let texto=document.getElementById('usuarioApellidoMaterno')
    texto.value = texto.value.toUpperCase();
}
// min corr
function minusculasCorreo() {
  let texto = document.getElementById('mail');
  let txt = document.getElementById('mail').value;
  let txtMin=txt.toLowerCase()
  texto.value=txtMin
}
// may todo
function mayusculasTodo(){
  mayusculasNombres()
  mayusculasMaterno()
  mayusculasPaterno()
  juntarApellidos()
  let text=document.getElementById('apellidos').value
  copiar('apellidos')
}
// minusculas pat
function minusculasMaterno() {
let texto = document.getElementById('usuarioApellidoMaterno');
let txt = texto.value;
let txtMin=txt.toLowerCase()
let txtMinOk=capitalizeFirstLetter(txtMin)
texto.value=txtMinOk
}
// may id
function mayusculas(id) {
    let texto=document.getElementById(id)
    texto.value = texto.value.toUpperCase();
}
//A minusculas 
function minusculas(id) {
let texto = document.getElementById(id);
let txt = texto.value;
let txtMin=txt.toLowerCase()
let txtMinOk=capitalizeFirstLetter(txtMin)
texto.value=txtMinOk
}
//recarga la pagina
function recargarPagina() {
    location.reload();
}
//TRANSFORMA A MAYUSCULAS
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
//PRESENTA TODOS LOS DATOS no se esta ocupando
//LEE DE LOCAL STORAGE Y LO DESPLIECGA COMO TABLA ABAJO
function leeLocalLLamadasTodas(){
    // let respuesta=confirm("al mostrar se borraran datos actuales '\n' de la llamada en curso")
    // if(!respuesta){
    //   return
    // } 
    let total=0
    // Obtenemos los datos de Local Storage
    const storedData = localStorage.getItem('llamadas');
    // debugger
    if (storedData==='undefined'){
        alert('Sin llamadas en Local')
        return
    }
    // Comprobamos si hay datos almacenados
    if (storedData) {
        // Parseamos los datos a un objeto JavaScript
      const parsedData = JSON.parse(storedData);
      // Si los datos son una lista de objetos, podemos iterar sobre ella
      if (Array.isArray(parsedData)) {
        //VALIDA QUE LA TABLA NO EXISTA
        let sitabla=document.getElementById('tablaLLamadas')
        // Obtener la tabla por su id
        // Si la tabla existe, borrarla
        if (sitabla) {
          sitabla.remove();
        }
        // DESPLIEGA TABLA AL FINAL
        let list=parsedData;
        let table = document.createElement('table');      
        let fila = document.createElement('tr');
        // TITULO INDICE
        let celda=document.createElement('th')
        let celdaText=document.createTextNode("Indice");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO RAC
        celda=document.createElement('th')
        celdaText=document.createTextNode("Rac");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO FECHA
        celda=document.createElement('th')
        celdaText=document.createTextNode("Fecha");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO HORA INICIAL
        celda=document.createElement('th')
        celdaText=document.createTextNode("HoraI");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO HORA FINAL
        celda=document.createElement('th')
        celdaText=document.createTextNode("HoraF");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO NOMBRE
        celda=document.createElement('th')
        celdaText=document.createTextNode("Nombre");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO APELLIDO  PATERNO
        celda=document.createElement('th')
        celdaText=document.createTextNode("Apellido Paterno");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO APELLIDO MATERNO
        celda=document.createElement('th')
        celdaText=document.createTextNode("Apellido Materno");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO RUT
        celda=document.createElement('th')
        celdaText=document.createTextNode("Rut");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO CELULAR
        celda=document.createElement('th')
        celdaText=document.createTextNode("Celular");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO MAIL
        celda=document.createElement('th')
        celdaText=document.createTextNode("Mail");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO REF
        celda=document.createElement('th')
        celdaText=document.createTextNode("Referencia");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO DIRECCION
        celda=document.createElement('th')
        celdaText=document.createTextNode("Direccion");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO NRO DIRECCION
        celda=document.createElement('th')
        celdaText=document.createTextNode("Nro");
        celda.appendChild(celdaText);
        fila.appendChild(celda); 
        // TITULO NRO DE ATENCION
        celda=document.createElement('th')
        celdaText=document.createTextNode("Depto");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO COMUNA
        celda=document.createElement('th')
        celdaText=document.createTextNode("Comuna");
        celda.appendChild(celdaText);
        fila.appendChild(celda); 
        // TITULO REFERENCIA
        celda=document.createElement('th')
        celdaText=document.createTextNode("Referencia");
        celda.appendChild(celdaText);
        fila.appendChild(celda); 
        // TITULO NRO DE SERV
        celda=document.createElement('th')
        celdaText=document.createTextNode("Nro Servicio");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
        // TITULO DIG VER
        celda=document.createElement('th')
        celdaText=document.createTextNode("D.V");
        celda.appendChild(celdaText);
        fila.appendChild(celda);
         // TITULO ASUNTO
         celda=document.createElement('th')
         celdaText=document.createTextNode("Asunto");
         celda.appendChild(celdaText);
         fila.appendChild(celda);
         // TITULO DESARROLLO
         celda=document.createElement('th')
         celdaText=document.createTextNode("Desarrollo");
         celda.appendChild(celdaText);
         fila.appendChild(celda);
         // TITULO GLOSA
         celda=document.createElement('th')
         celdaText=document.createTextNode("Glosa");
         celda.appendChild(celdaText);
         fila.appendChild(celda); 
        //cierra tabla
        table.appendChild(fila);
        //atributo id table
        table.setAttribute("id", "tablaLLamadas");
        total=list.length
        for (let i=0; i<list.length; i++) {
            let row = document.createElement('tr');
            for (let key in list[i]) {
                let cell = document.createElement('td');
                let cellText = document.createTextNode(list[i][key]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        table.appendChild(row);
        }
        // Add the table to the page
        document.body.appendChild(table);
      }
      // debugger
      let mensaje="lectura Local Ok. Son: "+ total + " Registros"
      alert(mensaje)
    } else {
      alert("Sin llamadas en Local")
      console.log('Sin llamadas en Local');
    }
}
//PRESENTA LO BASICO no se ocupa 
 function leeLocalLLamadasGD(){
   let total=0
   // Obtenemos los datos de Local Storage
   const storedData = localStorage.getItem('llamadas');
   // debugger
   if (storedData==='undefined'){
       alert('Sin llamadas en Local')
       return
   }
   // Comprobamos si hay datos almacenados
   if (storedData) {
       // Parseamos los datos a un objeto JavaScript
     const parsedData = JSON.parse(storedData);
     // Si los datos son una lista de objetos, podemos iterar sobre ella
     if (Array.isArray(parsedData)) {
       //VALIDA QUE LA TABLA NO EXISTA
       let sitabla=document.getElementById('tablaLLamadas')
       // Obtener la tabla por su id
       // Verificar si la tabla existe
       // Si la tabla existe, borrarla
       if (sitabla) {
         sitabla.remove();
       }
       // DESPLIEGA TABLA AL FINAL
       let list=parsedData;
       let table = document.createElement('table')
       let fila = document.createElement('tr');
      //  // TITULO HORA INICIAL
      //  celda=document.createElement('th')
      //  celdaText=document.createTextNode("HoraI");
      //  celda.appendChild(celdaText);
      //  fila.appendChild(celda);
      //  // TITULO HORA FINAL
      //  celda=document.createElement('th')
      //  celdaText=document.createTextNode("HoraF");
      //  celda.appendChild(celdaText);
      //  fila.appendChild(celda);
       // TITULO NRO DE SERV
       celda=document.createElement('th')
       celdaText=document.createTextNode("Nro Servicio");
       celda.appendChild(celdaText);
       fila.appendChild(celda);
      //  // TITULO DIG VER
      //  celda=document.createElement('th')
      //  celdaText=document.createTextNode("D.V");
      //  celda.appendChild(celdaText);
      //  fila.appendChild(celda);
       // TITULO GLOSA
       celda=document.createElement('th')
       celdaText=document.createTextNode("Glosa");
       celda.appendChild(celdaText);
       celda.style.width = "30% !mportant"
       fila.appendChild(celda); 
        // TITULO DESARROLLO
        celda=document.createElement('th')
        celdaText=document.createTextNode("Desarrollo");
        celda.appendChild(celdaText);
        celda.style.width = "10% !important"
        fila.appendChild(celda);
       //cierra tabla
       table.appendChild(fila);
       //atributo id table
       table.setAttribute("id", "tablaLLamadas");
       total=list.length
       let row,cell,cellText
      //  LLENA EL CONTENIDO
       for(let i=0;i<list.length;i++){
         let row = document.createElement('tr');
                 // HORA INICIO
                //  cell = document.createElement('td');
                //  cellText = document.createTextNode(list[i].horaInicio);
                //  cell.appendChild(cellText);
                //  row.appendChild(cell);
                //  // HORA FIN
                //  cell = document.createElement('td');
                //  cellText = document.createTextNode(list[i].horaFinal);
                //  cell.appendChild(cellText);
                //  row.appendChild(cell);
                 // numeroServicio
                 cell = document.createElement('td');
                 cellText = document.createTextNode(list[i].numeroServicio);
                 cell.appendChild(cellText);
                 row.appendChild(cell);
                //  // digitoVerificador
                //  cell = document.createElement('td');
                //  cellText = document.createTextNode(list[i].digitoVerificador);
                //  cell.appendChild(cellText);
                //  row.appendChild(cell);
                 //GLOSA
                 cell = document.createElement('td');
                 cellText = document.createTextNode(list[i].glosa);
                 cell.appendChild(cellText);
                 row.appendChild(cell);
                 //desarrollo
                 cell = document.createElement('td');
                 cellText = document.createTextNode(list[i].desarrollo);
                 cell.appendChild(cellText);
                 row.appendChild(cell);
                 table.appendChild(row);
         }
       document.body.appendChild(table);
     }
     let mensaje="lectura Local Ok. Son: "+ total + " Registros"
     alert(mensaje)
   } else {
     alert("Sin llamadas en Local")
     console.log('Sin llamadas en Local');
   }
 }
function leeLocalLLamadas(){
  let total=0
  // Obtenemos los datos de Local Storage
  const storedData = localStorage.getItem('llamadas');
  // debugger
  if (storedData === 'undefined'){
    alert('Sin llamadas en Local')
    return
  }
  // Comprobamos si hay datos almacenados
  if (storedData) {
    // Parseamos los datos a un objeto JavaScript
    const parsedData = JSON.parse(storedData);
    // Si los datos son una lista de objetos, podemos iterar sobre ella
    if (Array.isArray(parsedData)) {
      //VALIDA QUE LA TABLA NO EXISTA
      let sitabla = document.getElementById('tablaLLamadas');
      // Obtener la tabla por su id
      // Verificar si la tabla existe
      // Si la tabla existe, borrarla
      if (sitabla) {
        sitabla.remove();
      }
      // DESPLIEGA TABLA AL FINAL
      let list = parsedData;
      let table = document.createElement('table');
      let fila = document.createElement('tr');
      // TITULO HORA INICIAL
      celda = document.createElement('th');
      celdaText = document.createTextNode("HoraI");
      celda.appendChild(celdaText);
      // celda.style.width = "10% !important";
      fila.appendChild(celda);
      // TITULO NRO DE SERV
      celda = document.createElement('th');
      celdaText = document.createTextNode("Nro Servicio");
      celda.setAttribute("id","columnaNumSer")
      celda.appendChild(celdaText);
      // celda.style.width = "10vw !important";
      fila.appendChild(celda);
      // celda.style.width = "10vw !important";
      // TITULO GLOSA
      celda = document.createElement('th');
      celdaText = document.createTextNode("Glosa");
      celda.appendChild(celdaText);
      // celda.style.width = "30%";
      fila.appendChild(celda); 
      //cierra tabla
      table.appendChild(fila);
      //atributo id table
      table.setAttribute("id", "tablaLLamadas");
      // table.style.width = "40vw";
      // table.style.maxWidth = "300px";
      total = list.length;
      let row, cell, cellText;
      for(let i = 0; i < list.length; i++){
        row = document.createElement('tr');
        // HORA INICIO
        cell = document.createElement('td');
        cellText = document.createTextNode(list[i].horaInicio + '-' + list[i].horaFinal);
        cell.appendChild(cellText);
        cell.style.width = "10%";
        row.appendChild(cell);
        // numeroServicio
        cell = document.createElement('td');
        cellText = document.createTextNode(list[i].numeroServicio);
        cell.appendChild(cellText);
        cell.style.width = "10%";
        row.appendChild(cell);
        //GLOSA
        cell = document.createElement('td');
        cellText = document.createTextNode(list[i].glosa);
        cell.appendChild(cellText);
        cell.style.width = "30%";
        row.appendChild(cell);
        table.appendChild(row);
      }
      document.body.appendChild(table);
    }
    // let numeroServ=document.querySelector("#tablaLLamadas > tr:nth-child(1) > th:nth-child(2)")
    // numeroServ.style.width="5vw !important";
    // let anchoCol=document.querySelector("#tablaLLamadas > tr:nth-child(4) > td:nth-child(2)")
    // anchoCol.style.width="10vw !important"
    let mensaje = "Lectura Local Ok. Son: " + total + " Registros";
    alert(mensaje);
  } else {
    alert("Sin llamadas en Local");
    console.log('Sin llamadas en Local');
  }
}
//GUARDA LAS LLAMADAS DESDE LOCAL STORAGE EN UN ARCHVO JSON
function guardaLLamadas(){
    var listaLLamadas = JSON.parse(localStorage.getItem("llamadas")) || [];
        // Crear un objeto Blob con el contenido de la lista de personas en formato JSON
        var blob = new Blob([JSON.stringify(listaLLamadas)], { type: "application/json" });
        // Crear una URL para descargar el archivo
        var url = URL.createObjectURL(blob);
        // Crear un enlace para descargar el archivo
        var enlace = document.createElement("a");
        enlace.href = url;
        enlace.download = "llamadas.json";
        enlace.style.display = "none";
        document.body.appendChild(enlace);
        // Hacer clic en el enlace para descargar el archivo
        enlace.click();
        // Eliminar el enlace y la URL creados
        document.body.removeChild(enlace);
        URL.revokeObjectURL(url);
        alert('Grabadas la llamadas.json')
}
// NO BORRAR ES DE FILEINPUT
// //CARGAR DESDE JSON A LA PAGINA
// let fileInput = document.getElementById("file-input");
//     fileInput.addEventListener("change", function(e) {
//     let file = e.target.files[0];
//     let reader = new FileReader();
//     reader.onload = function(e) {
//         let data = JSON.parse(e.target.result);
//         // console.log(data);
//         document.getElementById("rac").value=data.rac 
//         document.getElementById("fechaInicio").value=data.fechaInicio                    
//         document.getElementById("horaInicio").value=data.horaInicio            
//         document.getElementById("usuarioNombres").value=data.usuarioNombres  
//         document.getElementById("usuarioApellidoPaterno").value=data.UsuarioApellidoPaterno
//         document.getElementById("usuarioApellidoMaterno").value=data.UsuarioApellidoMaterno
//         document.getElementById("numeroServicio").value=data.numeroServicio        
//         document.getElementById("digitoVerificador").value=data.digitoVerificador
//         document.getElementById("asunto").value=data.asunto                
//         document.getElementById("glosa").value=data.glosa               
//         document.getElementById("rut").value=data.rut     
//         document.getElementById("celular").value=data.celular               
//         document.getElementById("mail").value=data.mail              
//         document.getElementById("direccion").value=data.direccion
//         document.getElementById("referencia").value=data.referencia          
//         document.getElementById("desarrollo").value=data.desarrollo           
//         document.getElementById("recordatorio").value=data.recordatorio          
//         document.getElementById("numeroAtencion").value=data.numeroAtencion        
//         document.getElementById("numeroAviso").value=data.numeroAviso
//         document.getElementById("numeroOrden").value=data.numeroOrden
//       }
//       reader.readAsText(file);
// });
//COMPRIME Y EXPANDE SE
function toggleSection(id) {
    let seccion = document.getElementById(id);
    if (seccion.style.display === "none") {
      seccion.style.display = "block";
    } else {
      seccion.style.display = "none";
    }
}
let buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
  button.addEventListener("keydown", function(event) {
    if (event.keyCode === 9 && !button.getAttribute("tabindex")) {
      event.preventDefault();
    }
  });
  button.setAttribute("tabindex", "-1");
});
// Función que se ejecutará con el timer
function funcionConTimer() {
    // console.log("Esta función se está ejecutando con un timer");
}

function agregarRecordatorio(event) {
    event.preventDefault();
    let nombreInput=document.getElementById("nombre-input")
    let gestionInput=document.getElementById("gestion-input")
    let nombre = nombreInput.value;
    let gestion = gestionInput.value;
    if(!gestion){
      gestionInput.value='getsionar'
    }
    // VALIDA
    let idInput=document.getElementById('numeroServicio')
    let id = idInput.value;
    if(id==='' || nombre==='' || gestion===''){
        if(id===""){
            id=prompt("Ingrese el ID es necesario")
            if(!id){
              return
            }
        }
        if(nombre===""){
          nombre=prompt("Ingrese el recordatorio")
          if(!nombre){return}
        }
        if(!gestion){
          gestion ='Gestion';
        }
    }
    const recordatorio = { nombre, gestion, id };
    recordatorios.push(recordatorio);
    localStorage.setItem('recordatorios', JSON.stringify(recordatorios));
    tabla.innerHTML += `
      <tr>
        <td>${nombre}</td>
        <td>${gestion}</td>
        <td>${id}</td>
        <td><button class="grabar-btn">Grabar</button></td>
      </tr>
    `;
    formularioR.reset();
    document.getElementById('recordatorio').value=''
    alert('recordatorio guardado' +'\n'+ id +' ' +nombre+' '+gestion)
}
  // Función para actualizar un recordatorio en la lista y el LocalStorage
function actualizarRecordatorio(event) {
    const fila = event.target.closest('tr');
    const inputs = fila.querySelectorAll('td input');
    const nombre = inputs[0].value;
    const gestion = inputs[1].value;
    const id = inputs[2].value;
    const recordatorio = { nombre, gestion, id };
    const index = recordatorios.findIndex(r => r.id === id);
    recordatorios.splice(index, 1, recordatorio);
    localStorage.setItem('recordatorios', JSON.stringify(recordatorios));
    alert('Recordatorio actualizado correctamente');
}
// Agregar los recordatorios existentes a la tabla
recordatorios.forEach(r => {
  tabla.innerHTML += `
    <tr>
      <td><input type="text" value="${r.nombre}"></td>
      <td><input type="text" value="${r.gestion}"></td>
      <td><input type="text" value="${r.id}"></td>
      <td><button class="grabar-btn">Grabar</button></td>
    </tr>
  `;
});
// Asignar un listener de eventos a cada botón de "grabar" en la tabla
const grabarBtns = document.querySelectorAll('.grabar-btn');
grabarBtns.forEach(btn => {
  btn.addEventListener('click', actualizarRecordatorio);
});
// Asignar un listener de eventos al formulario para agregar nuevos recordatorios
formularioR.addEventListener('submit', agregarRecordatorio);
// PARA GUARDAR LOS DATOS EN JSON
const guardarBtn = document.getElementById('guardar-btn');
function descargarDatos() {
  const datos = JSON.stringify(recordatorios);
  const blob = new Blob([datos], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'recordatorios.json';
  link.click();
}
guardarBtn.addEventListener('click', descargarDatos);
//PARA RECUPERAR
// Obtener una referencia al botón de "Recuperar desde JSON"
const recuperarBtn = document.getElementById('recuperar-btn');
// Agregar un listener de eventos para el botón de "Recuperar desde JSON"
recuperarBtn.addEventListener('click', handleFileSelect);
// Función para manejar el evento de selección de archivo
function handleFileSelect(event) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = (event) => {
      const datos = JSON.parse(event.target.result);
      localStorage.setItem('recordatorios', JSON.stringify(datos));
      actualizarTabla();
    };
  });
  input.click();
}
// Función para actualizar la tabla con los recordatorios de LocalStorage
function actualizarTabla() {
    const recordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];
    tabla.innerHTML = '';
    recordatorios.forEach(r => {
      tabla.innerHTML += `
        <tr>
          <td><input type="text" value="${r.gestion}"></td>
          <td><input type="text" value="${r.nombre}"></td>
          <td><input type="text" value="${r.id}"></td>
          <td><button class="grabar-btn">Grabar</button></td>
        </tr>
      `;
    });
    const grabarBtns = document.querySelectorAll('.grabar-btn');
    grabarBtns.forEach(btn => {
      btn.addEventListener('click', actualizarRecordatorio);
    });
}
function eliminarRecordatorios() {
    // ELIMINA DE LOCAL
    localStorage.removeItem('recordatorios');
    // ELIMINA DE L ATABLA
    let table=document.getElementById('recordatorios-table')
    // Obtener todas las filas de la tabla
    let rows = table.getElementsByTagName("tr");
    // Eliminar cada fila de la tabla
    for (let i = rows.length - 1; i >= 0; i--) {
      let row = rows[i];
      row.parentNode.removeChild(row);
    }
    alert('Se eliminaron todos los recordatorios')
}
//TRAE ID ACTUAL PARA RECORDATORIO
function idParaRecordatorio() {
    // Obtenemos el valor del campo1
    let valorCampo1 = document.getElementById("numeroServicio").value;
    if (valorCampo1){
        // Asignamos el valor del campo1 al campo2
        document.getElementById("id-input").value = valorCampo1;
    }
}
//PARA ENCONTRAR ID 
function buscar() {
    const numeroServicio = document.getElementById("numeroServicio").value;
    const llamadas = JSON.parse(localStorage.getItem("llamadas"));
    const llamadaEncontrada = llamadas.find(llamada => llamada.numeroServicio === numeroServicio);
    if (llamadaEncontrada) {
      const resultadoDiv = document.getElementById("resultado");
      document.getElementById("rac").value=llamadaEncontrada.rac
      document.getElementById("fechaInicio").value=llamadaEncontrada.fechaInicio                    
      document.getElementById("horaInicio").value=llamadaEncontrada.horaInicio          
      document.getElementById("usuarioNombres").value= llamadaEncontrada.usuarioNombres 
      document.getElementById("usuarioApellidoPaterno").value=llamadaEncontrada.UsuarioApellidoPaterno
      document.getElementById("usuarioApellidoMaterno").value=llamadaEncontrada.UsuarioApellidoMaterno
      document.getElementById("digitoVerificador").value=llamadaEncontrada.digitoVerificador
      document.getElementById("asunto").value=llamadaEncontrada.asunto               
      document.getElementById("rut").value=llamadaEncontrada.rut    
      document.getElementById("celular").value=llamadaEncontrada.celular               
      document.getElementById("mail").value=llamadaEncontrada.mail              
      document.getElementById("direccion").value=llamadaEncontrada.direccion
      document.getElementById("comuna").value=llamadaEncontrada.comuna
      document.getElementById("calle").value=llamadaEncontrada.calle
      document.getElementById("numero").value=llamadaEncontrada.numeroDireccion
      document.getElementById("depto").value=llamadaEncontrada.depto
      document.getElementById("referencia").value=llamadaEncontrada.referencia         
      document.getElementById("glosa").value=llamadaEncontrada.glosa              
      document.getElementById("desarrollo").value=llamadaEncontrada.desarrollo        
      document.getElementById("recordatorio").value=llamadaEncontrada.recordatorio          
      document.getElementById("numeroAtencion").value=llamadaEncontrada.numeroAtencion        
      document.getElementById("numeroAviso").value=llamadaEncontrada.numeroAviso
      document.getElementById("numeroOrden").value=llamadaEncontrada.numeroOrden
    } else {
      alert("No se encontró ninguna llamada con ese número de servicio.");
    }
}
//activa y desactiva selector de horas
function activaHora(flag){
  var miSelect = document.getElementById("horaIni");
  if (flag==='activa'){
    miSelect.disabled = false
  } else {
    miSelect.disabled = true
  }
}
//integra en asuntos el desarrollo
function integraAsunto(){
    let asunto=document.getElementById('asunto').value
    let desarrollo=document.getElementById('detalleAsunto').value
    let tot=desarrollo+"\n"+asunto
    document.getElementById('asunto').value=tot
}
//EDICION ASUNTOS
// Función para grabar la edición del detalle del asunto seleccionado
function grabarDetalle() {
        var listaAsuntos = document.getElementById("listaAsuntos");
        var detalleAsunto = document.getElementById("detalleAsunto");
        var asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
        if(detalleAsunto.value==='' || !detalleAsunto.value ){
                alert('No hay detalle')
                document.getElementById("detalleAsunto").select()
                document.getElementById("detalleAsunto").focus()
                return
            }
        // Obtener el asunto seleccionado en el combobox
        var index = listaAsuntos.selectedIndex;
        if (index === -1) {
            alert("Seleccione un asunto para grabar el detalle.");
            return;
        }
        var asuntoSeleccionado = listaAsuntos.options[index].value;
        // Actualizar el detalle del asunto seleccionado en la lista de asuntos y en el Local Storage
        asuntos.forEach(function(asunto) {
            if (asunto.asunto === asuntoSeleccionado) {
            asunto.detalle = detalleAsunto.value;
            }
        });
        localStorage.setItem("asuntos", JSON.stringify(asuntos));
        // Mostrar un mensaje de confirmación al usuario
        alert("El detalle del asunto ha sido grabado.");
}
//AGREGA NUEVO ASUNTO A LOCAL
function agregarAsunto() {
      // Obtener el valor del nuevo asunto y el detalle
      var nuevoAsunto = document.getElementById("nuevoAsunto").value;
      if (nuevoAsunto === '' || !nuevoAsunto){
          alert('No hay Asunto')
          document.getElementById("nuevoAsunto").select()
          document.getElementById("nuevoAsunto").focus()
          return
      }
      var detalleAsunto = document.getElementById("detalleAsunto").value;
      if(detalleAsunto === '' || !detalleAsunto ){
          alert('No hay detalle')
          document.getElementById("detalleAsunto").select()
          document.getElementById("detalleAsunto").focus()
          return
      }
      // Obtener la lista actual de asuntos del Local Storage
      var asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
      // Comprobar si el nuevo asunto ya existe en la lista
      if (asuntos.some(asunto => asunto.asunto === nuevoAsunto)) {
          alert("El asunto ya existe en la lista.");
          return;
      }
      // Agregar el nuevo asunto a la lista
      asuntos.push({asunto: nuevoAsunto, detalle: detalleAsunto});
      // Actualizar el Local Storage con la nueva lista de asuntos
      localStorage.setItem("asuntos", JSON.stringify(asuntos));
      // Agregar el nuevo asunto al combobox
      var listaAsuntos = document.getElementById("listaAsuntos");
      var option = document.createElement("option");
      option.text = nuevoAsunto;
      listaAsuntos.add(option);
      alert("asunto Guardado")
}
//ordena en orden alfabetico por asunto
function ordenaAsuntos() {
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  asuntos.sort((a, b) => a.asunto.localeCompare(b.asunto));
  localStorage.setItem("asuntos", JSON.stringify(asuntos));
  alert('Asuntos ordenados')
  cargarAsuntos()
}
//carga asuntos      
function cargarAsuntos() {
    var listaAsuntos = document.getElementById("listaAsuntos");
    var detalleAsunto = document.getElementById("detalleAsunto");
    var asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
    // Agregar cada asunto al combobox
    for (var i = 0; i < asuntos.length; i++) {
        var option = document.createElement("option");
        option.text = asuntos[i].asunto;
        listaAsuntos.add(option);
    }
    // Mostrar el detalle del primer asunto en el detalleAsunto
    if (asuntos.length > 0) {
        detalleAsunto.value = asuntos[0].detalle;
    }
    // Asignar un evento onchange al combobox para mostrar el detalle del asunto seleccionado
    listaAsuntos.onchange = function() {
        mostrarDetalleAsunto();
    };
}
// Función para mostrar el detalle del asunto seleccionado en el combobox
function mostrarDetalleAsunto() {
    var listaAsuntos = document.getElementById("listaAsuntos");
    var detalleAsunto = document.getElementById("detalleAsunto");
    var asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
    // Buscar el asunto seleccionado en la lista de asuntos y mostrar su detalle
    var asuntoSeleccionado = listaAsuntos.options[listaAsuntos.selectedIndex].value;
    // debugger
    var detalleSeleccionado = asuntos.find(asunto => asunto.asunto === asuntoSeleccionado).detalle;
    detalleAsunto.value = detalleSeleccionado;
}
//presenta el asunto
function presentaAsunto(){
    let asuntoDetalle=document.getElementById('detalleAsunto').value
    let asuntoActual=document.getElementById('asunto').value //rescata
    let totAsunto=asuntoActual+" "+asuntoDetalle
    document.getElementById('asunto').innerText=totAsunto
    document.getElementById('asunto').innerHTML=totAsunto
    document.getElementById('asunto').value=totAsunto
    copiar('detalleAsunto')
}
// Función para eliminar un asunto del Local Storage y del combobox al seleccionarlo
function eliminarAsunto() {
    var listaAsuntos = document.getElementById("listaAsuntos");
    var asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
    // Obtener el asunto seleccionado en el combobox
    var index = listaAsuntos.selectedIndex;
    if (index === -1) {
        alert("Seleccione un asunto para eliminar.");
        return;
    }
    var asuntoSeleccionado = listaAsuntos.options[index].value;
    // Eliminar el asunto del Local Storage
    asuntos = asuntos.filter(asunto => asunto.asunto !== asuntoSeleccionado);
    localStorage.setItem("asuntos", JSON.stringify(asuntos));
    // Eliminar el asunto del combobox
    listaAsuntos.remove(index);
    alert("Asunto eliminado")
    // Limpiar el campo de detalle
    document.getElementById("detalleAsunto").value = "";
}
//Carga archivo asuntos.json
function cargarDesdeJSONAsuntos() {
      var archivo = document.getElementById("archivoJSON").files[0];
      if (!archivo) {
        alert("Por favor selecciona un archivo.");
        return;
      }
      var lector = new FileReader();
      lector.onload = function(evento) {
      try {
          var datos = JSON.parse(evento.target.result);
          localStorage.setItem("asuntos", JSON.stringify(datos));
          alert("Datos cargados correctamente desde el archivo JSON.\n!! No olvides Refrescar");
      } catch (error) {
          alert("No se pudo leer el archivo JSON.");
      }
      };
      lector.readAsText(archivo);
      cargarAsuntos()
}
//nuevo asunto
function nuevoAsuntoAqui(){
      //VALIDA QUE EXISTAN DATOS
      if(!validaNuevoAsuntoDatos()){
        return
      }
      tiempoInicial = Date.now();
      actualizarTiempo()
      //validaIngreso()
      obtenerLocalRac()
      //carga llamadas de local
      leeLocalLLamadas()
      //set gestion
      document.getElementById('gestion-input').value="Gestionar"
      let rac=document.getElementById('rac')
      if(!rac){
        rac.focus()
        rac.select()
      } else {
        document.getElementById("usuarioNombres").focus()
        document.getElementById("usuarioNombres").select()
      }
      startTimer() //tmo
      populateTable() //presenta siempre tmo abajo en tabla
      //CTUALIZA ID PUES NO SE DEBE REPETIR Y AGREGA /una letra
      let idActual=document.getElementById('numeroServicio').value
      let nuevoId
      if(idActual){
          nuevoId=obtenerSiguienteLetra(idActual)
          document.getElementById('numeroServicio').value=nuevoId
        } else {
          alert("No hay ID");
          document.getElementById('numeroServicio').select()
          document.getElementById('numeroServicio').focus()
          return
      }
      alert('ingresando otro caso del ID '+idActual)
      document.getElementById('asunto').focus()
      document.getElementById('asunto').select()       
}
//CUANDO APARECE UN NUEVO CASO EN LA LLAMAD SE AGREGA UNA LETRA AL FINAL
function obtenerSiguienteLetra(texto) {
  // Obtener el último caracter del texto
  const ultimoCaracter = texto.charAt(texto.length - 1);
  // Validar si el último caracter es una letra
  if (/^[a-zA-Z]+$/.test(ultimoCaracter)) {
    // Obtener el código ASCII de la última letra
    const codigoASCII = ultimoCaracter.charCodeAt(0);
    
    // Validar si la letra es la Z o la z
    if (codigoASCII === 90 || codigoASCII === 122) {
      // Retornar la misma letra
      return ultimoCaracter;
    } else {
      // Obtener la siguiente letra
      const siguienteLetra = String.fromCharCode(codigoASCII + 1);
      // Reemplazar la última letra por la siguiente
      return texto.substring(0, texto.length - 1) + siguienteLetra;
    }
  } else {
    // Si el último caracter no es una letra, retornar la letra A
    return texto + 'A';
  }
}
function validaNuevoAsuntoDatos(){
  let usuarioNombres=document.getElementById('usuarioNombres').value
  let usuarioApellidoPaterno=document.getElementById('usuarioApellidoPaterno').value
  let usuarioApellidoMaterno=document.getElementById('usuarioApellidoMaterno').value
  let numeroServicio=document.getElementById('numeroServicio').value
  if(!usuarioNombres){
    alert('Falta el Nombre')
    document.getElementById('usuarioNombres').select()
    document.getElementById('usuarioNombres').focus()
    return false
  } 
  if(!usuarioApellidoPaterno){
    alert('Falta el Apellido Paterno')
    document.getElementById('usuarioApellidoPaterno').select()
    document.getElementById('usuarioApellidoPaterno').focus()
    return false
  }
  if(!usuarioApellidoMaterno){
    alert('Falta el Apellido Materno')
    document.getElementById('usuarioApellidoMaterno').select()
    document.getElementById('usuarioApellidoMaterno').focus()
    return false
  }
  if(!numeroServicio){
    alert('Falta ID')
    document.getElementById('numeroServicio').select()
    document.getElementById('numeroServicio').focus()
    return false
  }
  return true
}
//graba en archivo asuntos
function guardarEnArchivoAsunto() {
    var asuntos = JSON.parse(localStorage.getItem("asuntos"));
    // Convertir a un objeto Blob
    var blob = new Blob([JSON.stringify(asuntos)], {type: "application/json"});
    // Crear un elemento de descarga de enlace y simular clic en él
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    // FORMATO NOMBRE ARCHIVO
    let currentDate = new Date();
    let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    let day = ('0' + currentDate.getDate()).slice(-2);
    let formattedDate = day+month;
    console.log(formattedDate); // "04/24" (si hoy es 24 de abril)
    let nombreArchivo = 'asuntos'+formattedDate+'.json';

    link.download = nombreArchivo;
    link.click();
    alert('Grabado asuntos.json')
}
//limpia detalles
function limpiaDetalle(){
    document.getElementById("detalleAsunto").value = "";
}
//DE LOS TIEMPOS ARRIBA
function inicio() {
    // actualizarTiempo();
    updateTimer()
}	
// actualiza hora de inicio para un nuvo caso
//con la misma llamada en curso
function actualizarTiempo() {
    let horaNueva=document.getElementById('horaInicio')
    // crear un objeto Date con la hora actual
    var fechaActual = new Date();
    // obtener horas, minutos y segundos actuales
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
    // formatear la hora en formato hh:mm:ss
		var horaFormateada = (horas < 10 ? "0" : "") + horas + ":" +
                    (minutos < 10 ? "0" : "") + minutos + ":" +
                    (segundos < 10 ? "0" : "") + segundos;
    horaNueva.value=horaFormateada
}
function grabaBackup(){
  // Obtener los datos de localStorage y validar que no sean nulos o vacíos
  let listadeDatos= localStorage.getItem('listaDatos') || '';
  let asuntos = localStorage.getItem('asuntos') || '';
  let correos = localStorage.getItem('correos') || '';
  let bitacora = localStorage.getItem('bitacora') || '';

  let datos = {
    asuntos: asuntos,
    listaDatos: listadeDatos,
    correos: correos,
    bitacora:bitacora,
  };
  // Convertir el objeto a formato JSON
  let datosJSON = JSON.stringify(datos);
  // FORMATO NOMBRE ARCHIVO
  let currentDate = new Date();
  let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  let day = ('0' + currentDate.getDate()).slice(-2);
  let formattedDate = day+month;
  console.log(formattedDate); // "04/24" (si hoy es 24 de abril)
  let nombreArchivo = 'datLab'+formattedDate+'.json';

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
  alert('Grabado dataLab.json')
}
// lee bckp
function leeBackup(){
      cargarPagina("./leeBackup.html");
}
function leeTotal(){
  cargarPagina("./leeTotal.html");
}
//desarrollo a glosa
function desarrolloAglosa(){
  let asunto=document.getElementById('asunto').value
  let glosa=document.getElementById('glosa').value
  let desarrollo=document.getElementById('desarrollo').value
  let traspaso=desarrollo+"\n"+glosa
  document.getElementById('glosa').value=traspaso
}
//traspasa desarrollo a asunto
function desarrolloAasunto(){
  let asunto=document.getElementById('asunto').value
  let desarrollo=document.getElementById('desarrollo').value
  let traspaso=desarrollo+"\n"+asunto
  document.getElementById('asunto').value=traspaso
}
//BACKUP COMPLETO
// Función para cargar los datos del archivo JSON en localStorage
function cargarBaseCompleta() {
	// Obtener el archivo seleccionado por el usuario
	let archivo = document.getElementById('DatLabTotJson').files[0];
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
	};
	// Leer el archivo como texto
	lector.readAsText(archivo);
}
//graba base completa con llamadas
function grabarBaseCompleta(){
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
  // FORMATO NOMBRE ARCHIVO
  let currentDate = new Date();
  let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  let day = ('0' + currentDate.getDate()).slice(-2);
  let formattedDate = day+month;
  console.log(formattedDate); // "04/24" (si hoy es 24 de abril)
  let nombreArchivo = 'datLabTot'+formattedDate+'.json';
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
  alert('Grabado datLabTot.json')

}
function grabaTodo(){
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
  // FORMATO NOMBRE ARCHIVO
  let currentDate = new Date();
  let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  let day = ('0' + currentDate.getDate()).slice(-2);
  let formattedDate = day+month;
  console.log(formattedDate); // "04/24" (si hoy es 24 de abril)
  let nombreArchivo = 'datLabTot'+formattedDate+'.json';

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
function editaAsunto(){
  cargarPagina('./editaAsunto.html')
}
function presentaLocalStorage(){
    for (var i = 0; i < localStorage.length; i++) { 
      var clave = localStorage.key(i); 
      var valor = localStorage.getItem(clave); 
      document.write('<tr><td>'+clave+'</td><td>'+valor+'</td></tr>'); 
    } 
} 
function noFaltanDatos(){
  // NUMERO DE SERVICIO
  let numSer=document.getElementById('numeroServicio').value
  if(!numSer){
    let inputNumSer = prompt('Falta ID Nro de Servicio')
    //incorpora comuna en el campo comuna
    if (inputNumSer){
      document.getElementById('numeroServicio').value=inputNumSer
      numSer=inputNumSer
    }
  }
  //RUT
  let rutOk=document.getElementById('rut').value
  if(!rutOk){
    let inputRut = prompt('Falta el rut')
    //incorpora comuna en el campo comuna
    if (inputRut){
      document.getElementById('rut').value=inputRut
      rutOk=inputRut
    }
  }
  // NOMBRES
  let nombres=document.getElementById('usuarioNombres').value
  if(!nombres){
    let inputNombres = prompt('Faltan los Nombres')
    //incorpora comuna en el campo comuna
    if (inputNombres){
      document.getElementById('usuarioNombres').value=inputNombres
      nombres=inputNombres
    }
  }
  // PATERNO
  let paterno=document.getElementById('usuarioApellidoPaterno').value
  if(!paterno){
    let inputPaterno = prompt('Falta Apellido Paterno')
    //incorpora comuna en el campo comuna
    if (inputPaterno){
      document.getElementById('usuarioApellidoPaterno').value=inputPaterno
      paterno=inputPaterno
    }
  }
  // MATERNO
  let materno=document.getElementById('usuarioApellidoMaterno').value
  if(!materno){
    let inputMaterno = prompt('Falta Apellido materno')
    //incorpora comuna en el campo comuna
    if (inputMaterno){
      document.getElementById('usuarioApellidoMaterno').value=inputMaterno
      materno=inputMaterno
    }
  }
   // MAIL
   let mail=document.getElementById('mail').value
   if(!mail){
     let inputMail = prompt('Falta el Mail')
     //incorpora comuna en el campo comuna
     if (inputMail){
       document.getElementById('mail').value=inputMail
       mail=inputMail
     }
   }
   // CELULAR
  let cel=document.getElementById('celular').value
  if(!cel){
    let inputCel = prompt('Falta el Celular')
    //incorpora comuna en el campo comuna
    if (inputCel){
      document.getElementById('celular').value=inputCel
      cel=inputCel
    } 
  }
  // COMUNA
  let comuna=document.getElementById('comuna').value
  if(!comuna){
    let inputComuna = prompt('Falta la Comuna')
    //incorpora comuna en el campo comuna
    if (inputComuna){
      document.getElementById('comuna').value=inputComuna
      comuna=inputComuna
    }
  }
   //referencia
   let referencia=document.getElementById('referencia').value
   if(!referencia){
     let inputReferencia = prompt('Falta Referencia')
     //incorpora comuna en el campo comuna
     if (inputReferencia){
       document.getElementById('referencia').value=inputReferencia
       referencia=inputReferencia
     }
   }
  //ASUNTO
  let asunto=document.getElementById('asunto').value
  if(!asunto){
    let inputAsunto = prompt('Falta el Asunto')
    //incorpora comuna en el campo comuna
    if (inputAsunto){
      document.getElementById('asunto').value=inputAsunto
      asunto=inputAsunto
    }
  }
  //validacion completa
  if (numSer!=='' & mail!=='' & comuna!=='' & rutOk!=='' & cel!=='' & nombres!=='' & paterno!=='' & materno!=='' & asunto!=='' & referencia!==''){
    return true
  } else {
    return false
  }
}
// PARA FIJAR ASUNTO
// Función para fijar el asunto seleccionado en el combobox
function fijaAsunto() {
  // Obtiene el select y el asunto seleccionado en localStorage
  var select = document.getElementById("listaAsuntos");
  var asunto = localStorage.getItem("asuntoSeleccionado");
  // Si el asunto existe en localStorage, se selecciona en el combobox
  if (asunto) {
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value == asunto) {
        select.selectedIndex = i;
        muestraDetalle();
        break;
      }
    }
  }
}
// Función que se ejecuta al hacer click en el botón Set Asunto
function setAsunto() {
  // Obtiene el select y el asunto seleccionado
  var select = document.getElementById("listaAsuntos");
  var asunto = select.value;
  // Fija el asunto seleccionado en localStorage
  localStorage.setItem("asuntoSeleccionado", asunto);
  // Muestra el detalle del asunto seleccionado
  muestraDetalle();
}
// Función para mostrar el detalle del asunto seleccionado
function muestraDetalle() {
  // Obtiene el select y el detalle del asunto seleccionado en localStorage
  var select = document.getElementById("listaAsuntos");
  var asuntoSeleccionado = select.value;
  var asuntos = JSON.parse(localStorage.getItem("asuntos"));
  // Busca el asunto seleccionado en la lista de asuntos
  for (var i = 0; i < asuntos.length; i++) {
    if (asuntos[i].asunto == asuntoSeleccionado) {
      document.getElementById("detalleAsunto").value = asuntos[i].detalle;
      break;
    }
  }
}
function startTimer() {
  inicia = new Date();
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}
function stopTimer() {
  fin = new Date();
  dif = fin - inicia;
  clearInterval(timerInterval);
}
function updateTimer() {
  var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  var minutes = Math.floor(elapsedTime / 60);
  var seconds = elapsedTime % 60;
  var formattedTime = padZero(minutes) + ":" + padZero(seconds);
  document.getElementById("tempo").innerHTML = formattedTime;
}
function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

// PARA QUE BITACORA SE EXPANDA
let notaBit = document.getElementById('nota');
notaBit.style.height = 'auto';
notaBit.addEventListener('input', function() {
  notaBit.style.height = 'auto';
  notaBit.style.height = (notaBit.scrollHeight) + 'px';
});
window.addEventListener('DOMContentLoaded', function() {
  notaBit.style.height = (notaBit.scrollHeight) + 'px';
});
// PARA MOUSE SOBRE P
let pF3 = document.querySelector('#pF3');
pF3.addEventListener('mouseover', function() {
  pF3.style.cursor = 'pointer';
});
let pF2 = document.querySelector('#pF2');
pF2.addEventListener('mouseover', function() {
  pF2.style.cursor = 'pointer';
});
