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
	let referencia="https://reloj-alarma.es/temporizador/#countdown=00:01:00&enabled=0&seconds=0&sound=xylophone&loop=1"
	window.location.href=referencia
}
// Renderizar las alertas al cargar la página
renderAlertas();
