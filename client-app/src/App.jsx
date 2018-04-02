import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/CustomNavbar";
import Register from "./components/Registerform.jsx";
import signIn from "./components/signIn";
import Dashboard from "./components/Dashboard";
import Home from "./components/home/index.js";
import Article from "./components/article/index.js";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Footer />
          <Route exact path="/" component={Home} />
          <Route path="/components/signIn" component={signIn} />
          <Route path="/components/Registerform" component={Register} />
          <Route path="/components/Dashboard" component={Dashboard} />
          <Route path="/components/Profile" component={Profile} />
          <Route path="/components/article" component={Article} />
          <Route path="/components/Profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
