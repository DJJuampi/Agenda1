
var contador = 0;
var Cont2 = 0;
let ContactosLista = [];

function templ(contador) {
  return `<div id="CaRta${contador}" class="card" style="width: 18rem;">
<img class="card-img-top" src="${contador}.png" alt="Card image cap">
<div class="card-body">
    <h5 id="Nombre${contador}" class="card-title">Nombre del contacto</h5>
    <p id="Tel${contador}" class="card-text">Telefono</p>
    <p id="Gmail${contador}" class="card-text">Gmail</p>
    <a id="Editar${contador}" href="#" class="btn btn-primary" onclick="abrireditar(${contador})">Editar</a>
    <div id="Edits${contador}">
        <form class="form-inline my-2 my-lg-0">
            <p class="card-text">Nombre:</p>
            <input class="form-control mr-sm-2" id="Nom${contador}">
            <p class="card-text">Telefono:</p>
            <input class="form-control mr-sm-2" id="Tele${contador}">
            <p class="card-text">Gmail:</p>
            <input class="form-control mr-sm-2" id="GMail${contador}">
            <a id="Editar${contador}" href="#" class="btn btn-primary" onclick="actualizar(${contador}); cerrarguardar(${contador})">Guardar</a>
        </form>
    </div>
</div>
<a href="#" class="btn btn-primary" onclick="borrar(${contador})">Borrar</a>
</div>`;
}

class contacto {
  constuctor() {
    this.iD = contador;
    this.nombre = "";
    this.telefono = "";
    this.gmail = "";
  }
}

function CrearNuevo() {
  contador = contador + 1;
  ContactoNuevo = new contacto();
  ContactosLista.push(ContactoNuevo);
  console.log(ContactoNuevo);
  document.getElementById("Cartas").innerHTML += templ(contador);
  document.getElementById(`Edits${contador}`).style.display = "none";
}

function abrireditar(Y) {
  document.getElementById(`Edits${Y}`).style.display = "Block";
  document.getElementById(`Editar${Y}`).style.display = "none";
}

function cerrarguardar(Z) {
  document.getElementById(`Edits${Z}`).style.display = "none";
  document.getElementById(`Editar${Z}`).style.display = "Block";
}

function actualizar(X) {
  ContactosLista[X - 1].nombre = document.getElementById(`Nom${X}`).value;
  ContactosLista[X - 1].telefono = document.getElementById(`Tele${X}`).value;
  ContactosLista[X - 1].gmail = document.getElementById(`GMail${X}`).value;

  document.getElementById(`Nombre${X}`).innerHTML = ContactosLista[X - 1].nombre;
  document.getElementById(`Tel${X}`).innerHTML = ContactosLista[X - 1].telefono;
  document.getElementById(`Gmail${X}`).innerHTML = ContactosLista[X - 1].gmail;
  console.log(ContactosLista);
  console.log(ContactosLista[X - 1].nombre);
}

function borrar(V) {
  var element = document.getElementById(`CaRta${V}`);
  ContactosLista.splice(V, 1);
  element.parentNode.removeChild(element);
}
