import React from 'react';
import logo from './logo.svg';
import Donut from './Donut';
import './App.css';

var data1 = {
  labels: [
  'Danger',
  'Normal',
  'Great'
  ],
  data:[2000, 4000, 2850],
  titulo:"Cohorte",
}
var data2 = {
  labels: [
  'Danger',
  'Normal',
  'Great'
  ],
  data:[100, 200, 1000],
  titulo:"939",
}


const App = () => {
  return (
    <div className="App">
      <header className="App-header">

      
      <tr>
        <td colspan ="3">
      <Donut data = {data1}></Donut>
      </td><td>
      <Donut data = {data2}></Donut>
      </td>
      </tr>
      </header>
    </div>
  );
}

export default App;