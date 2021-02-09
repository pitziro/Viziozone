

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

    // jugando con arrays
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


