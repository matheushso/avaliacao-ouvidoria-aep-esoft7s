import Logo from '../img/Logo.png'
import '../style.css'
import React, { useState } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

const RelatorioIndividual = () => {

    return (
        <div class="section">
            <div class="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>

                <div class="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div class="section-data">
                Selecione o intervalo de data:<br></br><br></br>
                
                <p>Inicio: <input type='date' id='d1' name='d1' min=""/></p>
                <p>Fim: <input type='date' id='d2' name='d2' min=""/></p>

                Selecione o setor de atendimento: <br/><br/>       

                <UncontrolledButtonDropdown>
                <DropdownToggle caret>
                    Setor de atendimento
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Denúncia/Reclamação</DropdownItem>
                    <DropdownItem>Notificação</DropdownItem>
                    <DropdownItem>Solicitação de serviços/descontos</DropdownItem>
                    <DropdownItem>Bem Estar Animal e Castração</DropdownItem>
                </DropdownMenu>
                </UncontrolledButtonDropdown>   

                {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Setor de atendimento
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Denúncia/Reclamação</a></li>
                    <li><a class="dropdown-item" href="#">Notificação</a></li>
                    <li><a class="dropdown-item" href="#">Solicitação de serviços/descontos</a></li>
                    <li><a class="dropdown-item" href="#">Bem Estar Animal e Castração </a></li>
                    </ul>
                </div> */}

                <br/>
                <div class="botao-gerar">
                    <button type="button" class="btn btn-success">Gerar relatório</button>
                </div> 
            </div>
        </div>
    )
}

export default RelatorioIndividual;