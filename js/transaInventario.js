// Obtener la fecha y hora actual
var currentDate = new Date();
var fecha = currentDate.toLocaleDateString();
var hora = currentDate.toLocaleTimeString();

// Obtener los datos del local storage o inicializarlos si no existen
// var transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario')) || [];
// var inventarios = JSON.parse(localStorage.getItem('inventarios')) || [];
// var tiposArt = JSON.parse(localStorage.getItem('tiposArt')) || [];
// var articulos = JSON.parse(localStorage.getItem('articulos')) || [];

// Función para generar el ID de transacción
function generarIdTrans() {
    var idTrans = fecha.replaceAll('/', '') + hora.replaceAll(':', '');
    return idTrans;
}

// Función para actualizar el local storage
function actualizarLocalStorage(transaccionInventario) {
    localStorage.setItem('transaccionInventario', JSON.stringify(transaccionInventario));
    localStorage.setItem('inventarios', JSON.stringify(inventarios));
    localStorage.setItem('tiposArt', JSON.stringify(tiposArt));
    localStorage.setItem('articulos', JSON.stringify(articulos));
}
// Función para agregar una nueva transacción de inventario
function agregarTransaccion() {
    event.preventDefault();
    let inventario = document.getElementById('inventario').value;
    let tipo = document.getElementById('tipo').value;
    let articulo = document.getElementById('articulo').value;
    // let cantidadI = parseInt(document.getElementById('cantidadI').value);
    let cantidadI = getNumericValue('cantidadI');
    // let valorI = parseFloat(document.getElementById('valorI').value);
    let valorI=getNumericValue('valorI')
    let valorTotal = cantidadI * valorI;
    // VALIDACIONES
    if(!inventario || !tipo || !articulo || !valorTotal){
        if(!inventario){
            let inventarioSel=document.getElementById("inventario");
            // inventarioSel.select();
            inventarioSel.focus();
            alert('Seleccione un Inventario')
            return
        }
        if(!tipo){
            let tipoSel=document.getElementById("tipo");
            tipoSel.focus();
            alert('Seleccione un tipo')
            return
        }
        if(!cantidadI){
            let cantidadISel=document.getElementById("cantidadI");
            cantidadISel.focus();
            cantidadISel.select();
            alert('Seleccione un cantidad')
            return
        }
        if(!valorI){
            let valorISel=document.getElementById("valorI");
            valorISel.focus();
            valorISel.select();
            alert('Seleccione un valor')
            return
        }
        if(!valorTotal){
            alert('No hay montos')
            return
        }
    }
    // Calcular la cantidad total y valor acumulado
    let cantidadTotal = 0;
    let valorAcumulado = 0;
    let transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario')) || [];
    transaccionInventario.forEach(function(trans) {
        cantidadTotal += trans.cantidad;
        valorAcumulado += trans.valorTotal;
    });
    cantidadTotal += cantidadI;
    valorAcumulado += valorTotal;
    let idTrans = generarIdTrans();
    // Crear el objeto de transacción de inventario
    let nuevaTransaccion = {
        fecha: fecha,
        hora: hora,
        idTrans: idTrans,
        inventario: inventario,
        tipo: tipo,
        articulo: articulo,
        cantidad: cantidadI,
        valor: valorI,
        valorTotal: valorTotal,
        cantidadTotal: cantidadTotal,
        valorAcumulado: valorAcumulado
    };
    transaccionInventario.push(nuevaTransaccion);
    localStorage.setItem("transaccionInventario", JSON.stringify(transaccionInventario));
    // actualizarLocalStorage(transaccionInventario);

    // // Limpiar los campos del formulario
    document.getElementById('cantidadI').value = '';
    document.getElementById('valorI').value = '';

    // Mostrar mensaje de éxito
    alert('Se agrego el articulo al inventario');

    // Agregar fila a la tabla con la nueva transacción
    let table = document.getElementById('tablaTransaccionesInv');
    let row = table.insertRow(-1);
    let cellFecha = row.insertCell(0);
    let cellHora = row.insertCell(1);
    let cellIdTrans = row.insertCell(2);
    let cellInventario = row.insertCell(3);
    let cellTipo = row.insertCell(4);
    let cellArticulo = row.insertCell(5);
    let cellCantidad = row.insertCell(6);
    let cellValor = row.insertCell(7);
    let cellValorTotal = row.insertCell(8);
    let cellCantidadTotal = row.insertCell(9);
    let cellValorAcumulado = row.insertCell(10);
    cellFecha.innerHTML = fecha;
    cellHora.innerHTML = hora;
    cellIdTrans.innerHTML = idTrans;
    cellInventario.innerHTML = inventario;
    cellTipo.innerHTML = tipo;
    cellArticulo.innerHTML = articulo;
    cellCantidad.innerHTML = cantidadI;
    cellValor.innerHTML = '$'+valorI;
    cellValorTotal.innerHTML = '$'+valorTotal;
    cellCantidadTotal.innerHTML = cantidadTotal;
    cellValorAcumulado.innerHTML = '$'+valorAcumulado;
}
// Función para mostrar los artículos según el tipo seleccionado
function mostrarArticulos() {
    let articulos = JSON.parse(localStorage.getItem('articulos')) || [];
    // debugger
    let tipoSeleccionado = document.getElementById('tipo').value;
    
    // Filtrar los artículos según el tipo seleccionado
    let articulosFiltrados = articulos.filter(function(art) {
        return art.tipo === tipoSeleccionado;
    });
    
    let articuloSelect = document.getElementById('articulo');
    articuloSelect.innerHTML = '';
    
    // Generar las opciones para el combo box "articulo"
    articulosFiltrados.forEach(function(art) {
        let option = document.createElement('option');
        option.value = art.articulo;
        option.text = art.articulo;
        articuloSelect.add(option);
    });
    event.preventDefault();
}

function presentaInventario(){
    let transaccionInventario = JSON.parse(localStorage.getItem('transaccionInventario')) || [];
    transaccionInventario.forEach(function(trans) {
        let table = document.getElementById('tablaTransaccionesInv');
        table.style.fontSize ='1vw'
        let row = table.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellHora = row.insertCell(1);
        let cellIdTrans = row.insertCell(2);
        let cellInventario = row.insertCell(3);
        let cellTipo = row.insertCell(4);
        let cellArticulo = row.insertCell(5);
        let cellCantidad = row.insertCell(6);
        let cellValor = row.insertCell(7);
        let cellValorTotal = row.insertCell(8);
        let cellCantidadTotal = row.insertCell(9);
        let cellValorAcumulado = row.insertCell(10);
        cellFecha.innerHTML = trans.fecha;
        cellHora.innerHTML = trans.hora;
        cellIdTrans.innerHTML = trans.idTrans;
        cellInventario.innerHTML = trans.inventario;
        cellTipo.innerHTML = trans.tipo;
        cellArticulo.innerHTML = trans.articulo;
        cellCantidad.innerHTML = trans.cantidad;
        cellValor.innerHTML = '$'+trans.valor;
        cellValorTotal.innerHTML = '$'+trans.valorTotal;
        cellCantidadTotal.innerHTML = trans.cantidadTotal;
        cellValorAcumulado.innerHTML = '$'+trans.valorAcumulado;
    });
}