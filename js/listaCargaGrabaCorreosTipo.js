let correos = [];
let tiposCorreo = new Set();
function actualizarTiposCorreo() {
  tiposCorreo = new Set(correos.map(correo => correo.tipo));
  let tipoCorreo = document.getElementById("tipo-correo");
  tipoCorreo.innerHTML = "";
  tiposCorreo.forEach(tipo => {
    let option = document.createElement("option");
    option.value = tipo;
    option.textContent = tipo;
    tipoCorreo.appendChild(option);
  });
}
function actualizarListaCorreos() {
  let tipoSeleccionado = document.getElementById("tipo-correo").value;
  let correosFiltrados = correos.filter(correo => correo.tipo === tipoSeleccionado);
  let listaCorreos = document.getElementById("lista-correos");
  listaCorreos.innerHTML = "";

  correosFiltrados.forEach(correo => {
    let item = document.createElement("li");
    item.innerHTML = `
      <div>Tipo: ${correo.tipo}</div>
      <div>Asunto: ${correo.asunto}</div>
      <div>Para: ${correo.para}</div>
      <div>CC: ${correo.cc}</div>
      <div>CCO: ${correo.cco}</div>
      <div>Contenido: ${correo.contenido}</div>
    `;
    listaCorreos.appendChild(item);
  });
}
let guardarCorreosBtn = document.getElementById("guardar-correos");
guardarCorreosBtn.addEventListener("click", () => {
  let data = JSON.stringify(correos);
  let blob = new Blob([data], { type: 'application/json' });
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = 'correosTipo.json';
  a.click();
alert("Se grabo el archivo correosTipo.json")
});
let buscarArchivoInput = document.getElementById("buscar-archivo");
buscarArchivoInput.addEventListener("change", (event) => {
  let archivo = event.target.files[0];
  let lector = new FileReader();
  lector.onload = (evento) => {
    correos = JSON.parse(evento.target.result);
    localStorage.setItem('correos', JSON.stringify(correos));
    actualizarTiposCorreo();
    actualizarListaCorreos();
  };
  lector.readAsText(archivo);
});
let correosAlmacenados = localStorage.getItem('correos');
if (correosAlmacenados) {
  correos = JSON.parse(correosAlmacenados);
  actualizarTiposCorreo();
  actualizarListaCorreos();
}
let tipoCorreo = document.getElementById("tipo-correo");
tipoCorreo.addEventListener("change", actualizarListaCorreos);

