import React, { Component } from 'react';
import axios from 'axios';

class testeRelatorio extends Component {

  state = {
    listar: [],
  }

  async componentDidMount() {
    const response = await axios.get('/avaliacao');

    this.setState({ listar: response.data });
  }

  render() {

    const { listar } = this.state;

    return (
      <div className="section">
        <h1>Listar:</h1>
        {listar.map(lista => (
            <h2>
              <h4>Protocolo: {lista.protocolo}</h4>
              <br/>
              <h4>Pergunta: {lista.pergunta}</h4>
              <br/>
              <h4>Resposta: {lista.resposta}</h4>
            </h2>
        ))}
      </div>
    );
  };
};

export default testeRelatorio;