import React, { Component } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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
    //do we have that set up on the server side yet?
    this.props.onLoad(token ? services.Auth.currentUser() : null, token);
  }
  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
