function agregarCuenta() {
    let nombreCuenta = document.getElementById("nombreCuenta").value;
    let saldoInicial = 0
    let saldoFinal = 0
    let fecha = new Date();
    let fechaString = fecha.getDate() + "" + (fecha.getMonth()+1) + "" + fecha.getFullYear();
    let horaString = fecha.getHours() + "" + fecha.getMinutes() + "" + fecha.getSeconds();
    let idCuenta = horaString + fechaString;
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
    let cuentaExistente = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombreCuenta == nombreCuenta) {
            cuentaExistente = true;
            break;
        }
    }
    if (!cuentaExistente) {
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

        document.getElementById("nombreCuenta").value = "";
        ordenaCuentas()
        actualizarComboBox();
        document.getElementById('nombreCuenta').focus()
        document.getElementById('nombreCuenta').select()
    } else {
        alert("El nombre de cuenta ya existe en la lista.");
    }
}
function ordenaCuentas(){
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
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
    alert('las cuentas fueron Ordenadas')
    console.log(localStorage.getItem('cuentas'));
}
function actualizarComboBox() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
    let comboBox = document.getElementById("cuenta");
    comboBox.innerHTML = "";
    for (let i = 0; i < cuentas.length; i++) {
        let option = document.createElement("option");
        option.text = cuentas[i].nombreCuenta;
        option.value = cuentas[i].idCuenta;
        comboBox.add(option);
    }
    mostrarSaldo()
}
function mostrarSaldo() {
    // Obtener el índice de la cuenta seleccionada
    let comboBox = document.getElementById("cuenta");
    let indice = comboBox.selectedIndex
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
    let saldoInicial = document.getElementById("saldoInicialMostrar");
    let saldoFinal = document.getElementById("saldoFinalMostrar");
    let saldoActual = document.getElementById("saldoActualMostrar");
     //tambien muestra id
    let idCuenta=document.getElementById("idCuenta")
    // Mostrar los saldos de la cuenta seleccionada
    idCuenta.value=cuentas[indice].idCuenta;
    saldoInicial.value = cuentas[indice].saldoInicial;
    saldoFinal.value = cuentas[indice].saldoFinal;
    saldoActual.value = cuentas[indice].saldoActual;
}
function cuentaEnTransacciones(){
    let cuentas = JSON.parse(localStorage.getItem("cuentas")); 
    let cuentaSelect= document.getElementById('cuenta')
    let cuentaId = cuentaSelect.value;
    let idCombo=cuentaSelect.selectedIndex
    let nombreCuenta=cuentaSelect.options[idCombo].innerText
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

function eliminarCuenta(event) {
    event.preventDefault();
    let ocupada=cuentaEnTransacciones()
    if(ocupada){    
        alert ('no se puede eliminar la cuenta esta ocupada por una transaccion')
        return
    }
    let confirma=confirm("?Esta seguro de eliminar la cuenta seleccionada")
    if(!confirma){
        return
    }
    // ELIMINA DE CUENTAS DEFINITIVO
    let comboBox = document.getElementById("cuenta");
    let indice = comboBox.value;
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
    cuentas = cuentas.filter(cuenta => cuenta.idCuenta !== indice );
    // Guardar las cuentas actualizadas en Local Storage
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    // Eliminar la opción del combobox
    let optionEliminar = comboBox.querySelector(`option[value="${indice}"]`);
    if (optionEliminar) {
      optionEliminar.remove();
    }
  }

