window.onload = function() {
    // let confirma = confirm('desea cargar la base server?')
    // if (confirma){
    //   grabaBanderaLocal(true)
    //   cargaServerJson(false)
    // } else {
    //   grabaBanderaLocal(false)
    // }
  cargaTablasTodas()
}
function cargaTablasTodas(){
  cargarCuentas();
  cargarMotivos();
  cargarDatosCuenta();
  presentarTablaCuentas() //cuentas
  presentaTotalTotal() //total acumulado
  cambiarTamanioTabla('tablaCuentas','5vw')
  simulateClick('cuenta')
  posiciona()
  cargaDesarrollo()
  mostrarArticulos();
  cargarAsuntos();
  cargaSetAsuntos()
}

var listaImagenes = [
  "./img/slide/logoMuroQ5.jpg",
  "./img/slide/logoMuroQ.jpg",
  "./img/slide/gfondo.jpg",
  "./img/slide/vueloBlanco.jpg",
  "./img/slide/isla.jpg",
  "./img/slide/islita.jpg",
  "./img/slide/islote.jpg"
];

function mensajeAyuda(mensaje) {
  mensaje=mensaje+" "+indiceAhora()
  document.getElementById('mensajeOver').innerHTML=mensaje;
}

function mensajeOver(mensaje){
  mensaje=mensaje
  document.getElementById('mensajeOver').innerHTML=mensaje;
}

function ocultaMensajeOver(event){
  document.getElementById('mensajeOver').innerHTML = '';
  event.preventDefault()
}

function obtenerIndiceAleatorio(lista) {
  return Math.floor(Math.random() * lista.length);
}

function cambiarFondo(opcion) {
  if(opcion){
    var indice = obtenerIndiceAleatorio(listaImagenes);
    var nuevaImagen = listaImagenes[indice];
  
    document.body.style.backgroundImage = "url('" + nuevaImagen + "')";
  
    setTimeout(function() {
      cambiarFondo(opcion);
    }, 4000);
  }
}
// activaAnimaCSS("animanInicio",false)
cambiarFondo(false);

// GRABA AUTO EL ARCHIVO SERVER NO ES BUENO 
// setInterval(grabaServer, 60000); // 60000 milisegundos = 1 minuto
// GRABA AUTO ARCHIVO BACKP SERVER
// setInterval(confirmaGrabaBckp, 300000); // 5 minutos
setInterval(confirmaGrabaBckp, 120000); // 2 minutos

