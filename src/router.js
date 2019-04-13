import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import Loginform from './components/loginform';
import Landingpage from './components/landingpage'
export default class router extends Component {
   
  render() {
    
    return (
      <div>
        <Router>
        <Route path="/" exact component={Loginform} />
        <Route path="/login" exact component={Loginform} />
        <Route path="/landing"  component={Landingpage} />
        </Router>
      </div>
    )
  }
}
