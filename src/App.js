import React from "react";
import "./App.scss";
import {Project} from "./containers/project";
import { Login, Register } from "./containers/login";

import {BrowserRouter as Router,Route,Switch}from "react-router-dom"

import { Homepage } from "./containers/homepage/index";



function App(props) {
  
  return (
  <Router>
    <Switch>
   <Route exact path="/" component={Homepage}></Route>
  <Route path="/project"component={Project}></Route>
  <Route path="/login"component={Login}></Route>
  <Route path="/register"component={Register}></Route>
  </Switch>
  </Router> );
}

export default App;
