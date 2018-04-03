import React, { Component } from "react";
import { connect } from "react-redux";
import MainView from "./MainView";

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
        <div className="container page">
          <div className="row">
            <MainView articles={this.props.articles} />
            {/* <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";
// import { connect } from "react-redux";
// import "../SignIn";
// import "../Register";

// const mapStateToProps = state => ({
//   appName: state.appName
// });

// export default class Home extends Component {
//   render() {
//     return (
//       <Grid>
//         <Jumbotron>
//           <h2>Welcome to Huddle A Team Management Site</h2>
//           <p>Organize your team and follow your favorite teams!</p>
//           <Link to="/components/signIn">
//             <Button bsStyle="primary">Sign In</Button>
//           </Link>
//           <Link to="/components/Register">
//             <Button bsStyle="primary">Register</Button>
//           </Link>
//         </Jumbotron>
//         <Row className="show-grid text-center">
//           <Col xs={12} sm={4} className="person-wrapper" />
//         </Row>
//       </Grid>
//     );
//   }
// }

// // export default connect(mapStateToProps)(Home);
