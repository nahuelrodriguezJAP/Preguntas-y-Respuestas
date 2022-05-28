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
    document.getElementById('Nivel').innerText = nivelActual+1;
    preguntas = "";
    respuestas = [];
    respDesordenadas = [];
    let valorAleatorio = aleatorio(3, 0);
    preguntas = niveles[nivelActual];
    console.log(preguntas)
    console.log(niveles[0])
    console.log(nivelActual)
    console.log(valorAleatorio)
    correcta = `${preguntas[valorAleatorio].respCorrecta}`;
    document.getElementById('pregunta').innerText = preguntas[valorAleatorio].pregunta;
    respuestas[0] = `${preguntas[valorAleatorio].respIncorrecta[0]}`;
    respuestas[1] = `${preguntas[valorAleatorio].respIncorrecta[1]}`;
    respuestas[2] = `${preguntas[valorAleatorio].respIncorrecta[2]}`;
    respuestas[3] = `${preguntas[valorAleatorio].respCorrecta}`;
    respDesordenadas = respuestas.sort((a, b) => Math.random() - 0.5)
    for (let i = 0; i < respDesordenadas.length; i++) {
        var resp = respDesordenadas[i];
        document.getElementById('respuestas').innerHTML += `<div class="col-2" ><Button onclick="verificar(${i})" id="${i}" class="btn btn-outline-success">${resp}</button></div>`
    }
    ganador();
}

function verificar(x) {
    let respElegida = document.getElementById(x).innerText;
    if (respElegida == correcta) {
        alert('Respuesta Correcta, Subes un puesto');
        nivelActual += 1
        guardar();
        ganador()
        preguntar(niveles);


    }
    else {
        alert('Respuesta Incorrecta, comienzas en el nivel 0')
        nivelActual = nivelActual - nivelActual;
        guardar();
        preguntar(niveles)
    }

}

function guardar() {
    localStorage.setItem('nivel', JSON.stringify(nivelActual));
    revisar();
}
function revisar() {
    let lvl = localStorage.getItem('nivel')
    if(lvl!=null){    
    lvl = JSON.parse(lvl);
    nivelActual = lvl;}
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
            revisar()
            preguntar(niveles);
        }
        document.getElementById('finalizar').addEventListener('click', function () {
            guardar()
            window.location = 'index.html';
        })


    });
});
