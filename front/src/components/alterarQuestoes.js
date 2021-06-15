import React from 'react'
import Logo from '../img/Logo.png'
import '../style.css'
import { Component } from 'react'

class AlterarQuestoes extends Component{
    
    //const AlterarQuestoes = () => {
    render(){
        return (

            <div className="section-form">

                <div className="head">
                    <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                    
                    <div className="description-form">
                        Avaliação do atendimento <br></br> Ouvidoria 156
                    </div>
                </div>

            
                <div className="alterarQuestoes">
                    <div id="alterarQuestoes">
                     Qual questão você deseja alterar?
                    </div>
                </div>
                 

             

                    <script src="script.js"></script>
               
            </div>
        )
     };        
}


export default AlterarQuestoes;