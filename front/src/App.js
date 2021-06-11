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
import PrivateRoute from './privateRoute'


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
          <PrivateRoute exact path="/relatorio">
            <Relatorio></Relatorio>
          </PrivateRoute>
          <Route exact path="/formulario">
            <Formulario></Formulario>
          </Route>
          <PrivateRoute exact path="/relatorioGeral">
            <RelatorioGeral></RelatorioGeral>
          </PrivateRoute>
          <PrivateRoute exact path="/relatorioIndividual">
            <RelatorioIndividual></RelatorioIndividual>
          </PrivateRoute>
          <Route exact path="/testeRelatorio">
            <TesteRelatorio></TesteRelatorio>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
