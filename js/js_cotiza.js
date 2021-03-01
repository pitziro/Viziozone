
// personalizacion de mensaje en carga de pagina // 
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



// carga del JSON Procesadores 
// ----------------------------------------------------------------------------
var procesadores

$('#selectproce').ready(function () {
    $.ajax({
        url: 'https://pitziro.github.io/Viziozone/myJSON/procesador.json',
        dataType: 'json',
        type: 'GET',
        success: function (jsonProces) {
            
            var poblarProce = document.getElementById('selectproce');                    
            for (var i = 0; i < jsonProces.length; i++) {
                var opt = jsonProces[i].Modelo
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                poblarProce.appendChild(el);
            }
            procesadores = jsonProces;
        }
    })
})


$('#selectproce').change(function() {
    var valorActual = this.value
    var index = procesadores.findIndex(function(item, i) {
        return item.Modelo === valorActual
    })

    $('#precioCPU').text(procesadores[index].PrecioMN)
});


// carga del JSON MoBo 
// ----------------------------------------------------------------------------
var mobos

$('#selectMobo').ready(function () {
    $.ajax({
        url: 'https://pitziro.github.io/Viziozone/myJSON/mobo.json',
        dataType: 'json',
        type: 'GET',
        success: function (jsonMobos) {
            
            var poblarMobo = document.getElementById('selectMobo');                    
            for (var i = 0; i < jsonMobos.length; i++) {
                var opt = jsonMobos[i].Modelo
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                poblarMobo.appendChild(el);
            }
            mobos = jsonMobos;
        }
    })
})


$('#selectMobo').change(function() {
    var valorActual = this.value
    var index = mobos.findIndex(function(item, i) {
        return item.Modelo === valorActual
    })

    $('#selectMobo').text(mobos[index].PrecioMN)
});


// carga del JSON RAM 
// ----------------------------------------------------------------------------
var rams

$('#selectRam').ready(function () {
    $.ajax({
        url: 'https://pitziro.github.io/Viziozone/myJSON/ram.json',
        dataType: 'json',
        type: 'GET',
        success: function (jsonRams) {
            
            var poblarRam = document.getElementById('selectRam');                    
            for (var i = 0; i < jsonRams.length; i++) {
                var opt = jsonRams[i].Modelo
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                poblarRam.appendChild(el);
            }
            rams = jsonRams;
        }
    })
})


$('#selectRam').change(function() {
    var valorActual = this.value
    var index = rams.findIndex(function(item, i) {
        return item.Modelo === valorActual
    })

    $('#selectRam').text(rams[index].PrecioMN)
});



// carga del JSON GPU
// ----------------------------------------------------------------------------
var graficas

$('#selectGpu').ready(function () {
    $.ajax({
        url: 'https://pitziro.github.io/Viziozone/myJSON/gpu.json',
        dataType: 'json',
        type: 'GET',
        success: function (jsonGpu) {
            
            var poblarGpu = document.getElementById('selectGpu');                    
            for (var i = 0; i < jsonGpu.length; i++) {
                var opt = jsonGpu[i].Modelo
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                poblarGpu.appendChild(el);
            }
            graficas = jsonGpu;
        }
    })
})


$('#selectGpu').change(function() {
    var valorActual = this.value
    var index = graficas.findIndex(function(item, i) {
        return item.Modelo === valorActual
    })

    $('#selectGpu').text(graficas[index].PrecioMN)
});




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