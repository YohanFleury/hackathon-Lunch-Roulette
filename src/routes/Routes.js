import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Apero from '../pages/Apero';
import Croissantage from '../pages/Croissantage';
import Home from '../pages/Home';
import RouletteLunch from '../roulette/RouletteLunch';

const Routes = () => {
    return (
        
            <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/lunch">
          <RouletteLunch />
        </Route>
        <Route path="/apero">
          <Apero />
        </Route>
        <Route path="/croissantage">
          <Croissantage />
        </Route>
      </Switch>
    </Router>
    )
}

export default Routes