function confirmaGrabaBckp(){
  // let confirma=confirm('desea respaldar bckp server?')
  // if (confirma){
    // graba automatico mientras esta en linea
    grabaServerBack(true);
  // }
}
//GUARDA AUTOMATICO ASUNTO
document.getElementById("detalleAsunto").addEventListener('input',function(){
  grabarDetalle();
});
//GUARDA AUTOMATICO DESARROLLO
document.getElementById("desarrollo").addEventListener('input',function(){
  guardaLocalDesarrollo();
});
//TECLA F2
document.addEventListener('keydown', function(event) {
  // TECLA F2
  if (event.key === 'F2') {
      guardarNota(event)
      guardaLocalDesarrollo()
      grabarDetalle()
      mostrarFechaHora()
  }
});
function activaAnimaCSS(id,opcion) {
  let estilo = document.getElementById("animanInicio");
  if(opcion){
    estilo.disabled = false;
  } else{
    estilo.disabled = true;
  }
}
function clickAnima(){
  let estilo = document.getElementById("animanInicio");
  if (estilo.disabled) {
      estilo.disabled = false;
  } else {
      estilo.disabled = true;
  }
}
function detenerAnimacion() {
  let picaflor = document.getElementById("picaflor");
  let colibri = document.getElementById("colibri");
  picaflor.style.animationPlayState = "paused";
  colibri.style.animationPlayState = "paused";
}
function copiarAlPortapapeles(elemento) {
  let copiado = document.getElementById(elemento);
  copiado.select();
  document.execCommand("copy");
  // alert("¡Texto copiado al portapapeles!");
  mensajeAyuda("¡Texto copiado al portapapeles!")

}
function nuevoInventario(){
  let inventario=prompt('ingresa el nuevo inventario')
  if(!inventario){
    return
  }
  let inventarios = JSON.parse(localStorage.getItem("inventarios")) || [];
  if (inventarios.some(item => item.tipo === tipo)) {
      alert("El Inventario ya existe. Introduce un nombre diferente.");
      return;
  }
  const idInv = generateID();
  const nuevoInventario = {
      idInv: idInv,
      inventario: inventario
  };
  inventarios.push(nuevoInventario);
  localStorage.setItem("inventarios", JSON.stringify(inventarios));
  // alert('se grabo el Inventario ' +inventario)
  mensajeAyuda('se grabo el Inventario ' +inventario)
  // motivorDatosInv()
  let select = document.getElementById("inventario");
  if (inventario !== null && inventario !== "") {
    let option = document.createElement("option");
    option.text = inventario;
    option.value = inventario;
    select.add(option);
    select.selectedIndex = select.options.length - 1
  }
}
function nuevoArticulo(){
    let articulo=prompt('ingresa el nuevo articulo')
    if(!articulo){
    return
    }
    let tipo = document.getElementById("tipo").value;
    if(!tipo){
    // alert('seleccione primero el tipo')
    mensajeAyuda('seleccione primero el tipo')
    return
    }
  // Validar si el artículo ya existe
    let articulos = JSON.parse(localStorage.getItem("articulos")) || [];
    if (articulos.some(item => item.articulo === articulo)) {
        // alert("El artículo ya existe. Introduce un nombre diferente.");
        mensajeAyuda("El artículo ya existe. Introduce un nombre diferente.")
        return;
    }
    // Obtener la fecha y hora actual
    let fechaActual = obtenerFechaActual();
    let horaActual = obtenerHoraActual();
    // Generar el ID del artículo
    let idArticulo = generateID();
    // Obtener los tipos de artículos
    let tiposArt = JSON.parse(localStorage.getItem("tiposArt")) || [];
    // Obtener el ID del tipo seleccionado
    let idTipo = "";
    let tipoSeleccionado = tiposArt.find(item => item.tipo === tipo);
    if (tipoSeleccionado) {
        idTipo = tipoSeleccionado.idTipo;
    }
    // Crear el nuevo artículo
    let nuevoArticulo = {
        fecha: fechaActual,
        hora: horaActual,
        idArticulo: idArticulo,
        tipo: tipo,
        idTipo: idTipo,
        articulo: articulo
    };
    // Agregar el nuevo artículo a la lista
    articulos.push(nuevoArticulo);
    // Guardar la lista de artículos en el Local Storage
    localStorage.setItem("articulos", JSON.stringify(articulos));
    // alert('se ingreso el articulo: '+articulo +' Tipo: '+tipo)
    mensajeAyuda('se ingreso el articulo: '+articulo +' Tipo: '+tipo)
    // AGrega el articulo al select
    let select = document.getElementById("articulo");
    if (articulo !== null && articulo !== "") {
      let option = document.createElement("option");
      option.text = articulo;
      option.value = articulo;
      select.add(option);
      select.selectedIndex = select.options.length - 1
    }
}
function nuevoTipo(){
  let tipo=prompt('ingresa el nuevo tipo')
  if(!tipo){
    return
  }
  let tiposArt = JSON.parse(localStorage.getItem("tiposArt")) || [];
  if (tiposArt.some(item => item.tipo === tipo)) {
      alert("El tipo ya existe. Introduce un nombre diferente.");
      mensajeAyuda("El tipo ya existe. Introduce un nombre diferente.");
      return;
  }
  let fecha = obtenerFechaActual();
  let hora = obtenerHoraActual();
  let idTipo =  generateID()
  let tipoObj = {
      fecha: fecha,
      hora: hora,
      idTipo: idTipo,
      tipo: tipo
  };
  tiposArt.push(tipoObj);
  localStorage.setItem("tiposArt", JSON.stringify(tiposArt));
  // motivorDatosTipos()
  // alert('se grabo el nuevo tipo: '+ tipo)
  mensajeAyuda('se grabo el nuevo tipo: '+ tipo)

  // AGrega el articulo al select
  let select = document.getElementById("tipo");
  if (tipo !== null && tipo !== "") {
    let option = document.createElement("option");
    option.text = tipo;
    option.value = tipo;
    select.add(option);
    select.selectedIndex = select.options.length - 1
  }
  //vacia articulos
  let selectArt = document.getElementById("articulo");
  selectArt.innerHTML = "";
}
function creaCuentaNueva(event) {
  event.preventDefault();
  let promptNombreCta = prompt('Nombre de la cuenta nueva');
  if (!promptNombreCta) {
      return;
  }
  let nombreCuenta = promptNombreCta;
  let saldoInicial = 0;
  let saldoFinal = 0;
  // Obtener la fecha y hora actual
  let fecha = new Date();
  let fechaString = fecha.getDate() + "" + (fecha.getMonth() + 1) + "" + fecha.getFullYear();
  let horaString = fecha.getHours() + "" + fecha.getMinutes() + "" + fecha.getSeconds();
  let idCuenta = horaString + fechaString;
  // Obtener las cuentas guardadas en Local Storage
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  // Validar si el nombre de la cuenta ya existe en la lista
  let cuentaExistente = cuentas.some(cuenta => cuenta.nombreCuenta === nombreCuenta);
  if (cuentaExistente) {
      alert('La cuenta ya existe');
      return;
  }
  // Si la cuenta no existe, graba en local
  let nuevaCuenta = {
      "fecha": new Date().toLocaleDateString(),
      "hora": new Date().toLocaleTimeString(),
      "idCuenta": idCuenta,
      "nombreCuenta": nombreCuenta,
      "saldoInicial": 0,
      "saldoActual": 0,
      "saldoFinal": 0
  };
  cuentas.push(nuevaCuenta);
  localStorage.setItem("cuentas", JSON.stringify(cuentas));
  // motivoCuentas(); // No se proporcionó el código de esta función
  // alert('Se grabó la cuenta: ' + nombreCuenta);
  mensajeAyuda('Se grabó la cuenta: ' + nombreCuenta)
  let select = document.getElementById("cuenta");
  if (nombreCuenta !== null && nombreCuenta !== "") {
      event.preventDefault();
      let option = document.createElement("option");
      option.text = nombreCuenta;
      option.value = nombreCuenta;
      select.add(option); //aqui muta y cae
      select.selectedIndex = select.options.length - 1
  }
}
function actualizarComboBoxCuentaNueva() {
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  let comboBox = document.getElementById("cuenta");
  comboBox.innerHTML = "";
  // Agregar una opción por cada cuenta en la lista
  for (let i = 0; i < cuentas.length; i++) {
    let option = document.createElement("option");
    option.text = cuentas[i].nombreCuenta;
    option.value = i;
    comboBox.add(option);
  }
  // mostrarSaldo()
}
function grabarAutomaticoBit(event) {
  setInterval(function() {
    guardarNota(event);
  }, 60000);
}

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
function cargaSetAsuntos(){
    // Obtiene el select y la lista de asuntos en localStorage
  let select = document.getElementById("listaAsuntos");
  let asuntos = JSON.parse(localStorage.getItem("asuntos"));
  // Fija el asunto seleccionado en el combobox
  fijaAsunto();
  // Agrega el eveleeLocalLLamadas()ick al botón Set Asunto
  let btnSetAsunto = document.getElementById("btnSetAsunto");
  btnSetAsunto.addEventListener("click", setAsunto);
  // Agrega el evento change al select para mostrar el detalle del asunto seleccionado
  select.addEventListener("change", muestraDetalle);
};
function cargarPag(pagina) {
      let nuevaVentana = window.open(pagina, "_blank"); 
      if (nuevaVentana != null && !nuevaVentana.closed) {
        nuevaVentana.location.reload();
      }
}
function guardarEnArchivoAsunto() {
  let asuntos = JSON.parse(localStorage.getItem("asuntos"));
  // Convertir a un objeto Blob
  let blob = new Blob([JSON.stringify(asuntos)], {type: "application/json"});
  // Crear un elemento de descarga de enlace y simular clic en él
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
 
  let nombreArchivo= nombreArchivoJson('asuntos')
  link.download = nombreArchivo;
  link.click();
}
function setAsunto() {
  // Obtiene el select y el asunto seleccionado
  let select = document.getElementById("listaAsuntos");
  let asunto = select.value;
  // Fija el asunto seleccionado en localStorage
  localStorage.setItem("asuntoSeleccionado", asunto);
  // Muestra el detalle del asunto seleccionado
  // alert('se fijo el asunto: '+asunto)
  mensajeAyuda('se fijo el asunto: '+asunto)
  muestraDetalle();
}
function muestraDetalle() {
  // Obtiene el select y el detalle del asunto seleccionado en localStorage
  let select = document.getElementById("listaAsuntos");
  let asuntoSeleccionado = select.value;
  let asuntos = JSON.parse(localStorage.getItem("asuntos"));
  // Busca el asunto seleccionado en la lista de asuntos
  for (let i = 0; i < asuntos.length; i++) {
    if (asuntos[i].asunto == asuntoSeleccionado) {
      document.getElementById("detalleAsunto").value = asuntos[i].detalle;
      break;
    }
  }
}
function editaAsunto(){
  cargarPagina('./editaAsunto.html')
}
function limpiaDetalle(){
  document.getElementById("detalleAsunto").value = "";
}
function agregarAsunto() {
  // Obtener el valor del nuevo asunto y el detalle
  let nuevoAsunto = document.getElementById("nuevoAsunto").value;
  if (nuevoAsunto === '' || !nuevoAsunto){
      alert('No hay Asunto')
      mensajeAyuda('No hay Asunto')
      document.getElementById("nuevoAsunto").select()
      document.getElementById("nuevoAsunto").focus()
      return
  }
  let detalleAsunto = document.getElementById("detalleAsunto").value;
  if(detalleAsunto === '' || !detalleAsunto ){
      alert('No hay detalle')
      mensajeAyuda('No hay detalle')
      document.getElementById("detalleAsunto").select()
      document.getElementById("detalleAsunto").focus()
      return
  }
  // Obtener la lista actual de asuntos del Local Storage
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  // Comprobar si el nuevo asunto ya existe en la lista
  if (asuntos.some(asunto => asunto.asunto === nuevoAsunto)) {
      alert("El asunto ya existe en la lista.");
      mensajeAyuda("El asunto ya existe en la lista.");
      return;
  }
  // Agregar el nuevo asunto a la lista
  asuntos.push({asunto: nuevoAsunto, detalle: detalleAsunto});
  // Actualizar el Local Storage con la nueva lista de asuntos
  localStorage.setItem("asuntos", JSON.stringify(asuntos));
  // Agregar el nuevo asunto al combobox
  let listaAsuntos = document.getElementById("listaAsuntos");
  let option = document.createElement("option");
  option.text = nuevoAsunto;
  listaAsuntos.add(option);
  alert("asunto Guardado");
  mensajeAyuda("asunto Guardado");
  motivoAsuntos();
  // Limpiar los campos de texto
  // document.getElementById("nuevoAsunto").value = "";
  // document.getElementById("detalleAsunto").value = "";
}
function motivoAsuntos() {
    let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
    asuntos.sort((a, b) => a.asunto.localeCompare(b.asunto));
    localStorage.setItem("asuntos", JSON.stringify(asuntos));
    // alert('Asuntos motivados')
    mensajeAyuda('Asuntos motivados')
    cargarAsuntos()
}
function limpiaAsuntos(){
  let selectElement = document.getElementById('listaAsuntos'); // Reemplaza 'miSelect' con el ID de tu elemento <select>
  selectElement.innerHTML = '';

}
function cargarAsuntos() {
  let listaAsuntos = document.getElementById("listaAsuntos");
  if(listaAsuntos){
    limpiaAsuntos()
  }
  let detalleAsunto = document.getElementById("detalleAsunto");
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  // Agregar cada asunto al combobox
  for (let i = 0; i < asuntos.length; i++) {
    let option = document.createElement("option");
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

function mostrarDetalleAsunto() {
  let hayNuevoAs = document.getElementById('nuevoAsunto').value;
  if (hayNuevoAs) {
    document.getElementById('nuevoAsunto').value = "";
  }
  let listaAsuntos = document.getElementById("listaAsuntos");
  let detalleAsunto = document.getElementById("detalleAsunto");
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  // Buscar el asunto seleccionado en la lista de asuntos y mostrar su detalle
  let asuntoSeleccionado = listaAsuntos.options[listaAsuntos.selectedIndex].value;
  let detalleSeleccionado = asuntos.find(asunto => asunto.asunto === asuntoSeleccionado)?.detalle;
  detalleAsunto.value = detalleSeleccionado || "error de lectura";
}
function presentaAsunto(){
  let asuntoDetalle=document.getElementById('detalleAsunto').value
  let asuntoActual=document.getElementById('asunto').value //rescata
  let totAsunto=asuntoActual+" "+asuntoDetalle
  document.getElementById('asunto').innerText=totAsunto
  document.getElementById('asunto').innerHTML=totAsunto
  document.getElementById('asunto').value=totAsunto
  copiar('detalleAsunto')
}
function eliminarAsunto() {
  let confirma=confirm("SEGURO DE ELIMNAR ASUNTO?")
  if(!confirma){
    return
  }
  let listaAsuntos = document.getElementById("listaAsuntos");
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  // Obtener el asunto seleccionado en el combobox
  let index = listaAsuntos.selectedIndex;
  if (index === -1) {
      alert("Seleccione un asunto para eliminar.");
      mensajeAyuda("Seleccione un asunto para eliminar.");
      return;
  }
  let asuntoSeleccionado = listaAsuntos.options[index].value;
  // Eliminar el asunto del Local Storage
  asuntos = asuntos.filter(asunto => asunto.asunto !== asuntoSeleccionado);
  localStorage.setItem("asuntos", JSON.stringify(asuntos));
  // Eliminar el asunto del combobox
  listaAsuntos.remove(index);
  alert("Asunto eliminado")
  mensajeAyuda("Asunto eliminado")
  // Limpiar el campo de detalle
  document.getElementById("detalleAsunto").value = "";
}
function cargarDesdeJSONAsuntos() {
  let archivo = document.getElementById("archivoAsuntoJson").files[0];
  if (!archivo) {
    alert("Por favor selecciona un archivo.");
    mensajeAyuda("Por favor selecciona un archivo.");
    return;
  }
  let lector = new FileReader();
  lector.onload = function(evento) {
    try {
      let datos = JSON.parse(evento.target.result);
      if (Object.keys(datos).length === 0) {
        alert("El archivo JSON no contiene datos.");
        mensajeAyuda("El archivo JSON no contiene datos.")
        return;
      }
      localStorage.setItem("asuntos", JSON.stringify(datos));
      // alert("Datos cargados correctamente desde el archivo JSON");
      mensajeAyuda("Datos cargados correctamente desde el archivo JSON");
      cargarAsuntos()
    } catch (error) {
      alert("No se pudo leer el archivo JSON.");
      mensajeAyuda("No se pudo leer el archivo JSON.");
    }
  };
  lector.readAsText(archivo);
  cargarAsuntos();
}
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
      mensajeAyuda("No hay ID");
      document.getElementById('numeroServicio').select()
      document.getElementById('numeroServicio').focus()
      return
  }
  // alert('ingresando otro caso del ID '+idActual)
  mensajeAyuda('ingresando otro caso del ID '+idActual)
  document.getElementById('asunto').focus()
  document.getElementById('asunto').select()       
}
function validaNuevoAsuntoDatos(){
let usuarioNombres=document.getElementById('usuarioNombres').value
let usuarioApellidoPaterno=document.getElementById('usuarioApellidoPaterno').value
let usuarioApellidoMaterno=document.getElementById('usuarioApellidoMaterno').value
let numeroServicio=document.getElementById('numeroServicio').value
if(!usuarioNombres){
alert('Falta el Nombre')
mensajeAyuda('Falta el Nombre')
document.getElementById('usuarioNombres').select()
document.getElementById('usuarioNombres').focus()
return false
} 
if(!usuarioApellidoPaterno){
alert('Falta el Apellido Paterno')
mensajeAyuda('Falta el Apellido Paterno')
document.getElementById('usuarioApellidoPaterno').select()
document.getElementById('usuarioApellidoPaterno').focus()
return false
}
if(!usuarioApellidoMaterno){
alert('Falta el Apellido Materno')
mensajeAyuda('Falta el Apellido Materno')
document.getElementById('usuarioApellidoMaterno').select()
document.getElementById('usuarioApellidoMaterno').focus()
return false
}
if(!numeroServicio){
// alert('Falta ID')
mensajeAyuda('Falta ID')
document.getElementById('numeroServicio').select()
document.getElementById('numeroServicio').focus()
return false
}
return true
}
function autoResize(textarea) {
  textarea.style.height = textarea.scrollHeight + "px";
}
function cargaLomuestraDetalleaddsAsuntos(){
  // Obtiene el select y la lista de asuntos en localStorage
  let select = document.getElementById("listaAsuntos");
  let asuntos = JSON.parse(localStorage.getItem("asuntos"));
  let hayAsunto=asunto[0].asunto
  if(!hayAsunto){
    alert('en local no hay asuntos')
    mensajeAyuda('en local no hay asuntos')
    return
  }
  // Fija el asunto seleccionado en el combobox
  fijaAsunto();
  // Agrega el eveleeLocalLLamadas()ick al botón Set Asunto
  let btnSetAsunto = document.getElementById("btnSetAsunto");
  btnSetAsunto.addEventListener("click", setAsunto);
  // Agrega el evento change al select para mostrar el detalle del asunto seleccionado
  select.addEventListener("change", muestraDetalle);
}
function fijaAsunto() {
  // Obtiene el select y el asunto seleccionado en localStorage
  let select = document.getElementById("listaAsuntos");
  let asunto = localStorage.getItem("asuntoSeleccionado");
  // Si el asunto existe en localStorage, se selecciona en el combobox
  if (asunto) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value == asunto) {
        select.selectedIndex = i;
        muestraDetalle();
        break;
      }
    }
  }
}

