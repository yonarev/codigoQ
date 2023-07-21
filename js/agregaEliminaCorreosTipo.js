// Cargar los datos del local storage al cargar la página
window.addEventListener("load", function() {
    var correos = JSON.parse(localStorage.getItem("correos")) || [];
    correos.forEach(function(correo) {
        crearFila(correo);
    });
// Agregar un evento de submit al formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Crear un objeto con los valores del formulario
    var correo = {
        tipo: document.getElementById("tipo").value,
        para: document.getElementById("para").value,
        cc: document.getElementById("cc").value,
        cco: document.getElementById("cco").value,
        asunto: document.getElementById("asunto").value,
        contenido: document.getElementById("contenido").value
    };

    // Agregar el objeto al arreglo de correos y guardar en el local storage
    correos.push(correo);
    localStorage.setItem("correos", JSON.stringify(correos));

    // Crear una nueva fila en la tabla con los valores del correo
    crearFila(correo);

    // Limpiar el formulario
    document.getElementById("formulario").reset();
});

// Función para crear una fila en la tabla con los valores de un correo
function crearFila(correo) {
    var fila = document.createElement("tr");

    var tipo = document.createElement("td");
    tipo.textContent = correo.tipo;
    fila.appendChild(tipo);

    var para = document.createElement("td");
    para.textContent = correo.para;
    fila.appendChild(para);

    var cc = document.createElement("td");
    cc.textContent = correo.cc;
    fila.appendChild(cc);

    var cco = document.createElement("td");
    cco.textContent = correo.cco;
    fila.appendChild(cco);

    var asunto = document.createElement("td");
    asunto.textContent = correo.asunto;
    fila.appendChild(asunto);

    var contenido = document.createElement("td");
    contenido.textContent = correo.contenido;
    fila.appendChild(contenido);

    var eliminar = document.createElement("td");
    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        var indice = correos.indexOf(correo);
        correos.splice(indice, 1);
        localStorage.setItem("correos", JSON.stringify(correos));
        fila.remove();
    });
    eliminar.appendChild(botonEliminar);
    fila.appendChild(eliminar);

    document.getElementById("tabla").querySelector("tbody").appendChild(fila);
}
});