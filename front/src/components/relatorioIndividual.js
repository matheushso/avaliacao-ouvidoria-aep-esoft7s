import Logo from '../img/Logo.png'
import '../style.css'
import React, { useState } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const RelatorioIndividual = () => {

    const history = useHistory();

    function relatorio() {
        history.push('/relatorio');
    }

    function relatorioFinal() {
        history.push('/relatorioFinal');
    }

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

                <br/>
                <div class="botao-gerar">
                    <Button color="danger" onClick={relatorio}>Voltar</Button>{' '}
                    <button type="button" class="btn btn-success"onClick={relatorioFinal}>Gerar relatório</button>
                </div> 
            </div>
        </div>
    )
}

export default RelatorioIndividual;