import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./CustomNavbar";
import Register from "./Register";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Article from "./Article";
import Profile from "./Profile";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Footer />
          <Route exact path="/" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Register" component={Register} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Article" component={Article} />
          <Route path="/Profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
