function generarId() {
    let fecha = new Date();
    let id = fecha.getFullYear().toString().slice(-2) +
             (fecha.getMonth() + 1).toString().padStart(2, '0') +
             fecha.getDate().toString().padStart(2, '0') +
             fecha.getHours().toString().padStart(2, '0') +
             fecha.getMinutes().toString().padStart(2, '0') +
             fecha.getSeconds().toString().padStart(2, '0') +
             fecha.getMilliseconds().toString();
    return id;
}
function agregarRegistro() {
    let inventario = document.getElementById('inventario').value;
    let articulo = document.getElementById('articulo').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let valorArticulo = parseFloat(document.getElementById('valorArticulo').value);

    // Calcular los valores adicionales
    let idInventario = generarId();
    let fecha = new Date();
    let hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let idArticulo = generarId();
    let valorTotal = cantidad * valorArticulo;
    // Obtener el valor actual del inventario
    let inventarioActual = localStorage.getItem('inventario');
    if (inventarioActual) {
      inventarioActual = JSON.parse(inventarioActual);
    } else {
      inventarioActual = [];
    }

    // Agregar el nuevo registro al inventario
    let nuevoRegistro = {
      inventario: inventario,
      idInventario: idInventario,
      fecha: fecha.toLocaleDateString(),
      hora: hora,
      idArticulo: idArticulo,
      articulo: articulo,
      cantidad: cantidad,
      valorArticulo: valorArticulo,
      valorTotal: valorTotal
    };
    inventarioActual.push(nuevoRegistro);
    // Actualizar el inventario en localStorage
    localStorage.setItem('inventario', JSON.stringify(inventarioActual));
    // Actualizar la tabla en pantalla
    actualizarTablaInv(inventarioActual);
}
function actualizarTablaInv(registros) {
    let tabla = document.getElementById('tabla-inventario');
    tabla.innerHTML = '';

    let cantidadTotal = 0;
    let valorFinal = 0;

    for (let i = 0; i < registros.length; i++) {
      let registro = registros[i];

      let fila = tabla.insertRow();

      let celdaInventario = fila.insertCell();
      celdaInventario.textContent = registro.inventario;

      let celdaIdInventario = fila.insertCell();
      celdaIdInventario.textContent = registro.idInventario;

      let celdaFecha = fila.insertCell();
      celdaFecha.textContent = registro.fecha;

      let celdaHora = fila.insertCell();
      celdaHora.textContent = registro.hora;

      let celdaIdArticulo = fila.insertCell();
      celdaIdArticulo.textContent = registro.idArticulo;
      
      let celdaCantidad = fila.insertCell();
      celdaCantidad.textContent = registro.cantidad;

      let celdaArticulo = fila.insertCell();
      celdaArticulo.textContent = registro.articulo;

      let celdaValorArticulo = fila.insertCell();
      celdaValorArticulo.textContent = registro.valorArticulo;

      let celdaValorTotal = fila.insertCell();
      celdaValorTotal.textContent = registro.valorTotal;

      cantidadTotal += registro.cantidad;
      valorFinal += registro.valorTotal;
    }
    // Actualizar el total de cantidad y valor final
    document.getElementById('cantidadTotal').textContent = cantidadTotal;
    document.getElementById('valorFinal').textContent = valorFinal;
}
function presentaListaArticulos(){
  // Obtener la lista de artículos del almacenamiento local
  var listaArticulos = JSON.parse(localStorage.getItem("articulos")) || [];
  // Obtener el elemento select del combo box
  var comboBox = document.getElementById("comboBoxArticulos");

  // Agregar las opciones de los artículos al combo box
  for (var i = 0; i < listaArticulos.length; i++) {
    var articulo = listaArticulos[i];

    var opcion = document.createElement("option");
    opcion.value = articulo.idArticulo;
    opcion.textContent = articulo.articulo;

    comboBox.appendChild(opcion);
  }

  // Mostrar el primer artículo de inmediato
  if (listaArticulos.length > 0) {
    comboBox.selectedIndex = 0;
  }

}
///Función para ordenar los datos alfabéticamente por inventario, luego por tipo y finalmente por artículo
function ordenarDatos() {
      // Obtener los datos del local storage
      var transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario'));
      // Ordenar los datos
      transaccionInventario.sort(function(a, b) {
        // Ordenar por inventario
        if (a.inventario !== b.inventario) {
          return a.inventario.localeCompare(b.inventario);
        }
        
        // Ordenar por tipo
        if (a.tipo !== b.tipo) {
          return a.tipo.localeCompare(b.tipo);
        }
        
        // Ordenar por artículo
        return a.articulo.localeCompare(b.articulo);
      });

      // Almacenar los datos ordenados en el local storage con el nuevo key 'inventariosOrd'
      localStorage.setItem('inventariosOrd', JSON.stringify(transaccionInventario));
}
// Función para mostrar los datos en la tabla
function mostrarDatosEnTabla() {
      // Obtener los datos ordenados del local storage
      var inventariosOrd = JSON.parse(localStorage.getItem('inventariosOrd'));

      // Obtener el tbody de la tabla
      var tbody = document.getElementById('tbodyDatos');

      // Generar las filas de la tabla
      inventariosOrd.forEach(function(item) {
        var row = document.createElement('tr');

        // Crear las celdas de la fila
        Object.values(item).forEach(function(value) {
          var cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });

        // Agregar la fila al tbody
        tbody.appendChild(row);
      });
}
// Función para reemplazar 'transaccionInventario' con 'inventariosOrd'
function reemplazarDatos() {
        // Obtener los datos de 'inventariosOrd'
        let inventariosOrd = JSON.parse(localStorage.getItem('inventariosOrd'));
        // Almacenar los datos en 'transaccionInventario'
        localStorage.setItem('transaccionInventario', JSON.stringify(inventariosOrd));
        alert("Las transacciones de los Inventarios estan ordenadas")
      //   alert("El key 'transaccionInventario' ha sido reemplazado con los datos de 'inventariosOrd'.");
}
function ordenarDatosInv() {
      // Obtener los datos del local storage
      let inventarios = JSON.parse(localStorage.getItem('inventarios'));
      // Ordenar los datos por inventario
      inventarios.sort(function(a, b) {
        return a.inventario.localeCompare(b.inventario);
      });
      // Almacenar los datos ordenados en el local storage
      localStorage.setItem('inventarios', JSON.stringify(inventarios));
      alert("los 'inventarios' estan ordenados")
}
// Función para ordenar los datos alfabéticamente por 'articulo' y 'tipo'
function ordenarDatosArt() {
            // Obtener los datos del local storage
            var articulos = JSON.parse(localStorage.getItem('articulos'));
            // Ordenar los datos por 'articulo' y 'tipo'
            articulos.sort(function(a, b) {
              // Ordenar por 'articulo'
              if (a.articulo !== b.articulo) {
                return a.articulo.localeCompare(b.articulo);
              }
              // Ordenar por 'tipo'
              return a.tipo.localeCompare(b.tipo);
            });
            // Almacenar los datos ordenados en el local storage
            localStorage.setItem('articulos', JSON.stringify(articulos));
            alert('Los articulos estan ordenados')
}
// Función para ordenar los datos alfabéticamente por 'tipo'
function ordenarDatosTipos() {
      // Obtener los datos del local storage
      let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
      // Ordenar los datos por 'tipo'
      tiposArt.sort(function(a, b) {
        return a.tipo.localeCompare(b.tipo);
    });

      // Almacenar los datos ordenados en el local storage
      localStorage.setItem('tiposArt', JSON.stringify(tiposArt));
      alert('Los tipos estan ordenados')
}
function ordenarDatosTransInv() {
  let confirma=confirm('Desea ordenar alfabeticamente las Transaciones de los Inventarios?')
  if(!confirma){
    return
  }
  // Obtener los datos del local storage
  var transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario'));

  // Ordenar los datos por 'inventario', 'tipo' y 'articulo'
  transaccionInventario.sort(function(a, b) {
    // Ordenar por 'inventario'
    if (a.inventario !== b.inventario) {
      return a.inventario.localeCompare(b.inventario);
    }
    // Ordenar por 'tipo'
    if (a.tipo !== b.tipo) {
      return a.tipo.localeCompare(b.tipo);
    }
    // Ordenar por 'articulo'
    return a.articulo.localeCompare(b.articulo);
  });

  // Almacenar los datos ordenados en el local storage
  localStorage.setItem('transaccionInventario', JSON.stringify(transaccionInventario));
  alert('se ordenaron alfabeticamente las transacciones del Inventario')
}


