import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/Login">Login</Link>
          </div>
          <p>
            <h1>HUDDLE</h1>
            <h2 /> MANAGE YOUR SPORTS TEAM
            <div />The sports team management application
            <div />for coaches, parents and players.
          </p>
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