function grabarDetalle() {
  let listaAsuntos = document.getElementById("listaAsuntos");
  let detalleAsunto = document.getElementById("detalleAsunto");
  let asuntos = JSON.parse(localStorage.getItem("asuntos")) || [];
  if(detalleAsunto.value==='' || !detalleAsunto.value ){
          alert('No hay detalle')
          mensajeAyuda('No hay detalle')
          document.getElementById("detalleAsunto").select()
          document.getElementById("detalleAsunto").focus()
          return
      }
  // Obtener el asunto seleccionado en el combobox
  let index = listaAsuntos.selectedIndex;
  if (index === -1) {
      alert("Seleccione un asunto para grabar el detalle.");
      mensajeAyuda("Seleccione un asunto para grabar el detalle.");
      return;
  }
  function validaNuevoAsuntoOk(){
      let nuevoAs=document.getElementById('nuevoAsunto').value;
      if(nuevoAs){
        alert('no es posible grabar detalle si este asunto no se ha grabado')
        mensajeAyuda('no es posible grabar detalle si este asunto no se ha grabado')
        return false
      } else {
        return true
      }
  }
  if(validaNuevoAsuntoOk()){
    let asuntoSeleccionado = listaAsuntos.options[index].value;
    // Actualizar el detalle del asunto seleccionado en la lista de asuntos y en el Local Storage
    asuntos.forEach(function(asunto) {
        if (asunto.asunto === asuntoSeleccionado) {
        asunto.detalle = detalleAsunto.value;
        }
    });
    localStorage.setItem("asuntos", JSON.stringify(asuntos));
    console.log("El detalle del asunto: "+asuntoSeleccionado+" ha sido grabado.");
  }
}
function presentaBase(opcion){
  let miSeccion = document.getElementById('seccionBotoneraBase');
  if(opcion){
    muestraBase()
  } else {
      ocultaBase()
  }
}
function muestraBase() {
  let formulario = document.getElementById("seccionBotoneraBase");
  formulario.style.display = "block";
  // let boton = document.getElementById("btnOcultaBase");
  // boton.disabled = false;
  // let btnV=document.getElementById("btnPresentaBase");
  // btnV.disabled=true
}
function ocultaBase(){
  let formulario = document.getElementById("seccionBotoneraBase");
  formulario.style.display = "none";
  // let boton = document.getElementById("btnOcultaBase");
  // boton.disabled = true;
  // let btnV=document.getElementById("btnPresentaBase");
  // btnV.disabled=false
}
function presentaArchivos(opcion){
  if(opcion){
    muestraArchivos()
  } else {
    ocultaArchivos()
  }
}
function muestraArchivos() {
  let formulario = document.getElementById("seccionArchivos");
  formulario.style.display = "block";
  let boton = document.getElementById("btnOcultaArchivos");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaArchivos");
  btnV.disabled=true
}
function ocultaArchivos(){
  let formulario = document.getElementById("seccionArchivos");
  formulario.style.display = "none";
  let boton = document.getElementById("btnOcultaArchivos");
  boton.disabled = true;
  let btnV=document.getElementById("btnPresentaArchivos");
  btnV.disabled=false
}

