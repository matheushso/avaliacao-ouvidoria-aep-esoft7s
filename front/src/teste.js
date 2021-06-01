import { useHistory } from 'react-router-dom'

const Teste = () => {
    
    const history = useHistory();
    
    function voltar() {
        history.push('/')
    }

    return (
        <div className="logo-pmm section">
            Hello!!
            <button onClick={voltar} className="botaoiniciar btn btn-success" type="button">Voltar</button>
        </div>
    )
}

export default Teste;