

function ordenaCuentas(){
    // Obtener las cuentas del almacenamiento local
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));

    // Ordenar la matriz de cuentas por nombreCuenta
    cuentas.sort(function(a, b) {
      let nombreA = a.nombreCuenta.toLowerCase();
      let nombreB = b.nombreCuenta.toLowerCase();
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    });

    // Almacenar la matriz ordenada de cuentas en el almacenamiento local
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
    alert('las cuentas fueron Ordenadas')
    // Mostrar el contenido del almacenamiento local
    console.log(localStorage.getItem('cuentas'));
}
function actualizarComboBoxCuenta() {
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
    mostrarSaldo()
}
function posiciona(){
        document.getElementById('elemento').focus()
        document.getElementById('elemento').select()
}
//graba la transaccion en transacciones y cuenta
function guardarTransaccion(opcion) {
    let suma = 0;
    let resta = 0;
    let saldoIni = entregaSaldosCuenta("saldoIni");
    let saldoFin = entregaSaldosCuenta("saldoFin");
    let saldoAct = entregaSaldosCuenta("saldoAct");
    let idMotivo = document.getElementById("motivo").value;
    if(!idMotivo) {
        alert('Debe haber algún motivo');
        document.getElementById("motivo").select();
        document.getElementById("motivo").focus();
        event.preventDefault()
        return;
    }
    // VALORES
    let valorPeso=document.getElementById("valor").value
    let valorNum=convertirPesoNumero(valorPeso)
    let valorNumOk=parseFloat(valorNum)
    let cant=parseFloat(document.getElementById("cantidad").value)
    // CALCULA TOTAL
    let totalOk=cant*valorNumOk
    //DE A CUERDO  A INGRESO O EGRESO
    if(opcion === 'ingreso') {
        saldoFin += totalOk;
        saldoAct += totalOk;
        suma=totalOk
        resta=0
    } else {
        let saldo = saldoFin - totalOk;
        if (saldo < 0) {
            alert("NO ES POSIBLE QUEDAR CON SALDO NEGATIVO");
            document.getElementById('valor').select();
            document.getElementById('valor').focus();
            event.preventDefault();
            return
        } else {
            saldoFin -= totalOk;
            suma=0;
            resta=totalOk;
            saldoAct -= totalOk;
        }
    }
    //si resta que no quede menor que cero
    if(resta<0 ||suma<0){
        alert('error')
        return
    } 
    // ACTUALIZA TRANSACCIONES
    let motivoReal = entregaMotivo(idMotivo);
    let fecha=fechaAhoraOk();
    let hora=new Date().toLocaleTimeString();
    let id=indiceAhora();
    let idCta=document.getElementById("cuenta").value;
    let nombreCuenta=document.getElementById("cuenta").options[document.getElementById("cuenta").selectedIndex].text;
    let elemento=document.getElementById("elemento").value;
    let transa = [{
        "fecha": fecha,
        "hora": hora,
        "idTrans": id,
        "idCuenta": idCta,
        "nombreCuenta": nombreCuenta,
        "saldoInicial": saldoIni,
        "saldoActual": saldoAct,
        "saldoFinal": saldoFin,
        "motivo": motivoReal,   
        "cantidad": cant,
        "elemento": elemento,
        "valor": valorNum,
        "total": totalOk,
        "suma": suma,
        "resta": resta
    }];
    let confirmaGrabar=confirm('Confirma Grabar?')
    if(!confirmaGrabar){
        // event.preventDefault()
        return
    }
    // event.preventDefault()
    // Obtener la lista de transacciones existente en Local Storage
    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    // Agregar la nueva lista de transacciones a la lista existente
    transacciones.push(transa[0]);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    grabaCuentaSaldos(saldoIni, saldoFin, saldoAct);
    cargarDatosCuenta();
    resetValores();
    actualizarTabla(); //transacciones
    presentarTablaCuentas(); //cuentas
    posiciona();
}
function grabaCuentaSaldos(ini,fin,act){
    //ACTUALIZA GRABA EN CUENTAS EL ESTADO DE LOS SALDOS
    let cuentas = JSON.parse(localStorage.getItem("cuentas")); // Obtener la lista de cuentas de Local Storage
    let cuentaSelect = document.getElementById("cuenta"); // Obtener el ComboBox "Cuenta"
    let cuentaId = cuentaSelect.value; // Obtener el ID de la cuenta seleccionada
    cuentas.forEach((cuenta) => {
        if (cuenta.idCuenta === cuentaId) {
            cuenta.fecha=fechaAhoraOk();
            cuenta.saldoActual = act;
            cuenta.saldoInicial = ini;
            cuenta.saldoFinal=fin
            localStorage.setItem('cuentas', JSON.stringify(cuentas));
        }
    });
}
function actualizarTabla() {
    //despliega tabla con todas las transacciones
    let transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    transacciones.forEach(function (transaccion) {
        let fila = document.createElement('tr');
            let saldoPeso=convertirNumeroPeso(transaccion.saldoActual);
            let valorPeso=convertirNumeroPeso(transaccion.valor);
            let totalPeso=convertirNumeroPeso(transaccion.total);
            let siSuma=transaccion.suma;
            let siResta=transaccion.resta;
            fila.style.textAlign='right'
            fila.style.fontFamily='arial !important'
            fila.style='font-family: Arial !important'
            fila.style='font-weight: bold'

            if(siSuma){
                fila.style.backgroundColor = '#8a73d4'
                fila.style.color='white'
            }
            if(siResta){
                fila.style.color="#000000"
                fila.style.backgroundColor = '#ffb324'
            }
        // FILTRO EN BASE A cuenta en COMBO BOX
            fila.innerHTML = 
                '<td>' + transaccion.fecha + '</td>' +
                '<td>' + transaccion.hora + '</td>' +
                '<td>' + transaccion.motivo + '</td>' +
                '<td>' + transaccion.nombreCuenta + '</td>' +
                '<td>' + saldoPeso + '</td>' +
                '<td>' + transaccion.cantidad + '</td>' +
                '<td>' + transaccion.elemento + '</td>' +
                '<td>' + valorPeso + '</td>' +
                '<td>' + totalPeso + '</td>' +
                '<td>' + transaccion.suma + '</td>' +
                '<td>' + transaccion.resta + '</td>';
            cuerpoTabla.appendChild(fila);
    });
    datosDerecha('tablaTransacciones')
    cargarCuentas()
    cargarMotivos()
    // event.preventDefault()
}
function actualizarTablaCuenta() {
    //despliega tabla con todas las transacciones
    let transacciones = JSON.parse(localStorage.getItem('transacciones')) || [];
    let cuerpoTabla = document.getElementById('cuerpoTablaCuenta');
    cuerpoTabla.innerHTML = '';
    transacciones.forEach(function (transaccion) {
        let fila = document.createElement('tr');
        // FILTRO EN BASE A cuenta en COMBO BOX
        let cuentaSEleccionada=document.getElementById('cuenta').value
        // debugger
        if(cuentaSEleccionada===transaccion.idCuenta){
            let siSuma=transaccion.suma;
            let siResta=transaccion.resta;
            if(siSuma){
                fila.style.backgroundColor = '#5b2feb'
                fila.style.color='white'
            }
            if(siResta){
                fila.style.backgroundColor = '#ec1e1e'
                fila.style.color='white'
            }
            fila.innerHTML = 
                '<td>' + transaccion.fecha + '</td>' +
                '<td>' + transaccion.hora + '</td>' +
                '<td>' + transaccion.motivo + '</td>' +
                '<td>' + transaccion.nombreCuenta + '</td>' +
                '<td>' + transaccion.saldoActual + '</td>' +
                '<td>' + transaccion.cantidad + '</td>' +
                '<td>' + transaccion.elemento + '</td>' +
                '<td>' + transaccion.valor + '</td>' +
                '<td>' + transaccion.total + '</td>' +
                '<td>' + transaccion.suma + '</td>' +
                '<td>' + transaccion.resta + '</td>';
            cuerpoTabla.appendChild(fila);

        }
    });
    datosDerecha('tablaCuentas')
    // cargarCuentas()
    // cargarMotivos()
    // event.preventDefault()
}
// Función para cargar las opciones del ComboBox "Cuenta"
function cargarCuentas() {
    // let totalTotal=0;
    let cuentas = JSON.parse(localStorage.getItem("cuentas")); // Obtener la lista de cuentas de Local Storage
    if(!cuentas){
        return
    }
    let cuentaSelect = document.getElementById("cuenta"); // Obtener el ComboBox "Cuenta"
    cuentaSelect.innerHTML=""
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        let option = document.createElement("option"); // Crear una nueva opción
        option.text = cuenta.nombreCuenta; // Asignar el nombre de la cuenta como texto de la opción
        option.value = cuenta.idCuenta; // Asignar el ID de la cuenta como valor de la opción
        cuentaSelect.add(option);
        // totalTotal=totalTotal+cuenta.saldoActual
    }

}
// presenta  el saldo total actual
function presentaTotalTotal(){
    let totalTotal=0;
    let cuenta;
    let cuentas = JSON.parse(localStorage.getItem("cuentas")); // Obtener la lista de cuentas de Local Storage
    if(!cuentas){
        return
    }
    for (let i = 0; i < cuentas.length; i++) {
        cuenta = cuentas[i];
        totalTotal=totalTotal+cuenta.saldoActual
    }
    document.getElementById('saldoTotal').textContent=convertirNumeroPeso(totalTotal)
}
function cargarMotivos() {
    //llena combobox motivos
    // Función para cargar las opciones del ComboBox "Motivo"
    let motivos = JSON.parse(localStorage.getItem("motivos")); // Obtener la lista de motivos de Local Storage
    if(motivos===null){
        return
    }
    let motivoSelect = document.getElementById("motivo"); // Obtener el ComboBox "Motivo"
    motivoSelect.innerHTML=""
    for (let i = 0; i < motivos.length; i++) {
        let motivo = motivos[i];
        let option = document.createElement("option"); // Crear una nueva opción
        option.text = motivo.nombreMotivo; // Asignar el nombre del motivo como texto de la opción
        option.value = motivo.idMotivo; // Asignar el ID del motivo como valor de la opción
        motivoSelect.add(option);
    }
}
function entregaMotivo(idMotivo) {
    // en base al id obtiene el motivo
  let motivos = JSON.parse(localStorage.getItem("motivos")); // Obtener la lista de motivos de Local Storage
  if (!motivos) {
    return;
  }
  let motivoReal = '';
  let motivoSelect = document.getElementById("motivo"); // Obtener el ComboBox "Motivo"
  if (!motivoSelect) {
    return;
  }
  for (let i = 0; i < motivos.length; i++) {
    let motivo = motivos[i];
    if (idMotivo === motivo.idMotivo) {
      motivoReal = motivo.nombreMotivo;
    } 
  }
  return motivoReal;
}
function calcularTotal() {
    // total de valor x cantidad
    //calcula total y lo despliega
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let valorPeso = document.getElementById("valor").value;
    let valor=convertirPesoNumero(valorPeso)
    let valorOk=parseFloat(valor)
    let valorCuenta=0
    let valorCantidad=0
    let totalOut=0
    if(!valor){
        valorCuenta=0
    } else{
        valorCuenta=valor
    }
    if(!cantidad){
        cantidad=0
        valorCantidad=0
    } else {
        valorCantidad=cantidad
    }
    let total =  valorCantidad * valorCuenta
    if (total===0){
        totalOut='$0'
    } else {
        totalOut=convertirNumeroPeso(total)
    }
    //presenta no retorna
    document.getElementById("total").value = totalOut;
    // debugger
    entregaSaldoCuentaSimulado()
    // event.preventDefault()
}
//presentar en pantalla los saldos de la cuenta seleccionada en el combobox
function cargarDatosCuenta() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")); // Obtener la lista de cuentas de Local Storage
    if(!cuentas){
        return
    }
    let cuentaSelect = document.getElementById("cuenta"); // Obtener el ComboBox "Cuenta"
    let cuentaId = cuentaSelect.value; // Obtener el ID de la cuenta seleccionada
    // Buscar la cuenta correspondiente en la lista de cuentas
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        if (cuenta.idCuenta === cuentaId) {
            let ctaSal=cuenta.saldoActual
            let pesoSaldo= convertirNumeroPeso(ctaSal)
            document.getElementById("saldoActual").textContent = pesoSaldo;
            break;
        }
    }
    //PINTA EL TOTAL TOTAL
    let totalTotal=0;
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        totalTotal+=cuenta.saldoFinal
    }
    totalTotal=convertirNumeroPeso(totalTotal)
    document.getElementById("saldoTotal").textContent = totalTotal;
    actualizarTablaCuenta(); 
}
//retorna el saldo de la cuenta ya seleccionada en el combobx
function entregaSaldosCuenta(tipoSaldo){
    //retorna los saldos solicitados de la cuenta seleccionada
    let cuentas = JSON.parse(localStorage.getItem("cuentas"));
    let cuentaSelect = document.getElementById("cuenta"); 
    let cuentaId = cuentaSelect.value;
    let saldoRespuesta=0
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        if (cuenta.idCuenta === cuentaId) {
            if(tipoSaldo="saldoIni"){saldoRespuesta=cuenta.saldoInicial}
            if(tipoSaldo="saldoFin"){saldoRespuesta=cuenta.saldoFinal}
            if(tipoSaldo="saldoAct"){saldoRespuesta=cuenta.saldoActual}
        }
    }
    return saldoRespuesta    
}
function simulateClick(elemento) {
    // simula el click en el elemento
	// Obtener el elemento select
	let selectElement = document.getElementById(elemento);
	// Crear un evento de clic y dispararlo en el elemento select
	let clickEvent = new Event("click");
	selectElement.dispatchEvent(clickEvent);
}
function presentarTablaCuentas() {
    // Presenta en tabla solo transacciones de la cuenta
    //tabla cuentas
	let cuentas = JSON.parse(localStorage.getItem("cuentas"))
    if(!cuentas){
        // alert('no se han cargado las cuentas')
        console.log('no se han cargado las cuentas');
        return
    }
	let tbody = document.querySelector("#tablaCuentas tbody");
    tbody.innerHTML = ''
	for (let i = 0; i < cuentas.length; i++) {
		let fila = document.createElement("tr")
		let fecha = document.createElement("td");
		fecha.textContent = cuentas[i].fecha;
		fila.appendChild(fecha)
		let nombreCuenta = document.createElement("td");
		nombreCuenta.textContent = cuentas[i].nombreCuenta;
		fila.appendChild(nombreCuenta)
		let saldoActual = document.createElement("td");
        let cuentaSaldoActual=cuentas[i].saldoActual
        let pesoSaldoActual=convertirNumeroPeso(cuentaSaldoActual)
		saldoActual.textContent = pesoSaldoActual;
		fila.appendChild(saldoActual)
        // fila.style.textAlign='right'
		tbody.appendChild(fila);
	}
    // tbody.style.textAlign='right !important'
    datosDerecha('tablaCuentas')
}
function retornaSaldoCta(){
    //retorna los saldos solicitados de la cuenta seleccionada
    let cuentas = JSON.parse(localStorage.getItem("cuentas"));
    let cuentaSelect = document.getElementById("cuenta"); 
    let cuentaId = cuentaSelect.value;
    let saldoCuenta=0
    //encuentra el saldo en la cuenta
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        if (cuenta.idCuenta === cuentaId) {
            saldoCuenta=cuenta.saldoActual
        }
    }
    return saldoCuenta
}
function entregaSaldoCuentaSimulado(){
    // VALORES
    let saldoCuentaOk=retornaSaldoCta()
    let cantidadOk=document.getElementById('cantidad').value
    let valorInput=document.getElementById('valor').value
    let valorOk=convertirPesoNumero(valorInput)
    //VALIDA
    if(valorOk===""){
        valorOk=0
    }
    //CONVIERTE
    cantidadOk=parseInt(cantidadOk)
    valorOk=parseInt(valorOk)
    let total=cantidadOk*valorOk
    // CALCULA
    let egresaOk=saldoCuentaOk - total
    let ingresaOk=saldoCuentaOk + total
    //TRANSFORMA $
    let ingOut=convertirNumeroPeso(ingresaOk)
    let egrOut=convertirNumeroPeso(egresaOk)
    //PRESENTA
    document.getElementById('simulaEgreso').value=egrOut
    document.getElementById('simulaIngreso').value=ingOut
}
function resetSimulacion(){
    document.getElementById('simulaEgreso').value=''
    document.getElementById('simulaIngreso').value=''
}
function resetValores(){
    //restea valores una vez grabados
        document.getElementById('cantidad').value=""
        document.getElementById('valor').value=""
        document.getElementById('elemento').value=""
        document.getElementById('total').value=""
        document.getElementById('cantidad').focus()
        document.getElementById('cantidad').select()
        resetSimulacion()
        // alert("se grabo ok")
}
function retornaDiaMesAno(){
    // obtener la fecha actual
	let fecha = new Date();
	// obtener el día, mes y año
    let dia = fecha.getDate().toString().padStart(2, '0');
	let mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let listaFecha=[dia,mes]
    return listaFecha
}
function convertirNumeroPeso(numero) {
    if(numero===0 || numero===null){
        return "$0"
    }
    let numeroConvertido = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', currencySign: 'accounting' }).format(numero);
    return numeroConvertido;
}
function convertirPesoNumero(peso) {
    if (!peso || peso === '$0') {
        return 0;
    }
    if(peso===null){
        return 0;
    }
    // Remover el signo de la moneda y los separadores de miles existentes
    let value = peso.replace(/\$|\./g, '');
    // Convertir el valor a número y devolverlo
    return Number(value);
}
function formatCurrency(input) {
    // Obtener el valor del input
    let value = input.value;
    // Remover el signo de la moneda y los separadores de miles existentes
    value = value.replace(/\$|\./g, '');
    // Convertir el valor a número y formatear usando toLocaleString
    let formattedValue = Number(value).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    // Asignar el valor formateado al input
    input.value = formattedValue;
    event.preventDefault()
}
function agregarSeparadorMiles(numero) {
  let separador = ".";
  let longitud = numero.length;
  let resultado = "";
  let contador = 0;
  for (let i = longitud - 1; i >= 0; i--) {
    resultado = numero.charAt(i) + resultado;
    contador++;
    if (contador % 3 === 0 && i !== 0) {
      resultado = separador + resultado;
    }
  }
  return "$" + resultado;
}
function simularAvanceTab() {
    let simula2 = document.querySelectorAll('.simula2');
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
  
        let activeElement = document.activeElement;
        let currentIndex = Array.from(simula2).indexOf(activeElement);
        let nextIndex = currentIndex + 1;
  
        if (nextIndex < simula2.length) {
          simula2[nextIndex].focus();
        } else {
          simula2[0].focus();
        }
      }
    });
}
function presentaSimula(){
    let valorCuenta=0
    let valorCantidad=0
    let totalOut=0
    
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    if(!cantidad){
        return
        event.preventDefault()
    }
    let valorPeso = document.getElementById("valor").value;
    let valor=convertirPesoNumero(valorPeso)
    let valorOk=parseFloat(valor)
    
    if(!valor){
        valorCuenta=0
        return
    } else{
        valorCuenta=valor
    }
    if(!cantidad){
        cantidad=0
        valorCantidad=0
    } else {
        valorCantidad=cantidad
    }
    let total =  valorCantidad * valorCuenta;
    let saldoCuenta= retornaSaldoCta()
    let simulaIngreso=total+saldoCuenta;
    let simulaEgreso=saldoCuenta-total;

    if (total===0){
        totalOut='$0';
    } else {
        totalOut=convertirNumeroPeso(total);
    }
    document.getElementById('total').value=totalOut;
    document.getElementById('simulaIngreso').value=convertirNumeroPeso(simulaIngreso);
    document.getElementById('simulaEgreso').value=convertirNumeroPeso(simulaEgreso);
    event.preventDefault();
}
function resetSimula(){
    document.getElementById("cantidad").value="";
    document.getElementById("valor").value=""
    document.getElementById("cantidad").select()
    document.getElementById("cantidad").focus()
    event.preventDefault();
}
function cargaTablasParaCuentas(){
    const archivo = document.getElementById('archivoCuentas').files[0];
     if (!archivo) {
       alert('Seleccione un archivo JSON.');
       return;
     }
    const reader = new FileReader();
    let cargado=false
    reader.onload = function(event) {
        try {
            // Obtener el contenido del archivo JSON como un objeto
            const data = JSON.parse(event.target.result);
            const motivos=JSON.stringify(data.motivos);
            const transacciones= JSON.stringify(data.transacciones);
            const cuentas= JSON.stringify(data.cuentas);
          
            // Almacenar el contenido en Local Storage para las claves correspondientes
            if(motivos){
                localStorage.setItem('motivos', JSON.stringify(data.motivos))
                cargado=true
            }
            if(cuentas){
                localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
                cargado=true
            }
            if (transacciones){
                localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
                cargado=true
            }
            if (cargado){
                alert('Contenido cargado en Local Storage.');
            } else {
                alert('no se han cargado datos en Local desde JSON.');
            }
        } catch (error) {
            console.error(error);
            alert('Error al cargar el archivo JSON.');
        }
    };
    reader.readAsText(archivo);
    location.reload(true);
}
function datosDerecha(miTabla){
    let tabla = document.getElementById(miTabla);
    for (let i = 0; i < tabla.rows.length; i++) {
        let fila = tabla.rows[i];
        // Itera sobre cada celda de la fila y establece el estilo
        for (let j = 0; j < fila.cells.length; j++) {
          let celda = fila.cells[j];
          celda.style.textAlign = "right"; // Centra a la izquierda
        }
    }
}

