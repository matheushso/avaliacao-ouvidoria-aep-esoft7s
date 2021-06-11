import React from 'react'
import { Route, Redirect } from 'react-router'


const autenticado = () => false

const privateRoute = props => autenticado() 
? <Route { ...props}/>
: <Redirect to = "/login"/>

export default privateRoute