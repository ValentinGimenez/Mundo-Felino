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
function validar() {
  const nombre = document.querySelector('input[name="nombre"]').value.trim();
  const telefono = document.querySelector('input[name="telefono"]').value.trim();
  const correo = document.querySelector('input[name="correo"]').value.trim();
  const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();
  validacionNombre(nombre);
  validacionTelefono(telefono);
  validacionEmail(correo);
  validacionMensaje(mensaje);
  if (validacionNombre(nombre) && validacionTelefono(telefono) && validacionEmail(correo) && validacionMensaje(mensaje)) {
    mostrar();
  }
}
function mensajeerror(mensaje, claseerror) {
  const error = document.querySelector(`.${claseerror}`);
  const errormensaje = document.createElement('p');
  errormensaje.textContent = mensaje;
  error.appendChild(errormensaje);
}
function validacionNombre(nombre) {
  const errornombre = document.querySelector('.errornombre');
  errornombre.innerHTML = '';
  if (nombre === "") {
    mensajeerror('El campo nombre se encuentra vacio', 'errornombre');
    return false;
  } else if (nombre.length > 31) {
    mensajeerror('El campo nombre supera los 31 caracteres permitidos.', 'errornombre');
    return false;
  } else if (validarnombre(nombre)) {
    mensajeerror('Solo se permiten letras en el campo nombre.', 'errornombre');
    return false;
  } else {
    errornombre.innerHTML = '';
    return true;
  }
}
function validacionTelefono(telefono) {
  const errortelefono = document.querySelector('.errortelefono');
  errortelefono.innerHTML = '';
  if (telefono === "") {
    mensajeerror('El campo telefono se encuentra vacio.', 'errortelefono');
    return false;
  } else if (telefono.length > 15) {
    mensajeerror('El campo telefono supera los 15 caracteres permitidos.', 'errortelefono');
    return false;
  } else if (!validartelefono(telefono)) {
    mensajeerror('Solo se permiten numeros en el campo telefono.', 'errortelefono');
    return false;
  } else {
    errortelefono.innerHTML = '';
    return true;
  }
}
function validacionEmail(correo) {
  const erroremail = document.querySelector('.erroremail');
  erroremail.innerHTML = '';
  if (correo === "") {
    mensajeerror('El campo correo se encuentra vacio', 'erroremail');
    return false;
  } else if (!validaremail(correo)) {
    mensajeerror('El campo correo se ingreso de manera incorrecta.', 'erroremail');
    return false;
  } else {
    erroremail.innerHTML = '';
    return true;
  }
}
function validacionMensaje(mensaje) {
  const errormensaje = document.querySelector('.errormensaje');
  errormensaje.innerHTML = '';
  if (mensaje === "") {
    mensajeerror('El campo mensaje se encuentra vacio', 'errormensaje');
    return false;
  } else if (mensaje.length > 165) {
    mensajeerror('El campo mensaje supera los 165 caracteres permitidos.', 'errormensaje');
    return false;
  } else {
    errormensaje.innerHTML = '';
    return true;
  }
}
function validarnombre(nombre) {
  const vnombre = /\d/;
  return vnombre.test(nombre);
}
function validartelefono(telefono) {
  const vtelefono = /^\d+$/;
  return vtelefono.test(telefono);
}
function validaremail(correo) {
  const vemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return vemail.test(correo);
}
function mostrar() {
  const nombre = document.querySelector('input[name="nombre"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  const resultado = document.querySelector('.resultado');
  const rowform = document.querySelector(".rowform");
  rowform.style.gridTemplateColumns = "repeat(2, 1fr)";
  const colimgh2 = document.querySelector(".colimg h2");
  colimgh2.innerHTML = `RESULTADO`;
  resultado.innerHTML = `
    <p>${nombre}</p>
    <p>${telefono}</p>
    <p>${correo}</p>
    <p class="ptext" >${mensaje}</p>
  `;
  document.querySelector('form').reset();
}