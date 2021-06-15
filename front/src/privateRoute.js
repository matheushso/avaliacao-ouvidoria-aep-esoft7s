/* import React from 'react'
import { useHistory } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { Autenticando, RetornaAutenticacao } from './components/login' */

//const PrivateRoute = ({...rest}) => {
    //<PrivateRoute {...rest} render={props => (
      //Autenticado()
      //? <Route { ...props}/>
      //: <Redirect to = "/login"/>
    //)}/>
  //}

/*   const PrivateRoute = ({ exact, strict, path, ...rest }) => (
    <Route
      exact={exact}
      strict={strict}
      path={path}
      render={props =>
        Autenticando() ? (
          <Route {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  ); */


/* const privateRoute = props => RetornaAutenticacao()
? <Route { ...props}/>
: <Redirect to = "/login"/> */

//export default PrivateRoute;