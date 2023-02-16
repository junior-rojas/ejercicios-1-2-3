import React, { useEffect, useState } from 'react';

export const ClockF = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellidos: "San Jose"
    };

    const [state, setState] = useState(initialState);

    const tick = () => {
        setState({
            ...state,
            fecha: new Date(),
            edad: state.edad + 1
        });
     };

     useEffect(() => {
        const intervalID = setInterval (
            () => tick(), 1000
         );

        return () => {
            clearInterval(intervalID);
        }
    });

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}

export default ClockF;