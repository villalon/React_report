import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Donut from './Donut.js';
import SummaryHeader from'./SummaryHeader.js';

var dataJson = require('./2020-09-11_2020-09-11_ESP.json');
//939
const App = () => {
  const [processedJsonData,setData] = useState(null)
  useEffect(()=>{
    let processedJsonData_1 = []
    for (const record in dataJson){

      var dates = dataJson[record]
      for (const date in dates){

        var distribucionNPS = dates[date].distribucion['X.Qué.tan.probable.es.que.recomiendes.este.programa.a.un.amigo.o.conocido.']
        
        var detractoresNPS = 0
        var neutrosNPS = 0
        var promotoresNPS = 0
        for (const respuestas in distribucionNPS) {
          if ( distribucionNPS[respuestas].x <=6 ) {
            detractoresNPS = detractoresNPS + distribucionNPS[respuestas].Freq
          } 
          if ( distribucionNPS[respuestas].x > 6 && distribucionNPS[respuestas].x <= 8) {
            neutrosNPS = neutrosNPS + distribucionNPS[respuestas].Freq
          }
          if (distribucionNPS[respuestas].x > 8 && distribucionNPS[respuestas].x <=10) {
            promotoresNPS = promotoresNPS + distribucionNPS[respuestas].Freq
          }
        }
        var donutDataNPS = {
          labels: [
          'Detractores',
          'Neutros',
          'Promotores'
          ],
          data:[detractoresNPS, neutrosNPS, promotoresNPS],
          titulo: 'NPS'}

        var distribucionISN = dates[date].distribucion['De.acuerdo.a.tu.experiencia..Cuál.es.tu.nivel.general.de.satisfacción.con.el.programa.académico.que.realizaste.en.la.UAI.']
        
        var detractoresISN = 0
        var neutrosISN = 0
        var promotoresISN = 0
        for (const respuestas in distribucionISN) {

          if ( distribucionISN[respuestas].x <=4 ) {
            detractoresISN = detractoresISN + distribucionISN[respuestas].Freq
          } 
          if ( distribucionISN[respuestas].x > 4 && distribucionISN[respuestas].x <= 5) {
            neutrosISN = neutrosISN + distribucionISN[respuestas].Freq
          } 
          if (distribucionISN[respuestas].x > 5 && distribucionISN[respuestas].x <=7) {
            promotoresISN = promotoresISN + distribucionISN[respuestas].Freq
          }
        }
       
        var donutDataISN = {          
          labels: [
          'Detractores',
          'Neutros',
          'Promotores'
          ],
          data:[detractoresISN, neutrosISN, promotoresISN],
          titulo: 'ISN'}
        
        console.log(dates[date]['medPorPregunta'][0])
          
        var tableData = {id:1}
        var ratio = Math.round(dates[date]['tasaRespuesta']*100) + '%'
        var answers = dates[date]['respuestas']
        console.log()
        
        var headerData = {facultyName:dates[date].facultad[0], cohortName:dates[date].nombre[0], surveyDate: date, totalStudents:dates[date].matriculados[0],totalRespondents:answers, ratioStudentsRespondents:ratio}
        processedJsonData_1.push({id:record,donutNPS:donutDataNPS,donutISN:donutDataISN,header:headerData, table:tableData})
        break;
        
      }
    }

    setData(processedJsonData_1)

  },[])
  if(processedJsonData === null) {
    return(
      <p>Cargando...</p>
    )
  }
  
  return (
    <div className="App">
  {processedJsonData.filter((data)=>{

    return(
      data.id === "939"
    )

  }).map((processedData)=>{
    
    return (<>
    <SummaryHeader data = {processedData.header}></SummaryHeader>
    <tr>
        <td >
      <Donut data = {processedData.donutISN}></Donut>
      </td><td>
      <Donut data = {processedData.donutNPS}></Donut>
      </td>
    </tr>
    {/*<Table data = {processedData.tableData}></Table>*/}
    <p>pencil</p>
    </>)
    
    })}
    </div>
  );
}

export default App;
