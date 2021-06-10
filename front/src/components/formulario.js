import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';
import { Button } from 'reactstrap';




const Formulario = () => {

    const location = useLocation();
    var protocolo = location.state.protocolo

    async function resposta(resposta) {
        const result = await axios.post("/avaliacao", {
            protocolo: protocolo,
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

                        <Button outline color="danger" id="b1" onclick="myFunction()">1 </Button>{' '}
                        <Button outline color="danger" id="b1">2</Button>{' '}
                        <Button outline color="danger" id="b1">3</Button>{' '}
                        <Button outline color="danger" id="b1">4</Button>{' '}
                        <Button outline color="warning" id="b2">5</Button>{' '}
                        <Button outline color="warning" id="b2">6</Button>{' '}
                        <Button outline color="warning" id="b2">7</Button>{' '}
                        <Button outline color="success" id="b3">8</Button>{' '}
                        <Button outline color="success" id="b3">9</Button>{' '}
                        <Button outline color="success" id="b3">10</Button>{' '}

                       {/*  <button id="bt1" onClick={() => resposta(1)} className="bt" type="submit">1</button>
                        <button id="bt1" onClick={() => resposta(2)} className="bt" type="submit">2</button>
                        <button id="bt1" onClick={() => resposta(3)} className="bt" type="submit">3</button>
                        <button id="bt1" onClick={() => resposta(4)} className="bt" type="submit">4</button>
                        <button id="bt2" onClick={() => resposta(5)} className="bt" type="submit">5</button>
                        <button id="bt2" onClick={() => resposta(6)} className="bt" type="submit">6</button>
                        <button id="bt2" onClick={() => resposta(7)} className="bt" type="submit">7</button>
                        <button id="bt3" onClick={() => resposta(8)} className="bt" type="submit">8</button>
                        <button id="bt3" onClick={() => resposta(9)} className="bt" type="submit">9</button>
                        <button id="bt3" onClick={() => resposta(10)} className="bt" type="submit">10</button> */}

                    </div>
      
                </div>

                <div className="questao" id="questao02">
                    O quanto avalia a qualidade do atendimento? 

                    <div className="bts">

                        <Button outline color="danger" id="b1">1</Button>{' '}
                        <Button outline color="danger" id="b1">2</Button>{' '}
                        <Button outline color="danger" id="b1">3</Button>{' '}
                        <Button outline color="danger" id="b1">4</Button>{' '}
                        <Button outline color="warning" id="b2">5</Button>{' '}
                        <Button outline color="warning" id="b2">6</Button>{' '}
                        <Button outline color="warning" id="b2">7</Button>{' '}
                        <Button outline color="success" id="b3">8</Button>{' '}
                        <Button outline color="success" id="b3">9</Button>{' '}
                        <Button outline color="success" id="b3">10</Button>{' '}

                
                    </div>
                </div>

                <div className="questao" id="questao03">
                    O quanto avalia a disposição do atendente?

                    <div className="bts">
                    <Button outline color="danger" id="b1">1</Button>{' '}
                        <Button outline color="danger" id="b1">2</Button>{' '}
                        <Button outline color="danger" id="b1">3</Button>{' '}
                        <Button outline color="danger" id="b1">4</Button>{' '}
                        <Button outline color="warning" id="b2">5</Button>{' '}
                        <Button outline color="warning" id="b2">6</Button>{' '}
                        <Button outline color="warning" id="b2">7</Button>{' '}
                        <Button outline color="success" id="b3">8</Button>{' '}
                        <Button outline color="success" id="b3">9</Button>{' '}
                        <Button outline color="success" id="b3">10</Button>{' '}

                        <button id="btn-2" class="btn"></button>
                    </div>
                </div>

                <div className="questao" id="questao04">
                    O quanto avalia a facilidade de contato?

                    <div className="bts">
                        <Button outline color="danger" id="b1">1</Button>{' '}
                        <Button outline color="danger" id="b1">2</Button>{' '}
                        <Button outline color="danger" id="b1">3</Button>{' '}
                        <Button outline color="danger" id="b1">4</Button>{' '}
                        <Button outline color="warning" id="b2">5</Button>{' '}
                        <Button outline color="warning" id="b2">6</Button>{' '}
                        <Button outline color="warning" id="b2">7</Button>{' '}
                        <Button outline color="success" id="b3">8</Button>{' '}
                        <Button outline color="success" id="b3">9</Button>{' '}
                        <Button outline color="success" id="b3">10</Button>{' '}
                        
                        <button id="btn-3" class="btn"></button>
                    </div>
                </div>

                <div className="questao" id="questao05">
                    O quanto avalia o atendimento em modo geral?

                    <div className="bts">
                    <Button outline color="danger" id="b1">1</Button>{' '}
                        <Button outline color="danger" id="b1">2</Button>{' '}
                        <Button outline color="danger" id="b1">3</Button>{' '}
                        <Button outline color="danger" id="b1">4</Button>{' '}
                        <Button outline color="warning" id="b2">5</Button>{' '}
                        <Button outline color="warning" id="b2">6</Button>{' '}
                        <Button outline color="warning" id="b2">7</Button>{' '}
                        <Button outline color="success" id="b3">8</Button>{' '}
                        <Button outline color="success" id="b3">9</Button>{' '}
                        <Button outline color="success" id="b3">10</Button>{' '}
                        
                        <button id="btn-4" class="btn"></button>
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