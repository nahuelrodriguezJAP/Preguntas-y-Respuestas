
var nivelActual=0
function aleatorio(max, min) {
    return Math.round(Math.random() * (1 + max - min) + min);
}

function preguntar(niveles) {
    let preguntas = "";
    let valorAleatorio = aleatorio(3, 0);
    preguntas += niveles.nivel+valorAleatorio;
    console.log(preguntas)
    document.getElementById('pregunta').innerHTML= preguntas[valorAleatorio].pregunta
    
}
function mezclarResp(x,y){

}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function (result) {
        if (result.status === 'ok') {
            var niveles = ""
            niveles = result.data;
            console.log(result.data.nivel1[1]);
            
    preguntar(niveles)
        }
        
    });
});
console.log(aleatorio(3, 0))
