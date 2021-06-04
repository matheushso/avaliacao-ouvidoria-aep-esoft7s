import Logo from './img/Logo.png'
import { useHistory } from 'react-router-dom'
import LogoRelatorio from './img/icon.png'
import './style.css'

const Relatorio = () => {

    const history = useHistory();

    function relatorioGeral() {
        history.push('/relatorioGeral');
    }

    function relatorioIndividual() {
        history.push('/relatorioIndividual');
    }

    return (
        <div class="section">
            <div class="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>
                <div class="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div class="bts-relatorios">
                <div class="bt-geral">
                    <a href=""><img onClick={relatorioGeral} id="icon" src={LogoRelatorio} alt="relatorioGeral"></img></a>
                    Relatorio Geral
                </div>
                <div class="bt-geral">
                    <a href=""><img onClick={relatorioIndividual} id="icon" src={LogoRelatorio} alt="relatorioIndividual"></img></a>
                    Relatorio <br></br> Individual
                </div>
            </div>
        </div>
    )
}

export default Relatorio;