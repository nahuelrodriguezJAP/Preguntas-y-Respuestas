
function Preguntar(niveles){
    let pregunta = '';

}
console.log(niveles)
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(NIVEL).then(function(result){
        if (result.status === 'ok') {
            niveles = result.data
        }
    });
});