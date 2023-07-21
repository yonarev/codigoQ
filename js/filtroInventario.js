
// Función para guardar el filtro en un archivo JSON en el disco duro
function guardarFiltro() {
    // Obtener el inventario seleccionado del combobox
    let inventarioSeleccionado = inventarioSelect.value;
    // Obtener el tipo seleccionado del combobox
    let tipoSeleccionado = tipoArticuloSelect.value;
    // Filtrar las transacciones según el inventario y tipo seleccionados
    let transaccionesFiltradas = transaInventarioFiltro.filter(function(transaccion) {
        return transaccion.inventario === inventarioSeleccionado && transaccion.tipo === tipoSeleccionado;
    });
    // Convertir las transacciones filtradas a formato JSON
    let filtroJSON = JSON.stringify(transaccionesFiltradas);
    // Crear un Blob con el contenido JSON
    let blob = new Blob([filtroJSON], { type: "application/json" });
    // Crear un enlace para descargar el archivo
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "filtroInventario.json";
    a.click();
}
function cargaInventarioFiltro(){
    let inventarioSelect = document.getElementById("inventario");
    let inventarios = JSON.parse(localStorage.getItem('inventarios'));
    // debugger
    if(!inventarios){
        console.log('Sin Inventarios')
        return
    }
    // Llenar el select de inventarios
    inventarios.forEach(function(inventario) {
        let option = document.createElement("option");
        option.value = inventario.inventario;
        option.textContent = inventario.inventario;
        inventarioSelect.appendChild(option);
    });
}
function cargaTiposFiltro(){
    let tipoArticuloSelect = document.getElementById("tipo-articulo");
    let tiposArt = JSON.parse(localStorage.getItem('tiposArt'));
    if(!tiposArt){
        console.log('Sin Tipos')
        return
    }
    // Llenar el select de tipos de artículo
    tiposArt.forEach(function(tipo) {
        let option = document.createElement("option");
        option.value = tipo.tipo;
        option.textContent = tipo.tipo;
        tipoArticuloSelect.appendChild(option);
    });
    
}
// Función para actualizar la tabla en base a la selección del combobox
function actualizarTablaInventario() {
    let transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario'));
    let inventarios = JSON.parse(localStorage.getItem('inventarios'));
    let inventarioSeleccionado = document.getElementById('inventario').value;
    if(!transaccionInventario){
        alert('No hay transacciones de Inventarios')
        return
    }
    // Filtrar las transacciones del inventario seleccionado
    let transaccionesFiltradas = transaccionInventario.filter(function(transaccion) {
        return transaccion.inventario === inventarioSeleccionado;
    });
    // Construir la tabla con los datos filtrados
    let tabla = "<table>";
    tabla += "<tr><th>Fecha</th><th>Hora</th><th>ID</th><th>Inventario</th><th class='claseTipo'>Tipo</th><th class='claseArticulo'>Artículo</th><th class='claseCant'>Cant</th><th>Valor</th><th>Valor T</th><th>CanT</th><th>Acumulado</th></tr>";
    for (let i = 0; i < transaccionesFiltradas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + transaccionesFiltradas[i].fecha + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].hora + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].idTrans + "</td>";
        tabla += "<td class='claseInventario alaIzquierda'>" + transaccionesFiltradas[i].inventario + "</td>";
        tabla += "<td class='alaIzquierda claseTipo'>" + transaccionesFiltradas[i].tipo + "</td>";
        tabla += "<td class='alaIzquierda claseArticulo'>" + transaccionesFiltradas[i].articulo + "</td>";
        tabla += "<td class='alaDerecha'>" + transaccionesFiltradas[i].cantidad + "</td>";
        tabla += "<td class='alaDerecha'>" + formatoPeso(transaccionesFiltradas[i].valor)+ "</td>";
        tabla += "<td class='alaDerecha'>" + formatoPeso(transaccionesFiltradas[i].valorTotal) + "</td>";
        tabla += "<td class='alaDerecha'>" + transaccionesFiltradas[i].cantidadTotal + "</td>";
        tabla += "<td class='alaDerecha'>" + formatoPeso(transaccionesFiltradas[i].valorAcumulado) + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";

    // Mostrar la tabla en el elemento con id "tabla-inventario"
    document.getElementById('tabla-inventario').innerHTML = tabla;
}
function actualizarTablaInvTip() {
    let transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario'));
    let inventarios = JSON.parse(localStorage.getItem('inventarios'));
    let inventarioSeleccionado = document.getElementById('inventario').value;
    // Filtrar las transacciones del inventario seleccionado
    let transaccionesFiltradas = transaccionInventario.filter(function(transaccion) {
        return transaccion.inventario === inventarioSeleccionado;
    });
    // Construir la tabla con los datos filtrados
    let tabla = "<table>";
    tabla += "<tr><th>Fecha</th><th>Hora</th><th>ID Transacción</th><th>Inventario</th><th>Tipo</th><th>Artículo</th><th>Cantidad</th><th>Valor</th><th>Valor Total</th><th>Cantidad Total</th><th>Valor Acumulado</th></tr>";
    for (let i = 0; i < transaccionesFiltradas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + transaccionesFiltradas[i].fecha + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].hora + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].idTrans + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].inventario + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].tipo + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].articulo + "</td>";
        tabla += "<td>" + transaccionesFiltradas[i].cantidad + "</td>";
        tabla += "<td class='alaDerecha'>" + transaccionesFiltradas[i].valor + "</td>";
        tabla += "<td class='alaDerecha'>" + transaccionesFiltradas[i].valorTotal + "</td>";
        tabla += "<td class='alaDerecha'>" + transaccionesFiltradas[i].cantidadTotal + "</td>";
        tabla += "<td> class='alaDerecha'>" + transaccionesFiltradas[i].valorAcumulado + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    // Mostrar la tabla en el elemento con id "tabla-inventario"
    document.getElementById('tabla-inventario').innerHTML = tabla;
}