import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

//views
import LandingPage from './Pages/LandingPage/LandingPage'
import QuemSomos from './Pages/QuemSomos/QuemSomos'
import Index from './Pages/Index/Index'

//export function default
export default function Routes() 
{

  return(

      <Router>

        <ReactNotification />

        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/servicos" component={LandingPage}/>
          <Route exact path="/quem-somos" component={QuemSomos}/>
        </Switch>

      </Router>

    )

}