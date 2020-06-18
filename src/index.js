class Person {
  constructor(puntaje, correctas, equivocadas) {
      this.Puntaje = puntaje;
      this.Correctas = correctas;
      this.equivocadas = incorrectas;
  }
}

var nume1 = 0;
var nume2 = 0;
var contador = 0;
var puntaje = 0;
var mas = "+"
var repeticion;
var Timer;
var Tiempo = 9;
var correctas = 0;
var incorrectas = 0;
var Jugador = new Person(puntaje, correctas, equivocadas)



function Repetir() {
  repeticion = window.setInterval("empezar()", 10000);
}

function Parar() {
  window.clearInterval(repeticion);
  window.clearInterval(Timer);
  Tiempo = 10;
}
function emp() {
  var Timer = setInterval("TimeLeft()", 1000);
}

function TimeLeft() {
  if (Tiempo >= 1) {
      document.getElementById("TiempoRes").innerHTML = "Quedan " + Tiempo + " Segundos";
  } else {
      clearInterval(Timer);
      Tiempo = Tiempo + 10;
  }
  Tiempo -= 1;
}

function empezar() {
  if (contador <= 10) {
      nume1 = (Math.floor(Math.random() * 100));
      nume2 = (Math.floor(Math.random() * 100));
      document.getElementById("num1").innerHTML = nume1;
      document.getElementById("num2").innerHTML = nume2;
      contador = contador + 1;
      document.getElementById("ma").innerHTML = mas;
      document.getElementById("2").style.display = "block";
      document.getElementById("Num").style.display = "block";
      document.getElementById("PJ").style.display = "block";
      document.getElementById("1").style.display = "none";
      document.getElementById("Pelo1").style.display = "none";
      document.getElementById("Pelo2").style.display = "block";
  }

  if (contador > 10) {
      document.getElementById("2").style.display = "none";
      document.getElementById("Num").style.display = "none";
      document.getElementById("PJ").style.display = "none";
      document.getElementById("num1").style.display = "none";
      document.getElementById("num2").style.display = "none";
      document.getElementById("ma").style.display = "none";
      document.getElementById("1").style.display = "none";
      document.getElementById("Titulo").innerHTML = "Los resultados son!";
      document.getElementById("Correcion").style.display = "none";
      clearInterval(Timer);
      document.getElementById("TiempoRes").style.display = "none";
      if (puntaje >= 100) {
          document.getElementById("Pelo4").style.display = "block";
          document.getElementById("Pelo2").style.display = "none";
      } else {
          document.getElementById("Pelo3").style.display = "block"
          document.getElementById("Pelo2").style.display = "none";
      }
  }
}
document.getElementById("2").style.display = "none";
document.getElementById("Num").style.display = "none";
document.getElementById("PJ").style.display = "none";
document.getElementById("Pelo4").style.display = "none";
document.getElementById("Pelo3").style.display = "none";
document.getElementById("Pelo2").style.display = "none";

function respuesta() {
  if (document.getElementById("Num").value == nume1 + nume2) {
      document.getElementById("Correcion").innerHTML = "Correcto"
      puntaje = puntaje + 10
      correctas = correctas + 1
  }
  else {
      document.getElementById("Correcion").innerHTML = "Incorrecto"
      puntaje = puntaje - 5
      Incorrectas = incorrectas + 1
  }
  document.getElementById("Puntaje").innerHTML = puntaje
}
