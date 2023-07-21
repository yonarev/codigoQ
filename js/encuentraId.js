function buscar() {
  const numeroServicio = document.getElementById("numeroServicio").value;
  const llamadas = JSON.parse(localStorage.getItem("llamadas"));
  const llamadaEncontrada = llamadas.find(llamada => llamada.numeroServicio === numeroServicio);
  if (llamadaEncontrada) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>ID: ${llamadaEncontrada.idNow}</p>
      <p>RAC: ${llamadaEncontrada.rac}</p>
      <p>Fecha inicio: ${llamadaEncontrada.fechaInicio}</p>
      <p>Hora inicio: ${llamadaEncontrada.horaInicio}</p>
      <p>Hora final: ${llamadaEncontrada.horaFinal}</p>
      <p>Usuario: ${llamadaEncontrada.usuarioNombres} ${llamadaEncontrada.UsuarioApellidoPaterno} ${llamadaEncontrada.UsuarioApellidoMaterno}</p>
      <p>RUT: ${llamadaEncontrada.rut}</p>
      <p>Celular: ${llamadaEncontrada.celular}</p>
      <p>Mail: ${llamadaEncontrada.mail}</p>
      <p>Dirección: ${llamadaEncontrada.direccion} ${llamadaEncontrada.calle} ${llamadaEncontrada.numeroDireccion} ${llamadaEncontrada.depto} ${llamadaEncontrada.comuna}</p>
      <p>Referencia: ${llamadaEncontrada.referencia}</p>
      <p>Número de servicio: ${llamadaEncontrada.numeroServicio}</p>
      <p>Dígito verificador: ${llamadaEncontrada.digitoVerificador}</p>
      <p>Asunto: ${llamadaEncontrada.asunto}</p>
      <p>Desarrollo: ${llamadaEncontrada.desarrollo}</p>
      <p>Glosa: ${llamadaEncontrada.glosa}</p>
      <p>Recordatorio: ${llamadaEncontrada.recordatorio}</p>
      <p>Número de atención: ${llamadaEncontrada.numeroAtencion}</p>
      <p>Número de aviso: ${llamadaEncontrada.numeroAviso}</p>
      <p>Número de orden: ${llamadaEncontrada.numeroOrden}</p>
    `;
  } else {
    alert("No se encontró ninguna llamada con ese número de servicio.");
  }
}
