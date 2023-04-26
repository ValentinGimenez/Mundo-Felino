let pos = 0;
cargar();
function cargar() {
  opciones = opc[pos];
  document.getElementById("clase").innerHTML = opciones.tipo;
  document.getElementById("titulo").innerHTML = opciones.animal;
  document.getElementById("info").innerHTML = opciones.info;
  document.getElementById("foto").src = opciones.imagen;
}

function avanzar() {
  if (pos < opc.length - 1) {
    pos++;
  } else {
    pos = 0;
  }
  cargar();
}

function retroceder() {
  if (pos > 0) {
    pos--;
  } else {
    pos = opc.length - 1;
  }
  cargar();
}