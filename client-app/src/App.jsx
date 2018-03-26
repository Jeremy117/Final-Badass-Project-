import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Register from "./components/Register";
import signUp from "./components/signUp";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (


      <Router>
        <div>
          <Navbar />
          <Footer />
          <Route exact path="/" component={Home} />
          <Route path="/components/signUp" component={signUp} />
          <Route path="/components/Register" component={Register} />
          <Route path="/components/Dashboard" component={Dashboard} />


        </div>
      </Router>





    );
  }
}

export default App;
