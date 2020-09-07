import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Home from './Views/Home';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index';

import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

class App extends Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact={true} path="/home" component={Home} />
              <Redirect to="/home" />
            </Switch>
          </Router>
        </Provider>
      </>
    )
  }
}

export default App;
