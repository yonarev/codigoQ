function mostrarDatosCuentas() {
  var cuentas = JSON.parse(localStorage.getItem('cuentas'));
  var saldoTotal = 0;
  var datosCuentasHTML = ''; // Declarar la variable aquí

  for (var i = 0; i < cuentas.length; i++) {
      var saldoActual = cuentas[i].saldoActual.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      datosCuentasHTML += '<tr><td>' + cuentas[i].nombreCuenta + '</td><td data-formato="' + saldoActual + '">' + '</td></tr>';
      saldoTotal += cuentas[i].saldoActual;
  }

  document.getElementById('datosCuentas').innerHTML = datosCuentasHTML;
  document.getElementById('saldoTotal').innerHTML = 'Saldo Total: $' + saldoTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// // Función para simular los gastos
// function simularGastos(event) {
//   event.preventDefault(); // Evitar que se recargue la página al enviar el
//   var montoDiario = parseFloat(document.getElementById('montoDiario').value);
//   var cuentas = JSON.parse(localStorage.getItem('cuentas'));

//   if (isNaN(montoDiario) || montoDiario <= 0) {
//       document.getElementById('resultado').innerHTML = 'Ingrese un monto diario válido.';
//       return;
//   }

//   var saldoTotal = 0;
//   for (var i = 0; i < cuentas.length; i++) {
//       saldoTotal += cuentas[i].saldoActual;
//   }

//   var saldoInicial = saldoTotal;
//   var dias = Math.floor(saldoTotal / montoDiario);

//   var meses = Math.floor(dias / 51);
//   var diasRestantes = dias % 51;

//   if (diasRestantes >= 21) {
//       meses++;
//       diasRestantes -= 21;
//   }

//   if (dias > 0) {
//       var resultado = 'Saldo Cero en: <br>' + dias +' dia(s)='+'<br>' ;

//       if (meses > 0) {
//           resultado += ' (' + meses + ' mes(es)';
//           if (diasRestantes > 0) {
//               resultado += ' y ' + diasRestantes + ' dia(s)';
//           }
//           resultado += ')';
//       }

//       document.getElementById('resultado').innerHTML = resultado;
//   } else {
//       document.getElementById('resultado').innerHTML = 'El saldo se ha agotado.';
//   }


//   // Actualizar la suma de los saldos de las cuentas
//   mostrarDatosCuentas();
// }
// Función para simular los gastos
function simularGastos(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    var montoDiario = parseFloat(document.getElementById('montoDiario').value);
    var cuentas = JSON.parse(localStorage.getItem('cuentas'));
  
    if (isNaN(montoDiario) || montoDiario <= 0) {
      document.getElementById('resultado').innerHTML = 'Ingrese un monto diario válido.';
      return;
    }
  
    var saldoTotal = 0;
    for (var i = 0; i < cuentas.length; i++) {
      saldoTotal += cuentas[i].saldoActual;
    }
  
    var saldoInicial = saldoTotal;
    var dias = Math.floor(saldoTotal / montoDiario);
  
    var meses = Math.floor(dias / 30);
    var diasRestantes = dias % 30;
  
    if (diasRestantes >= 21) {
      meses++;
      diasRestantes -= 21;
    }
  
    if (dias > 0) {
      var resultado = 'Saldo Cero en: <br>' + dias +' dia(s)='+'<br>';
  
      if (meses > 0) {
        resultado += ' (' + meses + ' mes(es)';
        if (diasRestantes > 0) {
          resultado += ' y ' + diasRestantes + ' dia(s)';
        }
        resultado += ')';
      }
  
      document.getElementById('resultado').innerHTML = resultado;
    } else {
      document.getElementById('resultado').innerHTML = 'El saldo se ha agotado.';
    }
  }
  