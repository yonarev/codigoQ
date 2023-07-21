function guardar(opcion) {
    let archivo,nombreArchivo,contenido
    if(opcion==='bitacora'){
        contenido = {
            bitacora: JSON.parse(localStorage.getItem("bitacora")),
        };
        archivo="bitacora"
    }
    if(opcion==='asuntos'){
        contenido = {
            asuntos: JSON.parse(localStorage.getItem("asuntos")),
        };
        archivo="asuntos"
    }
    if(opcion==='desarrollo'){
        contenido = {
            desarrollo: JSON.parse(localStorage.getItem('desarrollo')),
        };
        archivo="desarrollo"
    }
    if(opcion==='transacciones'){
        contenido = {
            transacciones: JSON.parse(localStorage.getItem("transacciones")),
        };
        archivo="transacciones"
    }
    if(opcion==='cuentas'){
        contenido = {
            cuentas: JSON.parse(localStorage.getItem('cuentas')),
        };
        archivo="cuentas"
    }
    if(opcion==='motivos'){
        contenido = {
            motivos: JSON.parse(localStorage.getItem('motivos')),
        };
        archivo="motivos"
    }
    if(opcion==='baseCuentas'){
        contenido = {
            cuentas: JSON.parse(localStorage.getItem('cuentas')),
            deudas: JSON.parse(localStorage.getItem('deudas')),
            cuentasRetenidas: JSON.parse(localStorage.getItem('cuentasRetenidas')),
            transacciones: JSON.parse(localStorage.getItem("transacciones")),
            motivos: JSON.parse(localStorage.getItem('motivos')),
        };
        archivo="baseCuentas"
    }
    if(opcion==='cuentasRetenidas'){
        contenido = {
            cuentas: JSON.parse(localStorage.getItem('cuentasRetenidas')),
        };
        archivo="cuentasRetenidas"
    }
    if(opcion==='deudas'){
        contenido = {
            deudas: JSON.parse(localStorage.getItem('deudas')),
        };
        archivo="deudas"
    }
    if (opcion==='baseInventarios'){
        contenido = {
            inventarios: JSON.parse(localStorage.getItem('inventarios')),
            articulos: JSON.parse(localStorage.getItem('articulos')),
            tiposArt: JSON.parse(localStorage.getItem('tiposArt')),
            transaccionInventario: JSON.parse(localStorage.getItem("transaccionInventario")),
        };
        archivo="baseInventarios"
        // alert('Inventarios Tipos articulos y transacciones Inventartios se grabaron')
    }
    if(opcion==='articulos'){
        contenido = {
            articulos: JSON.parse(localStorage.getItem('articulos')),
        };
        archivo="articulos"
    }
    if(opcion==='tiposArt'){
        contenido = {
            tiposArt: JSON.parse(localStorage.getItem('tiposArt')),
        };
        archivo="tiposArt"
    }
    if(opcion==='inventarios'){
        contenido = {
            inventarios: JSON.parse(localStorage.getItem('inventarios')),
        };
        archivo="inventarios"
    }
    if(opcion==='transaccionInventario'){
        contenido = {
            transaccionInventario: JSON.parse(localStorage.getItem('transaccionInventario')),
        };
        archivo="transaccionInventario"
    }
    if(opcion==='curriculum'){
        contenido = {
            curriculum: JSON.parse(localStorage.getItem('curriculum')),
        };
        archivo="curriculum"
    }
    if(opcion==='biografia'){
        contenido = {
            biografia: JSON.parse(localStorage.getItem('biografia')),
        };
        archivo="biografia"
    }
    if(opcion==='relatos'){
        contenido = {
            relatos: JSON.parse(localStorage.getItem("relatos")),
        };
        archivo="relatos"
    }
    
    if(opcion==='todo'){
        contenido = {
            bitacora: JSON.parse(localStorage.getItem('bitacora')),
            asuntos: JSON.parse(localStorage.getItem('asuntos')),
            desarrollo: JSON.parse(localStorage.getItem('desarrollo')),
            cuentas: JSON.parse(localStorage.getItem('cuentas')),
            motivos: JSON.parse(localStorage.getItem('motivos')),
            cuentasRetenidas: JSON.parse(localStorage.getItem('cuentasRetenidas')),
            transacciones: JSON.parse(localStorage.getItem("transacciones")),
            deudas: JSON.parse(localStorage.getItem('deudas')),
            articulos: JSON.parse(localStorage.getItem('articulos')),
            tiposArt: JSON.parse(localStorage.getItem('tiposArt')),
            inventarios: JSON.parse(localStorage.getItem('inventarios')),
            transaccionInventario: JSON.parse(localStorage.getItem('transaccionInventario')),
            curriculum: JSON.parse(localStorage.getItem('curriculum')),
            biografia: JSON.parse(localStorage.getItem('biografia')),
            relatos: JSON.parse(localStorage.getItem("relatos"))
        };
        archivo="baseDatos";
        // alert('se grabo toda la base')
    }
    nombreArchivo=nombreArchivoJson(archivo)
    const contenidoJSON = JSON.stringify(contenido);
    const blob = new Blob([contenidoJSON], {type: 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = nombreArchivo;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}
function cargar(pregunta) {
    // Obtener el objeto Blob del archivo seleccionado
    const archivo = document.getElementById('archivo').files[0];
    if (!archivo) {
      alert('Seleccione un archivo JSON.');
      return;
    }
    // Crear un objeto FileReader para leer el archivo Blob
    const reader = new FileReader();
    let cargado=false
    reader.onload = function(event) {
            const data = JSON.parse(event.target.result);
            const bitacora=JSON.stringify(data.bitacora);
            const asuntos=JSON.stringify(data.asuntos);
            const desarrollo=JSON.stringify(data.desarrollo);
            const cuentas= JSON.stringify(data.cuentas);
            const motivos=JSON.stringify(data.motivos);
            const transacciones= JSON.stringify(data.transacciones);
            const deudas= JSON.stringify(data.deudas);
            const cuentasRetenidas= JSON.stringify(data.cuentasRetenidas);
            const articulos= JSON.stringify(data.articulos);
            const tiposArt= JSON.stringify(data.tiposArt);
            const inventarios= JSON.stringify(data.inventarios);
            const transaccionInventario= JSON.stringify(data.transaccionInventario);
            const curriculum= JSON.stringify(data.curriculum);
            const biografia= JSON.stringify(data.biografia);
            const relatos=JSON.stringify(data.relatos);
            let siCarga=false
            if(pregunta===true){
                if (bitacora){
                    siCarga=confirm("desea cargar La bitacora?")
                    if(siCarga){
                        localStorage.setItem('bitacora', JSON.stringify(data.bitacora))
                        cargado=true
                    }
                }
                if(asuntos){
                    siCarga=confirm("desea cargar los Asuntos?")
                    if(siCarga){
                        localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
                        cargado=true
                    }
                }
                if(desarrollo){
                    siCarga=confirm("desea cargar el Desarrollo?")
                    if(siCarga){
                        localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
                        cargado=true
                    }
                }
                if(motivos){
                    siCarga=confirm("desea cargar los motivos?")
                    if(siCarga){
                        localStorage.setItem('motivos', JSON.stringify(data.motivos))
                        cargado=true
                    }
                }
                if(cuentas){
                    siCarga=confirm("desea cargar las cuentas?")
                    if(siCarga){
                        localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
                        cargado=true
                    }
                }
                if (transacciones){
                    siCarga=confirm("desea cargar las Transacciones?")
                    if(siCarga){
                        localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
                        cargado=true
                    }
                }
                if(deudas){
                    siCarga=confirm("desea cargar las deudas?")
                    if(siCarga){
                        localStorage.setItem('deudas', JSON.stringify(data.deudas));
                        cargado=true
                    }
                }
                if(cuentasRetenidas){
                    siCarga=confirm("desea cargar las cuentas Retenidas?")
                    if(siCarga){
                        localStorage.setItem('cuentasRetenidas', JSON.stringify(data.cuentasRetenidas));
                        cargado=true
                    }
                }
                if(inventarios){
                    siCarga=confirm("desea cargar los inventarios?")
                    if(siCarga){
                        localStorage.setItem('inventarios', JSON.stringify(data.inventarios));
                        cargado=true
                    }
                }
                if(articulos){
                    siCarga=confirm("desea cargar los articulos?")
                    if(siCarga){
                        localStorage.setItem('articulos', JSON.stringify(data.articulos));
                        cargado=true
                    }
                }
                if(tiposArt){
                    siCarga=confirm("desea cargar los tipos de Articulos?")
                    if(siCarga){
                        localStorage.setItem('tiposArt', JSON.stringify(data.tiposArt));
                        cargado=true
                    }
                }
                if(transaccionInventario){
                    siCarga=confirm("desea cargar las transacciones de Inventarios?")
                    if(siCarga){
                        localStorage.setItem('transaccionInventario', JSON.stringify(data.transaccionInventario));
                        cargado=true
                    }
                }
                if(curriculum){
                    siCarga=confirm("desea cargar el Curriculum?")
                    if(siCarga){
                        localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
                        cargado=true
                    }
                }
                if(biografia){
                    siCarga=confirm("desea cargar la biografia?")
                    if(siCarga){
                        localStorage.setItem('biografia', JSON.stringify(data.biografia));
                        cargado=true
                    }
                }
                if (relatos){
                    siCarga=confirm("desea cargar los relatos?")
                    if(siCarga){
                        localStorage.setItem('relatos', JSON.stringify(data.relatos))
                        cargado=true
                    }
                }
            } else {
                if (bitacora){
                    localStorage.setItem('bitacora', JSON.stringify(data.bitacora))
                    cargado=true
                }
                if(asuntos){
                    localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
                    cargado=true
                }
                if(desarrollo){
                    localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
                    cargado=true
                }
                if(motivos){
                    localStorage.setItem('motivos', JSON.stringify(data.motivos))
                    cargado=true
                }
                if(cuentas){
                    localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
                    cargado=true
                }
                if (transacciones){
                    localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
                    cargado=true
                }
                if(cuentasRetenidas){
                    localStorage.setItem('cuentasRetenidas', JSON.stringify(data.cuentasRetenidas))
                    cargado=true
                }
                if(deudas){
                    localStorage.setItem('deudas', JSON.stringify(data.deudas));
                    cargado=true
                }
                if(articulos){
                    localStorage.setItem('articulos', JSON.stringify(data.articulos));
                    cargado=true
                }
                if(tiposArt){
                    localStorage.setItem('tiposArt', JSON.stringify(data.tiposArt));
                    cargado=true
                }
                if(inventarios){
                    localStorage.setItem('inventarios', JSON.stringify(data.inventarios));
                    cargado=true
                }
                if(transaccionInventario){
                    localStorage.setItem('transaccionInventario', JSON.stringify(data.transaccionInventario));
                    cargado=true
                }
                if(curriculum){
                    localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
                    cargado=true
                }
                if(biografia){
                    localStorage.setItem('biografia', JSON.stringify(data.biografia));
                    cargado=true
                }
                if (relatos){
                    localStorage.setItem('relatos', JSON.stringify(data.relatos))
                    cargado=true
                }
            }
            if (cargado){
                alert('Contenido cargado en Local Storage.');
            } else {
                alert('no se han cargado datos en Local desde JSON. con FX cargar()');
            }
    };
    reader.readAsText(archivo);
    location.reload(true);
}

function cargarArchivoJson(archivoId) {
    // Obtener el objeto Blob del archivo seleccionado
    const archivo = document.getElementById(archivoId).files[0];
    if (!archivo) {
      alert('Seleccione un archivo JSON.');
      return;
    }
    // Crear un objeto FileReader para leer el archivo Blob
    const reader = new FileReader();
    let cargado=false
    reader.onload = function(event) {
            // Obtener el contenido del archivo JSON como un objeto
            const data = JSON.parse(event.target.result);
            const bitacora=JSON.stringify(data.bitacora);
            const asuntos=JSON.stringify(data.asuntos);
            const desarrollo=JSON.stringify(data.desarrollo);
            const cuentas= JSON.stringify(data.cuentas);
            const motivos=JSON.stringify(data.motivos);
            const transacciones= JSON.stringify(data.transacciones);
            const cuentasRetenidas= JSON.stringify(data.cuentasRetenidas);
            const deudas= JSON.stringify(data.deudas);
            const curriculum= JSON.stringify(data.curriculum);
            const biografia= JSON.stringify(data.biografia);
            const relatos= JSON.stringify(data.relatos);
            if (bitacora){
                alert('Cargada la Bitacora en Local Storage.');
                localStorage.setItem('bitacora', JSON.stringify(data.bitacora))
                cargado=true
            }
            if (asuntos){
                alert('Cargados los Asuntos');
                localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
                cargado=true
            }
            if (desarrollo){
                alert('Cargado el Desarrollo');
                localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
                cargado=true
            }
            // CARGA OK
            if(motivos){
                alert('Cargados los Motivos');
                localStorage.setItem('motivos', JSON.stringify(data.motivos))
                cargado=true
            }
            //CARGA OK
            if(cuentas){
                alert('Cargadas las Cuentas');
                localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
                cargado=true
            }
            //CARGA OK
            if (transacciones){
                alert('Cargadas las Transacciones');
                localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
                cargado=true
            }
            if(curriculum){
                alert('Cargado el curriculum');
                localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
                cargado=true
            }
            if(biografia){
                alert('Cargada la biografia');
                localStorage.setItem('biografia', JSON.stringify(data.biografia));
                cargado=true
            }
            if (relatos){
                alert('Cargados los relatos en Local Storage.');
                localStorage.setItem('relatos', JSON.stringify(data.relatos))
                cargado=true
            }
            if (cargado){
                alert('Contenido cargado en Local Storage.');
            } else {
                alert('No se han cargado datos en Local desde JSON con fx .cargarArchivoJson(archivoId)');
            }
    };
    reader.readAsText(archivo);
    location.reload(true);
}

// function cargarArchivoServer(){
//   // Obtener el objeto Blob del archivo seleccionado
//   const archivo = document.getElementById(archivoId).files[0];
//   if (!archivo) {
//     alert('Seleccione un archivo JSON.');
//     return;
//   }
//   // Crear un objeto FileReader para leer el archivo Blob
//   const reader = new FileReader();
//   let cargado=false
//   reader.onload = function(event) {
//           // Obtener el contenido del archivo JSON como un objeto
//           const data = JSON.parse(event.target.result);
//           const bitacora=JSON.stringify(data.bitacora);
//           const asuntos=JSON.stringify(data.asuntos);
//           const desarrollo=JSON.stringify(data.desarrollo);
//           const cuentas= JSON.stringify(data.cuentas);
//           const motivos=JSON.stringify(data.motivos);
//           const transacciones= JSON.stringify(data.transacciones);
//           const cuentasRetenidas= JSON.stringify(data.cuentasRetenidas);
//           const deudas= JSON.stringify(data.deudas);
//           const curriculum= JSON.stringify(data.curriculum);
//           const biografia= JSON.stringify(data.biografia);
//           const relatos= JSON.stringify(data.relatos);
//           if (bitacora){
//               alert('Cargada la Bitacora en Local Storage.');
//               localStorage.setItem('bitacora', JSON.stringify(data.bitacora))
//               cargado=true
//           }
//           if (asuntos){
//               alert('Cargados los Asuntos');
//               localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
//               cargado=true
//           }
//           if (desarrollo){
//               alert('Cargado el Desarrollo');
//               localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
//               cargado=true
//           }
//           if(motivos){
//               alert('Cargados los Motivos');
//               localStorage.setItem('motivos', JSON.stringify(data.motivos))
//               cargado=true
//           }
//           if(cuentas){
//               alert('Cargadas las Cuentas');
//               localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
//               cargado=true
//           }
//           if (transacciones){
//               alert('Cargadas las Transacciones');
//               localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
//               cargado=true
//           }
//           if(curriculum){
//               alert('Cargado el curriculum');
//               localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
//               cargado=true
//           }
//           if(biografia){
//               alert('Cargada la biografia');
//               localStorage.setItem('biografia', JSON.stringify(data.biografia));
//               cargado=true
//           }
//           if (relatos){
//               alert('Cargados los relatos en Local Storage.');
//               localStorage.setItem('relatos', JSON.stringify(data.relatos))
//               cargado=true
//           }
//           if (cargado){
//               alert('Contenido cargado en Local Storage.');
//           } else {
//               alert('No se han cargado datos en Local desde JSON con fx .cargarArchivoJson(archivoId)');
//           }
//   };
//   reader.readAsText(archivo);
//   location.reload(true);
// }

function cargaLocal(nombreTabla,idArchivo){
     const archivo = document.getElementById(idArchivo).files[0];
     if (!archivo) {
       alert('Seleccione un archivo JSON.');
       return;
     }
    const reader = new FileReader();
    let cargado=false
    reader.onload = function(event) {
        // try {
            // Obtener el contenido del archivo JSON como un objeto
            const data = JSON.parse(event.target.result);
            const bitacora=JSON.stringify(data.bitacora);
            const asuntos=JSON.stringify(data.asuntos);
            const desarrollo=JSON.stringify(data.desarrollo);
            const motivos=JSON.stringify(data.motivos);
            const transacciones= JSON.stringify(data.transacciones);
            const cuentas= JSON.stringify(data.cuentas);
            const articulos= JSON.stringify(data.artiulos);
            const tiposArt= JSON.stringify(data.tiposArt);
            const inventarios= JSON.stringify(data.inventarios);
            const transaccionInventario= JSON.stringify(data.transaccionInventario);
            const cuentasRetenidas=JSON.stringify(data.cuentasRetenidas);
            const deudas=JSON.stringify(data.deudas);
            const curriculum=JSON.stringify(data.curriculum);
            const biografia=JSON.stringify(data.biografia);
            const relatos=JSON.stringify(data.relatos);
            if (nombreTabla==='bitacora'){
                let bitacoraReal=JSON.stringify(data.bitacora)
                alert('se cargo Bitacora '+bitacoraReal)
                localStorage.setItem('bitacora', JSON.stringify(data.bitacora))
                cargado=true
            }
            if (nombreTabla==='asuntos'){
                localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
                alert('se cargaron Asuntos')
                cargado=true
            }
            if (nombreTabla==='desarrollo'){
                localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
                alert('se cargao el  desarrollo')
                cargado=true
            }
            if(nombreTabla==='motivos'){
                localStorage.setItem('motivos', JSON.stringify(data.motivos))
                alert('se cargo Motivos')
                cargado=true
            }
            if(nombreTabla==='cuentas'){
                localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
                alert('se cargaron Cuentas')
                cargado=true
            }
            if (nombreTabla==='transacciones'){
                localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
                alert('se cargaron Transacciones')
                cargado=true
            }
            if (nombreTabla==='inventarios'){
                localStorage.setItem('inventarios', JSON.stringify(data.transacciones));
                alert('se cargaron inventarios')
                cargado=true
            }
            if (nombreTabla==='transaccionInventario'){
                localStorage.setItem('transaccionInventario', JSON.stringify(data.transacciones));
                alert('se cargaron transaccionnes del Inventario')
                cargado=true
            }
            if (nombreTabla==='articulos'){
                localStorage.setItem('articulos', JSON.stringify(data.transacciones));
                alert('se cargaron articulos')
                cargado=true
            }
            if (nombreTabla==='tiposArt'){
                localStorage.setItem('tiposArt', JSON.stringify(data.transacciones));
                alert('se cargaron tipos de Articulos')
                cargado=true
            }
            if(nombreTabla==='cuentasRetenidas'){
                localStorage.setItem('cuentasRetenidas', JSON.stringify(data.cuentasRetenidas));
                alert('se cargaron las CuentaRetenidas')
                cargado=true
            }
            if(nombreTabla==='deudas'){
                localStorage.setItem('deudas', JSON.stringify(data.deudas));
                alert('se cargaron las deudas')
                cargado=true
            }
            if(nombreTabla==='curriculum'){
                localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
                alert('se cargo el curriculum')
                cargado=true
            }
            if(nombreTabla==='biografia'){
                localStorage.setItem('biografia', JSON.stringify(data.biografia));
                alert('se cargo la biografia')
                cargado=true
            }
            if (nombreTabla==='relatos'){
                let relatoReal=JSON.stringify(data.relatos)
                alert('se cargaron los relatos '+ relatoReal)
                localStorage.setItem('bitacora', JSON.stringify(data.relatos))
                cargado=true
            }
           
            if(!cargado){
               alert('no se han cargado datos en Local desde JSON. con fx cargaLocal(nombreTabla,idArchivo)');
               return
            }
          
    };
    reader.readAsText(archivo);
    location.reload(true);
}

function borrar(opcion) {
    let enLocal=localStorage.getItem(opcion)
    if(opcion!=='todo'){
        if(!enLocal){
            alert('Nada que eliminar')
            return
        }
    }
    let confirma=confirm("seguro de eliminar "+opcion)
    if (confirma){
        if(opcion==='bitacora'){   
            localStorage.removeItem('bitacora');
        }
        if(opcion==='asuntos'){
            localStorage.removeItem('asuntos');
        }
        if(opcion==='cuentas'){
            localStorage.removeItem('cuentas');
        }
        if(opcion==='deudas'){
            localStorage.removeItem('deudas');
        }
        if(opcion==='cuentasRetenidas'){
            localStorage.removeItem('cuentasRetenidas');
        }
        if(opcion==='motivos'){
            localStorage.removeItem('motivos');
        }
        if(opcion==='transacciones'){
            localStorage.removeItem('transacciones');
        }
        if(opcion==='transaccionInventario'){
            localStorage.removeItem('transaccionInventario');
        }
        if(opcion==='inventarios'){
            localStorage.removeItem('inventarios');
        }
        if(opcion==='articulos'){
            localStorage.removeItem('articulos');
        }
        if(opcion==='curriculum'){
            localStorage.removeItem('curriculum');
        }
        if(opcion==='biografia'){
            localStorage.removeItem('biografia');
        }
        if(opcion==='tiposArt'){
            localStorage.removeItem('tiposArt');
        }
        if(opcion==='todo'){
            let respuesta=confirm("?Esta seguro de Eliminar todo de LocalStorage")
            if(respuesta){
              localStorage.clear();
            }
        }
        // Borrar el contenido de Local Storage para las claves correspondientes
        alert(opcion+' se elimino de Local Storage.');
        location.reload();
    }
}

function grabaServer(avisa){
    // Obtener los datos de localStorage
    contenido = {bitacora: JSON.parse(localStorage.getItem('bitacora')) || [],
        asuntos: JSON.parse(localStorage.getItem('asuntos'))|| [],
        desarrollo: JSON.parse(localStorage.getItem('desarrollo'))|| [],
        cuentas: JSON.parse(localStorage.getItem('cuentas'))|| [],
        motivos: JSON.parse(localStorage.getItem('motivos'))|| [],
        cuentasRetenidas: JSON.parse(localStorage.getItem('cuentasRetenidas'))|| [],
        transacciones: JSON.parse(localStorage.getItem("transacciones"))|| [],
        deudas: JSON.parse(localStorage.getItem('deudas'))|| [],
        articulos: JSON.parse(localStorage.getItem('articulos'))|| [],
        tiposArt: JSON.parse(localStorage.getItem('tiposArt'))|| [],
        inventarios: JSON.parse(localStorage.getItem('inventarios'))|| [],
        transaccionInventario: JSON.parse(localStorage.getItem('transaccionInventario')),
        curriculum: JSON.parse(localStorage.getItem('curriculum'))|| [],
        biografia: JSON.parse(localStorage.getItem('biografia'))|| [],
        relatos: JSON.parse(localStorage.getItem("relatos"))|| []
    };
    archivo="servidorBase";
    nombreArchivo=nombreArchivoJson(archivo)
    // const contenidoJSON = JSON.stringify(contenido);
    // Configurar la solicitud fetch
    fetch('./php/grabaServerJson.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contenido)
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Los datos se han guardado correctamente en el servidor.');
        // debugger
        if (avisa){
          // alert('Los datos se han guardado correctamente en el servidor.');
          mensajeAyuda('Los datos se han guardado correctamente en el servidor.')
        }
        mensajeAyuda('Los datos se han guardado correctamente en el servidor.')
      } else {
        console.error('Error al guardar los datos.');
        if (avisa){
          // alert('Error al guardar los datos.');
          mensajeAyuda('Error al guardar los datos.')
        }
        mensajeAyuda('Error al guardar los datos en el Servidor.')
      }
    })
    .catch(function(error) {
      console.error('Error en la solicitud no fue posible grabar json:', error);
      alert('Error en la solicitud no fue posible grabar json');
      mensajeAyuda('Error en la solicitud no fue posible grabar json')
      guardar(todo)
    });
}

