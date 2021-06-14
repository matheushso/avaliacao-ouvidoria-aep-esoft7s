import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios';

const Login = () => {

    const formRef = useRef(null)
    const [usuario, setUsuario]= useState("");
    const [senha, setSenha]= useState("");
    const [mensagem, setMensagem] = useState("");
    const history = useHistory();

    async function login() {
        try {
            await axios.get("/login", {
                params: {
                    cpf: usuario,
                    senha: senha
                }
            });
            history.push('/relatorio');
        } 
        catch {
            alert("Usuário ou senha inválidos!")
        }
        
    }

    return (
        <div className="logo-pmm section">
            <img id="logo-login" src={Logo}  alt="ouvidoria156"></img>
            <h1 className="description-login" >BEM-VINDO A INTRANET</h1>
            <input className="mb-3 form-control" type="text" id="input-usuario" placeholder="Usuário"
            onChange={(u)=>setUsuario((u.target.value))}></input>
            <input className="mb-3 form-control" type="password" id="input-senha" placeholder="Senha" 
            onChange={(s)=>setSenha((s.target.value))}></input>
            {mensagem}
            <button onClick={login} className="botaoiniciar btn btn-success" type="button">Fazer login</button>    
        </div>
    )
}

export default Login;