"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.getElementById("Edits").style.display = "none";
var contacto1;

var contacto = /*#__PURE__*/function () {
  function contacto() {
    _classCallCheck(this, contacto);
  }

  _createClass(contacto, [{
    key: "constuctor",
    value: function constuctor(nombre, telefono, gmail) {
      this.nombre = nombre;
      this.telefono = telefono;
      this.gmail = gmail;
    }
  }]);

  return contacto;
}();

function CrearNuevo() {
  //aca tiene que ir lo que hace una carta nueva, pero no se como
  contacto1 = new contacto(document.getElementById("Nombre").innerHTML, document.getElementById("Tel").innerHTML, document.getElementById("Gmail").innerHTML);
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
  contacto1.nombre = document.getElementById("Nom").innerHTML;
  contacto1.telefono = document.getElementById("Tele").innerHTML;
  contacto1.gmail = document.getElementById("GMail").innerHTML;
}

function editar() {}