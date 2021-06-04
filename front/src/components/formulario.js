import React from 'react'
import Logo from '../img/Logo.png'
import '../style.css'

const Formulario = () => {

    return (
        <div class="section-form">

            <div class="head">
                <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                
                <div className="description-form">
                    Avaliação do atendimento <br></br> Ouvidoria 156
                </div>
            </div>

            <div class="formulario">

                <div class="questao" id="questao01">
                    O quanto avalia a rapidez do atendimento?

                    <div class="bts">
                        <button class="bt" id="bt1" type="submit">1</button>
                        <button class="bt" type="submit" id="bt1">2</button>
                        <button class="bt" type="submit" id="bt1">3</button>
                        <button class="bt" type="submit" id="bt1">4</button>
                        <button class="bt" type="submit" id="bt2">5</button>
                        <button class="bt" type="submit" id="bt2">6</button>
                        <button class="bt" type="submit" id="bt2">7</button>
                        <button class="bt" type="submit" id="bt3">8</button>
                        <button class="bt" type="submit" id="bt3">9</button>
                        <button class="bt" type="submit" id="bt3">10</button>
                
                    </div>

                </div>

                <div class="questao" id="questao02">
                    O quanto avalia a qualidade do atendimento?

                    <div class="bts">
                        <button class="bt" id="bt1" type="submit">1</button>
                        <button class="bt" type="submit" id="bt1">2</button>
                        <button class="bt" type="submit" id="bt1">3</button>
                        <button class="bt" type="submit" id="bt1">4</button>
                        <button class="bt" type="submit" id="bt2">5</button>
                        <button class="bt" type="submit" id="bt2">6</button>
                        <button class="bt" type="submit" id="bt2">7</button>
                        <button class="bt" type="submit" id="bt3">8</button>
                        <button class="bt" type="submit" id="bt3">9</button>
                        <button class="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div class="questao" id="questao03">
                    O quanto avalia a disposição do atendente?

                    <div class="bts">
                        <button class="bt" id="bt1" type="submit">1</button>
                        <button class="bt" type="submit" id="bt1">2</button>
                        <button class="bt" type="submit" id="bt1">3</button>
                        <button class="bt" type="submit" id="bt1">4</button>
                        <button class="bt" type="submit" id="bt2">5</button>
                        <button class="bt" type="submit" id="bt2">6</button>
                        <button class="bt" type="submit" id="bt2">7</button>
                        <button class="bt" type="submit" id="bt3">8</button>
                        <button class="bt" type="submit" id="bt3">9</button>
                        <button class="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div class="questao" id="questao04">
                    O quanto avalia a facilidade de contato?

                    <div class="bts">
                        <button class="bt" id="bt1" type="submit">1</button>
                        <button class="bt" type="submit" id="bt1">2</button>
                        <button class="bt" type="submit" id="bt1">3</button>
                        <button class="bt" type="submit" id="bt1">4</button>
                        <button class="bt" type="submit" id="bt2">5</button>
                        <button class="bt" type="submit" id="bt2">6</button>
                        <button class="bt" type="submit" id="bt2">7</button>
                        <button class="bt" type="submit" id="bt3">8</button>
                        <button class="bt" type="submit" id="bt3">9</button>
                        <button class="bt" type="submit" id="bt3">10</button>
                
                    </div>
                </div>

                <div class="questao" id="questao05">
                    O quanto avalia o atendimento em modo geral?

                    <div class="bts">
                        <button class="bt" id="bt1" type="submit">1</button>
                        <button class="bt" type="submit" id="bt1">2</button>
                        <button class="bt" type="submit" id="bt1">3</button>
                        <button class="bt" type="submit" id="bt1">4</button>
                        <button class="bt" type="submit" id="bt2">5</button>
                        <button class="bt" type="submit" id="bt2">6</button>
                        <button class="bt" type="submit" id="bt2">7</button>
                        <button class="bt" type="submit" id="bt3">8</button>
                        <button class="bt" type="submit" id="bt3">9</button>
                        <button class="bt" type="submit" id="bt3">10</button>
                
                    </div>

                </div>
                
                <div class="botaofinalizar">
                    <button type="button" class="btn btn-success">Finalizar avaliação</button>
                </div>
            
                
            </div>
            <script src="script.js"></script>

        </div>
    )
}

export default Formulario;