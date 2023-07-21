// leeLLamadasLocal()
leeLLamadasLocal()
document.getElementById('numeroServicio').select()
document.getElementById('numeroServicio').focus()
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
        // debugger
    // Parsear el contenido del archivo como un objeto JSON
    let listaLLamadas = JSON.parse(lector.result);
    //calculo numero de llamadas
    let totalLLamadas=listaLLamadas.length
    // Almacenar la lista de personas en Local Storage
    localStorage.setItem("calls", JSON.stringify(listaLLamadas));
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
//////////////////////////////
//se lee un archivo de llamadas a analizar por hora para que esten en un key aparte
const data = JSON.parse(localStorage.getItem('calls'));
const select = document.getElementById('horaInicio');
if(data===null){
  alert("no hay llamadas 'calls' de analisis en local")
} else {
  const tablaResultados = document.getElementById('tablaResultados');
  //LLENA LIST
  data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.horaInicio;
      option.textContent = item.horaInicio;
      select.appendChild(option);
  });
}
//PRESENTA x hora desde calls en local storagge
select.addEventListener('change', (event) => {
    const horaSeleccionada = event.target.value;
    tablaResultados.innerHTML = '';
    data.forEach(item => {
        if (item.horaInicio === horaSeleccionada) {
            const tr = document.createElement('tr');
            const tdNumeroServicio = document.createElement('td');
            tdNumeroServicio.textContent = item.numeroServicio;
            tr.appendChild(tdNumeroServicio);
            const tdDigitoVerificador = document.createElement('td');
            tdDigitoVerificador.textContent = item.digitoVerificador;
            tr.appendChild(tdDigitoVerificador);
            const tdFechaInicio = document.createElement('td');
            tdFechaInicio.textContent = item.fechaInicio;
            tr.appendChild(tdFechaInicio);
            const tdNombreUsuario = document.createElement('td');
            tdNombreUsuario.textContent = `${item.usuarioNombres} ${item.UsuarioApellidoPaterno} ${item.UsuarioApellidoMaterno}`;
            tr.appendChild(tdNombreUsuario);
            const tdRut = document.createElement('td');
            tdRut.textContent = item.rut;
            tr.appendChild(tdRut);
            const tdCelular = document.createElement('td');
            tdCelular.textContent = item.celular;
            tr.appendChild(tdCelular);
            const tdEmail = document.createElement('td');
            tdEmail.textContent = item.mail;
            tr.appendChild(tdEmail);
            const tdAsunto = document.createElement('td');
            tdAsunto.textContent = item.asunto;
            tr.appendChild(tdAsunto);
            const tdGlosa = document.createElement('td');
            tdGlosa.textContent = item.glosa;
            tr.appendChild(tdGlosa);
            const tdDesarrollo = document.createElement('td');
            tdDesarrollo.textContent = item.desarrollo;
            tr.appendChild(tdDesarrollo);
            const tdRecordatorio = document.createElement('td');
            tdRecordatorio.textContent = item.recordatorio;
            tr.appendChild(tdRecordatorio);
            const tdNumeroAtencion = document.createElement('td');
            tdNumeroAtencion.textContent = item.numeroAtencion;
            tr.appendChild(tdNumeroAtencion);
            const tdNumeroAviso = document.createElement('td');
            tdNumeroAviso.textContent = item.numeroAviso;
            tr.appendChild(tdNumeroAviso);
            const tdNumeroOrden = document.createElement('td');
            tdNumeroOrden.textContent = item.numeroOrden;
            tr.appendChild(tdNumeroOrden);
            tablaResultados.appendChild(tr);
         }
    });
});
// debugger
//////////////////////////
//se lee un archivo de llamadas a analizar por hora para que esten en un key aparte
const dataActual = JSON.parse(localStorage.getItem('llamadas'));
const selectActual = document.getElementById('horaInicioActual');
if(dataActual===null){
  alert("no hay llamadas en local")
} else {
  const tablaHoraActual = document.getElementById('tablaHoraActual');
  //LLENA LIST
  dataActual.forEach(item => {
      const option = document.createElement('option');
      option.value = item.horaInicio;
      option.textContent = item.horaInicio;
      selectActual.appendChild(option);
  });
}
//PRESENTA x hora desde calls en local storagge
selectActual.addEventListener('change', (event) => {
    const horaSeleccionada = event.target.value;
    tablaHoraActual.innerHTML = '';
    dataActual.forEach(item => {
        if (item.horaInicio === horaSeleccionada) {
            const tr = document.createElement('tr');
            const tdNumeroServicio = document.createElement('td');
            tdNumeroServicio.textContent = item.numeroServicio;
            tr.appendChild(tdNumeroServicio);
            const tdDigitoVerificador = document.createElement('td');
            tdDigitoVerificador.textContent = item.digitoVerificador;
            tr.appendChild(tdDigitoVerificador);
            const tdFechaInicio = document.createElement('td');
            tdFechaInicio.textContent = item.fechaInicio;
            tr.appendChild(tdFechaInicio);
            const tdNombreUsuario = document.createElement('td');
            tdNombreUsuario.textContent = `${item.usuarioNombres} ${item.UsuarioApellidoPaterno} ${item.UsuarioApellidoMaterno}`;
            tr.appendChild(tdNombreUsuario);
            const tdRut = document.createElement('td');
            tdRut.textContent = item.rut;
            tr.appendChild(tdRut);
            const tdCelular = document.createElement('td');
            tdCelular.textContent = item.celular;
            tr.appendChild(tdCelular);
            const tdEmail = document.createElement('td');
            tdEmail.textContent = item.mail;
            tr.appendChild(tdEmail);
            const tdAsunto = document.createElement('td');
            tdAsunto.textContent = item.asunto;
            tr.appendChild(tdAsunto);
            const tdGlosa = document.createElement('td');
            tdGlosa.textContent = item.glosa;
            tr.appendChild(tdGlosa);
            const tdDesarrollo = document.createElement('td');
            tdDesarrollo.textContent = item.desarrollo;
            tr.appendChild(tdDesarrollo);
            const tdRecordatorio = document.createElement('td');
            tdRecordatorio.textContent = item.recordatorio;
            tr.appendChild(tdRecordatorio);
            const tdNumeroAtencion = document.createElement('td');
            tdNumeroAtencion.textContent = item.numeroAtencion;
            tr.appendChild(tdNumeroAtencion);
            const tdNumeroAviso = document.createElement('td');
            tdNumeroAviso.textContent = item.numeroAviso;
            tr.appendChild(tdNumeroAviso);
            const tdNumeroOrden = document.createElement('td');
            tdNumeroOrden.textContent = item.numeroOrden;
            tr.appendChild(tdNumeroOrden);
            tablaHoraActual.appendChild(tr);
         }
    });
});
//////////////////////////////
//BUSCA X HORA en calls desde local storage
function buscar() {
  const numeroServicio = document.getElementById("numeroServicio").value;
  const llamadas = JSON.parse(localStorage.getItem("calls"));
  const llamadaEncontrada = llamadas.find(llamada => llamada.numeroServicio === numeroServicio);
  if (llamadaEncontrada) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>ID: ${llamadaEncontrada.idNow}</p>
      <p>RAC: ${llamadaEncontrada.rac}</p>
      <p>Fecha inicio: ${llamadaEncontrada.fechaInicio}</p>
      <p>Hora inicio: ${llamadaEncontrada.horaInicio}</p>
      <p>Hora final: ${llamadaEncontrada.horaFinal}</p>
      <p>Usuario: ${llamadaEncontrada.usuarioNombres} ${llamadaEncontrada.UsuarioApellidoPaterno} ${llamadaEncontrada.UsuarioApellidoMaterno}</p>
      <p>RUT: ${llamadaEncontrada.rut}</p>
      <p>Celular: ${llamadaEncontrada.celular}</p>
      <p>Mail: ${llamadaEncontrada.mail}</p>
      <p>Dirección: ${llamadaEncontrada.direccion} ${llamadaEncontrada.calle} ${llamadaEncontrada.numeroDireccion} ${llamadaEncontrada.depto} ${llamadaEncontrada.comuna}</p>
      <p>Referencia: ${llamadaEncontrada.referencia}</p>
      <p>Número de servicio: ${llamadaEncontrada.numeroServicio}</p>
      <p>Dígito verificador: ${llamadaEncontrada.digitoVerificador}</p>
      <p>Asunto: ${llamadaEncontrada.asunto}</p>
      <p>Desarrollo: ${llamadaEncontrada.desarrollo}</p>
      <p>Glosa: ${llamadaEncontrada.glosa}</p>
      <p>Recordatorio: ${llamadaEncontrada.recordatorio}</p>
      <p>Número de atención: ${llamadaEncontrada.numeroAtencion}</p>
      <p>Número de aviso: ${llamadaEncontrada.numeroAviso}</p>
      <p>Número de orden: ${llamadaEncontrada.numeroOrden}</p>
    `;
  } else {
    alert("No se encontró ninguna llamada con ese número de servicio.");
  }
}
//LEE DE LOCAL STORAGE Y LO DESPLICGA COMO TABLA ABAJO
function leeLLamadasLocal(){
  let total=0
  // Obtenemos los datos de Local Storage
  const storedData = localStorage.getItem('llamadas');
  // debugger
  if (storedData===
    'undefined'){
      alert('Sin llamadas CALLS en Local')
      return
  }
  // Comprobamos si hay datos almacenados
  if (storedData) {
      // Parseamos los datos a un objeto JavaScript
      const parsedData = JSON.parse(storedData);
    // Si los datos son una lista de objetos, podemos iterar sobre ella
    if (Array.isArray(parsedData)) {
      //VALIDA QUE LA TABLA NO EXISTA
      validaSiTablasBorra('tablaLLamadasActual')
      validaSiTablasBorra('tablaLLamadasAnalisis')

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
      table.setAttribute("id", "tablaLLamadasActual");
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
//LEE DE LOCAL STORAGE Y LO DESPLICGA COMO TABLA ABAJO
function leeLLamadasAnalisis(){
  let total=0
  // Obtenemos los datos de Local Storage
  const storedData = localStorage.getItem('calls');
  // debugger
  if (storedData===
    'undefined'){
      alert('Sin llamadas Calls en analisis')
      return
  }
  // Comprobamos si hay datos almacenados
  if (storedData) {
      // Parseamos los datos a un objeto JavaScript
      const parsedData = JSON.parse(storedData);
    // Si los datos son una lista de objetos, podemos iterar sobre ella
    if (Array.isArray(parsedData)) {
      //VALIDA QUE LA TABLA NO EXISTA
      validaSiTablasBorra('tablaLLamadasActual')
      validaSiTablasBorra('tablaLLamadasAnalisis')
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
      table.setAttribute("id", "tablaLLamadasAnalisis");
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
//borra tabla para desplegar
function validaSiTablasBorra(tablaVal){
    let sitabla=document.getElementById(tablaVal)
    if (sitabla) {
      sitabla.remove();
    }
}

//BUSCA X HORA en calls desde local storage
function buscarActual() {
  const numeroServicio = document.getElementById("numeroServicioActual").value;
  const llamadas = JSON.parse(localStorage.getItem("llamadas"));
  const llamadaEncontrada = llamadas.find(llamada => llamada.numeroServicio === numeroServicio);
  if (llamadaEncontrada) {
    const resultadoDiv = document.getElementById("resultadoActual");
    resultadoDiv.innerHTML = `
      <p>ID: ${llamadaEncontrada.idNow}</p>
      <p>RAC: ${llamadaEncontrada.rac}</p>
      <p>Fecha inicio: ${llamadaEncontrada.fechaInicio}</p>
      <p>Hora inicio: ${llamadaEncontrada.horaInicio}</p>
      <p>Hora final: ${llamadaEncontrada.horaFinal}</p>
      <p>Usuario: ${llamadaEncontrada.usuarioNombres} ${llamadaEncontrada.UsuarioApellidoPaterno} ${llamadaEncontrada.UsuarioApellidoMaterno}</p>
      <p>RUT: ${llamadaEncontrada.rut}</p>
      <p>Celular: ${llamadaEncontrada.celular}</p>
      <p>Mail: ${llamadaEncontrada.mail}</p>
      <p>Dirección: ${llamadaEncontrada.direccion} ${llamadaEncontrada.calle} ${llamadaEncontrada.numeroDireccion} ${llamadaEncontrada.depto} ${llamadaEncontrada.comuna}</p>
      <p>Referencia: ${llamadaEncontrada.referencia}</p>
      <p>Número de servicio: ${llamadaEncontrada.numeroServicio}</p>
      <p>Dígito verificador: ${llamadaEncontrada.digitoVerificador}</p>
      <p>Asunto: ${llamadaEncontrada.asunto}</p>
      <p>Desarrollo: ${llamadaEncontrada.desarrollo}</p>
      <p>Glosa: ${llamadaEncontrada.glosa}</p>
      <p>Recordatorio: ${llamadaEncontrada.recordatorio}</p>
      <p>Número de atención: ${llamadaEncontrada.numeroAtencion}</p>
      <p>Número de aviso: ${llamadaEncontrada.numeroAviso}</p>
      <p>Número de orden: ${llamadaEncontrada.numeroOrden}</p>
    `;
  } else {
    alert("No se encontró ninguna llamada con ese número de servicio.");
  }
}

