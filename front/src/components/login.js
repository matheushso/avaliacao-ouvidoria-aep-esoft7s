import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../img/Logo.png'
import '../style.css'
import axios from 'axios'
import privateRoute from '../privateRoute'

export const Autenticando = async (usuario, senha) => {
    var autenticado = false;

    try {
        await axios.get("/login", {
            params: {
                cpf: usuario,
                senha: senha
            }
        });
        autenticado = true;
        return(autenticado)
    } 
    catch {
        alert("Usuário ou senha inválido!")
        return(autenticado)
    }
}

export const RetornaAutenticacao = async (autenticado) => {
    if (autenticado === true) {
        return true;
    } else {
        return false;
    }

}


const Login = () => {

    const [usuario, setUsuario]= useState("");
    const [senha, setSenha]= useState("");
    const history = useHistory();

    async function login() {
        const autenticado = await Autenticando(usuario, senha)
        RetornaAutenticacao(autenticado)
        console.log(autenticado)
        if (autenticado === true) {
            history.push('/relatorio')
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
            <button onClick={login} className="botaoiniciar btn btn-success" type="button">Fazer login</button>
        </div> 
    )
}

export default Login;