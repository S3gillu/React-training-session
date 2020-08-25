import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Home from './Views/Home';
import About from './Views/About';
import Services from './Views/Services';


class App extends Component {

  render() {
    return (
      <>
         <Router>
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/services" component={Services} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
