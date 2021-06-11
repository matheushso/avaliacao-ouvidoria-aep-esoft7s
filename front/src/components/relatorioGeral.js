import Logo from '../img/Logo.png'
import '../style.css'
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom'

const RelatorioGeral = () => {

    const history = useHistory();

    function relatorio() {
        history.push('/relatorio');
    }
    
    return (
        <div className="section">
            <div className="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>

                <div className="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div className="section-data">
                Selecione o intervalo de data:<br></br> <br></br>
                <p>Inicio: <input type="date" id="calendario" /></p>

                <p>Fim: <input type="date" id="calendario2" /></p>

                <div className="botao-gerar">
                    <Button color="danger" onClick={relatorio}>Voltar</Button>{' '}
                    <button type="button" className="btn btn-success">Gerar relatório</button>
                </div>
        
            </div>
        </div>
    )
}

export default RelatorioGeral;