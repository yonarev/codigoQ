	// Función para cargar los datos del archivo JSON en localStorage
	function cargarDatos() {
		// Obtener el archivo seleccionado por el usuario
		let archivo = document.getElementById('archivoJSON').files[0];
		// Crear un objeto de tipo FileReader para leer el archivo
		let lector = new FileReader();
		// Configurar el evento onload del FileReader
		lector.onload = function(evento) {
			// Obtener los datos del archivo en formato JSON
			let datosJSON = evento.target.result;
			// Convertir los datos JSON en un objeto JavaScript
			let datos = JSON.parse(datosJSON);
			// Guardar los datos en localStorage
			localStorage.setItem('asuntos', datos.asuntos);
			localStorage.setItem('listaDatos', datos.listaDatos);
			localStorage.setItem('correos', datos.correos);
			localStorage.setItem('bitacora', datos.bitacora);
			localStorage.setItem('llamadas', datos.llamadas);
			// Mostrar un mensaje de éxito
			alert('Todos Los datos se han cargado correctamente en localStorage.');
		};
		// Leer el archivo como texto
		lector.readAsText(archivo);
	}
