import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            />,
            <Col sm={6} md={3} className="container1">
              <button onClick={this.getRequest}>Get Newsfeed!</button>
              <div>
                {this.state.articles.map(article => <img src={article.body} />)}
              </div>
            </Col>
            <Col sm={6} md={3} className="container1">
              <div>players!!</div>
              <div src={this.getPlayers()}>
                {this.state.players.map(player => (
                  <div>
                    <Link to="./settings">{player.name} </Link>
                  </div>
                ))}
              </div>
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
