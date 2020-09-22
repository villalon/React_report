import React from 'react'
const Ernesto = (props) => {
    return ( 
        <>
        <h2>Ernesto wants a possum!</h2>
    {props.puppet && <h2>{props.puppet}</h2>}
    </>
    )

}

export default Ernesto