"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.getElementById("Edits").style.display = "none";
var contador = 0;
var contacto1;
var ContactosLista = [""];
ContactoNuevo = new contacto(0);
ContactosLista.push(ContactoNuevo);

function templ(contador) {
  return "<div class=\"card\" style=\"width: 18rem;\">\n<img class=\"card-img-top\" src=\"".concat(contador, ".png\" alt=\"Card image cap\">\n<div class=\"card-body\">\n    <h5 id=\"Nombre").concat(contador, "\" class=\"card-title\">Nombre del contacto</h5>\n    <p id=\"Tel").concat(contador, "\" class=\"card-text\">Telefono</p>\n    <p id=\"Gmail").concat(contador, "\" class=\"card-text\">Gmail</p>\n    <a id=\"Editar").concat(contador, "\" href=\"#\" class=\"btn btn-primary\" onclick=\"abrireditar()\">Editar</a>\n    <div id=\"Edits").concat(contador, "\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <p id=\"Nom").concat(contador, "\" class=\"card-text\">Nombre:</p>\n            <input class=\"form-control mr-sm-2\">\n            <p id=\"Tele").concat(contador, "\" class=\"card-text\">Telefono:</p>\n            <input class=\"form-control mr-sm-2\">\n            <p id=\"GMail").concat(contador, "\" class=\"card-text\">Gmail:</p>\n            <input class=\"form-control mr-sm-2\">\n            <a id=\"Editar").concat(contador, "\" href=\"#\" class=\"btn btn-primary\" onclick=\"actualizar(); cerrarguardar()\">Guardar</a>\n        </form>\n    </div>\n</div>\n</div>");
}

var contacto = /*#__PURE__*/function () {
  function contacto() {
    _classCallCheck(this, contacto);
  }

  _createClass(contacto, [{
    key: "constuctor",
    value: function constuctor() {
      this.iD = ContactosLista.length;
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
  document.getElementById("Cartas").innerHTML += templ(contador);
}

;

function abrireditar() {
  document.getElementById("Edits").style.display = "Block";
  document.getElementById("Editar").style.display = "none";
}

;

function cerrarguardar() {
  document.getElementById("Edits").style.display = "none";
  document.getElementById("Editar").style.display = "Block";
}

;

function actualizar() {
  ContactosLista[contador].nombre = document.getElementById("Nom".concat(contador)).innerHTML;
  ContactosLista[contador].telefono = document.getElementById("Tele".concat(contador)).innerHTML;
  ContactosLista[contador].gmail = document.getElementById("GMail".concat(contador)).innerHTML;
  document.getElementById("Nombre").innerHTML = ContactosLista[contador].nombre;
  document.getElementById("Tel").innerHTML = ContactosLista[contador].telefono;
  document.getElementById("Gmail").innerHTML = ContactosLista[contador].gmail;
}

function editar() {}