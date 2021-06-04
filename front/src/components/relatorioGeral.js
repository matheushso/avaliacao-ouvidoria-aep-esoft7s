import Logo from '../img/Logo.png'
import '../style.css'

const RelatorioGeral = () => {

    return (
        <div class="section">
            <div class="logo">
                <img id="logo-admin" src={Logo}  alt="ouvidoria156"></img>

                <div class="description-admin">
                    Geração de relatórios
                </div>
            </div>
            <div class="section-data">
                Selecione o intervalo de data:<br></br> <br></br>
                <p>Inicio: <input type="date" id="calendario" /></p>

                <p>Fim: <input type="date" id="calendario2" /></p>

                <div class="botao-gerar">
                    <button type="button" class="btn btn-success">Gerar relatório</button>
                </div>
        
            </div>
        </div>
    )
}

export default RelatorioGeral;