function grabaServerBack(avisa){
  // Obtener los datos de localStorage
  contenido = {bitacora: JSON.parse(localStorage.getItem('bitacora')) || [],
      asuntos: JSON.parse(localStorage.getItem('asuntos'))|| [],
      desarrollo: JSON.parse(localStorage.getItem('desarrollo'))|| [],
      cuentas: JSON.parse(localStorage.getItem('cuentas'))|| [],
      motivos: JSON.parse(localStorage.getItem('motivos'))|| [],
      cuentasRetenidas: JSON.parse(localStorage.getItem('cuentasRetenidas'))|| [],
      transacciones: JSON.parse(localStorage.getItem("transacciones"))|| [],
      deudas: JSON.parse(localStorage.getItem('deudas'))|| [],
      articulos: JSON.parse(localStorage.getItem('articulos'))|| [],
      tiposArt: JSON.parse(localStorage.getItem('tiposArt'))|| [],
      inventarios: JSON.parse(localStorage.getItem('inventarios'))|| [],
      transaccionInventario: JSON.parse(localStorage.getItem('transaccionInventario')),
      curriculum: JSON.parse(localStorage.getItem('curriculum'))|| [],
      biografia: JSON.parse(localStorage.getItem('biografia'))|| [],
      relatos: JSON.parse(localStorage.getItem("relatos"))|| []
  };
  archivo="servidorBase";
  nombreArchivo='../bd/bckp/'+nombreArchivoJson(archivo)
  // Agregar el nombre del archivo a los datos
  contenido.nombreArchivo = nombreArchivo;
  // Configurar la solicitud fetch
  fetch('./php/grabaServerJsonBack.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contenido)
  })
  .then(function(response) {
    if (response.ok) {
      mensajeAyuda('El archivo Bcp:' + nombreArchivo +  'fue guardado correctamente en el servidor.')

      console.log('Archivo Backp ' + nombreArchivo + ' se guardo en el servidor.');
      // GRABA SIN ALERT
      // debugger
      // if (avisa){
      //   alert('Archivo Backp ' + nombreArchivo + ' se guardo en el servidor.');
      // }
      mensajeAyuda('Archivo Backp ' + nombreArchivo + ' se guardo en el servidor.')
    } else {
      console.error('Error al guardar el archivo.');
      if (avisa){
        // alert('Error al guardar el archivo.');
        mensajeAyuda('Error al guardar el archivo.')
        
      }
      mensajeAyuda('Error al guardar los datos en el Servidor.')
    }
  })
  .catch(function(error) {
    console.error('Error en la solicitud:', error);
    // alert('Error en la solicitud.');
    mensajeAyuda('!! El archivo Bcp:' + nombreArchivo +  'NO fue guardado correctamente en el servidor.')

  });
}

