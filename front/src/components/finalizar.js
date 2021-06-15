import React from 'react'
import Logo from '../img/Logo.png'
import '../style.css'

const Finalizar = () => {

    return (
        <div className="section-form">

            <div className="head">
                <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                
                <div className="description-form">
                    Avaliação do atendimento <br></br> Ouvidoria 156
                </div>
            </div>

           
            <div className="formulario">

                <div id="fim">
                    Avaliação finalizada, obrigado!
                </div>
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default Finalizar;