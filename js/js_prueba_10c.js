// ----------------------------------------------------------------------------------------
// ----------------- VALIDACION FORMULARIO ------------------------------------------------
// ----------------------------------------------------------------------------------------



// ---- VALidacion de campo telefono movil  ----------- 
function validaNumeroMovil (argNumero){
    let regex_fono = /^9[0-9]{8}$/;
    
    if (argNumero.match(regex_fono)) {
        return true
    }
    else {
        return false
    }
}

// ---- VALidacion de campo correo ----------- 
function validaMailing (argMail){
    let regex_mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if (argMail.match(regex_mail)) {
        return true
    }
    else {
        return false
    }
}


// ---- VALidacion de KEYPRESS letras ----------- 
function validaLetra (argKey, argLabel){
    let regex_alfab = /[A-Za-z\s]/;
    argKey = this.event.key ;
    argLabel = this.event.currentTarget.parentNode.id

    // valida si el mesj de error existe
    if (document.body.contains(document.getElementById('error_'+argLabel))) {
        let eliminar = document.getElementById('error_'+argLabel);
        eliminar.parentNode.removeChild(eliminar);
    }

    if (argKey.match(regex_alfab)) {
        return true
    }
    else {
        this.event.preventDefault();
        
        var msj_error = document.createElement('span');
            msj_error.id = 'error_'+argLabel;
            msj_error.innerHTML ='Ingresar solo letras';
            msj_error.style.color = 'yellow';
            var contenedor = document.getElementById(argLabel);
            contenedor.appendChild(msj_error);
    }
}


// ---- VALidacion de KEYPRESS numeros ------------------
function validaNumero (argKey, argLabel){
    let regex_numero = /^[0-9]$/;
    argKey = this.event.key ;
    argLabel = this.event.currentTarget.parentNode.id

    // valida si el mesj de error existe
    if (document.body.contains(document.getElementById('error_'+argLabel))) {
        let eliminar = document.getElementById('error_'+argLabel);
        eliminar.parentNode.removeChild(eliminar);
    }

    if (argKey.match(regex_numero)) {
        return true
    }
    else {
        this.event.preventDefault();
        
        var msj_error = document.createElement('span');
            msj_error.id = 'error_'+argLabel;
            msj_error.innerHTML ='Ingresar solo digitos';
            msj_error.style.color = 'yellow';
            var contenedor = document.getElementById(argLabel);
            contenedor.appendChild(msj_error);
    }
}

// ----------------------------------------------------------------------------------------
// ----------------- VALIDACION DEL REGISTRO ------------------------------------------------
// ----------------------------------------------------------------------------------------


function PruebaRegistar2() {
    console.log ('termine')

    $('#myModal').show();

    setTimeout(function () {
        $('#myModal').hide();
        window.open('cotizar.html', '_self');
    },  3000);

    console.log ('mostrar modal')
}