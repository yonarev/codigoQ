document.getElementById("input-tiempo").focus()
const form = document.querySelector('#form-alerta');
const tiempoInput = document.querySelector('#input-tiempo');
const detalleInput = document.querySelector('#input-detalle');
const alertList = document.querySelector('.alert-list');
const btnLLama=document.getElementById('llama'); //AKI
// Obtener las alertas del localStorage al cargar la página
let alertas = JSON.parse(localStorage.getItem('alertas')) || [];
// Renderizar las alertas en la lista
const renderAlertas = () => {
	alertList.innerHTML = '';
	alertas.forEach(alerta => {
		const li = document.createElement('li');
		li.classList.add('alert-item');
		li.innerHTML = `
			<span>${alerta.tiempo}</span>
			<span>${alerta.detalle}</span>
			<button id="llama" class="btn btn-secondary edit-btn" data-id="${alerta.id}" onclick="llamar()" >Editar</button>
			<button class="btn btn-danger" data-id="${alerta.id}">Eliminar</button>
		`;
		alertList.appendChild(li);
	});
};
// Agregar una nueva alerta al submit del formulario
form.addEventListener('submit', e => {
	e.preventDefault();
	const tiempo = tiempoInput.value.trim();
	const detalle = detalleInput.value.trim();
	if (tiempo && detalle) {
		// Crear un objeto de alerta
		const alerta = {
			tiempo,
			detalle,
			id: Date.now() // Generar un ID único con la fecha y hora actual
		};
		// Agregar la alerta al arreglo
		alertas.push(alerta);
		// Guardar el arreglo de alertas en el localStorage
		localStorage.setItem('alertas', JSON.stringify(alertas));
		// Renderizar las alertas en la lista
		renderAlertas();
		// Limpiar los campos del formulario
		form.reset();
	}
});
// Eliminar una alerta al hacer clic en el botón de "Eliminar"
alertList.addEventListener('click', e => {
	if (e.target.matches('.btn-danger')) {
		const id = Number(e.target.dataset.id);
		// Filtrar las alertas para obtener todas las que no tienen el ID que se quiere eliminar
		alertas = alertas.filter(alerta => alerta.id !== id);
		// Guardar el arreglo de alertas actualizado en el localStorage
		localStorage.setItem('alertas', JSON.stringify(alertas));
		// Renderizar las alertas en la lista
		renderAlertas();
	}
});
function llamar(){
    let ref1,ref2,ref3,ref4,ref5,referencia
    ref2=prompt("?En Cuantas horas ? \n si son con minutos se configura en la app")
    if(ref2==="1"){
        referencia="https://reloj-alarma.es/temporizador-60-minutos/"
    } else {
        ref1="https://reloj-alarma.es/temporizador-"
        ref3="-horas/"
        referencia=ref1+ref2+ref3
    }
    var nuevaVentana = window.open(referencia, "_blank"); 
    if (nuevaVentana != null && !nuevaVentana.closed) {
        nuevaVentana.location.reload();
    }
}
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
    segundo = "0" + segundo
    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
    minuto = "0" + minuto
    str_hora = new String (hora)
    if (str_hora.length == 1)
    hora = "0" + hora
    horaImprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value = horaImprimible;
    // INCORPORAR EN BODY
    // <form name="form_reloj">
    //     <input type="text" name="reloj" size="10" style="background-color : Black; color : White; font-family : Verdana, Arial, Helvetica; font-size : 8pt; text-align : center;" onfocus="window.document.form_reloj.reloj.blur()">
    // </form>
    setTimeout("mueveReloj()",1000)
}
mueveReloj()
// Renderizar las alertas al cargar la página
renderAlertas();
