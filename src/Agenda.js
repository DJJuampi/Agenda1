
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
            <p class="card-text">Nombre:</p>
            <input class="form-control mr-sm-2" id="Nom${contador}">
            <p class="card-text">Telefono:</p>
            <input class="form-control mr-sm-2" id="Tele${contador}">
            <p class="card-text">Gmail:</p>
            <input class="form-control mr-sm-2" id="GMail${contador}">
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
  document.getElementById(`Edits${contador}`).style.display = "none";
}

function abrireditar() {
  document.getElementById(`Edits${contador}`).style.display = "Block";
  document.getElementById(`Editar${contador}`).style.display = "none";
}

function cerrarguardar() {
  document.getElementById(`Edits${contador}`).style.display = "none";
  document.getElementById(`Editar${contador}`).style.display = "Block";
}

function actualizar() {
  ContactosLista[contador].nombre = document.getElementById(
    `Nom${contador}`
  ).value;
  ContactosLista[contador].telefono = document.getElementById(
    `Tele${contador}`
  ).value;
  ContactosLista[contador].gmail = document.getElementById(
    `GMail${contador}`
  ).value;

  document.getElementById(`Nom${contador}`).innerHTML = ContactosLista[contador].nombre;
  document.getElementById(`Tele${contador}`).innerHTML = ContactosLista[contador].telefono;
  document.getElementById(`GMail${contador}`).innerHTML = ContactosLista[contador].gmail;
}

function editar() {}
