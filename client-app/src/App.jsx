import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/CustomNavbar";
import Register from "./components/Register";
import signUp from "./components/signUp";
import Dashboard from "./components/Dashboard";
import Home from "./components/home/index.js";
import Article from "./components/article/index.js";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/components/signUp" component={signUp} />
          <Route path="/components/Register" component={Register} />
          <Route path="/components/Dashboard" component={Dashboard} />
          <Route path="/components/article" component={Article} />
          <Route path="/components/Profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
