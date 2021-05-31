import React, { useState } from 'react'
import api from './api';
//import { useHistory } from 'react-router-dom'
import Logo from './img/Logo.png'
import './style.css'

const Login = () => {

    const [usuario, setUsuario]=useState("");
    const [senha, setSenha]=useState("");
    //const history = useHistory();

    async function login() {
        console.warn(usuario, senha)
        const result= await api.get("/login", {
            params: {
                cpf: usuario,
                senha: senha
            }
        });
    }

    return (
        <div>
            <div className="logo-pmm section">
                <img id="logo-login" src={Logo}  alt="ouvidoria156"></img>
                <h1 className="description-login" >BEM-VINDO A INTRANET</h1>
                <input className="mb-3 form-control" type="text" id="input-usuario" placeholder="Usuário"
                onChange={(u)=>setUsuario((u.target.value))}></input>
                <input className="mb-3 form-control" type="text" id="input-senha" placeholder="Senha" 
                onChange={(s)=>setSenha((s.target.value))}></input>
                <button onClick={login} className="botaoiniciar btn btn-success" type="button">Fazer login</button>
            </div>
        </div>
    )
}

export default Login;