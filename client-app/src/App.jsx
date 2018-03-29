import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/CustomNavbar";
import Register from "./components/Register";
import signIn from "./components/signIn";
import Dashboard from "./components/Dashboard";
import Home from "./components/home/index.js";
import Article from "./components/article/index.js";
import Profile from "./components/Profile.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/components/signIn" component={signIn} />
          <Route path="/components/Register" component={Register} />
          <Route path="/components/Dashboard" component={Dashboard} />
          <Route path="/components/Profile" component={Profile} />
          <Route path="/components/article" component={Article} />
        </div>
      </Router>
    );
  }
}

export default App;
