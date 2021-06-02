import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Teste from './teste'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/teste">
            <Teste></Teste>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