function presentaGraban(opcion){
  if(opcion){
    muestraGraban()
  } else {
    ocultaGraban()
  }
}
function muestraGraban() {
  let formulario = document.getElementById("seccionGraban");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaGraban");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaGraban");
  btnV.disabled=true
}
function ocultaGraban(){
  let formulario = document.getElementById("seccionGraban");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaGraban");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaGraban");
  boton.disabled = true;
}


function presentaGrabanBases(opcion){
  if(opcion){
    muestraGrabanBases()
  } else {
    ocultaGrabanBases()
  }
}
function muestraGrabanBases() {
  let formulario = document.getElementById("seccionGrabanBases");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaGrabanBases");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaGrabanBases");
  btnV.disabled=true
}
function ocultaGrabanBases(){
  let formulario = document.getElementById("seccionGrabanBases");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaGrabanBases");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaGrabanBases");
  boton.disabled = true;
}

function presentaGrabanServer(opcion){
  if(opcion){
    muestraGrabanServer()
  } else {
    ocultaGrabanServer()
  }
}
function muestraGrabanServer() {
  let formulario = document.getElementById("seccionGrabanServer");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaGrabanServer");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaGrabanServer");
  btnV.disabled=true
}
function ocultaGrabanServer(){
  let formulario = document.getElementById("seccionGrabanServer");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaGrabanServer");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaGrabanServer");
  boton.disabled = true;
}

function presentaEliminan(opcion){
  if(opcion){
    muestraEliminan()
  } else {
    ocultaEliminan()
  }
}
function muestraEliminan() {
  let formulario = document.getElementById("seccionEliminan");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaEliminan");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaEliminan");
  btnV.disabled=true
}
function ocultaEliminan(){
  let formulario = document.getElementById("seccionEliminan");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaEliminan");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaEliminan");
  boton.disabled = true;
}
function presentaCargan(opcion){
  if(opcion){
    muestraCargan()
  } else {
    ocultaCargan()
  }
}
function muestraCargan() {
  let formulario = document.getElementById("seccionCargan");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaCargan");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaCargan");
  btnV.disabled=true
}
function ocultaCargan(){
  let formulario = document.getElementById("seccionCargan");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaCargan");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaCargan");
  boton.disabled = true;
}


function presentaEditan(opcion){
  if(opcion){
    muestraEditan()
  } else {
    ocultaEditan()
  }
}
function muestraEditan() {
  let formulario = document.getElementById("seccionEditan");
  formulario.style.display = "flex";
  let boton = document.getElementById("btnOcultaEditan");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaEditan");
  btnV.disabled=true
}
function ocultaEditan(){
  let formulario = document.getElementById("seccionEditan");
  formulario.style.display = "none";
  let btnV=document.getElementById("btnPresentaEditan");
  btnV.disabled=false
  let boton = document.getElementById("btnOcultaEditan");
  boton.disabled = true;
}

function ordenaAsuntos() {
  // Obtener los asuntos del almacenamiento local
  var asuntos = JSON.parse(localStorage.getItem('asuntos'));
  // Ordenar los asuntos por el campo 'asunto'
  asuntos.sort(function(a, b) {
      var asuntoA = a.asunto.toUpperCase();
      var asuntoB = b.asunto.toUpperCase();
      if (asuntoA < asuntoB) {
          return -1;
      }
      if (asuntoA > asuntoB) {
          return 1;
      }
      return 0;
  });

  // Guardar los asuntos ordenados en el almacenamiento local
  localStorage.setItem('asuntos', JSON.stringify(asuntos));
}
function mostrarAsuntos() {
 // Obtener los asuntos del almacenamiento local
 var asuntos = JSON.parse(localStorage.getItem('asuntos'));

 // Obtener el elemento select
 var selectAsuntos = document.getElementById('listaAsuntos');

 // Limpiar el combobox antes de mostrar los asuntos
 selectAsuntos.innerHTML = '';

 // Crear y agregar las opciones al combobox
 asuntos.forEach(function(asunto) {
     var option = document.createElement('option');
     option.value = asunto.asunto;
     option.textContent = asunto.asunto;
     selectAsuntos.appendChild(option);
 });
}

