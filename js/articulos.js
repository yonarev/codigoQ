
function grabarArticulo() {
    // Obtener los valores del formulario
    let fecha = obtenerFechaActual();
    let hora = obtenerHoraActual();
    let articulo = document.getElementById("articulo").value;
    
    // Convertir el nombre del artículo a minúsculas para ignorar la distinción de mayúsculas y minúsculas
    articulo = articulo.toLowerCase();
    
    // Validar si el nombre del artículo ya existe en la lista
    let listaArticulos = JSON.parse(localStorage.getItem("articulos")) || [];
    let articuloExistente = listaArticulos.find(function(art) {
        return art.articulo.toLowerCase() === articulo;
    });
    
    if (articuloExistente) {
        alert("El artículo ya ha sido registrado.");
        return;
    }
    
    // Generar el ID del artículo
    let fechaHora = fecha.replace(/\//g, "") + hora.replace(/:/g, "");
    let idArticulo = parseInt(fechaHora);
    
    // Crear el objeto de artículo
    let nuevoArticulo = {
        idArticulo: idArticulo,
        fecha: fecha,
        hora: hora,
        articulo: articulo
    };
    
    // Agregar el nuevo artículo a la lista
    listaArticulos.push(nuevoArticulo);
    
    // Guardar la lista de artículos en el almacenamiento local
    localStorage.setItem("articulos", JSON.stringify(listaArticulos));
    
    // Limpiar el formulario
    // document.getElementById("articulo").value = "";
    
    // Actualizar la tabla de artículos
    actualizarTabla();
}
function obtenerFechaActual() {
            let fecha = new Date();
            let dia = fecha.getDate();
            let mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
            let anio = fecha.getFullYear();
            
            // Formatear la fecha como dd/mm/yyyy
            return (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + anio;
}
function obtenerHoraActual() {
            let fecha = new Date();
            let hora = fecha.getHours();
            let minutos = fecha.getMinutes();
            let segundos = fecha.getSeconds();
            
            // Formatear la hora como hh:mm:ss
            return (hora < 10 ? "0" + hora : hora) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
}
// Función para eliminar un artículo
function eliminarArticulo(idArticulo) {
    let listaArticulos = JSON.parse(localStorage.getItem("articulos")) || [];
    // Filtrar la lista de artículos y eliminar el artículo con el ID correspondiente
    let nuevaListaArticulos = listaArticulos.filter(function(art) {
        return art.idArticulo !== idArticulo;
    });
    let nombreArticulo  = encontrarNombreArticulo(idArticulo)
    let confirma=confirm('seguro de eliminar el articulo: '+nombreArticulo)
    if(!confirma){
        return
    }
  
    // Actualizar la lista en el almacenamiento local
    localStorage.setItem("articulos", JSON.stringify(nuevaListaArticulos));
  
    // Eliminar la fila correspondiente en la tabla
    let tabla = document.getElementById("tablaArticulos");
    let fila = document.getElementById("fila-" + idArticulo);
    tabla.removeChild(fila);
}
function actualizarTabla() {
    let tabla = document.getElementById("tablaArticulos");
    tabla.innerHTML = ""; // Limpiar la tabla
    let listaArticulos = JSON.parse(localStorage.getItem("articulos")) || [];
    for (let i = 0; i < listaArticulos.length; i++) {
      let articulo = listaArticulos[i];
  
      // Crear una nueva fila en la tabla
      let fila = document.createElement("tr");
      fila.id = "fila-" + articulo.idArticulo; // Establecer un ID único para la fila
  
      // Agregar las celdas con los datos del artículo
      let idCelda = document.createElement("td");
      idCelda.textContent = articulo.idArticulo;
      fila.appendChild(idCelda);
  
      let fechaCelda = document.createElement("td");
      fechaCelda.textContent = articulo.fecha;
      fila.appendChild(fechaCelda);
  
      let horaCelda = document.createElement("td");
      horaCelda.textContent = articulo.hora;
      fila.appendChild(horaCelda);
  
      let articuloCelda = document.createElement("td");
      articuloCelda.textContent = articulo.articulo;
      fila.appendChild(articuloCelda);
  
      let accionesCelda = document.createElement("td");
      let botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.setAttribute("data-id", articulo.idArticulo);
      botonEliminar.addEventListener("click", function() {
        let id = this.getAttribute("data-id");
        eliminarArticulo(id);
      });
      accionesCelda.appendChild(botonEliminar);
      fila.appendChild(accionesCelda);
  
      // Agregar la fila a la tabla
      tabla.appendChild(fila);
    }
}
function encontrarNombreArticulo(idArticulo) {
    var listaArticulos = JSON.parse(localStorage.getItem("articulos")) || [];
  
    for (var i = 0; i < listaArticulos.length; i++) {
      if (parseInt(listaArticulos[i].idArticulo) === parseInt(idArticulo)) {
        return listaArticulos[i].articulo;
      }
    }
  
    return "Artículo no encontrado";
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
