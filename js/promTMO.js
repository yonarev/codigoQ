// Obtenemos los datos del Local Storage
var data = JSON.parse(localStorage.getItem("data"));
// Si no hay datos en Local Storage, mostramos un mensaje de error
if (!data || data.length == 0) {
	document.getElementById("promedio").innerHTML = "No hay registros en Local Storage.";
} else {
	// Calculamos la suma total de dif
	var suma = 0;
	for (var i = 0; i < data.length; i++) {
		var dif = data[i].dif.split(":");
		var segundos = parseInt(dif[0]) * 3600 + parseInt(dif[1]) * 60 + parseInt(dif[2]);
		suma += segundos;
	}
	// Calculamos el promedio
	var promedio = suma / data.length;
	// Convertimos el promedio a minutos y segundos
	var minutos = Math.floor(promedio / 60);
	var segundos = Math.round(promedio % 60);
	// Mostramos el resultado en el HTML
	document.getElementById("promedio").innerHTML = "Promedio TMO: " + minutos + " minutos y " + segundos + " segundos.";
}
