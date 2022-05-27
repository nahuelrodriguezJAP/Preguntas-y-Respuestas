const NIVELES = ["1","2","3","4","5"];
const Lvl1="https://nahuelrodriguezjap.github.io/Preguntas-y-Respuestas/preguntas/nivel1.json";
const Lvl2="https://nahuelrodriguezjap.github.io/Preguntas-y-Respuestas/preguntas/nivel2.json";
const Lvl3="https://nahuelrodriguezjap.github.io/Preguntas-y-Respuestas/preguntas/nivel3.json";
const Lvl4="https://nahuelrodriguezjap.github.io/Preguntas-y-Respuestas/preguntas/nivel4.json";
const Lvl5="https://nahuelrodriguezjap.github.io/Preguntas-y-Respuestas/preguntas/nivel5.json";




var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      };
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}
