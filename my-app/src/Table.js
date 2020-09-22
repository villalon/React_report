import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Table({data}) {

    return(
            <>
                <div className = 'table-responsive'>
                    <table className = 'table table-striped'>
                        <thead className = 'bg-primary'>
                            <th>Pregunta</th>
                            <th></th>
                            <th>Promedio</th>
                            <th>Detractores
                                Notas 1-4</th>
                            <th>Neutros
                                Nota 5</th>
                            <th>Promotores
                                Notas 6-7</th>
                            <th>ISN</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{data.pregunta[0]}</td>
                                <td></td>
                                <td>{data.promedio[0]}</td>
                                <td>{data.detractores[0]}</td>
                                <td>{data.neutros[0]}</td>
                                <td>{data.promotores[0]}</td>
                                <td>{data.isns[0]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[1]}</td>
                                <td></td>
                                <td>{data.promedio[1]}</td>
                                <td>{data.detractores[1]}</td>
                                <td>{data.neutros[1]}</td>
                                <td>{data.promotores[1]}</td>
                                <td>{data.isns[1]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[2]}</td>
                                <td></td>
                                <td>{data.promedio[2]}</td>
                                <td>{data.detractores[2]}</td>
                                <td>{data.neutros[2]}</td>
                                <td>{data.promotores[2]}</td>
                                <td>{data.isns[2]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[3]}</td>
                                <td></td>
                                <td>{data.promedio[3]}</td>
                                <td>{data.detractores[3]}</td>
                                <td>{data.neutros[3]}</td>
                                <td>{data.promotores[3]}</td>
                                <td>{data.isns[3]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[4]}</td>
                                <td></td>
                                <td>{data.promedio[4]}</td>
                                <td>{data.detractores[4]}</td>
                                <td>{data.neutros[4]}</td>
                                <td>{data.promotores[4]}</td>
                                <td>{data.isns[4]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[5]}</td>
                                <td></td>
                                <td>{data.promedio[5]}</td>
                                <td>{data.detractores[5]}</td>
                                <td>{data.neutros[5]}</td>
                                <td>{data.promotores[5]}</td>
                                <td>{data.isns[5]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[6]}</td>
                                <td></td>
                                <td>{data.promedio[6]}</td>
                                <td>{data.detractores[6]}</td>
                                <td>{data.neutros[6]}</td>
                                <td>{data.promotores[6]}</td>
                                <td>{data.isns[6]}</td>
                            </tr>

                            <tr>
                                <td>{data.pregunta[7]}</td>
                                <td></td>
                                <td>{data.promedio[7]}</td>
                                <td>{data.detractores[7]}</td>
                                <td>{data.neutros[7]}</td>
                                <td>{data.promotores[7]}</td>
                                <td>{data.isns[7]}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
        );

}

export default Table;