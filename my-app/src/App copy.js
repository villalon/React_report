import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Customtag from './Customtag';
import './App.css';
import {Bar} from 'react-chartjs-2';


var dataJson = require('./data/2020-09-11_2020-09-11_ESP.json');
const items = new Array()



const App = () => {
  const [data, setData] = useState(null)
  useEffect(()=>{
    for (const record in dataJson){

      var dates = dataJson[record]
      for (const date in dates){
    
        var labelsJson = dates[date].preguntasNumericas
        var kpisJson = dates[date]['isn.nps']
      }
      const data = {
        labels:labelsJson,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(0,0,132,0.5)',
            borderColor: 'rgba(0,0,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,132,0.9)',
            hoverBorderColor: 'rgba(0,0,255,1)',
            data: kpisJson
          }
        ]
      };
      items.push(<div>
        <Bar data = {data}> 
        </Bar>
        </div>)
    }
    setData(items)
  },[])
  if(dataJson === null) {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Loading...</h1>
      </header>
    </div>
    )
  }
  return (
    <div className="App">
      <div>
        {items}
      </div>
    </div>
  );
}
export default App;