function grabaBanderaLocal(estado){
  // debugger
   let carga={'estado':estado}
   let cargaJson=JSON.stringify(carga)
   localStorage.setItem('conectadoQ',cargaJson)
}


function leeBanderaLocal(){
  // debugger
  let estado=localStorage.getItem('conectadoQ')
  let estadoJson=JSON.parse(estado)
  let estadoReal=estadoJson.estado
  // alert("estado de coneccion: "+estadoReal)
  console.log('estado de coneccion: '+estadoReal);
  if(estadoJson){
    console.log('esta conectado');
    // alert('esta conectado');
    return true
  } else {
    console.log('No ha conectado aun');
    mensajeAyuda('No ha conectado aun')
    // alert('No ha conectado aun')
    return false
  }
}

function cargaServerJson(preguntando,event){
  // debugger
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
            // CARGA TABLA POR TABLA
            if(preguntando){
                cargaTablasLocal(data,true)
              } else {
                cargaTablasLocal(data,false)
            }
              // localStorage.setItem('contenido', JSON.stringify(data));
              console.log('Datos cargados en el almacenamiento local:', data);
              // alert('Datos cargados en el almacenamiento local:', data);
              mensajeAyuda('Datos cargados en el almacenamiento local')
            } else {
              console.error('Error al obtener el archivo JSON. Codigo de estado:', xhr.status);
              mensajeAyuda('Error al obtener el archivo JSON.')
              // alert('Error al obtener el archivo JSON. Codigo de estado:', xhr.status);
            }
        }
    }
    xhr.open('GET', './php/cargaServerJson.php', true);
    xhr.send();
  event.preventDefault()
}

