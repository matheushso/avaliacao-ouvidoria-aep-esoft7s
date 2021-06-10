import Logo from '../img/Logo.png'
import '../style.css'

const RelatorioIndividual = () => {

    return (
        <div className="section">
            <div className="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>

                <div className="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div className="section-data">
                Selecione o intervalo de data:<br></br><br></br>
                
                <p>Inicio: <input type='date' id='d1' name='d1' min=""/></p>
                <p>Fim: <input type='date' id='d2' name='d2' min=""/></p>

                Selecione o setor de atendimento: <br/><br/>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Setor de atendimento
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Denúncia/Reclamação</a></li>
                    <li><a className="dropdown-item" href="#">Notificação</a></li>
                    <li><a className="dropdown-item" href="#">Solicitação de serviços/descontos</a></li>
                    <li><a className="dropdown-item" href="#">Bem Estar Animal e Castração </a></li>
                    </ul>
                </div>
                <br/>
                <div className="botao-gerar">
                    <button type="button" className="btn btn-success">Gerar relatório</button>
                </div>
        
            </div>
        </div>
    )
}

export default RelatorioIndividual;