
var nivelActual = 0
var preguntas = "";
var respuestas = [];
var respDesordenadas = [];
var correcta=[];
var niveles = ""
function aleatorio(max, min) {
    return Math.round(Math.random() * (1 + max - min) + min);
}

function preguntar(niveles) {
    document.getElementById('respuestas').innerHTML =""
    document.getElementById('Nivel').innerText=nivelActual;
    preguntas = "";
    respuestas = [];
    respDesordenadas = [];
    let valorAleatorio = aleatorio(3, 0);
    preguntas = niveles[nivelActual];
    console.log(preguntas[valorAleatorio])
    document.getElementById('pregunta').innerText = preguntas[valorAleatorio].pregunta;
    correcta=`${preguntas[valorAleatorio].respCorrecta}`
    respuestas[0] = `${preguntas[valorAleatorio].respIncorrecta[0]}`;
    respuestas[1] = `${preguntas[valorAleatorio].respIncorrecta[1]}`;
    respuestas[2] = `${preguntas[valorAleatorio].respIncorrecta[2]}`;
    respuestas[3] = `${preguntas[valorAleatorio].respCorrecta}`;

    respDesordenadas = respuestas.sort((a, b) => Math.random() - 0.5)
    for (let i = 0; i < respDesordenadas.length; i++) {
        var resp = respDesordenadas[i];
        document.getElementById('respuestas').innerHTML += `<div class="col-2" ><Button onclick="verificar(${i})" id="${i}" class="btn btn-outline-success">${resp}</button></div>`
    }

}
console.log(respuestas)

function verificar(x) {
    let respElegida= document.getElementById(x).innerText;
    console.log(correcta)
    console.log(respElegida)
    if (respElegida == correcta) {
        alert('respuesta correcta')
        nivelActual += 1
        console.log(nivelActual);
        preguntar(niveles)
        
    }
    else {alert('Respuesta incorrecta, comienzas en el nivel 0')
        nivelActual==0;}
    
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function (result) {
        if (result.status === 'ok') {
            
            niveles = result.data;
            console.log(result.data);
            preguntar(niveles);
            
            console.log(document.getElementById('0').innerText)
            console.log(correcta)
        }

    });
});