function ajusteCuenta(event){
    event.preventDefault()
    // CALCULOS
    let saldoCtaSel=retornaSaldoCta()
    let montoReal= prompt('Ingresa Monto Real de la cuenta')
    montoReal=parseInt(montoReal)
    // VALIDA INPUT
    if(!montoReal && montoReal!==0){
        alert('ingresa el monto real')
        return
    } else {
        if(montoReal===0){
            let confirma0=confirm('el monto de la cuenta sera 0 quiere continuar?')
            if(!confirma0){
                return
            }
        }
    }
    let descontar=saldoCtaSel- montoReal
    alert('el saldo de la cuenta es: $'+ saldoCtaSel +
    '\n El monto a descontar es $' + descontar + '\n El monto Real es $' + montoReal)
    // DATOS
    let saldoIni = entregaSaldosCuenta("saldoIni");
    let saldoFin = entregaSaldosCuenta("saldoFin");
    let saldoAct = entregaSaldosCuenta("saldoAct");
    let motivoReal='AJUSTE ERROR'
    let fecha=fechaAhoraOk();
    let hora=new Date().toLocaleTimeString();
    let id=indiceAhora();
    let idCta=document.getElementById("cuenta").value;
    let nombreCuenta=document.getElementById("cuenta").options[document.getElementById("cuenta").selectedIndex].text;
    // let elemento=document.getElementById("elemento").value;
    let elemento='Ajuste de cuenta a cuadrar'
    let transa = [{
        "fecha": fecha,
        "hora": hora,
        "idTrans": id,
        "idCuenta": idCta,
        "nombreCuenta": nombreCuenta,
        "saldoInicial": saldoIni,
        "saldoActual": montoReal,
        "saldoFinal": montoReal,
        "motivo": motivoReal, 
        "cantidad": 1,
        "elemento": elemento,
        "valor": montoReal,
        "total": montoReal,
        "suma": 0,
        "resta": descontar
    }];
    let confirmaGrabar=confirm('Confirma Grabar?')
    if(!confirmaGrabar){
        return
    }
    // Obtener la lista de transacciones existente en Local Storage
    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    // Agregar la nueva lista de transacciones a la lista existente
    transacciones.push(transa[0]);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    // grabaCuentaSaldos(saldoIni, saldoFin, saldoAct);
    grabaCuentaSaldos(saldoIni, montoReal, montoReal);
    cargarDatosCuenta();
    resetValores();
    actualizarTabla(); //transacciones
    presentarTablaCuentas(); //cuentas
    posiciona();
}

