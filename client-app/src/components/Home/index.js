import React, { Component } from "react";
import { connect } from "react-redux";
import services from "../../services";
import mainImage from "../../images/prototype-home-desktop.jpg";

const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.home.articles
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
      <div className="home-page-blue">
        <div>
          <img src={mainImage} width={1440} alt="alt" /> <div className="row" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
