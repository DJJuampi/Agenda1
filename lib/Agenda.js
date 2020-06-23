"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var contador = 0;
var Cont2 = 0;
var ContactosLista = [];

function templ(contador) {
  return "<div id=\"CaRta".concat(contador, "\" class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\"").concat(contador, ".png\" alt=\"Card image cap\">\n<div class=\"card-body\">\n    <h5 id=\"Nombre").concat(contador, "\" class=\"card-title\">Nombre del contacto</h5>\n    <p id=\"Tel").concat(contador, "\" class=\"card-text\">Telefono</p>\n    <p id=\"Gmail").concat(contador, "\" class=\"card-text\">Gmail</p>\n    <a id=\"Editar").concat(contador, "\" href=\"#\" class=\"btn btn-primary\" onclick=\"abrireditar(").concat(contador, ")\">Editar</a>\n    <div id=\"Edits").concat(contador, "\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <p class=\"card-text\">Nombre:</p>\n            <input class=\"form-control mr-sm-2\" id=\"Nom").concat(contador, "\">\n            <p class=\"card-text\">Telefono:</p>\n            <input class=\"form-control mr-sm-2\" id=\"Tele").concat(contador, "\">\n            <p class=\"card-text\">Gmail:</p>\n            <input class=\"form-control mr-sm-2\" id=\"GMail").concat(contador, "\">\n            <a id=\"Editar").concat(contador, "\" href=\"#\" class=\"btn btn-primary\" onclick=\"actualizar(").concat(contador, "); cerrarguardar(").concat(contador, ")\">Guardar</a>\n        </form>\n    </div>\n</div>\n<a href=\"#\" class=\"btn btn-primary\" onclick=\"borrar(").concat(contador, ")\">Borrar</a>\n</div>");
}

var contacto = /*#__PURE__*/function () {
  function contacto() {
    _classCallCheck(this, contacto);
  }

  _createClass(contacto, [{
    key: "constuctor",
    value: function constuctor() {
      this.iD = contador;
      this.nombre = "";
      this.telefono = "";
      this.gmail = "";
    }
  }]);

  return contacto;
}();

function CrearNuevo() {
  contador = contador + 1;
  ContactoNuevo = new contacto();
  ContactosLista.push(ContactoNuevo);
  console.log(ContactoNuevo);
  document.getElementById("Cartas").innerHTML += templ(contador);
  document.getElementById("Edits".concat(contador)).style.display = "none";
}

function abrireditar(Y) {
  document.getElementById("Edits".concat(Y)).style.display = "Block";
  document.getElementById("Editar".concat(Y)).style.display = "none";
}

function cerrarguardar(Z) {
  document.getElementById("Edits".concat(Z)).style.display = "none";
  document.getElementById("Editar".concat(Z)).style.display = "Block";
}

function actualizar(X) {
  ContactosLista[X - 1].nombre = document.getElementById("Nom".concat(X)).value;
  ContactosLista[X - 1].telefono = document.getElementById("Tele".concat(X)).value;
  ContactosLista[X - 1].gmail = document.getElementById("GMail".concat(X)).value;
  document.getElementById("Nombre".concat(X)).innerHTML = ContactosLista[X - 1].nombre;
  document.getElementById("Tel".concat(X)).innerHTML = ContactosLista[X - 1].telefono;
  document.getElementById("Gmail".concat(X)).innerHTML = ContactosLista[X - 1].gmail;
  console.log(ContactosLista);
  console.log(ContactosLista[X - 1].nombre);
}

function borrar(V) {
  var element = document.getElementById("CaRta".concat(V));
  ContactosLista.splice(V, 1);
  element.parentNode.removeChild(element);
}