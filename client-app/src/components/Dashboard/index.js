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
import axios from "axios";
// import Modals from "./Modals";

const URL =
  "https://api.mlab.com/api/1/databases/heroku_57qw8z8r/collections/articles?apiKey=h-OMydwAhmajzJr_hWshGs0gjrPxVKKa";

const URL2 =
  "https://api.mlab.com/api/1/databases/heroku_57qw8z8r/collections/players?apiKey=h-OMydwAhmajzJr_hWshGs0gjrPxVKKa";

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
      show: false,
      newsfeed: false,
      articles: [],
      playerShow: false,
      players: []
    };
  }

  getPlayers = () =>
    axios.get(URL2).then(res => {
      this.setState({
        playerShow: true,
        players: res.data
      });
    });

  getRequest = () => {
    axios.get(URL).then(res => {
      this.setState({
        newsfeed: true,
        articles: res.data
      });
      // console.log(res.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
    });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div class="container">
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
            <Col xl={6} xl={6} className="container1">
              {/* <code>{"Col xl={6} xl={3}"}</code> */}
              <br />
              {dummySentences.slice(0, 4).join(" ")}
            </Col>
            <Col xl={6} xl={6} className="container1">
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
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
