

// ---------- funciones captura informacion ------------------// 
function askNombre () {
    var name = prompt("¿Cual es tu nombre?")
    return name
}

function askEdad () {
    var edad = prompt("¿Cual es tu edad?")
    return edad
}


function askEdadApePat () {
    var ape_pat = prompt("Ingresa tu apellido paterno")
    return ape_pat
}

function askEdadApeMat () {
    var ape_mat = prompt("Ingresa tu apellido materno")
    return ape_mat
}

function askEmail () {
    var email = prompt("Ingresa tu email")
    return email
}


function validaNumero (argNumero){
    let regex_fono = /^9[0-9]{8}$/;
    
    if (argNumero.match(regex_fono)) {
        return true
    }
    else {
        return false
    }
}



// ---------- variables  ------------------// 
var v_nombre; 
var v_edad;


// ---------- funcion objeto ------------------// 
function objPersona(ar_nombre, ar_edad) {
    this.nombre = ar_nombre;
    this.edad = ar_edad;
    
    this.ape_pat = askEdadApePat();
    this.ape_mat = askEdadApeMat();
    this.email = askEmail();
}



// ---------- saludo y validacion ------------------// 
function miFuncionPrueba() {
    /*
    v_nombre = askNombre();
    v_edad = askEdad();
    
    
    if  (v_edad < 18) {
        console.log("Tienes "+ v_edad +" años!!")
        console.log("Necesitas de un adulto! "+v_nombre)
        alert("Eres menor de edad");
    }
    else {
        console.log("Bienvenido "+v_nombre)
        alert("Empecemos!")
        
        var v_nuevapersona = new objPersona (v_nombre, v_edad);
        console.log(v_nuevapersona.email)        
        console.log("nueva persona creada.");
    }
    */

    // jugando con arrays ---------------------------
    var b_termine = true;
    var myArray = [];

    while (b_termine == true) {

        let v_nom = prompt("ingresa un nombre");
        myArray.push(v_nom);

        let finalizar =  prompt("terminaste? Y/N").toUpperCase();

        if (finalizar !== "N" || finalizar == null) {
            b_termine = false;
        }

    }
    console.log("tamaño del array: " + myArray.length.toString());
    console.log("primer item: " + myArray[0]);
    console.log("ultimo item: " + myArray[myArray.length-1]);
    console.log("Lista completa: \n" + myArray.toString());
    console.log("the end");
}



// ---------- config form ------------------// 
function PruebaRegistar() {
    var obj_form_name       = document.getElementById('input_name');
    var obj_form_apepat     = document.getElementById('input_apepat');
    var obj_form_apemat     = document.getElementById('input_apemat');
    var obj_form_email      = document.getElementById('input_email');
    var obj_form_celular    = document.getElementById('input_celular');
    var obj_form_areafav    = document.getElementById('input_areafav');
    var obj_form_suscripcion= document.getElementById('input_suscripcion');
    var obj_form_comment    = document.getElementById('sugerencia');

    // valida si el mesj de error existe
    if (document.body.contains(document.getElementById('error_fono'))) {
        let eliminar = document.getElementById('error_fono');
        eliminar.parentNode.removeChild(eliminar);
    }

    // valida expresion # celular
    if (validaNumero(obj_form_celular.value)) {
        let msj_bienvenida = 'Bienvenido '+ (obj_form_name.value).toUpperCase()+' !! ';
        let p_bienvenida = document.getElementById('form_titulo');

        document.getElementById("form_contacto").reset();
        document.getElementById('form_contacto').style.display = 'none';
        p_bienvenida.innerText = msj_bienvenida;
        p_bienvenida.style.fontSize = '150%';
        
        $("#myModal").modal();
        
        setTimeout(function () {
            window.open('index.html', '_self');
        }, 5000);

    }
    else {
            var msj_error = document.createElement('span');
            msj_error.id = 'error_fono';
            msj_error.innerHTML ='El numero ingresado no es valido';
            msj_error.style.color = 'yellow';
            var contenedor = document.getElementById('lbl_input_celular');
            contenedor.appendChild(msj_error);
    }
}






