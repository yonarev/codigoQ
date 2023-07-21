window.onload = function() {
    // Obtener la lista de motivos desde Local Storage, si existe
    if (localStorage.getItem("motivos")) {
        motivos = JSON.parse(localStorage.getItem("motivos"));
    }

    // Actualizar el combo box
    actualizarComboBox();

    // Cargar los detalles del motivo seleccionado al cargar la página
    // cargarDetallesMotivo();
}
var motivos = [];
// Función para cargar los detalles del motivo seleccionado al cargar la página
function cargarDetallesMotivo() {
    // Obtener el select del DOM
    var comboBoxMotivos = document.getElementById("motivo");

    // Si hay algún motivo seleccionado
    if (comboBoxMotivos.selectedIndex >= 0) {
        // Mostrar los detalles del motivo seleccionado
        document.getElementById("idMotivosMostrar").value = motivos[comboBoxMotivos.selectedIndex].idMotivo;
        // document.getElementById("nombreMotivoMostrar").value = motivos[comboBoxMotivos.selectedIndex].nombreMotivo;
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
function actualizarComboBox() {
		// Obtener el select del DOM
		var comboBoxMotivos = document.getElementById("motivo");
		// Eliminar todos los options del select
		comboBoxMotivos.innerHTML = "";
		// Agregar un option por cada motivo en la lista
		for (var i = 0; i < motivos.length; i++) {
			var option = document.createElement("option");
			option.text = motivos[i].nombreMotivo;
			option.value = motivos[i].idMotivo;
			comboBoxMotivos.add(option);
		}
        cargarDetallesMotivo()
}
function agregarMotivo() {
		// Obtener los valores de los campos del formulario
		var nombreMotivo = document.getElementById("nombreMotivo").value.trim();
		// Validar que el nombre de motivo no esté vacío y no se repita en la lista
		if (nombreMotivo === "") {
			alert("Ingrese un nombre de motivo.");
			return;
		}
		for (var i = 0; i < motivos.length; i++) {
			if (motivos[i].nombreMotivo === nombreMotivo) {
				alert("El nombre de motivo ya existe en la lista.");
				return;
			}
		}
		// Crear un objeto con los datos del nuevo motivo
		var fecha = new Date().toLocaleDateString();
		var hora = new Date().toLocaleTimeString();
		var idMotivo = generateID();
		var motivo = {
			"fecha": fecha,
			"hora": hora,
			"idMotivo": idMotivo,
			"nombreMotivo": nombreMotivo
		};
        
		// Agregar el nuevo motivo a la lista y guardar la lista en Local Storage
		motivos.push(motivo);
		localStorage.setItem("motivos", JSON.stringify(motivos));
		alert('se grabo el motivo '+nombreMotivo)
        ordenaMotivos()
		// Actualizar el combo box
		// actualizarComboBox();
        let select = document.getElementById("motivo");
        if (nombreMotivo !== null && nombreMotivo !== "") {
            event.preventDefault();
            let option = document.createElement("option");
            option.text = nombreMotivo;
            option.value = idMotivo;
            select.add(option); //aqui muta y cae
            select.selectedIndex = select.options.length - 1
        }

		// Limpiar los campos del formulario
		document.getElementById("nombreMotivo").value = "";
}
function mostrarMotivo() {
		// Obtener el índice del motivo seleccionado en el combo box
		var comboBoxMotivos = document.getElementById("motivo");
		var indice = comboBoxMotivos.selectedIndex;

		// Mostrar los detalles del motivo seleccionado
		document.getElementById("idMotivosMostrar").value = motivos[indice].idMotivo;
		// document.getElementById("nombreMotivoMostrar").value = motivos[indice].nombreMotivo;
}
function ordenaMotivos(){
    // debugger
    // Obtener los motivos almacenados en el Local Storage
    let motivos = localStorage.getItem('motivos');
    // Verificar si hay motivos almacenados
    if (motivos) {
      motivos = JSON.parse(motivos);
      // Ordenar los motivos por nombreMotivo en orden alfabético
      motivos.sort((a, b) => {
        const nombreA = a.nombreMotivo.toLowerCase();
        const nombreB = b.nombreMotivo.toLowerCase();
        if (nombreA < nombreB) return -1;
        if (nombreA > nombreB) return 1;
        return 0;
      });
      // Guardar los motivos ordenados en el Local Storage
      localStorage.setItem('motivos', JSON.stringify(motivos));
      alert('se ordenaron los Motivos')
      // Mostrar los motivos ordenados en la consola
      console.log(motivos);
    } else {
      console.log('No hay motivos almacenados en el Local Storage.');
    }
}
window.onload = function() {
		// Obtener la lista de motivos desde Local Storage, si existe
		if (localStorage.getItem("motivos")) {
			motivos = JSON.parse(localStorage.getItem("motivos"));
		}

		// Actualizar el combo box
		actualizarComboBox();
}