
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import "./App.css
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from "./components/Home";
import signUp from "./components/signUp";
import Register from "./components/Register";
import NavBar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/components/signUp" component={signUp} />
          <Route path="/components/Register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;