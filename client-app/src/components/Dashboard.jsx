import React, { Component } from "react";
import "./Dashboard.css";
import { Grid, Row, Col } from "react-bootstrap";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet

var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

const arrTeams = [
  "Titian",
  "Angles",
  "Chiefs",
  "Seahawks",
  "Patriots",
  "49ers"
];
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
        <Grid>
          <Row className="show-grid">
            <InfiniteCalendar
              width={300}
              height={300}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
            />,
            <br />
            <Col sm={6} md={3} className="container1">
              <code>&lt;{"Col sm={6} md={3}"} /">">&gt;</code>
              <br />
              {dummySentences.slice(0, 4).join(" ")}
            </Col>
            <Col sm={6} md={3} className="container1">
              <div>Teams!!{listArr}</div>
              <br />
            </Col>
          </Row>
        </Grid>
      </div>
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
