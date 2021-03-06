import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { reduxStore } from "../store";
import services from "../services";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings";
import Article from "./Article";
import Editor from "./Editor";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Roster from "./Roster";
import DontGo from "./Settings/DontGo";
import Teams from "./Teams";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";
import Addplayer from "./Addplayer";
import teamstable from "./Teamstable";

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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/roster/:team" component={Roster} />
            <Route path="/settings" component={Settings} />
            <Route path="/article/:id" component={Article} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/DontGo" component={DontGo} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/teams/:email" component={Teams} />
            <Route path="/Addplayer" component={Addplayer} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
