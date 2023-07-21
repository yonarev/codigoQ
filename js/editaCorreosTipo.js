const correos = JSON.parse(localStorage.getItem('correos')) || [];
const tipoSelect = document.getElementById('tipo-select');
const asuntoInput = document.getElementById('asunto-input');
const paraInput = document.getElementById('para-input');
const ccInput = document.getElementById('cc-input');
const ccoInput = document.getElementById('cco-input');
const contenidoInput = document.getElementById('contenido-input');
const guardarButton = document.getElementById('guardar-button');
// Rellenar el select con los tipos existentes
const tipos = [...new Set(correos.map(correo => correo.tipo))];
for (const tipo of tipos) {
  const option = document.createElement('option');
  option.value = tipo;
  option.textContent = tipo;
  tipoSelect.appendChild(option);
}
// Agregar evento change al select para actualizar los campos del formulario
tipoSelect.addEventListener('change', (event) => {
  const correoSeleccionado = correos.find(correo => correo.tipo === event.target.value);
  if (correoSeleccionado) {
    asuntoInput.value = correoSeleccionado.asunto;
    paraInput.value = correoSeleccionado.para;
    ccInput.value = correoSeleccionado.cc;
    ccoInput.value = correoSeleccionado.cco;
    contenidoInput.value = correoSeleccionado.contenido;
  } else {
    asuntoInput.value = '';
    paraInput.value = '';
    ccInput.value = '';
    ccoInput.value = '';
    contenidoInput.value = '';
  }
});
// Agregar evento click al botón de guardar para actualizar el correo
guardarButton.addEventListener('click', () => {
  const correoSeleccionado = correos.find(correo => correo.tipo === tipoSelect.value);
  if (correoSeleccionado) {
    correoSeleccionado.asunto = asuntoInput.value;
    correoSeleccionado.para = paraInput.value;
    correoSeleccionado.cc = ccInput.value;
    correoSeleccionado.cco = ccoInput.value;
    correoSeleccionado.contenido = contenidoInput.value;
    localStorage.setItem('correos', JSON.stringify(correos));
    alert('Correo actualizado correctamente.');
  } else {
    alert('No se encontró ningún correo con el tipo seleccionado.');
  }
});
// Obtener el correo seleccionado por defecto en el select
const correoSeleccionado = correos.find(correo => correo.tipo === tipoSelect.value);
if (correoSeleccionado) {
  asuntoInput.value = correoSeleccionado.asunto;
  paraInput.value = correoSeleccionado.para;
  ccInput.value = correoSeleccionado.cc;
  ccoInput.value = correoSeleccionado.cco;
  contenidoInput.value = correoSeleccionado.contenido;
}
