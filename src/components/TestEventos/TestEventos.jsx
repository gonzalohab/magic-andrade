import { useState } from "react";

const TestEventos = () => {

    const handleKeyDown = (e) => {
        if (['a','e','i', 'o','u'].includes(e.key)) {
            e.preventDefault();
        } 

    }
    
    return(
        <>
            <h1>TestEventos</h1>
            <input onKeyDown={handleKeyDown}/>
        </>
    )
}

export default TestEventos;