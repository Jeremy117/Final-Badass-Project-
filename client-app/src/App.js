//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import "./App.css";
import React, { Component } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";

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
                <Link to="/Pages/Login">Login</Link>
              </div>
              <div>
                <Link to="/Pages/About">About</Link>
              </div>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Pages/Login" component={Login} />
              <Route path="/Pages/About" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;