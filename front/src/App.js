import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import Relatorio from './relatorio';
import Formulario from './formulario';
import RelatorioGeral from './relatorioGeral';
import RelatorioIndividual from './relatorioIndividual';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
