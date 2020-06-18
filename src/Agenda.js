document.getElementById("Edits").style.display = "none";
var contacto1;

class contacto{
    constuctor(nombre, telefono, gmail){
        this.nombre = nombre;
        this.telefono= telefono;
        this.gmail= gmail;
    }
}

function CrearNuevo(){
    //aca tiene que ir lo que hace una carta nueva, pero no se como
    contacto1 = new contacto(document.getElementById("Nombre").innerHTML, document.getElementById("Tel").innerHTML, document.getElementById("Gmail").innerHTML)
}

function abrireditar(){
    document.getElementById("Edits").style.display = "Block";
    document.getElementById("Editar").style.display = "none";
}

function cerrarguardar(){
    document.getElementById("Edits").style.display = "none";
    document.getElementById("Editar").style.display = "Block"
}


function actualizar(){
    contacto1.nombre = document.getElementById("Nom").innerHTML;
    contacto1.telefono = document.getElementById("Tele").innerHTML;
    contacto1.gmail = document.getElementById("GMail").innerHTML;
}

function editar(){

}