import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../img/Logo.png'
import '../style.css'
import { Button } from 'reactstrap'

const Finalizar = () => {

    const history = useHistory();

    function sair() {
        history.push('/');
    }

    return (
        <div className="section-form-finalizar">

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
                <div className="botao-gerar">
                    <Button color="danger" onClick={sair}>Sair</Button>{' '}
                </div>
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default Finalizar;