import React from 'react'
import { useLocation } from 'react-router'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Formulario = () => {

    const history = useHistory();
    const location = useLocation();
    var protocolo = location.state.protocolo

    async function avaliacao(pergunta, resposta) {
        const result = await axios.put("/avaliacao", {
            protocolo: protocolo,
            pergunta: pergunta,
            resposta: resposta
         });
        console.log(result)
    }

    function finalizar() {
        if (window.confirm("Deseja confirmar?")) {
            history.push('/finalizar');
        }
    }

    return (
        <div className="section-form">

            <div className="head">
                <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                
                <div className="description-form">
                    Avaliação do atendimento <br></br> Ouvidoria 156
                </div>
            </div>


            <div className="description-form">
                <h3>Protocolo: {protocolo}</h3>
            </div>
            

            <div className="formulario">

                <div className="questao" id="questao01">
            
                    Qual o nível de agilidade do atendimento?
                    <div className="bts">
                        <button id="bt1" onClick={() => avaliacao(1,1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => avaliacao(1,2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => avaliacao(1,3)} className="bt" type="submit">3</button>
                        <button id="bt2" onClick={() => avaliacao(1,4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => avaliacao(1,5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => avaliacao(1,6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => avaliacao(1,7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => avaliacao(1,8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => avaliacao(1,9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => avaliacao(1,10)} className="bt" type="submit">10</button>
                    </div>
                </div>

                <div className="questao" id="questao02">
                    Como você avalia a eficiência do atendimento?

                    <div className="bts">
                        <button id="bt1" onClick={() => avaliacao(2,1)} className="bt"  type="submit">1</button>
                        <button id="bt1" onClick={() => avaliacao(2,2)} className="bt" type="submit" >2</button>
                        <button id="bt1" onClick={() => avaliacao(2,3)} className="bt" type="submit" >3</button>
                        <button id="bt2" onClick={() => avaliacao(2,4)} className="bt" type="submit" >4</button>
                        <button id="bt2" onClick={() => avaliacao(2,5)} className="bt" type="submit" >5</button>
                        <button id="bt2" onClick={() => avaliacao(2,6)} className="bt" type="submit" >6</button>
                        <button id="bt2" onClick={() => avaliacao(2,7)} className="bt" type="submit" >7</button>
                        <button id="bt3" onClick={() => avaliacao(2,8)} className="bt" type="submit" >8</button>
                        <button id="bt3" onClick={() => avaliacao(2,9)} className="bt" type="submit" >9</button>
                        <button id="bt3" onClick={() => avaliacao(2,10)} className="bt" type="submit">10</button>
                    </div>
                </div>

                <div className="questao" id="questao03">
                    O quão disponível estavam nossos canais de atendimento?
                    <div className="bts">
                        <button id="bt1" onClick={() => avaliacao(3,1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => avaliacao(3,2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => avaliacao(3,3)} className="bt" type="submit">3</button>
                        <button id="bt2" onClick={() => avaliacao(3,4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => avaliacao(3,5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => avaliacao(3,6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => avaliacao(3,7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => avaliacao(3,8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => avaliacao(3,9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => avaliacao(3,10)} className="bt" type="submit">10</button>
                    </div>
                </div>

                <div className="questao" id="questao04">
                    O quão acessível estão nossos canais de atendimento?

                    <div className="bts">
                        <button id="bt1" onClick={() => avaliacao(4,1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => avaliacao(4,2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => avaliacao(4,3)} className="bt" type="submit">3</button>
                        <button id="bt2" onClick={() => avaliacao(4,4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => avaliacao(4,5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => avaliacao(4,6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => avaliacao(4,7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => avaliacao(4,8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => avaliacao(4,9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => avaliacao(4,10)} className="bt" type="submit">10</button>
                    </div>
                </div>

                <div className="questao" id="questao05">
                    De modo geral como você avalia o atendimento?
                    <div className="bts">
                        <button id="bt1" onClick={() => avaliacao(5,1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => avaliacao(5,2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => avaliacao(5,3)} className="bt" type="submit">3</button>
                        <button id="bt2" onClick={() => avaliacao(5,4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => avaliacao(5,5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => avaliacao(5,6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => avaliacao(5,7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => avaliacao(5,8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => avaliacao(5,9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => avaliacao(5,10)} className="bt" type="submit">10</button>
                    </div>
                </div>
                
                <div className="botaofinalizar">
                    <button type="button" className="btn btn-success" onClick={finalizar}>Finalizar avaliação</button>
                </div>
            
                
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default Formulario;