import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

var dataJson = require('./data/2020-09-11_2020-09-11_ESP.json');

let processedJsonData = []

for(const record in dataJson) {
    var dates = dataJson[record]
    for(const data in dates) {
    var promPorPregunta = dates[data].medPorPregunta[0]
    
    //console.log(promPorPregunta)

      for (const valor in promPorPregunta) {
        console.log("----")
        console.log(valor)
        console.log(promPorPregunta[valor]);
      }

    var dataToBeAdded = {

        preguntas: Object.keys(promPorPregunta),
        promedio: promPorPregunta.preguntas.map((question) => {
            var arraypromedio = []
            let prom = promPorPregunta.question
            arraypromedio.push(prom)
            return (arraypromedio)

        })
    }
    }
}


function Tabla() {

        return(
            <div className = 'table-responsive'>
                <table className = 'table table-striped'>
                    <thead className = 'bg-primary'>
                        <th>Pregunta</th>
                        <th></th>
                        <th>Detractores
                            Notas 1-4</th>
                        <th>Neutros
                            Nota 5</th>
                        <th>Promotores
                            Notas 6-7</th>
                        <th>ISN</th>
                    </thead>

                </table>
            </div>
        );

}

export default Tabla;