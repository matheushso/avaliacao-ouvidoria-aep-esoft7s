import React from 'react'
import { useHistory } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { RetornaAutenticacao } from './components/login'

//const PrivateRoute = ({...rest}) => {
    //<PrivateRoute {...rest} render={props => (
      //Autenticado()
      //? <Route { ...props}/>
      //: <Redirect to = "/login"/>
    //)}/>
  //}

const privateRoute = props => RetornaAutenticacao()
? <Route { ...props}/>
: <Redirect to = "/login"/>

export default privateRoute;