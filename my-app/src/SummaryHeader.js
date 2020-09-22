import React from 'react'
const SummaryHeader = ({data}) => {
    
    
    return ( 
    <>
    <h3>Resultados Encuesta de Término de Programa Académico</h3>
    <h3>{data.facultyName}</h3>
    <h3>{data.cohortName}</h3>
    <h3>Fecha encuesta: {data.surveyDate}</h3>
    <table id='summary'>
        <tr>
            <th>Alumnos Encuestados</th>
            <th>Alumnos que respondieron la Encuesta</th>
            <th>Tasa de Respuesta</th>
        </tr>
        <tr>
            <td>{data.totalStudents}</td>
            <td>{data.totalRespondents}</td>
            <td>{data.ratioStudentsRespondents}</td>
        </tr>
    </table>
    </>
    )

}

export default SummaryHeader