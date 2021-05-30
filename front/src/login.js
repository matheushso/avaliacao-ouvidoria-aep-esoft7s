import React, { useState } from 'react'
import Logo from './img/Logo.png'
import './style.css'

const Login = () => {

    const [usuario, setUsuario]=useState("");
    const [senha, setSenha]=useState("");

    function login() {
        console.warn(usuario, senha)
        let result = fetch(`localhost:8080/login?cpf${usuario}?senha${senha}`, {
            method: "GET",
        });

    }

    return (
        <div>
            <div className="logo-pmm section">
                <img id="logo-login" src={Logo}  alt="ouvidoria156"></img>
                <h1 className="description-login" >BEM-VINDO A INTRANET</h1>
                <input className="mb-3 form-control" type="text" id="input-usuario" placeholder="Usuário"
                onChange={(usuario)=>setUsuario((usuario.target.value))}></input>
                <input className="mb-3 form-control" type="text" id="input-senha" placeholder="Senha" 
                onChange={(senha)=>setSenha((senha.target.value))}></input>
                <button onClick={login} className="botaoiniciar btn btn-success" type="button">Fazer login</button>
            </div>
        </div>
    )
}

export default Login;