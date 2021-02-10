
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



// array procesador 
var myArrayProce = ['AMD RYZEN 3 3100','AMD RYZEN 3 3200G','AMD RYZEN 3 3300X',
                    'AMD RYZEN 5 2600','AMD RYZEN 5 3400G','AMD RYZEN 5 2600X',
                    'AMD RYZEN 5 3500X','AMD RYZEN 5 3600','AMD RYZEN 5 3600X',
                    'AMD RYZEN 5 5600X','AMD RYZEN 7 3700X','AMD RYZEN 7 3800X',
                    'AMD RYZEN 7 3800XT','AMD RYZEN 7 5800X','AMD RYZEN 9 3900X',
                    'AMD RYZEN 9 5900X','AMD RYZEN 9 3950X','AMD RYZEN 9 5950X'];


var poblarProce = document.getElementById('selectproce');                    
    for (var i = 0; i < myArrayProce.length; i++) {
        var opt = myArrayProce[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        poblarProce.appendChild(el);
    }


// array motherboard
var myArrayMobo = ['MB ASROCK A320M-HDV R4.0 | AM4 AMD',
                'MB MSI AMD A520M-A-PRO 2 DDR44 4400MHZ HDMI DVI',
                'MB ASROCK A520M-HDV | AM4 AMD',
                'MB ASROCK B450M-HDV R4.0 | AM4 AMD',
                'MAINBOARD GIGABYTE B450M GAMING | AM4 AMD',
                'MB GIGABYTE B450M-DS3H | AM4 AMD',
                'MB GIGABYTE A520M-H | AM4 AMD',
                'MB GIGABYTE B450M V2 DSH3 | AM4 AMD',
                'MB ASROCK B450M PRO4-F | AM4 AMD']; 

var poblarMobo = document.getElementById('selectMobo');                    
for (var i = 0; i < myArrayMobo.length; i++) {
    var opt = myArrayMobo[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    poblarMobo.appendChild(el);
}


// array RAMS
var myArrayRam = ['MEMORIA SODIMM T-FORCE VULCAN 8GB 3200MHZ DDR4 | RED',
                'MEMORIA DDR4 KINGSTON 8GB 3200MHZ BLACK CL16',
                'MEMORIA HP V8SERIES 8GB 3200',
                'MEMORIA RAM GEIL SUPER LUCE RGB 8GB DDR4 3200MHZ',
                'MEM. RAM HYPERX PREDATOR RGB 8GB DDR4 3200 MHZ',
                'RAM T-FORCE VULCAN Z 16GB, DDR4 3200MHZ',
                'MEMORIA RAM KINGSTON HYPERX FURY 16GB DDR4 2666MHZ',
                'RAM DDR4 T-FORCE DELTA RGB 16GB 3200MHZ BLACK',
                'MEMORIA CORSAIR DDR4 16GB 3200MHZ VENGEANCE LPX',
                'RAM KINGSTON HYPERX FURY 16GB DDR4 3200MHZ'
]; 

var poblarRam = document.getElementById('selectRam');                    
for (var i = 0; i < myArrayRam.length; i++) {
    var opt = myArrayRam[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    poblarRam.appendChild(el);
}



// array GPU
var myArrayGpu = ['TARJ. VIDEO SAPPHIRE RADEON RX 5500 XT 4GB GDDR6 PULSE | 128 BIT',
                'ASROCK RADEON RX 5500 XT 8GB GDDR6 CHALLENGER D 8G OC | 128 BIT',
                'T. VIDEO GIGABYTE RADEON RX 5500 XT 4GB GDDR6',
                'Tarjeta de video ASUS ROG Strix AMD Radeon RX570 OC 8GB GDDR5 256-bit',
                'GIGABYTE AMD RADEON RX 580 GAMING 8GB GDDR5',
                'ASUS AMD ROG STRIX RX 5500XT GAMING 8GB GDDR6'
]; 

var poblarGpu = document.getElementById('selectGpu');                    
for (var i = 0; i < myArrayGpu.length; i++) {
    var opt = myArrayGpu[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    poblarGpu.appendChild(el);
}

// Guardo el JSON con los datos
function RegistroCot() {
    
    let data = '{"Proce": null, "Mobo": null, "Ram": null, "Gpu": null}';
    var cotJson = JSON.parse (data);
    
    cotJson.Proce = $('#selectproce').find(":selected").text();
    cotJson.Mobo = $('#selectMobo').find(":selected").text();
    cotJson.Gpu = $('#selectGpu').find(":selected").text();
    cotJson.Ram = $('#selectRam').find(":selected").text();

    localStorage.setItem('miCotizacion',JSON.stringify(cotJson));
    
    console.log('Termine coti')

    // modal y redireccion
    $('#myModalCot').show();
    
    setTimeout(function () {
        $('#myModalCot').hide();
        window.open('cotizar.html', '_self');
    },  3000);
    
}