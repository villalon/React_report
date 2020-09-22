import React, { Component } from 'react';
import data from "./data/2020-09-15_2020-09-15_ESP_1"; 


const Customtag = (props) => {
    return (
        <>
        <p>My First Paragraph</p>
        <h2>
            SPAM!
            
        </h2>
        {
            props.puppet && //Condicional. Si existe ejecuta lo siguiente?
            <h2>
            {props.puppet}
            </h2>
        }
        </>
    )
}

export default Customtag