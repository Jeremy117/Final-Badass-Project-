import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./mainview";

import services from "../../services";

const mapStateToProps = state => ({
  appName: state.appName,
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends Component {
  componentDidMount() {
    this.props.onLoad(services.Articles.all());
  }
  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <MainView />
            <div className="col-md-3">
              <div className="sidebar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
