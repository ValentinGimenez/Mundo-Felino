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
function limpiar() {
  const colresultado = document.querySelector('.colresultado');
  colresultado.style.display = 'none';
  const rowform = document.querySelector(".rowform");
  rowform.style.gridTemplateColumns = "repeat(1, 1fr)";
}
function validar() {
  const nombre = document.querySelector('input[name="nombre"]').value;
  const telefono = document.querySelector('input[name="telefono"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  let error = 0;
  if (!validacionNombre(nombre)) {
    error++;
  }
  if (!validacionTelefono(telefono)) {
    error++;
  }
  if (!validacionEmail(correo)) {
    error++;
  }
  if (!validacionMensaje(mensaje)) {
    error++;
  }
  if (error === 0) {
    mostrar(nombre, telefono, correo, mensaje);
  } else {
    limpiar();
  }
}

function validacionNombre(nombre) {
  const errornombre = document.querySelector('.errornombre');
  const vnombre = /\d/;
  if (nombre.trim() === "") {
    errornombre.innerHTML = 'El campo nombre se encuentra vacio';
    return false;
  } else if (nombre.length > 40) {
    errornombre.innerHTML = 'El campo nombre supera los 40 caracteres permitidos.';
    return false;
  } else if (vnombre.test(nombre)) {
    errornombre.innerHTML = 'Solo se permiten letras en el campo nombre.';
    return false;
  } else {
    errornombre.innerHTML = '';
    return true;
  }
}
function validacionTelefono(telefono) {
  const errortelefono = document.querySelector('.errortelefono');
  const vtelefono = /^\d+$/;
  if (telefono.trim() === "") {
    errortelefono.innerHTML = 'El campo telefono se encuentra vacio.';
    return false;
  } else if (telefono.length > 15) {
    errortelefono.innerHTML = 'El campo telefono supera los 15 caracteres permitidos.';
    return false;
  } else if (!(vtelefono.test(telefono))) {
    errortelefono.innerHTML = 'Solo se permiten numeros en el campo telefono.';
    return false;
  } else {
    errortelefono.innerHTML = '';
    return true;
  }
}
function validacionEmail(correo) {
  const erroremail = document.querySelector('.erroremail');
  const vemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === "") {
    erroremail.innerHTML = 'El campo correo se encuentra vacio';
    return false;
  } else if (!(vemail.test(correo))) {
    erroremail.innerHTML = 'El campo correo se ingreso de manera incorrecta.';
    return false;
  } else {
    erroremail.innerHTML = '';
    return true;
  }
}
function validacionMensaje(mensaje) {
  const errormensaje = document.querySelector('.errormensaje');
  if (mensaje.trim() === "") {
    errormensaje.innerHTML = 'El campo mensaje se encuentra vacio';
    return false;
  } else if (mensaje.length > 187) {
    errormensaje.innerHTML = 'El campo mensaje supera los 187 caracteres permitidos.';
    return false;
  } else {
    errormensaje.innerHTML = '';
    return true;
  }
}
function mostrar(nombre, telefono, correo, mensaje) {
  const resultado = document.querySelector('.resultado');
  const rowform = document.querySelector(".rowform");
  rowform.style.gridTemplateColumns = "repeat(2, 1fr)";
  const colresultadoh2 = document.querySelector(".colresultado h2");
  const colresultado = document.querySelector(".colresultado");
  colresultado.style.display = 'block'
  colresultado.style.height = '480px';
  colresultado.style.width = '400px';
  colresultado.style.padding = '20px';
  if (window.innerWidth < 600){
    rowform.style.gridTemplateColumns = "repeat(1, 1fr)";
    const colform =document.querySelector(".colform");
    colform.style.display='none';
    colresultado.style.height = '518px';
    colresultado.style.width = '300px';
  }
  colresultadoh2.innerHTML = `RESULTADO`;
  const nombreelement = document.createElement('p');
  const telefonoelement = document.createElement('p');
  const correoelement = document.createElement('p');
  const mensajeelement = document.createElement('p');
  nombreelement.textContent = nombre;
  telefonoelement.textContent = telefono;
  correoelement.textContent = correo;
  mensajeelement.textContent = mensaje;
  mensajeelement.classList.add('ptext');
  resultado.appendChild(nombreelement);
  resultado.appendChild(telefonoelement);
  resultado.appendChild(correoelement);
  resultado.appendChild(mensajeelement);
  document.querySelector('form').reset();
}