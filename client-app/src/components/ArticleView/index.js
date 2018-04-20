import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import "../../css/articlestyle.css";

import services from "../../services";

const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  articles: state.common.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ARTICLES_LOADED", payload })
});

class ArticleView extends Component {
  componentDidMount() {
    const selectedTeam = this.props.currentUser
      ? this.props.currentUser.selectedTeam
      : "";
    this.props.onLoad(services.Articles.all(selectedTeam));
  }

  render() {
    return (
      <div className="home-page">
        <div className="container-page">
          <div className="container-row">
            <MainView articles={this.props.articles} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
