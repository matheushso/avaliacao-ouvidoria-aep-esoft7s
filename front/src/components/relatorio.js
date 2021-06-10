import { useHistory } from 'react-router-dom'
import Logo from '../img/Logo.png'
import LogoRelatorio from '../img/icon.png'
import '../style.css'

const Relatorio = () => {

    const history = useHistory();

    function relatorioGeral() {
        history.push('/relatorioGeral');
    }

    function relatorioIndividual() {
        history.push('/relatorioIndividual');
    }

    return (
        <div className="section">
            <div className="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>
                <div className="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div className="bts-relatorios">
                <div className="bt-geral">
                    <a href=""><img onClick={relatorioGeral} id="icon" src={LogoRelatorio} alt="relatorioGeral"></img></a>
                    Relatorio Geral
                </div>
                <div className="bt-geral">
                    <a href=""><img onClick={relatorioIndividual} id="icon" src={LogoRelatorio} alt="relatorioIndividual"></img></a>
                    Relatorio <br></br> Individual
                </div>
            </div>
        </div>
    )
}

export default Relatorio;