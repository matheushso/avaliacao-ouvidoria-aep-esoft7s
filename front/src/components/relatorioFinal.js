import { Component } from 'react'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';

/* function Relatorio() {
    const history = useHistory();

    history.push("/relatorio");
} */

class RelatorioFinal extends Component {

    state = {
        listar: [],
    };
      
    async componentDidMount() {
        const response = await axios.get('/relatorio');
      
        this.setState({ listar: response.data });
    }
      
    render() {

        const { listar } = this.state

        return (
            <div className="section-form-relatorioFinal">
    
                <div className="head">
                    <img id="logo-form" src={Logo} alt="ouvidoria156"></img>
                    
                    <div className="description-form" id="desc-relatorio">
                        Relatorio Final <br></br>
                    </div>
                </div>

                {listar.map(lista => (
                    <div className="formulario-final">
                        <div class="topico" id="t1">
                            <b>Questão {lista.pergunta}</b><br></br> 
                            Menor nota: {lista.menorResposta} <br></br>
                            Maior nota: {lista.maiorResposta} <br></br>
                            Média: {lista.mediaTotal}
                        </div>
                    </div>
                ))}

                <div className="botaofechar">
                    <button type="button" className="btn btn-success">Fechar</button>
                </div>
                <script src="script.js"></script>
    
            </div>
        )
    };
}

export default RelatorioFinal;