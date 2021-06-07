import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';

const Formulario = () => {

    const location = useLocation();
    var resposta = null;
    
    var protocolo = location.state.protocolo

    console.log(protocolo)

    async function login(props) {
        const result = await axios.post("/avaliacao", {
                protocolo: protocolo,
                resposta: 2,
                setor: "teste"
        });
        console.log(result)
    }


    return (
        <div className="section-form">

            <div className="head">
                <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                
                <div className="description-form">
                    Avaliação do atendimento <br></br> Ouvidoria 156
                </div>
            </div>

            <div>
                Protocolo: {protocolo}
            </div>

            <div className="formulario">

                <div className="questao" id="questao01">
                    O quanto avalia a rapidez do atendimento?

                    <div className="bts">
                        <button onClick={login} className="bt" id="bt1" type="submit">1</button>
                        <button className="bt" type="submit" id="bt1">2</button>
                        <button className="bt" type="submit" id="bt1">3</button>
                        <button className="bt" type="submit" id="bt1">4</button>
                        <button className="bt" type="submit" id="bt2">5</button>
                        <button className="bt" type="submit" id="bt2">6</button>
                        <button className="bt" type="submit" id="bt2">7</button>
                        <button className="bt" type="submit" id="bt3">8</button>
                        <button className="bt" type="submit" id="bt3">9</button>
                        <button className="bt" type="submit" id="bt3">10</button>
                    </div>

                </div>

                <div className="questao" id="questao02">
                    O quanto avalia a qualidade do atendimento?

                    <div className="bts">
                        <button className="bt" id="bt1" type="submit">1</button>
                        <button className="bt" type="submit" id="bt1">2</button>
                        <button className="bt" type="submit" id="bt1">3</button>
                        <button className="bt" type="submit" id="bt1">4</button>
                        <button className="bt" type="submit" id="bt2">5</button>
                        <button className="bt" type="submit" id="bt2">6</button>
                        <button className="bt" type="submit" id="bt2">7</button>
                        <button className="bt" type="submit" id="bt3">8</button>
                        <button className="bt" type="submit" id="bt3">9</button>
                        <button className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao03">
                    O quanto avalia a disposição do atendente?

                    <div className="bts">
                        <button className="bt" id="bt1" type="submit">1</button>
                        <button className="bt" type="submit" id="bt1">2</button>
                        <button className="bt" type="submit" id="bt1">3</button>
                        <button className="bt" type="submit" id="bt1">4</button>
                        <button className="bt" type="submit" id="bt2">5</button>
                        <button className="bt" type="submit" id="bt2">6</button>
                        <button className="bt" type="submit" id="bt2">7</button>
                        <button className="bt" type="submit" id="bt3">8</button>
                        <button className="bt" type="submit" id="bt3">9</button>
                        <button className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao04">
                    O quanto avalia a facilidade de contato?

                    <div className="bts">
                        <button className="bt" id="bt1" type="submit">1</button>
                        <button className="bt" type="submit" id="bt1">2</button>
                        <button className="bt" type="submit" id="bt1">3</button>
                        <button className="bt" type="submit" id="bt1">4</button>
                        <button className="bt" type="submit" id="bt2">5</button>
                        <button className="bt" type="submit" id="bt2">6</button>
                        <button className="bt" type="submit" id="bt2">7</button>
                        <button className="bt" type="submit" id="bt3">8</button>
                        <button className="bt" type="submit" id="bt3">9</button>
                        <button className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao05">
                    O quanto avalia o atendimento em modo geral?

                    <div className="bts">
                        <button className="bt" id="bt1" type="submit">1</button>
                        <button className="bt" type="submit" id="bt1">2</button>
                        <button className="bt" type="submit" id="bt1">3</button>
                        <button className="bt" type="submit" id="bt1">4</button>
                        <button className="bt" type="submit" id="bt2">5</button>
                        <button className="bt" type="submit" id="bt2">6</button>
                        <button className="bt" type="submit" id="bt2">7</button>
                        <button className="bt" type="submit" id="bt3">8</button>
                        <button className="bt" type="submit" id="bt3">9</button>
                        <button className="bt" type="submit" id="bt3">10</button>
                
                    </div>

                </div>
                
                <div className="botaofinalizar">
                    <button type="button" className="btn btn-success">Finalizar avaliação</button>
                </div>
            
                
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default Formulario;