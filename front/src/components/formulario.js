import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';

const Formulario = () => {

    const location = useLocation();
    var protocolo = location.state.protocolo

    async function resposta(pergunta, resposta) {
        const result = await axios.post("/avaliacao", {
            protocolo: protocolo,
            pergunta: pergunta,
            resposta: resposta
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
                        <button id="bt1" onClick={() => resposta(1,1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => resposta(1,2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => resposta(1,3)} className="bt" type="submit">3</button>
                        <button id="bt1" onClick={() => resposta(1,4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => resposta(1,5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => resposta(1,6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => resposta(1,7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => resposta(1,8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => resposta(1,9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => resposta(1,10)} className="bt" type="submit">10</button>
                    </div>

                </div>

                <div className="questao" id="questao02">
                    O quanto avalia a qualidade do atendimento?

                    <div className="bts">
                        <button onClick={() => resposta(2,1)} className="bt" id="bt1" type="submit">1</button>
                        <button onClick={() => resposta(2,2)} className="bt" type="submit" id="bt1">2</button>
                        <button onClick={() => resposta(2,3)} className="bt" type="submit" id="bt1">3</button>
                        <button onClick={() => resposta(2,4)} className="bt" type="submit" id="bt1">4</button>
                        <button onClick={() => resposta(2,5)} className="bt" type="submit" id="bt2">5</button>
                        <button onClick={() => resposta(2,6)} className="bt" type="submit" id="bt2">6</button>
                        <button onClick={() => resposta(2,7)} className="bt" type="submit" id="bt2">7</button>
                        <button onClick={() => resposta(2,8)} className="bt" type="submit" id="bt3">8</button>
                        <button onClick={() => resposta(2,9)} className="bt" type="submit" id="bt3">9</button>
                        <button onClick={() => resposta(2,10)} className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao03">
                    O quanto avalia a disposição do atendente?

                    <div className="bts">
                        <button onClick={() => resposta(3,1)} className="bt" id="bt1" type="submit">1</button>
                        <button onClick={() => resposta(3,2)} className="bt" type="submit" id="bt1">2</button>
                        <button onClick={() => resposta(3,3)} className="bt" type="submit" id="bt1">3</button>
                        <button onClick={() => resposta(3,4)} className="bt" type="submit" id="bt1">4</button>
                        <button onClick={() => resposta(3,5)} className="bt" type="submit" id="bt2">5</button>
                        <button onClick={() => resposta(3,6)} className="bt" type="submit" id="bt2">6</button>
                        <button onClick={() => resposta(3,7)} className="bt" type="submit" id="bt2">7</button>
                        <button onClick={() => resposta(3,8)} className="bt" type="submit" id="bt3">8</button>
                        <button onClick={() => resposta(3,9)} className="bt" type="submit" id="bt3">9</button>
                        <button onClick={() => resposta(3,10)} className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao04">
                    O quanto avalia a facilidade de contato?

                    <div className="bts">
                        <button onClick={() => resposta(4,1)} className="bt" id="bt1" type="submit">1</button>
                        <button onClick={() => resposta(4,2)} className="bt" type="submit" id="bt1">2</button>
                        <button onClick={() => resposta(4,3)} className="bt" type="submit" id="bt1">3</button>
                        <button onClick={() => resposta(4,4)} className="bt" type="submit" id="bt1">4</button>
                        <button onClick={() => resposta(4,5)} className="bt" type="submit" id="bt2">5</button>
                        <button onClick={() => resposta(4,6)} className="bt" type="submit" id="bt2">6</button>
                        <button onClick={() => resposta(4,7)} className="bt" type="submit" id="bt2">7</button>
                        <button onClick={() => resposta(4,8)} className="bt" type="submit" id="bt3">8</button>
                        <button onClick={() => resposta(4,9)} className="bt" type="submit" id="bt3">9</button>
                        <button onClick={() => resposta(4,10)} className="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div className="questao" id="questao05">
                    O quanto avalia o atendimento em modo geral?

                    <div className="bts">
                        <button onClick={() => resposta(5,1)} className="bt" id="bt1" type="submit">1</button>
                        <button onClick={() => resposta(5,2)} className="bt" type="submit" id="bt1">2</button>
                        <button onClick={() => resposta(5,3)} className="bt" type="submit" id="bt1">3</button>
                        <button onClick={() => resposta(5,4)} className="bt" type="submit" id="bt1">4</button>
                        <button onClick={() => resposta(5,5)} className="bt" type="submit" id="bt2">5</button>
                        <button onClick={() => resposta(5,6)} className="bt" type="submit" id="bt2">6</button>
                        <button onClick={() => resposta(5,7)} className="bt" type="submit" id="bt2">7</button>
                        <button onClick={() => resposta(5,8)} className="bt" type="submit" id="bt3">8</button>
                        <button onClick={() => resposta(5,9)} className="bt" type="submit" id="bt3">9</button>
                        <button onClick={() => resposta(5,10)} className="bt" type="submit" id="bt3">10</button>
                
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