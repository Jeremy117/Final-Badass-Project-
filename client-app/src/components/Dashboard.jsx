import React, { Component } from "react";
import "./Dashboard.css";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  appName: state.appName
});

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container2">
          <h1 /> Dashboard
        </div>
        <ul className="container1">
          <h2 />calendar
          <h2 />newsfeed
          <h2 />roster
        </ul>
        <ul className="container1">
          <div />calendar code
          <div />newsfeed code
          <div />roster code
        </ul>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
