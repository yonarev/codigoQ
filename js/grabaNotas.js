
let enTexto=document.getElementById('texto')
enTexto.focus()
enTexto.select()
let contenidoArchivo = '';
function leerArchivo() {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = 'text/plain';
	input.onchange = function() {
		let archivo = this.files[0];
		let lector = new FileReader();
		lector.onload = function() {
			contenidoArchivo = lector.result;
			document.getElementById('texto').value = contenidoArchivo;
		};
		lector.readAsText(archivo);
	};
	input.click();
}
function guardarTexto() {
    debugger
    let nombreArchivo=generarNombreArchivo()
	let texto = document.getElementById('texto').value;
	let archivo = new Blob([texto], {type: 'text/plain'});
	let a = document.createElement('a');
	a.href = URL.createObjectURL(archivo);
	a.download = nombreArchivo;
	a.click();
}
function generarNombreArchivo() {
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let nombreArchivo = dia + '-' + mes + '-' + anio + '-' + hora + '-' + minutos + '-' + segundos + '-nota.txt';
    return nombreArchivo;
}




