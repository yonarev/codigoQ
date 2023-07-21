var listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];
function mostrarProcesos(itemSeleccionado) {
  var html = '';
  listaDatos.forEach(function(dato) {
    if (dato.item === itemSeleccionado) {
      html += '<h2>' + dato.item + '</h2>';
      dato.procesos.forEach(function(proceso) {
        html += '<h3>' + proceso.nombreProceso + '</h3>';
        html += '<p>' + proceso.proceso + '</p>';
      });
    }
  });
  document.getElementById('procesos').innerHTML = html;
}
function cargarListaItems() {
  let listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];
  var listaItemsHtml = '';
  listaDatos.forEach(function(data) {
    listaItemsHtml += '<option value="' + data.item + '">' + data.item + '</option>';
  });
  document.getElementById('listaItems').innerHTML = listaItemsHtml;
}
cargarListaItems();
document.getElementById('listaItems').addEventListener('change', function() {
  var itemSeleccionado = document.getElementById('listaItems').value;
  mostrarProcesos(itemSeleccionado);
});
//RECUPERA DESDE JSON A LA MEMORIA LOCAL
var buscarArchivoInput = document.getElementById("buscar-archivo");
buscarArchivoInput.addEventListener("change", (event) => {
debugger
let archivo = event.target.files[0];
let lector = new FileReader();
lector.onload = (evento) => {
    let lista = JSON.parse(evento.target.result);
    localStorage.setItem('listaDatos', JSON.stringify(lista));
};
lector.readAsText(archivo);
});
//GRABA LA LISTA DE DATOS DE LOCAL EN ARCHIV JSON
let guardarListaBtn = document.getElementById("guardaLista");
guardarListaBtn.addEventListener("click", () => {
      let data = JSON.stringify(lista);
      let blob = new Blob([data], { type: 'application/json' });
      let url = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'listaDatos.json';
      a.click();
      alert("Se grabo el archivo listaDatos.json")
  });
//para guardar en archivo json los datos
  let lista=[]
  let listaDat = localStorage.getItem('listaDatos');
  if (listaDat) {
      lista = JSON.parse(listaDat);
  }
  //PARA EDITAR EL CODIGO
  function mostrarEditarFormulario() {
      document.getElementById('editarForm').style.display = 'block';
  }
  function ocultarEditarFormulario() {
      document.getElementById('editarForm').style.display = 'none';
  }
  document.getElementById('listaItems').addEventListener('change', function() {
      var itemSeleccionado = document.getElementById('listaItems').value;
      mostrarProcesos(itemSeleccionado);
      ocultarEditarFormulario();
  });
  document.getElementById('procesos').addEventListener('click', function(e) {
  if (e.target && e.target.nodeName == 'H3') {
      var nombreProceso = e.target.innerHTML;
      var itemSeleccionado = document.getElementById('listaItems').value;
      var procesoSeleccionado = null;
      listaDatos.forEach(function(dato) {
      if (dato.item === itemSeleccionado) {
          dato.procesos.forEach(function(proceso) {
          if (proceso.nombreProceso === nombreProceso) {
              procesoSeleccionado = proceso;
          }
          });
      }
      });
      if (procesoSeleccionado !== null) {
      document.getElementById('nombreProceso').value = procesoSeleccionado.nombreProceso;
      document.getElementById('proceso').value = procesoSeleccionado.proceso;
      mostrarEditarFormulario();
      }
  }
  });
 cargarListaItems();
  mostrarProcesos(document.getElementById('listaItems').options[0].value); // Agregamos esta línea para mostrar los datos correspondientes al primer elemento del combo box al cargar la página
  document.getElementById('listaItems').addEventListener('change', function() {
    var itemSeleccionado = document.getElementById('listaItems').value;
    mostrarProcesos(itemSeleccionado);
  });
  //actualiza datos 
  var guardarBtn = document.getElementById('guardarProceso');
  guardarBtn.addEventListener('click', actualizarDatos);

function actualizarDatos() {
  var nombreProceso = document.getElementById('nombreProceso').value;
  var proceso = document.getElementById('proceso').value;
  var itemSeleccionado = document.getElementById('listaItems').value;
  var indice = listaDatos.findIndex(function(dato) {
    return dato.item === itemSeleccionado;
  });
  listaDatos[indice].procesos.push({
    nombreProceso: nombreProceso,
    proceso: proceso
  });
  localStorage.setItem('listaDatos', JSON.stringify(listaDatos));
  cargarListaItems();
  mostrarProcesos(itemSeleccionado);
}
// ELIMINA
document.getElementById('eliminarProceso').addEventListener('click', function() {
var nombreProceso = document.getElementById('nombreProceso').value.trim();
if (!nombreProceso) {
  alert('Por favor, seleccione un proceso para eliminar');
  return;
}
if (confirm('¿Está seguro de que desea eliminar el proceso: '+nombreProceso)) {
  var itemSeleccionado = document.getElementById('listaItems').value;
  listaDatos.forEach(function(dato) {
      if (dato.item === itemSeleccionado) {
          var procesos = dato.procesos.filter(function(proceso) {
              return proceso.nombreProceso !== nombreProceso;
          });
          dato.procesos = procesos;
      }
  });
  localStorage.setItem('listaDatos', JSON.stringify(listaDatos));
  mostrarProcesos(itemSeleccionado);
}
});