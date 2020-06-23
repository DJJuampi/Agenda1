document.getElementById("Edits").style.display = "none";
var contador = 0;
var contacto1;
let ContactosLista = [``];

function templ(contador) {
  return `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${contador}.png" alt="Card image cap">
<div class="card-body">
    <h5 id="Nombre${contador}" class="card-title">Nombre del contacto</h5>
    <p id="Tel${contador}" class="card-text">Telefono</p>
    <p id="Gmail${contador}" class="card-text">Gmail</p>
    <a id="Editar${contador}" href="#" class="btn btn-primary" onclick="abrireditar()">Editar</a>
    <div id="Edits${contador}">
        <form class="form-inline my-2 my-lg-0">
            <p id="Nom${contador}" class="card-text">Nombre:</p>
            <input class="form-control mr-sm-2" >
            <p id="Tele${contador}" class="card-text">Telefono:</p>
            <input class="form-control mr-sm-2">
            <p id="GMail${contador}" class="card-text">Gmail:</p>
            <input class="form-control mr-sm-2">
            <a id="Editar${contador}" href="#" class="btn btn-primary" onclick="actualizar(); cerrarguardar()">Guardar</a>
        </form>
    </div>
</div>
</div>`;
}

class contacto {
  constuctor() {
    this.iD = ContactosLista.length;
    this.nombre = "";
    this.telefono = "";
    this.gmail = "";
  }
}

function CrearNuevo() {
  contador = contador + 1;
  ContactoNuevo = new contacto();
  ContactosLista.push(ContactoNuevo);
  document.getElementById("Cartas").innerHTML += templ(contador);
}

function abrireditar() {
  document.getElementById("Edits").style.display = "Block";
  document.getElementById("Editar").style.display = "none";
}

function cerrarguardar() {
  document.getElementById("Edits").style.display = "none";
  document.getElementById("Editar").style.display = "Block";
}

function actualizar() {
  ContactosLista[contador].nombre = document.getElementById(
    `Nom${contador}`
  ).innerHTML;
  ContactosLista[contador].telefono = document.getElementById(
    `Tele${contador}`
  ).innerHTML;
  ContactosLista[contador].gmail = document.getElementById(
    `GMail${contador}`
  ).innerHTML;

  document.getElementById("Nombre").innerHTML = ContactosLista[contador].nombre;
  document.getElementById("Tel").innerHTML = ContactosLista[contador].telefono;
  document.getElementById("Gmail").innerHTML = ContactosLista[contador].gmail;
}

function editar() {}