function presentaAsuntos(opcion){
  // let miSeccion = document.getElementById('seccionDeAsuntos');
  if(opcion){
      // miSeccion.classList.remove('hidden');
      muestraAs()
  } else {
      // miSeccion.classList.add('hidden');
      ocultaAs()
  }
}
function muestraAs(){
    let formulario = document.getElementById("seccionDeAsuntos");
    formulario.style.display = "block";
    //habilita botn -q oculta
    let boton = document.getElementById("btnAsuntoOculto");
    boton.disabled = false;
    let btnV=document.getElementById("btnActivaAsunto");
    btnV.disabled=true
}
function ocultaAs(){
    let formulario = document.getElementById("seccionDeAsuntos");
    formulario.style.display = "none";
    //deshabilita boton -q
    let boton = document.getElementById("btnAsuntoOculto");
    boton.disabled = true;
    let btnV=document.getElementById("btnActivaAsunto");
    btnV.disabled=false
}
function presentaDesarrollo(opcion){
    if(opcion){
      muestraDes()
    } else {
      ocultaDes()
    }
}
function muestraDes(){
    let formulario = document.getElementById("seccionDeDesarrollo");
    formulario.style.display = "block";
    //habilita botn -q oculta
    let boton = document.getElementById("btnOcultaDesarrollo");
    boton.disabled = false;
    let btnV=document.getElementById("btnActivaDesarrollo");
    btnV.disabled=true
}
function ocultaDes(){
    let formulario = document.getElementById("seccionDeDesarrollo");
    formulario.style.display = "none";
    let boton = document.getElementById("btnOcultaDesarrollo");
    boton.disabled = true;
    let btnV=document.getElementById("btnActivaDesarrollo");
    btnV.disabled=false
}
function presentaQuenta(opcion){
  let miSeccion = document.getElementById('formularioCuentaQ');
  if(opcion){
    muestraQ(event)
  } else {
    ocultaQ(event)
  }
}
function ocultaPasword(){
  let secccionPsw= document.getElementById('seccionClave')
  secccionPsw.style.display = "none"
}
function muestraQ(event){
    event.preventDefault()
    let formulario = document.getElementById("formularioCuentaQ");
    formulario.style.display = "block";
    //habilita botn -q oculta
    let boton = document.getElementById("btnQuentaHiden");
    boton.disabled = false;
    let btnV=document.getElementById("btnQuenta");
    btnV.disabled=true
}
function ocultaQ(event){
  event.preventDefault();
    let formulario = document.getElementById("formularioCuentaQ");
    let botonOculta = document.getElementById("btnQuentaHiden");
    botonOculta.disabled = true;
    let botonPresenta = document.getElementById("btnQuenta");
    botonPresenta.disabled = false;
    formulario.style.display = "none";
}
function quanticoVal(){
  let aQ=quantico()
  if(aQ){
    // document.getElementById('btnQuenta').disabled=false;
    document.getElementById('clave').value=""
    let botonPresenta = document.getElementById("btnQuenta");
    botonPresenta.disabled = true;
  } else {
    document.getElementById('btnQuenta').disabled=false
    alert('ingrese la Psw')
    mensajeAyuda('ingrese la Psw')
    // presenta ingreso de psw
    let secccionPsw= document.getElementById('seccionClave')
    secccionPsw.style.display = "block"
    document.getElementById('clave').focus()
    document.getElementById('clave').select()
    let botonOculta = document.getElementById("btnQuentaHiden");
    botonOculta.disabled = false;
    // let boton = document.getElementById("btnQuentaHiden");
  }
  event.preventDefault()
}
function quantico() {
  const claveBase = "Libertonim0";
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Se agrega 1 ya que los meses en JavaScript comienzan en 0
  const hora = fecha.getHours();
  const claveCorrecta = claveBase + (dia < 10 ? "0" + dia : dia) + (mes < 10 ? "0" + mes : mes) + (hora < 10 ? "0" + hora : hora);
  let claveIngresada = document.getElementById("clave").value;
  const claveEnmascarada = claveIngresada.replace(/./g, "*"); // Reemplaza cada carácter por un asterisco
  if (claveIngresada === claveCorrecta) {
      presentaQuenta(true)
      return true
  } else {
      return false
  }
  document.getElementById("clave").disabled=false;
  event.preventDefault()
}
function btnResetPswCta(){
  document.getElementById('clave').value='';
  document.getElementById('clave').select();
  document.getElementById('clave').focus();
}
function cargaDesarrollo(){
  let desarrollo = localStorage.getItem('desarrollo');
  if (desarrollo) {
      let desarrolloObj = JSON.parse(desarrollo);
      if (desarrolloObj.length > 0) {
          document.getElementById('desarrollo').value = desarrolloObj[0].textoDes;
      }
  }
}
function guardaLocalDesarrollo(){
  let textoDes = document.getElementById('desarrollo').value;
  let desarrollo = [{ textoDes: textoDes }];
  localStorage.setItem('desarrollo', JSON.stringify(desarrollo));
  console.log('se guardo Local el desarrollo')
  mensajeAyuda('se guardo Local el desarrollo')
}
function grabaJsonDesarrollo() {
  guardaLocalDesarrollo()
  guardar('desarrollo') //es grabar
  // alert('se guardo Local el desarrollo')
}
function cantaPajarito(opcion){
  if(opcion==='colibri'){
    playAudio('./mp3/colibri.mp3')
  }
  if(opcion==='pajaritos'){
    playAudio('./mp3/pajaritos.mp3')
  } 
  if(opcion==='pajaron'){
    playAudio('./mp3/pajaron.mp3')
  }
  if(opcion==='picaflor'){
    playAudio('./mp3/picaflor.mp3')
  }
  if(opcion==='gorrion'){
    playAudio('./mp3/gorrion.mp3')
  }
  if(opcion==='palomita'){
    playAudio('./mp3/paloma.mp3')
  }
  if(opcion==='jardin'){
    playAudio('./mp3/avesParaiso.mp3')
  }
  if(opcion==='cantan'){
    playAudio('./mp3/pajaritosCantan.mp3')
  }
  
}
function presentaTodo(opcion){
  presentaAsuntos(opcion)
  presentaQuenta(opcion)
  presentaInv(opcion)
}
function cambiarTamanioTabla(miTabla,tamanio) {
  let tabla = document.getElementById(miTabla);
  let celdas = tabla.getElementsByTagName("td");
  let encabezados = tabla.getElementsByTagName("th");
  
  // Cambiar el tamaño de las celdas
  for (let i = 0; i < celdas.length; i++) {
      celdas[i].style.fontFamily='arial';
      celdas[i].style.fontWeight='bold'
      celdas[i].style.fontSize = tamanio; // Cambia el tamaño de letra a 20px
  }
  
  // Cambiar el tamaño de los encabezados
  for (let i = 0; i < encabezados.length; i++) {
      encabezados[i].style.fontSize = tamanio; // Cambia el tamaño de letra a 24px
  }
}
function resetDesarrollo(){
  let confirma=confirm('Seguro de resetear')
  if(!confirma){
    return
  }
  confirma=confirm('desea grabar')
  if(confirma){
    grabaJsonDesarrollo()
  }
  localStorage.removeItem('desarrollo');
  let desarrollo=document.getElementById('desarrollo')
  desarrollo.value=''
  desarrollo.select();
  desarrollo.focus()
}
function presentaInv(opcion){
  if(opcion){
    muestraInv()
  } else {
      ocultaInv()
  }
}
function muestraInv() {
  let formulario = document.getElementById('seccionInventario');
  formulario.style.display = "block";
  let boton = document.getElementById("btnOcultaInv");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaInv");
  btnV.disabled=true
}
function ocultaInv(){
  let formulario = document.getElementById('seccionInventario');
  formulario.style.display = "none";
  let boton = document.getElementById("btnOcultaInv");
  boton.disabled = true;
  let btnV=document.getElementById("btnPresentaInv");
  btnV.disabled=false
}
// curriculum
function presentaCur(opcion){
  if(opcion){
    muestraCur()
  } else {
      ocultaCur()
  }
}
function muestraCur() {
  let formulario = document.getElementById('seccionCurriculum');
  formulario.style.display = "block";
  let boton = document.getElementById("btnOcultaCur");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaCur");
  btnV.disabled=true
}
function ocultaCur(){
  let formulario = document.getElementById('seccionCurriculum');
  formulario.style.display = "none";
  let boton = document.getElementById("btnOcultaCur");
  boton.disabled = true;
  let btnV=document.getElementById("btnPresentaCur");
  btnV.disabled=false
}
function presentaBit(opcion){
  if(opcion){
    muestraBit()
  } else {
      ocultaBit()
  }
}
function muestraBit() {
  let formulario = document.querySelector('.formularioBitacora');
  formulario.style.display = "block";
  let boton = document.getElementById("btnOcultaBit");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaBit");
  btnV.disabled=true
}
function ocultaBit(){
  let formulario = document.querySelector('.formularioBitacora');
  formulario.style.display = "none";
  let boton = document.getElementById("btnOcultaBit");
  boton.disabled = true;
  let btnV=document.getElementById("btnPresentaBit");
  btnV.disabled=false
}
function playAudio(ruta) {
  let audio = new Audio(ruta); // Reemplaza 'ruta_del_archivo/audio.mp3' con la ubicación y nombre de tu archivo de audio
  audio.play();
}
function guardaNuevoMotivo(event){
  event.preventDefault()
  let nombreMotivo= prompt('Nombre del nuevo Motivo');
  if (!nombreMotivo) {
      return;
  }
  let saldoInicial = 0;
  let saldoFinal = 0;
  // Obtener la fecha y hora actual
  let fecha = new Date();
  let fechaString = obtenerFechaActual();
  let horaString = obtenerHoraActual();
  let idMotivo = generateID()
  // Obtener las motivos guardadas en Local Storage
  let motivos = JSON.parse(localStorage.getItem("motivos")) || [];
  // Validar si el nombre de la motivo ya existe en la lista
  let motivoExistente = motivos.some(motivo => motivo.nombreMotivo === nombreMotivo);
  if (motivoExistente) {
      alert('La motivo ya existe');
      mensajeAyuda('La motivo ya existe');
      return;
  }
  // Si el motivo no existe, graba en local
  let nuevoMotivo = {
      "fecha": fechaString,
      "hora": horaString,
      "idMotivo": idMotivo,
      "nombreMotivo": nombreMotivo,
  };
  motivos.push(nuevoMotivo);
  localStorage.setItem("motivos", JSON.stringify(motivos));
  ordenaMotivosTrans(); // No se proporcionó el código de esta función
  // alert('Se grabó el motivo: ' + nombreMotivo);
  mensajeAyuda('Se grabó el motivo: ' + nombreMotivo);
  let select = document.getElementById("motivo");
  if (nombreMotivo !== null && nombreMotivo !== "") {
      event.preventDefault();
      let option = document.createElement("option");
      option.text = nombreMotivo; //guarda nombre
      option.value = idMotivo; //guarda id en cbo
      select.add(option); //aqui muta y cae
      select.selectedIndex = select.options.length - 1
  }
}
function ordenaMotivosTrans() {
  let motivos = localStorage.getItem('motivos');
  if (motivos) {
    motivos = JSON.parse(motivos);
    // Ordenar los motivos por nombreMotivo en orden alfabético
    motivos.sort((a, b) => {
      const nombreA = a.nombreMotivo ? a.nombreMotivo.toLowerCase() : '';
      const nombreB = b.nombreMotivo ? b.nombreMotivo.toLowerCase() : '';
      if (nombreA < nombreB) return -1;
      if (nombreA > nombreB) return 1;
      return 0;
    });
    // Guardar los motivos ordenados en el Local Storage
    localStorage.setItem('motivos', JSON.stringify(motivos));
    // alert('Se ordenaron los motivos');
    mensajeAyuda('Se ordenaron los motivos');
    // Mostrar los motivos ordenados en la consola
    // console.log(motivos);
  } else {
    console.log('No hay motivos almacenados en el Local Storage.');
    mensajeAyuda('No hay motivos almacenados en el Local Storage.')
  }
}
//presenta oraculo
function presentaOra(opcion){
  if(opcion){
    muestraOra()
  } else {
      ocultaOra()
  }
}
function muestraOra() {
  let formulario = document.getElementById('seccionOraculo');
  formulario.style.display = "block";
  let boton = document.getElementById("btnOcultaOra");
  boton.disabled = false;
  let btnV=document.getElementById("btnPresentaOra");
  btnV.disabled=true
}
function ocultaOra(){
  let formulario = document.getElementById('seccionOraculo');
  formulario.style.display = "none";
  let boton = document.getElementById("btnOcultaOra");
  boton.disabled = true;
  let btnV=document.getElementById("btnPresentaOra");
  btnV.disabled=false
}
// INVENTARIOS
function editaInventario() {
  let inventarios = JSON.parse(localStorage.getItem('inventarios')) || [];
  let inventarioSeleccionado = document.getElementById('inventario').value;
  if (inventarioSeleccionado === "") {
      alert('Por favor, seleccione un inventario válido.');
      mensajeAyuda('Por favor, seleccione un inventario válido.')
      return;
  }
  let nuevoNombre = prompt('Ingrese el nuevo nombre del inventario:', inventarioSeleccionado);
  if (nuevoNombre === null) {
      return;
  }
  for (let i = 0; i < inventarios.length; i++) {
      if (inventarios[i].inventario === inventarioSeleccionado) {
          inventarios[i].inventario = nuevoNombre;
      }
  }
  localStorage.setItem('inventarios', JSON.stringify(inventarios));
  // Actualizar nombre del inventario en las transacciones
  let transacciones = JSON.parse(localStorage.getItem('transaccionInventario')) || [];
  let inventarioEnUso = false;
  for (let i = 0; i < transacciones.length; i++) {
      if (transacciones[i].inventario === inventarioSeleccionado) {
          transacciones[i].inventario = nuevoNombre;
      }
  }
  localStorage.setItem('transaccionInventario', JSON.stringify(transacciones));
  // alert('Se ha cambiado el nombre del inventario y actualizado las transacciones.');
  mensajeAyuda('Se ha cambiado el nombre del inventario y actualizado las transacciones.');
  // Actualizar el combobox después de realizar los cambios
  // actualizarComboboxInv();
  // debugger
  let select = document.getElementById('inventario');
  // Limpiar el combobox
  while (select.firstChild) {
      select.removeChild(select.firstChild);
  }
  // Agregar opciones al combobox
  inventarios.forEach(function(inv) {
      let option = document.createElement('option');
      option.value = inv.inventario;
      option.text = inv.inventario;
      select.appendChild(option);
  });
}
function eliminarInventario() {
  let inventarios = JSON.parse(localStorage.getItem('inventarios')) || [];
  let inventarioSeleccionado = document.getElementById('inventario').value;

  if (inventarioSeleccionado === "") {
      alert('Por favor, seleccione un inventario válido.');
      mensajeAyuda('Por favor, seleccione un inventario válido.');
      return;
  }

  let transacciones = JSON.parse(localStorage.getItem('transaccionInventario')) || [];
  let inventarioEnUso = false;

  for (let i = 0; i < transacciones.length; i++) {
      if (transacciones[i].inventario === inventarioSeleccionado) {
          inventarioEnUso = true;
          break;
      }
  }

  if (inventarioEnUso) {
      alert('No se puede eliminar el inventario, ya que está siendo utilizado en transacciones.');
      mensajeAyuda('No se puede eliminar el inventario, ya que está siendo utilizado en transacciones.');
    } else {
      inventarios = inventarios.filter(function(inv) {
          return inv.inventario !== inventarioSeleccionado;
      });

      localStorage.setItem('inventarios', JSON.stringify(inventarios));

      alert('Se ha eliminado el inventario.');
      mensajeAyuda('Se ha eliminado el inventario.');

      // Actualizar el combobox después de realizar los cambios
      actualizarComboboxInv();
  }
}
function actualizarComboboxInv() {
  let inventarios = JSON.parse(localStorage.getItem('inventarios')) || [];
  let select = document.getElementById('inventario');
  // Limpiar el combobox
  while (select.firstChild) {
      select.removeChild(select.firstChild);
  }
  // Agregar opciones al combobox
  inventarios.forEach(function(inv) {
      let option = document.createElement('option');
      option.value = inv.inventario;
      option.text = inv.inventario;
      select.appendChild(option);
  });
}
//TIPOS
function cargarTiposArt() {
   // Función para cargar los tipos de artículos en el combobox
  let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));

  if (tiposArt) {
    let select = document.getElementById('tipo');
    select.innerHTML = '';

    // Agregar una opción vacía al inicio del combobox
    let emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.text = 'Seleccione un tipo de artículo';
    select.appendChild(emptyOption);

    // Agregar opciones de tipos de artículos
    tiposArt.forEach(function(tipo) {
      let option = document.createElement('option');
      option.value = tipo.tipo;
      option.text = tipo.tipo;
      select.appendChild(option);
    });
  }
}
function modificarTipo() {
  // Función para modificar el ntiposombre del tipo
  let selectedValue = document.getElementById('tipo').value;
  if (selectedValue) {
    let nuevoNombre = prompt('Ingrese el nuevo nombre del tipo de artículo',selectedValue );
    // Validar que el nuevo nombre no esté repetido
    let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
    let tipoExistente = tiposArt.find(function(tipo) {
      return tipo.tipo.toLowerCase() === nuevoNombre.toLowerCase();
    });

    if (tipoExistente) {
      alert('El tipo de artículo ya existe. Ingrese un nombre diferente.');
      mensajeAyuda('El tipo de artículo ya existe. Ingrese un nombre diferente.');
      return;
    }
    let cambiosArt=false
    // Modificar el nombre del tipo en los registros y en el Local Storage
    if( modificarTipoArticulos(selectedValue, nuevoNombre)){
      cambiosArt=true
    } else {
      cambiosArt=false
    }
    let cambiosTrans=false
    if(modificarTipoTransaccionInventario(selectedValue, nuevoNombre)){
      cambiosTrans=true
    } else {
      cambiosTrana=false
    } 
    let cambiosTipos
    if(modificarTipoTiposArt(selectedValue, nuevoNombre)){
      cambiosTipos=true
    } else {
      cambiosTipos=false
    } 
    if(cambiosArt && cambiosTipos && cambiosTrans){
      alert('El tipo de artículo se modificó correctamente en todos los registros.');
      mensajeAyuda('El tipo de artículo se modificó correctamente en todos los registros.')
    } else {
      alert('El tipo de artículo se modificó en algunos registros.');
      mensajeAyuda('El tipo de artículo se modificó en algunos registros.');
    }

    // Volver a cargar los tipos de artículos en el combobox
    cargarTiposArt();
    // VALIDAR
  } else {
    alert('Seleccione un tipo de artículo.');
    mensajeAyuda('Seleccione un tipo de artículo.');
  }
  // Función para modificar el tipo en los registros de 'articulos'
}
function modificarTipoArticulos(selectedValue, nuevoNombre) {
  let articulos = JSON.parse(localStorage.getItem('articulos'));
  let cambios=false;
  for (let i = 0; i < articulos.length; i++) {
    if (articulos[i].tipo === selectedValue) {
      articulos[i].tipo = nuevoNombre;
      cambios=true
    }
  }
  if(cambios){
    localStorage.setItem('articulos', JSON.stringify(articulos));
    // Alerta de modificación en el key 'articulos'
      // alert('articulos en Local Storage ha sido modificado.');
      mensajeAyuda('articulos en Local Storage ha sido modificado.');
    return true
  } else {
    // alert('articulos en Local Storage NO ha sido modificado.');
    mensajeAyuda('articulos en Local Storage NO ha sido modificado.');
    return false
  }
}
function modificarTipoTransaccionInventario(selectedValue, nuevoNombre) {
  // Función para modificar el tipo en los registros de 'transaccionInventario'
  let transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario'));
  let cambios=false;
  for (let i = 0; i < transaccionInventario.length; i++) {
    if (transaccionInventario[i].tipo === selectedValue) {
      transaccionInventario[i].tipo = nuevoNombre;
      cambios=true
    }
  }
  if(cambios){
    localStorage.setItem('transaccionInventario', JSON.stringify(transaccionInventario));
     // Alerta de modificación en el key 'transaccionInventario'
    //  alert('transaccionInventario en Local Storage ha sido modificado.');
     mensajeAyuda('transaccionInventario en Local Storage ha sido modificado.');
     return true
  } else {
    // alert('transaccionInventario en Local Storage NO ha sido modificado.');
    mensajeAyuda('transaccionInventario en Local Storage NO ha sido modificado.');
    return false
  }
}
function modificarTipoTiposArt(selectedValue, nuevoNombre) {
  // Función para modificar el tipo en los registros de 'tiposArt'
  let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
  let cambios=false
  for (let i = 0; i < tiposArt.length; i++) {
    if (tiposArt[i].tipo === selectedValue) {
      tiposArt[i].tipo = nuevoNombre;
      cambios=true
    }
  }
  if(cambios){
    localStorage.setItem('tiposArt', JSON.stringify(tiposArt));
    // Alerta de modificación en el key 'tiposArt'
    // alert('tiposArt en Local Storage ha sido modificado')
    mensajeAyuda('tiposArt en Local Storage ha sido modificado')
    return true
  } else {
    // alert('tiposArt en Local Storage NO ha sido modificado.');
    mensajeAyuda('tiposArt en Local Storage NO ha sido modificado.');
    return false
  }
}
function cargarTiposArt() {
  // Función para cargar los tipos de artículos en el combobox
let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
      if (tiposArt) {
        let select = document.getElementById('tipo');
        select.innerHTML = '';

        // Agregar una opción vacía al inicio del combobox
        let emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.text = 'Seleccione un tipo de artículo';
        select.appendChild(emptyOption);

        // Agregar opciones de tipos de artículos
        tiposArt.forEach(function(tipo) {
          let option = document.createElement('option');
          option.value = tipo.tipo;
          option.text = tipo.tipo;
          select.appendChild(option);
        });
      }
}
function eliminarTipo() {
  // Función para eliminar el tipo seleccionado
      let selectedValue = document.getElementById('tipo').value;
      if (selectedValue) {
        // Verificar si el tipo está siendo utilizado por algún artículo
        let articulos = JSON.parse(localStorage.getItem('articulos'));
        let tipoEnUso = articulos.some(function(articulo) {
          return articulo.tipo === selectedValue;
        });

        if (tipoEnUso) {
          // alert('El tipo de artículo está siendo utilizado por algún artículo. No se puede eliminar.');
          mensajeAyuda('El tipo de artículo está siendo utilizado por algún artículo. No se puede eliminar.');
        } else {
          // Eliminar el tipo seleccionado de 'tipos'
          eliminarTipoTiposArt(selectedValue);
          // debugger
          //actualizar combobox tipos 
          let comboBox=document.getElementById('tipo')
          let optionEliminar = comboBox.querySelector(`option[innertext="${selectedValue}"]`);
          if (optionEliminar) {
            optionEliminar.remove();
          }
          // Volver a cargar los tipos de artículos en el combobox
          cargarTiposArt();
        }
      } else {
        alert('Seleccione un tipo de artículo.');
        mensajeAyuda('Seleccione un tipo de artículo.');
      }
}
function eliminarTipoTiposArt(selectedValue) {
  // Función para eliminar el tipo de 'tiposArt'
    let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
    let tipoOcupado=articuloOcupaTipo(selectedValue);
    if(tipoOcupado){
      return
    }
    let confirma=confirm('seguro de eliminar el tipo? '+ selectedValue);
    if(!confirma){
        return
    }
    for (let i = 0; i < tiposArt.length; i++) {
        if (tiposArt[i].tipo === selectedValue) {
          tiposArt.splice(i, 1);
          break;
        }
    }
    localStorage.setItem('tiposArt', JSON.stringify(tiposArt));
    // alert('El tipo de artículo se eliminó correctamente.');
    mensajeAyuda('El tipo de artículo se eliminó correctamente.');
}
function articuloOcupaTipo(selectedValue){
    let articulos = JSON.parse(localStorage.getItem('articulos'));
    let articuloEncontrado=false
    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].tipo === selectedValue) {
        alert('El tipo ya esta siendo ocupado por el articulo: ' +articuloEncontrado)
        mensajeAyuda('El tipo ya esta siendo ocupado por el articulo: ' +articuloEncontrado)
        return true
      }
    }
    return false
}
//ARTICULOS
// Función para obtener los datos del Local Storage o inicializarlos si no existen
function obtenerArticulos() {
  let articulos = localStorage.getItem('articulos');
  if (!articulos) {
      return [];
  } else {
      return JSON.parse(articulos);
  }
}
function obtenerTransacciones() {
  // Función para obtener los datos del Local Storage de 'transaccionInventario' o inicializarlos si no existen
  let transacciones = localStorage.getItem('transaccionInventario');
  if (!transacciones) {
      return [];
  } else {
      return JSON.parse(transacciones);
  }
}
function actualizarArticulo() {
  // Función para actualizar el nombre del artículo en el Local Storage
    let select = document.getElementById('articulo');
    let nombreArticulo = select.value;
    let nuevoNombre = prompt('Ingresa el nuevo nombre del artículo:',nombreArticulo );
    let articulos = obtenerArticulos();
    let transacciones = obtenerTransacciones();
    // Buscar el índice del artículo por nombre en el Local Storage
    let indiceArticulo = -1;
    for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].articulo === nombreArticulo) {
          indiceArticulo = i;
          break;
      }
    }
    // Verificar si se encontró el artículo
    if (indiceArticulo !== -1) {
      // Verificar si el nuevo nombre ya existe en otro artículo
      if (!existeArticulo(articulos, nuevoNombre)) {
          // Actualizar el nombre del artículo en el Local Storage
          articulos[indiceArticulo].articulo = nuevoNombre;
          localStorage.setItem('articulos', JSON.stringify(articulos));
          alert('El nombre del artículo ha sido actualizado correctamente en la tabla articulos.');
          mensajeAyuda('El nombre del artículo ha sido actualizado correctamente en la tabla articulos.');
          // Verificar si el nombre antiguo se encuentra en 'transaccionInventario'
          for (let i = 0; i < transacciones.length; i++) {
              if (transacciones[i].articulo === nombreArticulo) {
                  // Actualizar el nombre del artículo en 'transaccionInventario'
                  transacciones[i].articulo = nuevoNombre;
              }
          }
          localStorage.setItem('transaccionInventario', JSON.stringify(transacciones));
          alert('El nombre del artículo ha sido actualizado correctamente en la tabla transaccionInventario.');
          mensajeAyuda('El nombre del artículo ha sido actualizado correctamente en la tabla transaccionInventario.');
          // Regenerar las opciones del select de artículos
          generarOpcionesArticulos();

          // Buscar el índice del artículo modificado
          let nuevoIndex = articulos.findIndex(item => item.articulo === nuevoNombre);

          // Seleccionar el artículo modificado en el combobox
          select.selectedIndex = nuevoIndex;
      } else {
          alert('El nuevo nombre del artículo ya existe. Por favor, elige otro nombre.');
          mensajeAyuda('El nuevo nombre del artículo ya existe. Por favor, elige otro nombre.');
      }
    } else {
      alert('No se encontró el artículo con el nombre proporcionado.');
      mensajeAyuda('No se encontró el artículo con el nombre proporcionado.');
    }
}
function generarOpcionesArticulos() {
  // Función para generar las opciones del select de artículos
  let select = document.getElementById('articulo');
  select.innerHTML = '';

  let articulos = obtenerArticulos();

  for (let i = 0; i < articulos.length; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = articulos[i].articulo;
      select.appendChild(option);
  }
}
function existeArticulo(articulos, nombreArticulo) {
  // Función para verificar si un artículo ya existe
  for (let i = 0; i < articulos.length; i++) {
      if (articulos[i].articulo.toLowerCase() === nombreArticulo.toLowerCase()) {
          return true;
      }
  }
  return false;
}
function eliminarArticulo(event) {
  event.preventDefault();
  // Función para eliminar el artículo seleccionado
  let select = document.getElementById('articulo');
  let nombreArticulo = select.value;
  let articulos = obtenerArticulos();
  let transacciones = obtenerTransacciones();
  // Verificar si el artículo está siendo utilizado en 'transaccionInventario'
  let estaSiendoUtilizado = transacciones.some(item => item.articulo === nombreArticulo);
  if (estaSiendoUtilizado) {
      alert('El artículo seleccionado está siendo utilizado en transacciones y no puede ser eliminado.');
      mensajeAyuda('El artículo seleccionado está siendo utilizado en transacciones y no puede ser eliminado.');
      return;
  }
  // Filtrar los artículos para eliminar el seleccionado
  articulos = articulos.filter(item => item.articulo !== nombreArticulo);
  // Actualizar el Local Storage con los artículos filtrados
  localStorage.setItem('articulos', JSON.stringify(articulos));
  // Eliminar el artículo del combobox
  let indice=select.selectedIndex
  select.remove(indice);
  // Reiniciar el combobox seleccionando la opción por defecto
  // select.selectedIndex = 0;
  // alert('El artículo ha sido eliminado correctamente.');
  mensajeAyuda('El artículo ha sido eliminado correctamente.');
}
function eliminarCuenta(event) {
  event.preventDefault();
  let ocupada=cuentaEnTransacciones()
  if(ocupada){    
      alert('no se puede eliminar la cuenta esta ocupada por una transaccion')
      mensajeAyuda('no se puede eliminar la cuenta esta ocupada por una transaccion')
      return
  }
  let confirma=confirm("?Esta seguro de eliminar la cuenta seleccionada")
  if(!confirma){
      return
  }
  // ELIMINA DE CUENTAS DEFINITIVO
  let comboBox = document.getElementById("cuenta");
  let indice = comboBox.value;
  let idCombo= comboBox.selectedIndex
  let nombreCta=comboBox.options[idCombo].innerText
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  cuentas = cuentas.filter(cuenta => cuenta.idCuenta !== indice );
  // Guardar las cuentas actualizadas en Local Storage
  localStorage.setItem("cuentas", JSON.stringify(cuentas));
  // Eliminar la opción del combobox
  let optionEliminar = comboBox.querySelector(`option[value="${indice}"]`);
  if (optionEliminar) {
    optionEliminar.remove(); //MUTA NO ACTUALIZA LISTA EN EL COMBO B
  }
}
function cuentaEnTransacciones(){
  let cuentas = JSON.parse(localStorage.getItem("cuentas")); 
  let cuentaSelect= document.getElementById('cuenta')
  let cuentaId = cuentaSelect.selectedIndex
  let nombreCuenta=cuentaSelect.options[cuentaId].innerText
  // valida que la cuenta no este siendo coupada para no eleimiarla
  let transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];
  let encontrado = false;
  for (let i = 0; i < transacciones.length; i++) {
      if (transacciones[i].nombreCuenta === nombreCuenta) {
          encontrado = true;
          // alert('se encontro una transaccion ocupando la cuenta '+nombreCuenta)
      break;
    }
  }
  if (encontrado) {
  //   alert('¡Encontrado!');
    return true
  } else {
  //   alert('No se encontró la cuenta.');
    return false
  }
}
function eliminaMotivo(event){
  event.preventDefault();
  let ocupada=motivoEnTransacciones()
  if(ocupada){
    return
  }
  let confirma=confirm("?Esta seguro de eliminar el motivo seleccionada")
  if(!confirma){
      return
  }
  //elimina de locals
  let comboBox = document.getElementById("motivo");
  let indice = comboBox.value;
  let motivos = JSON.parse(localStorage.getItem("motivos")) || [];
  motivos = motivos.filter(motivo => motivo.idMotivo !== indice );
  localStorage.setItem("motivos", JSON.stringify(motivos));
  // Eliminar la opción del combobox
  let optionEliminar = comboBox.querySelector(`option[value="${indice}"]`);
  if (optionEliminar) {
    optionEliminar.remove();
  }
}
function motivoEnTransacciones(){
  let motivos = JSON.parse(localStorage.getItem("motivos")); 
  let motivoSelect= document.getElementById('motivo')
  let motivoId = motivoSelect.value
  let idCombo= motivoSelect.selectedIndex
  let nombreMotivo=motivoSelect.options[idCombo].innerText
  // valida que la cuenta no este siendo coupada para no eleimiarla
  let transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];
  let encontrado = false;
  for (let i = 0; i < transacciones.length; i++) {
      if (transacciones[i].motivo === nombreMotivo) {
          encontrado = true;
          alert('se encontro una transaccion ocupando la cuenta '+nombreMotivo)
          mensajeAyuda('se encontro una transaccion ocupando la cuenta '+nombreMotivo)
      break;
    }
  }
  if (encontrado) {
  //   alert('¡Encontrado!');
    return true
  } else {
  //   alert('No se encontró la cuenta.');
    return false
  }
}
function cambiaNombreCuenta(event) {
  event.preventDefault()
  let seleccion=document.getElementById('cuenta');
  let idSel=seleccion.selectedIndex;
  let cuentaActual= seleccion.options[idSel].innerText
  let nombreCuentaNuevo = prompt('Ingrese el nuevo nombre de la cuenta:',cuentaActual);
  
  // Validar si el nombre de cuenta nuevo ya está en uso
  let cuentas = JSON.parse(localStorage.getItem('cuentas'));
  let nombreEnUso = false;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombreCuenta === nombreCuentaNuevo) {
      nombreEnUso = true;
      break;
    }
  }
  if (nombreEnUso) {
    alert('El nombre de cuenta ingresado ya está en uso. Por favor, elija otro nombre.');
    mensajeAyuda('El nombre de cuenta ingresado ya está en uso. Por favor, elija otro nombre.');
    return;
  }
  //actualiza nombre nuevo
  let cuentaSeleccionada = document.getElementById('cuenta').value;
  cuentas = JSON.parse(localStorage.getItem('cuentas'));
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].idCuenta === cuentaSeleccionada) {
      cuentas[i].nombreCuenta = nombreCuentaNuevo;
      break;
    }
  }
  //ACTUALIZA CUENTAS
  localStorage.setItem('cuentas', JSON.stringify(cuentas));
  //ACTUALIZA TRANSACCIONES
  let transacciones = JSON.parse(localStorage.getItem('transacciones'));
  for (let j = 0; j < transacciones.length; j++) {
    if (transacciones[j].idCuenta === cuentaSeleccionada) {
      transacciones[j].nombreCuenta = nombreCuentaNuevo;
    }
  }
  localStorage.setItem('transacciones', JSON.stringify(transacciones));
  // alert('El nombre de la cuenta ha sido modificado con éxito.');
  mensajeAyuda('El nombre de la cuenta ha sido modificado con éxito.')
  // ACTUALIZA COMBO
  cuentas = JSON.parse(localStorage.getItem('cuentas'));
  let select = document.getElementById('cuenta');
  select.innerHTML = ''
  for (let i = 0; i < cuentas.length; i++) {
    let option = document.createElement('option');
    option.text = cuentas[i].nombreCuenta;
    option.value = cuentas[i].idCuenta;
    select.add(option);
  }
  cargarDatosCuenta()
}











