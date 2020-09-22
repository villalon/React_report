
import React from 'react';
import kpiData from './2020-09-11_2020-09-11_ESP.json';


export const Kpis = () => {
    return (
      <>
        <div className="stock-container">
          {kpiData.map((data, key) => {
            return (
              <div key={key}>
                {data.cohorte}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const HomePageHeader = () => {
    return (
      <header >
        <h2>Your KPIs</h2>
      </header>
    );
  };