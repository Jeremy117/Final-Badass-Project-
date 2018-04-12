import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";
import "../../css/articlestyle.css";

import services from "../../services";

const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.home.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class ArticleView extends Component {
  componentDidMount() {
    this.props.onLoad(services.Articles.all());
  }

  render() {
    return (
      <div className="home-page">
        <div className="container-page">
          <div className="container-row">
            <MainView articles={this.props.articles} />
            <i class="material-icons">sentiment_very_satisfied</i>
            <i class="material-icons">bubble_chart</i>
            <i class="material-icons">adb</i>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
