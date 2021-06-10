import React, { useState, Component } from 'react'
import '../style.css'
import axios from 'axios';

const TesteRelatorio = () => {

    async function retornaGetAvaliacao() {
        const result = await axios.get("/avaliacao", {
                
        });
        console.log(result.data)
    }

    return (

        <div>
            <button onClick={retornaGetAvaliacao}>TESTE</button>
        </div>

    )
}

export default TesteRelatorio;