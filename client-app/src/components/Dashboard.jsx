import React, { Component } from "react";
import "./Dashboard.css";
import { Grid, Row, Col } from "react-bootstrap";

const arrTeams = ["alvaro", "jennifer", "jeremy", "thomas", "jacob", "adam"];
const listArr = arrTeams.map(arrTeams => <li>{arrTeams}</li>);

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
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>
            <code>&lt;{"Col sm={6} md={3}"} /">">&gt;</code>
            <br />
            {dummySentences.slice(0, 6).join(" ")}
          </Col>
          <Col sm={6} md={3}>
            <code>&lt;{"Col sm={6} md={3}"} /">">&gt;</code>
            <br />
            {dummySentences.slice(0, 4).join(" ")}
          </Col>
          <Col sm={6} md={3}>
            <code>{"Table of Teams!!!"}</code>
            <br />
            {listArr}
          </Col>
        </Row>
      </Grid>
      //   <div class="row">
      //     <div class="col-md-1">.col-md-1</div>
      //     <div class="col-md-1">.col-md-1</div>
      //     <div class="col-md-1">
      //       <div>Teams!!!</div>
      //       {listArr}
      //     </div>
      //   </div>
      //   <div>
      //     <div className="container2">
      //       <h1 /> Dashboard
      //     </div>
      //     <ul className="container1">
      //       <h2 />calendar
      //       <h2 />newsfeed
      //       <h2 />roster
      //     </ul>
      //     <ul className="container1">
      //       <div />calendar code
      //       <div />newsfeed code
      //       <div className="container2" />
      //       {listArr}
      //     </ul>
      //   </div>
    );
  }
}

export default Dashboard;