function cargaTablasLocal(data, preguntando) {
    const bitacora = JSON.stringify(data.bitacora);
    const asuntos = JSON.stringify(data.asuntos);
    const desarrollo = JSON.stringify(data.desarrollo);
    const cuentas = JSON.stringify(data.cuentas);
    const motivos = JSON.stringify(data.motivos);
    const transacciones = JSON.stringify(data.transacciones);
    const articulos = JSON.stringify(data.articulos);
    const inventarios = JSON.stringify(data.inventarios);
    const tiposArt = JSON.stringify(data.tiposArt);
    const transaccionInventario = JSON.stringify(data.transaccionInventario);
    const cuentasRetenidas = JSON.stringify(data.cuentasRetenidas);
    const deudas = JSON.stringify(data.deudas);
    const curriculum = JSON.stringify(data.curriculum);
    const biografia = JSON.stringify(data.biografia);
    const relatos = JSON.stringify(data.relatos);
  
    let listaCargan = [];
    let tablaObj = {};
    let siTodos = false;
    let confirma = false;
  
    // BITACORA
    if (bitacora) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar la Bitacora?');
        if (confirma) {
          console.log('Cargada la Bitacora en Local Storage.');
          localStorage.setItem('bitacora', JSON.stringify(data.bitacora));
          tablaObj = {
            tabla: 'bitacora',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'bitacora',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargada la Bitacora en Local Storage.');
        localStorage.setItem('bitacora', JSON.stringify(data.bitacora));
        tablaObj = {
          tabla: 'bitacora',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
  
    // ASUNTOS
    if (asuntos) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Asuntos?');
        if (confirma) {
          console.log('Cargados los Asuntos');
          localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
          tablaObj = {
            tabla: 'asuntos',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'asuntos',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Asuntos');
        localStorage.setItem('asuntos', JSON.stringify(data.asuntos));
        tablaObj = {
          tabla: 'asuntos',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
  
    // DESARROLLO
    if (desarrollo) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar el Desarrollo?');
        if (confirma) {
          console.log('Cargado el Desarrollo');
          localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
          tablaObj = {
            tabla: 'desarrollo',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'desarrollo',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargado el Desarrollo');
        localStorage.setItem('desarrollo', JSON.stringify(data.desarrollo));
        tablaObj = {
          tabla: 'desarrollo',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
  
    // CUENTAS
    if (cuentas) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar las Cuentas?');
        if (confirma) {
          console.log('Cargadas las Cuentas');
          localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
          tablaObj = {
            tabla: 'cuentas',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'cuentas',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargadas las Cuentas');
        localStorage.setItem('cuentas', JSON.stringify(data.cuentas));
        tablaObj = {
          tabla: 'cuentas',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
  
    // MOTIVOS
    if (motivos) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Motivos?');
        if (confirma) {
          console.log('Cargados los Motivos');
          localStorage.setItem('motivos', JSON.stringify(data.motivos));
          tablaObj = {
            tabla: 'motivos',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'motivos',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Motivos');
        localStorage.setItem('motivos', JSON.stringify(data.motivos));
        tablaObj = {
          tabla: 'motivos',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // TRANSACCIONES
    if (transacciones) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar las Transacciones?');
        if (confirma) {
          console.log('Cargadas las Transacciones');
          localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
          tablaObj = {
            tabla: 'transacciones',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'transacciones',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargadas las Transacciones');
        localStorage.setItem('transacciones', JSON.stringify(data.transacciones));
        tablaObj = {
          tabla: 'transacciones',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // ARTICULOS
    if (articulos) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Artículos?');
        if (confirma) {
          console.log('Cargados los Articulos');
          localStorage.setItem('articulos', JSON.stringify(data.articulos));
          tablaObj = {
            tabla: 'articulos',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'articulos',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Articulos');
        localStorage.setItem('articulos', JSON.stringify(data.articulos));
        tablaObj = {
          tabla: 'articulos',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // INVENTARIOS
    if (inventarios) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Inventarios?');
        if (confirma) {
          console.log('Cargados los Inventarios');
          localStorage.setItem('inventarios', JSON.stringify(data.inventarios));
          tablaObj = {
            tabla: 'inventarios',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'inventarios',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Inventarios');
        localStorage.setItem('inventarios', JSON.stringify(data.inventarios));
        tablaObj = {
          tabla: 'inventarios',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // TIPOS ART
    if (tiposArt) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Tipos de Articulos?');
        if (confirma) {
          console.log('Cargados los Tipos de Articulos');
          localStorage.setItem('tiposArt', JSON.stringify(data.tiposArt));
          tablaObj = {
            tabla: 'tiposArt',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'tiposArt',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Tipos de Artículos');
        localStorage.setItem('tiposArt', JSON.stringify(data.tiposArt));
        tablaObj = {
          tabla: 'tiposArt',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // TRANSACCION INVENTARIO
    if (transaccionInventario) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar las Transacciones de Inventario?');
        if (confirma) {
          console.log('Cargadas las Transacciones de Inventario');
          localStorage.setItem('transaccionInventario', JSON.stringify(data.transaccionInventario));
          tablaObj = {
            tabla: 'transaccionInventario',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'transaccionInventario',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargadas las Transacciones de Inventario');
        localStorage.setItem('transaccionInventario', JSON.stringify(data.transaccionInventario));
        tablaObj = {
          tabla: 'transaccionInventario',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
  
    // CUENTAS RETENIDAS
    if (cuentasRetenidas) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar las Cuentas Retenidas?');
        if (confirma) {
          console.log('Cargadas las Cuentas Retenidas');
          localStorage.setItem('cuentasRetenidas', JSON.stringify(data.cuentasRetenidas));
          tablaObj = {
            tabla: 'cuentasRetenidas',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'cuentasRetenidas',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargadas las Cuentas Retenidas');
        localStorage.setItem('cuentasRetenidas', JSON.stringify(data.cuentasRetenidas));
        tablaObj = {
          tabla: 'cuentasRetenidas',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // DEUDAS
    if (deudas) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar las Deudas?');
        if (confirma) {
          console.log('Cargadas las Deudas');
          localStorage.setItem('deudas', JSON.stringify(data.deudas));
          tablaObj = {
            tabla: 'deudas',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'deudas',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargadas las Deudas');
        localStorage.setItem('deudas', JSON.stringify(data.deudas));
        tablaObj = {
          tabla: 'deudas',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // CURRICULUM
    if (curriculum) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar el Curriculum?');
        if (confirma) {
          console.log('Cargado el Curriculum');
          localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
          tablaObj = {
            tabla: 'curriculum',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'curriculum',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargado el Curriculum');
        localStorage.setItem('curriculum', JSON.stringify(data.curriculum));
        tablaObj = {
          tabla: 'curriculum',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // BIOGRAFIA
    if (biografia) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar la Biografia?');
        if (confirma) {
          console.log('Cargada la Biografia');
          localStorage.setItem('biografia', JSON.stringify(data.biografia));
          tablaObj = {
            tabla: 'biografia',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'biografia',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargada la Biografia');
        localStorage.setItem('biografia', JSON.stringify(data.biografia));
        tablaObj = {
          tabla: 'biografia',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // RELATOS
    if (relatos) {
      if (preguntando) {
        confirma = confirm('¿Desea cargar los Relatos?');
        if (confirma) {
          console.log('Cargados los Relatos');
          localStorage.setItem('relatos', JSON.stringify(data.relatos));
          tablaObj = {
            tabla: 'relatos',
            valor: true
          };
        } else {
          tablaObj = {
            tabla: 'relatos',
            valor: false
          };
        }
        listaCargan.push(tablaObj);
      } else {
        console.log('Cargados los Relatos');
        localStorage.setItem('relatos', JSON.stringify(data.relatos));
        tablaObj = {
          tabla: 'relatos',
          valor: true
        };
        listaCargan.push(tablaObj);
      }
    }
    // VALIDA LAS NO CARGADAS con o sin confirmacion
    let noCargadas = [];
    for (let i = 0; i < listaCargan.length; i++) {
        if (!listaCargan[i].valor) {
            noCargadas.push(listaCargan[i].tabla);
        }
    }
    if(noCargadas.length!==0){
          // alert('!!Hay tablas sin cargar: ' + noCargadas.join(', '));
          console.log('!! Hay tablas sin cargar: ' + noCargadas.join(', '))
          mensajeAyuda('!! Hay tablas sin cargar: ' + noCargadas.join(', '))
    } else {
        // alert('todas las tablas se cargaron')
        mensajeAyuda('todas las tablas se cargaron')
    }
    window.location.reload()
}