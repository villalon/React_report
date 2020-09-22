import React from 'react';
import data from "./data/2020-09-15_2020-09-15_ESP_1"; 
var myObject = JSON.parse(data);

const jsonimport = () => {
    return (
        <>
        <div>{myObject}</div>
        
        </>
    )
}

export default jsonimport