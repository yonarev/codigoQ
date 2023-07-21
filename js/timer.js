var startTime;
var timerInterval;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
function startTimer() {
  resetTimer();
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 100);
}
function stopTimer() {
  clearInterval(timerInterval);
  var endTime = new Date().getTime();
  var difference = Math.floor((endTime - startTime) / 1000); // obtener diferencia en segundos
  var minutes = Math.floor(difference / 60); // obtener minutos
  var seconds = difference % 60; // obtener segundos restantes
  var message = "Tiempo transcurrido: " + minutes + " minutos y " + seconds + " segundos.";
  var tempInput = document.createElement("input");
  tempInput.setAttribute("value", message);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert(message + " Copiado al portapapeles.");
}
function updateTimer() {
  var currentTime = new Date().getTime();
  var elapsedMilliseconds = currentTime - startTime;
  elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);
  elapsedSeconds = Math.floor((elapsedMilliseconds / 1000) % 60); // obtener segundos restantes
  document.getElementById("timer").innerHTML = elapsedMinutes + " minutos y " + elapsedSeconds + " segundos";
}
function resetTimer() {
  clearInterval(timerInterval);
  startTime = null;
  elapsedMinutes = 0;
  elapsedSeconds = 0;
  document.getElementById("timer").innerHTML = "0 minutos y 0 segundos";
}
