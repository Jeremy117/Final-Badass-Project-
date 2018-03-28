import React, { Component } from "react";
import "./Dashboard.css";
import {
  Grid,
  Row,
  Col,
  Button,
  Modal,
  ModalDialog,
  ModalBody,
  ModalTitle,
  ModalHeader,
  ModalFooter,
  OverlayTrigger,
  Tooltip,
  Popover
} from "react-bootstrap";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
// import Modals from "./Modals";

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
  "49ers",
  "Texans"
];
const listArr = arrTeams.map(arrTeams => <div>{arrTeams}</div>);

const dummySentences = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing eliti."
];

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
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <br />
            <InfiniteCalendar
              width={300}
              height={300}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
              onSelect={this.handleShow}

            // onSelect={(date, Modals) => console.log(Modals())}
            />,
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
            <p>there is a here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a here</p>

            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
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

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
