import React, { Component } from "react";
import "./Dashboard.css";
import { Grid, Row, Col } from "react-bootstrap";

const mapStateToProps = state => ({
  appName: state.appName
});

const arrTeams = ["alvaro", "jennifer", "jeremy", "thomas", "jacob", "adam"];
const listArr = arrTeams.map(arrTeams => <div>{arrTeams}</div>);

const dummySentences = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "Donec hendrerit tempor tellus.",
  "Donec pretium posuere tellus.",
  "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Nulla posuere.",
  "Donec vitae dolor.",
  "Nullam tristique diam non turpis.",
  "Cras placerat accumsan nulla.",
  "Nullam rutrum.",
  "Nam vestibulum accumsan nisl."
];

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
