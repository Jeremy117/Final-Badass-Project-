import React, { Component } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { push } from "react-router-redux";
import { connect } from "react-redux";

import { reduxStore } from "../store";
import services from "../services";
import Header from "./Header";
import Home from "./Home";
import ArticleView from "./ArticleView";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings";
import Article from "./Article";
import Editor from "./Editor";

import Dashboard from "./Dashboard";

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: "APP_LOAD", payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: "REDIRECT" })
});

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      reduxStore.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }
  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      //set token with axios
      services.setToken(token);
    }
    //if there is a token, we want to make an HTTP call for current user
    //do we have that set up on the server side yet? idk
    this.props.onLoad(token ? services.Auth.currentUser() : null, token);
  }
  render() {
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articleview" component={ArticleView} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/settings" component={Settings} />
          <Route path="/article/:id" component={Article} />
          <Route path="/editor/:slug" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./CustomNavbar";
// import Register from "./Register";
// import SignIn from "./SignIn";
// import Dashboard from "./Dashboard";
// import Home from "./Home";
// import Article from "./Article";
// import Profile from "./Profile";
// import Footer from "./Footer";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Navbar />
//           <Footer />
//           <Route exact path="/" component={Home} />
//           <Route path="/SignIn" component={SignIn} />
//           <Route path="/Register" component={Register} />
//           <Route path="/Dashboard" component={Dashboard} />
//           <Route path="/Article" component={Article} />
//           <Route path="/Profile" component={Profile} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
