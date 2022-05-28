var nivelActual = 0;
var preguntas = "";
var respuestas = [];
var respDesordenadas = [];
var correcta = [];
var niveles = ""
function aleatorio(max, min) {
    return Math.round(Math.random() * (1 + max - min) + min);
}

function preguntar(niveles) {
    document.getElementById('respuestas').innerHTML = ""
    document.getElementById('Nivel').innerText = nivelActual + 1;
    preguntas = "";
    respuestas = [];
    respDesordenadas = [];
    let valorAleatorio = aleatorio(3, 0);
    preguntas = niveles[nivelActual];
    correcta = `${preguntas[valorAleatorio].respCorrecta}`;
    document.getElementById('pregunta').innerText = preguntas[valorAleatorio].pregunta;
    respuestas[0] = `${preguntas[valorAleatorio].respIncorrecta[0]}`;
    respuestas[1] = `${preguntas[valorAleatorio].respIncorrecta[1]}`;
    respuestas[2] = `${preguntas[valorAleatorio].respIncorrecta[2]}`;
    respuestas[3] = `${preguntas[valorAleatorio].respCorrecta}`;
    respDesordenadas = respuestas.sort((a, b) => Math.random() - 0.5)
    for (let i = 0; i < respDesordenadas.length; i++) {
        var resp = respDesordenadas[i];
        document.getElementById('respuestas').innerHTML += `<div class="col-2" ><Button onclick="verificar(${i})" id="${i}" class="btn btn-outline-success"><strong>${resp}</strong></button></div>`
    }
    ganador();
}
function nivelacion(x) {
    let nivelacion = document.getElementById('nivelacion');
    console.log(nivelacion);
    console.log(x)
    if (x == 0) {
        nivelacion.style.width = "2%"
    }
    if (x == 1) {
        nivelacion.style.width = "20%"
    }
    if (x == 2) {
        nivelacion.style.width = "40%"

    }
    if (x == 3) {
        nivelacion.style.width = "60%"
    }
    if (x == 4) {
        nivelacion.style.width = "80%"
    }
    if (x == 5) {
        nivelacion.style.width = "100%"
    }
}

function verificar(x) {
    let respElegida = document.getElementById(x).innerText;
    if (respElegida == correcta) {
        alert('Respuesta Correcta, Subes un puesto');
        nivelActual += 1
        guardar();
        ganador()
        nivelacion(nivelActual)
        preguntar(niveles);


    }
    else {
        alert('Respuesta Incorrecta, deberás comenzár denuevo')
        nivelActual = nivelActual - nivelActual;
        guardar();
        window.location = 'index.html'
    }

}

function guardar() {
    localStorage.setItem('nivel', JSON.stringify(nivelActual));
    revisar();
}
function revisar() {
    let lvl = localStorage.getItem('nivel')
    if (lvl != null) {
        lvl = JSON.parse(lvl);
        nivelActual = lvl;
    }
}
function ganador() {
    if (nivelActual == '5') {
        alert('FELICIDADES!!!!! GANASTE!!!!             Tu nivel regresara a 1 para que puedas volver a jugar');
        nivelActual = 0;
        guardar()
        preguntar(niveles);
    }

}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function (result) {
        if (result.status === 'ok') {
            niveles = result.data;
            console.log(result.data);
            ganador();
            nivelacion(nivelActual);
            revisar()
            preguntar(niveles);
        }
        document.getElementById('finalizar').addEventListener('click', function () {
            guardar()
            window.location = 'index.html';
        })


    });
});
