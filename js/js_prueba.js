
function askNombre () {
    var name = prompt("¿Cual es tu nombre?")
    return name
}

function askEdad () {
    var edad = prompt("¿Cual es tu edad?")
    return edad
}

// Saludo por ingreso y edad
function miFuncionPrueba() {
    var v_nombre = askNombre();
    var v_edad = askEdad();
    
    if  (v_edad < 18) {
        console.log("Tienes "+ v_edad +" años!!")
        console.log("Necesitas de un adulto! "+v_nombre)
        alert("Eres menor de edad");
    }
    else {
        console.log("Bienvenido "+v_nombre)
        alert("Empecemos!")
    }

}

