// var listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];
//       function mostrarDatos() {
//         var html = '';
//         listaDatos.forEach(function(dato) {
//           html += '<h2>' + dato.item + '</h2>';
//           dato.procesos.forEach(function(proceso) {
//             html += '<h3>' + proceso.nombreProceso + '</h3>';
//             html += '<p>' + proceso.proceso + '</p>';

//           });

//         });

//         document.getElementById('listaDatos').innerHTML = html;

//       }



//       function agregarDato() {

//         var item = document.getElementById('item').value;

//         var nombreProceso = document.getElementById('nombreProceso').value;

//         var descripcionProceso = document.getElementById('descripcionProceso').value;



//         var datoExistente = false;

//         listaDatos.forEach(function(dato) {

//           if (dato.item === item) {

//             datoExistente = true;

//             var procesoExistente = false;

//             dato.procesos.forEach(function(proceso) {

//               if (proceso.nombreProceso === nombreProceso) {

//                 procesoExistente = true;

//               }

//             });

//             if (!procesoExistente) {

//               dato.procesos.push({

//                 'nombreProceso': nombreProceso,

//                 'proceso': descripcionProceso

//               });

//             } else {

//               alert("Ya existe un proceso con ese nombre para este item.");

//               document.getElementById('nombreProceso').select()

//               document.getElementById('nombreProceso').focus()

//             }

//           }

//         });



//         if (!datoExistente) {

//           listaDatos.push({

//             'item': item,

//             'procesos': [

//               {

//                 'nombreProceso': nombreProceso,

//                 'proceso': descripcionProceso

//               }

//             ]

//           });

//         }



//         localStorage.setItem('listaDatos', JSON.stringify(listaDatos));
//         alert("Proceso agregado correctamente.");
//             document.getElementById('nombreProceso').value = ''; document.getElementById('descripcionProceso').value = ''; document.getElementById('nombreProceso').focus();
//         mostrarDatos();

//       }

  

   

//       document.querySelector('form').addEventListener('submit', function(event) {

//         event.preventDefault();

//         agregarDato();

//       });

      

//       mostrarDatos();



      
  
var listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];
function mostrarDatos() {
  var html = '';
  listaDatos.forEach(function(dato) {
    html += '<h2>' + dato.item + '</h2>';
    dato.procesos.forEach(function(proceso) {
      html += '<h3>' + proceso.nombreProceso + '</h3>';
      html += '<p>' + proceso.proceso + '</p>';
    });
  });
  document.getElementById('listaDatos').innerHTML = html;
}

function agregarDato() {
  var item = document.getElementById('item').value;
  var nombreProceso = document.getElementById('nombreProceso').value;
  var descripcionProceso = document.getElementById('descripcionProceso').value;

  var datoExistente = false;
  listaDatos.forEach(function(dato) {
    if (dato.item === item) {
      datoExistente = true;
      var procesoExistente = false;
      dato.procesos.forEach(function(proceso) {
        if (proceso.nombreProceso === nombreProceso) {
          procesoExistente = true;
        }
      });
      if (!procesoExistente) {
        dato.procesos.push({
          'nombreProceso': nombreProceso,
          'proceso': descripcionProceso
        });
      } else {
        alert("Ya existe un proceso con ese nombre para este item.");
        document.getElementById('nombreProceso').select()
        document.getElementById('nombreProceso').focus()
      }
    }
  });

  if (!datoExistente) {
    listaDatos.push({
      'item': item,
      'procesos': [
        {
          'nombreProceso': nombreProceso,
          'proceso': descripcionProceso
        }
      ]
    });
  }

  localStorage.setItem('listaDatos', JSON.stringify(listaDatos));
  mostrarDatos();
}


document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  agregarDato();
});

mostrarDatos();