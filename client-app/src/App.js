//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import "./App.css";
import React, { Component } from "react";
import Home from "./Pages/Home";
import signUp from "./Pages/Login/signUp";
import About from "./Pages/About";
import Register from "./Pages/Login/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="container">
            <ul>
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/Pages/Login/signUp">SignUp</Link>
              </div>
              <div>
                <Link to="/Pages/About">About</Link>
              </div>
              <div>
                <Link to="/Pages/Login/Register">Register</Link>
              </div>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Pages/Login/signUp" component={signUp} />
              <Route path="/Pages/About" component={About} />
              <Route path="/Pages/Login/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;