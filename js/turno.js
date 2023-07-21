// Función para guardar un horario ingresado en el formulario
const guardarHorario = (event) => {
  event.preventDefault();
  // Obtiene los valores ingresados en el formulario
  const fecha = event.target.fecha.value;
  const inicio = event.target.inicio.value;
  const termino = event.target.termino.value;
  const break_am = event.target.break_am.value;
  const break_pm = event.target.break_pm.value;
  const colacion = event.target.colacion.value;
  // Crea un objeto JSON con los valores ingresados
  const horario = {
    "fecha": fecha,
    "inicio": inicio,
    "termino": termino,
    "break_am": break_am,
    "break_pm": break_pm,
    "colacion": colacion
  };
  // Obtiene la lista de horarios guardados en el almacenamiento local
  let horariosGuardados = JSON.parse(localStorage.getItem("horarios")) || [];
  // Agrega el nuevo horario a la lista y la guarda en el almacenamiento local
  horariosGuardados.push(horario);
  localStorage.setItem("horarios", JSON.stringify(horariosGuardados));
  // Limpia el formulario y muestra la tabla actualizada
  event.target.reset();
  mostrarHorarios();
};
// Función para mostrar los horarios guardados en la tabla
const mostrarHorarios = () => {
  const tbody = document.getElementById("horario");
  tbody.innerHTML = "";
  // Obtiene la lista de horarios guardados en el almacenamiento local
  const horariosGuardados = JSON.parse(localStorage.getItem("horarios")) || [];
  // Recorre la lista y agrega cada horario como una fila en la tabla
  horariosGuardados.forEach((horario) => {
    const tr = document.createElement("tr");
    const tdFecha = document.createElement("td");
    tdFecha.textContent = horario.fecha;
    tr.appendChild(tdFecha);
    const tdInicio = document.createElement("td");
    tdInicio.textContent = horario.inicio;
    tr.appendChild(tdInicio);
    const tdTermino = document.createElement("td");
    tdTermino.textContent = horario.termino;
    tr.appendChild(tdTermino);
    const tdBreakAM = document.createElement("td");
    tdBreakAM.textContent = horario.break_am || "-";
    tr.appendChild(tdBreakAM);
    const tdBreakPM = document.createElement("td");
    tdBreakPM.textContent = horario.break_pm || "-";
    tr.appendChild(tdBreakPM);
    const tdColacion = document.createElement("td");
    tdColacion.textContent = horario.colacion || "-";
    tr.appendChild(tdColacion);
    tbody.appendChild(tr);
  });
};
// Muestra los horarios guardados en la tabla al cargar la página
mostrarHorarios();
// Asigna la función de guardarHorario al evento "submit" del formulario
const form = document.querySelector("form");
form.addEventListener("submit", guardarHorario);
