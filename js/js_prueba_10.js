

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




// ---------- FUNCION DE REGISTRO------------------// 
function PruebaRegistar() {

    // ---------- variables form
    var obj_form_name       = document.getElementById('input_name');
    var obj_form_apepat     = document.getElementById('input_apepat');
    var obj_form_apemat     = document.getElementById('input_apemat');
    var obj_form_email      = document.getElementById('input_email');
    var obj_form_celular    = document.getElementById('input_celular');
    var obj_form_areafav    = document.getElementById('input_areafav');
    var obj_form_suscripcion= document.getElementById('input_suscripcion');
    var obj_form_comment    = document.getElementById('sugerencia');


    // valida si el mesj de error de telefono existe
    if (document.body.contains(document.getElementById('error_fono'))) {
        let eliminar = document.getElementById('error_fono');
        eliminar.parentNode.removeChild(eliminar);
    }

    // valida si el mesj de error de seleccion de seccion existe
    if (document.body.contains(document.getElementById('error_seccion'))) {
        let eliminar = document.getElementById('error_seccion');
        eliminar.parentNode.removeChild(eliminar);
    }

    // valida si el mesj de error de correo existe
    if (document.body.contains(document.getElementById('error_mail'))) {
        let eliminar = document.getElementById('error_mail');
        eliminar.parentNode.removeChild(eliminar);
    }

    // valida expresion # celular
    if ((validaNumeroMovil(obj_form_celular.value)) && 
        (validaMailing(obj_form_email.value))
        )
    {
        let msj_bienvenida = 'Bienvenido '+ (obj_form_name.value).toUpperCase()+' !! ';
        let p_bienvenida = document.getElementById('form_titulo');

        document.getElementById("form_contacto").reset();
        document.getElementById('form_contacto').style.display = 'none';
        p_bienvenida.innerText = msj_bienvenida;
        p_bienvenida.style.fontSize = '200%';
        
        // modal y redireccion
        $("#myModal").modal();
        setTimeout(function () {
            $("#myModal").modal('hide');
            window.open('index.html', '_self');
        }, 6000);

        

    }
    else {

        if (validaNumeroMovil(obj_form_celular.value) === false )
        {
            var msj_error = document.createElement('span');
            msj_error.id = 'error_fono';
            msj_error.innerHTML ='El numero no tiene un formato valido';
            msj_error.style.color = 'yellow';
            var contenedor = document.getElementById('lbl_input_celular');
            contenedor.appendChild(msj_error);
        }

        if  (validaMailing(obj_form_email.value) === false)
        {
            var msj_error = document.createElement('span');
            msj_error.id = 'error_mail';
            msj_error.innerHTML ='El correo no tiene un formato valido';
            msj_error.style.color = 'yellow';
            var contenedor = document.getElementById('lbl_input_email');
            contenedor.appendChild(msj_error);  
        }

        this.event.preventDefault();
    }

}






