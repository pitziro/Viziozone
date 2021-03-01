
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
var preciocpu

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

    $('#selectproce').css('color','black')
    $('#precioCPU').text(procesadores[index].PrecioMN)
    preciocpu = Number((procesadores[index].PrecioMN).toString().replace(/[^0-9,-]+/g,"").replace(",","."))
});


// carga del JSON MoBo 
// ----------------------------------------------------------------------------
var mobos
var preciomobo

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

    $('#selectMobo').css('color','black')
    $('#precioMobo').text(mobos[index].PrecioMN)
    preciomobo = Number((mobos[index].PrecioMN).toString().replace(/[^0-9,-]+/g,"").replace(",","."))
});


// carga del JSON RAM 
// ----------------------------------------------------------------------------
var rams
var precioram

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

    $('#selectRam').css('color','black')
    $('#precioRam').text(rams[index].PrecioMN)
    precioram = Number((rams[index].PrecioMN).toString().replace(/[^0-9,-]+/g,"").replace(",","."))
});



// carga del JSON GPU
// ----------------------------------------------------------------------------
var graficas
var preciogpu

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

    $('#selectGpu').css('color','black')
    $('#precioGpu').text(graficas[index].PrecioMN)
    preciogpu = Number((graficas[index].PrecioMN).toString().replace(/[^0-9,-]+/g,"").replace(",","."))
});




// Guardo el JSON con los datos
function RegistroCot() {
    
    let costo_total = preciogpu + preciocpu + precioram + preciomobo

    if ( isNaN(costo_total) ) {
        if ( isNaN(preciogpu) ) { $('#selectGpu').css('color','red') } 
        if ( isNaN(preciocpu) ) { $('#selectproce').css('color','red') } 
        if ( isNaN(precioram) ) { $('#selectRam').css('color','red') } 
        if ( isNaN(preciomobo) ) { $('#selectMobo').css('color','red') } 
    }
    else
    {
        let data = '{"Proce": null, "Mobo": null, "Ram": null, "Gpu": null}';
        var cotJson = JSON.parse (data);
        
        cotJson.Proce = $('#selectproce').find(":selected").text();
        cotJson.Mobo = $('#selectMobo').find(":selected").text();
        cotJson.Gpu = $('#selectGpu').find(":selected").text();
        cotJson.Ram = $('#selectRam').find(":selected").text();
    
        localStorage.setItem('miCotizacion',JSON.stringify(cotJson));
    
        $('#ul_coti').append('<li>'+JSON.stringify(cotJson.Proce)+'</li>')
        $('#ul_coti').append('<li>'+JSON.stringify(cotJson.Mobo)+'</li>')
        $('#ul_coti').append('<li>'+JSON.stringify(cotJson.Gpu)+'</li>')
        $('#ul_coti').append('<li>'+JSON.stringify(cotJson.Ram)+'</li>')

        $('#total_coti').text('El valor total asciende a: S/ '+ costo_total.toFixed(2) + '(aprox.)')

        // modal y redireccion
        $('#myModalCot').show();

        setTimeout(function () {
            $('#myModalCot').hide();
            window.open('cotizar.html', '_self');
        },  6500);
    }
    
}