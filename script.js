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

function avanzarA(a) {
  pos = a;
  cargar();
}

const urlParams = new URLSearchParams(window.location.search);
const tipo = urlParams.get("tipo");

if (tipo === "domestico") {
  avanzarA(0);
} else if (tipo === "salvaje") {
  avanzarA(6);
} else if (tipo === "extincion") {
  avanzarA(10);
}

function mostrar() {
  const nombre = document.querySelector('input[name="nombre"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  const resultado = document.querySelector('.resultado');
  const colimgh2 = document.querySelector(".colimg h2");
  const colimg = document.querySelector(".colimg");
  colimg.style.background = "none";
  colimgh2.innerHTML = `RESULTADO`;
  resultado.innerHTML = `
    <p>${nombre}</p>
    <p>${telefono}</p>
    <p>${correo}</p>
    <p class="ptext" >${mensaje}</p>
  `;
  document.querySelector('form').reset();
}