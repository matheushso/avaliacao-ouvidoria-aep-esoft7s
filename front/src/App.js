import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login'
import Relatorio from './components/relatorio';
import Formulario from './components/formulario';
import RelatorioGeral from './components/relatorioGeral';
import RelatorioIndividual from './components/relatorioIndividual';
import TesteRelatorio from './components/testeRelatorio';
import Finalizar from './components/finalizar';
import RelatorioFinal from './components/relatorioFinal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/relatorio">
            <Relatorio></Relatorio>
          </Route>
          <Route exact path="/formulario">
            <Formulario></Formulario>
          </Route>
          <Route exact path="/relatorioGeral">
            <RelatorioGeral></RelatorioGeral>
          </Route>
          <Route exact path="/relatorioIndividual">
            <RelatorioIndividual></RelatorioIndividual>
          </Route>
          <Route exact path="/testeRelatorio">
            <TesteRelatorio></TesteRelatorio>
          </Route>
          <Route exact path="/finalizar">
            <Finalizar></Finalizar>
          </Route>
          <Route exact path="/relatorioFinal">
            <RelatorioFinal></RelatorioFinal>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
