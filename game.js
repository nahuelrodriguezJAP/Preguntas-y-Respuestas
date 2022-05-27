
var nivelActual = 0
function aleatorio(max, min) {
    return Math.round(Math.random() * (1 + max - min) + min);
}

function preguntar(niveles) {
    var preguntas = "";
    var respuestas = [];
    var respDesordenadas = [];
    let valorAleatorio = aleatorio(2, 0);
    preguntas = niveles[nivelActual];
    console.log(preguntas[valorAleatorio])
    document.getElementById('pregunta').innerText = preguntas[valorAleatorio].pregunta;
    respuestas[0] = `${preguntas[valorAleatorio].respIncorrecta[0]}`;
    respuestas[1] = `${preguntas[valorAleatorio].respIncorrecta[1]}`;
    respuestas[2] = `${preguntas[valorAleatorio].respIncorrecta[2]}`;
    respuestas[3] = `${preguntas[valorAleatorio].respCorrecta}`;
    respDesordenadas=respuestas.sort((a,b) => Math.random() - 0.5)
    for (let i = 0; i < respDesordenadas.length; i++) {
        var resp = respDesordenadas[i];
        document.getElementById('respuestas').innerHTML += `<div class="col-2" id="${i}"><Button class="btn">${resp}</button></div>`
    }
}
console.log(respuestas)
console.log(document.getElementById('0'))


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function (result) {
        if (result.status === 'ok') {
            var niveles = ""
            niveles = result.data;
            console.log(result.data);
            preguntar(niveles)
        }

    });
});
