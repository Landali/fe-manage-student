import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignUp from "./containers/signup";
import Layout from './containers/layout'
class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
      <div className="App">
       
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Layout} />
              <Route exact path='/sign-up' component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    )
  }
}

export default App;
