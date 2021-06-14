import React from 'react'
import { useLocation } from 'react-router'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const RelatorioFinal = () => {

    const history = useHistory();

    function relatorio() {
        history.push('/relatorio');
    }

    return (
        <div className="section-form-relatorioFinal" >

            <div className="head">
                <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                
                <div className="description-form" id="desc-relatorio">
                    Relatorio Final <br></br>
                </div>
            </div>

           
            <div className="formulario-final">
                <div class="topico" id="t">
                    <b>Tipo do relatório:</b>  <br></br> 
                    <b>Setor de atendimento:</b>  
                </div>
                <div class="topico" id="t1">
                    <b>Questão 01</b><br></br>
                    Menor nota:<br></br>
                    Maior nota:<br></br>
                    Média:
                </div>
                <div class="topico" id="t2">
                    <b>Questão 02</b><br></br> 
                    Menor nota:<br></br>
                    Maior nota:<br></br>
                    Média:
                </div>
                <div class="topico" id="t3">
                    <b>Questão 03</b><br></br> 
                    Menor nota:<br></br>
                    Maior nota:<br></br>
                    Média:
                </div>
                <div class="topico" id="t4">
                    <b>Questão 04</b><br></br>
                    Menor nota:<br></br>
                    Maior nota:<br></br>
                    Média:
                </div>
                <div class="topico" id="t5">
                    <b>Questão 05</b><br></br> 
                    Menor nota:<br></br>
                    Maior nota:<br></br>
                    Média:
                </div>
                <div class="topico" id="t6">
                    <b>Total de avaliações:</b><br></br> 
                    <b>Média final:</b>  
                </div>
            </div>
            <div className="botaofechar">
                <button type="button" className="btn btn-success" onClick={relatorio}>Fechar</button>
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default RelatorioFinal;