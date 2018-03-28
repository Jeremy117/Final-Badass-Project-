import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./mainview";
import services from "../../services";

import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";

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
          </div>
          <div className="row">
            <Grid>
              <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper" />
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// import React, { Component } from "react";
// import { connect } from "react-redux";

// const mapStateToProps = state => ({
//   appName: state.appName
// });

// class Article extends Component {
//   render() {
//     return <div>Article</div>;
//   }
// }

// export default connect(mapStateToProps)(Article);
