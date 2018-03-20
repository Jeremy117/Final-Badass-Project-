
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import "./App.css
import React, { Component } from "react";
import Home from "./components/Home";
import signUp from "./components/signUp";
import About from "./components/About";
import Register from "./components/Register";

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
                <Link to="/components/signUp">SignUp</Link>
              </div>
              <div>
                <Link to="/components/About">About</Link>
              </div>
              <div>
                <Link to="/components/Register">Register</Link>
              </div>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/components/signUp" component={signUp} />
              <Route path="/components/About" component={About} />
              <Route path="/components/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;