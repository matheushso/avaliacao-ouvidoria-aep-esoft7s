import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../img/logo-login.png'
import Logo from '../img/Logo.png'
import '../style.css'

const Home = () => {

    const history = useHistory();
    const [protocolo, setProtocolo]= useState("");

    function login() {
        history.push('/login');
    }

    //Fazer validação caso protocolo vazio/espaço em branco
    function avaliacao() {
        if (protocolo != "") {
            history.push({
                pathname: '/formulario',
                state: {protocolo: protocolo}
            });
        } else {
            alert("Protocolo inválido!")
        }
    }

    return (
        <div className="logo-pmm section">
            <img id="icone-login" onClick={login} src={Login} alt="login"></img>
            <img id="logo-login" src={Logo}  alt="ouvidoria156"></img>
            <p className="description-login">Avaliação do atendimento Ouvidoria 156</p>
            <input className="mb-3 form-control" type="text" id="input-usuario" placeholder="Insira o protocolo de atendimento"
            onChange={(p)=>setProtocolo((p.target.value.split(" ").join("")))}></input>
            <button onClick={avaliacao} className="botaoiniciar btn btn-success" type="button">Iniciar avaliação</button>    
        </div>
    )
}

export default Home;