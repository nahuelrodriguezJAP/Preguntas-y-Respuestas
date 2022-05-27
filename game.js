
var nivelActual = 0
function aleatorio(max, min) {
    return Math.round(Math.random() * (1 + max - min) + min);
}

function preguntar(niveles) {
    var preguntas = "";
    var respuestas = [];
    let valorAleatorio = aleatorio(3, 0);
    preguntas = niveles[nivelActual];
    console.log(preguntas[valorAleatorio])
    document.getElementById('pregunta').innerText = preguntas[valorAleatorio].pregunta;
    respuestas[0] = `${preguntas[valorAleatorio].respIncorrecta[0]}`;
    respuestas[1] = `${preguntas[valorAleatorio].respIncorrecta[1]}`;
    respuestas[2] = `${preguntas[valorAleatorio].respIncorrecta[2]}`;
    respuestas[3] = `${preguntas[valorAleatorio].respCorrecta}`;
    console.log(respuestas);
    for (let i = 0; i < respuestas.length; i++) {
        var resp = respuestas[i];
        console.log(resp)
        document.getElementById('respuestas').innerHTML += `<div id="${i}"><Button>${resp}`
    }

}
console.log(respuestas)
function mezclarResp(x, y) {


}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function (result) {
        if (result.status === 'ok') {
            var niveles = ""
            niveles = result.data;
            console.log(result.data);
            console.log(result.data[aleatorio(3, 0)])

            preguntar(niveles)
        }

    });
});
console.log(aleatorio(3, 0))
