
// personalizacion de mensaje
if (localStorage.getItem('nombreusuario') !== null) {
    var nom_usuario = localStorage.getItem('nombreusuario');
    document.getElementById("cabecera_cotiza").innerHTML = ("Hola "+ nom_usuario +", ¿Qué deseas cotizar?").toUpperCase();
    
    var msj_limpiar = document.createElement('span');
    msj_limpiar.id = 'limpiar_storage';
    msj_limpiar.innerHTML = '(No soy yo) ';
    msj_limpiar.style.color = 'magenta';
    msj_limpiar.style.letterSpacing = "0px";

    var contenedor = document.getElementById('cabecera_cotiza');
    contenedor.appendChild(msj_limpiar);
}

// boton de clear storage 
if (document.body.contains(document.getElementById('limpiar_storage'))) {

    msj_limpiar.onmouseover = function () {
        msj_limpiar.style.textDecoration = 'underline'
    };

    msj_limpiar.onmouseout = function () {
        msj_limpiar.style.textDecoration = 'none'
    };

    msj_limpiar.onclick = function () {
        localStorage.clear();
        location.reload();
    }
}


