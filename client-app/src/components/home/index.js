import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";
// import "./Home.css";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  appName: state.appName
});

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Huddle A Team Management Site</h2>
          <p>Organize your team and follow your favorite teams!</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More!</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper" />
        </Row>
      </Grid>
    );
  }
}

// export default connect(mapStateToProps)(Home);

//previous version
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import MainView from "./mainview";
// import services from "../../services";

// import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";

// const mapStateToProps = state => ({
//   appName: state.appName,
//   articles: state.articles
// });

// const mapDispatchToProps = dispatch => ({
//   onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
// });

// class Home extends Component {
//   componentDidMount() {
//     this.props.onLoad(services.Articles.all());
//   }
//   render() {
//     return (
//       <div className="home-page">
//         <div className="container page">
//           <div className="row">
//             <MainView />
//           </div>
//           <div className="row">
//             <Grid>
//               <Jumbotron>
//                 <h2>Welcome to Huddle A Team Management Site</h2>
//                 <p>Organize your team and follow your favorite teams!</p>
//               </Jumbotron>
//               <Row className="show-grid text-center">
//                 <Col xs={12} sm={4} className="person-wrapper" />
//               </Row>
//             </Grid>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