// PARA PAGINA
function ajustaCuenta(event) {
    event.preventDefault();
    // CALCULOS
    let saldoCtaSel = retornaSaldoCta();
    let montoReal = document.getElementById("montoRealInput").value;
    montoReal = parseInt(montoReal);

    // VALIDA INPUT
    if (!montoReal && montoReal !== 0) {
      alert("Ingresa el monto real");
      return;
    } else {
      if (montoReal === 0) {
        let confirma0 = confirm("El monto de la cuenta será 0. ¿Quieres continuar?");
        if (!confirma0) {
          return;
        }
      }
    }

    let descontar = saldoCtaSel - montoReal;
    alert(
      "El saldo de la cuenta es: $" + saldoCtaSel +
      "\nEl monto a descontar es $" + descontar +
      "\nEl monto Real es $" + montoReal
    );

    // DATOS
    let saldoIni = entregaSaldosCuenta("saldoIni");
    let saldoFin = entregaSaldosCuenta("saldoFin");
    let saldoAct = entregaSaldosCuenta("saldoAct");
    let motivoReal = 'AJUSTE ERROR';
    let fecha = fechaAhoraOk();
    let hora = new Date().toLocaleTimeString();
    let id = indiceAhora();
    let idCta = document.getElementById("cuenta").value;
    let nombreCuenta = document.getElementById("cuenta").options[document.getElementById("cuenta").selectedIndex].text;
    let elemento = 'Ajuste de cuenta a cuadrar';
    let transa = [{
      "fecha": fecha,
      "hora": hora,
      "idTrans": id,
      "idCuenta": idCta,
      "nombreCuenta": nombreCuenta,
      "saldoInicial": saldoIni,
      "saldoActual": montoReal,
      "saldoFinal": montoReal,
      "motivo": motivoReal,
      "cantidad": 1,
      "elemento": elemento,
      "valor": montoReal,
      "total": montoReal,
      "suma": 0,
      "resta": descontar
    }];

    let confirmaGrabar = confirm("¿Confirma Grabar?");
    if (!confirmaGrabar) {
      return;
    }

    // Obtener la lista de transacciones existente en Local Storage
    let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    // Agregar la nueva lista de transacciones a la lista existente
    transacciones.push(transa[0]);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));

    grabaCuentaSaldos(saldoIni, montoReal, montoReal);
    cargarDatosCuenta();
    resetValores();
    actualizarTabla(); //transacciones
    presentarTablaCuentas(); //cuentas
    ocultarSeccionAjuste()
    posiciona();
  }