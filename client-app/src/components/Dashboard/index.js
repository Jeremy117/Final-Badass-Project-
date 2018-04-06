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
      <div class="container1">
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
            />
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team Sauce</th>
                  <th scope="col">TeamB vs Team B</th>
                  <th scope="col">TeamC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Iron Man</td>
                  <td>Pirate Hicks</td>
                  <td>Guard</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jhonny Cage</td>
                  <td>IronMan</td>
                  <td>Center</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Jason Vorhees</td>

                  <td>Substitute</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team Bowl </th>
                  <th scope="col">TeamB vs Team B</th>
                  <th scope="col">TeamC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Freddie Kruger</td>
                  <td>Pirate Hicks</td>
                  <td>Guard</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>JuliousErving</td>
                  <td>IronMan</td>
                  <td>Center</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Hilary Clinton</td>

                  <td>Substitute</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team Death Match</th>
                  <th scope="col">Team B vs Team B</th>
                  <th scope="col">TeamC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Tim Brady</td>
                  <td>Otto Tequila</td>
                  <td>Guard</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>JackHammer</td>
                  <td>Timmy Neutron</td>
                  <td>Center</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Lex Luther</td>
                  <td>Substitute</td>
                </tr>
              </tbody>
            </table>
            <Col sm={6} md={3} className="container1">
              <button onClick={this.getRequest}>Get Newsfeed!</button>
              <div>
                {this.state.articles.map(article => (
                  <img src={article.author.image} />
                ))}
              </div>
            </Col>
            <Col sm={6} md={3} className="container1">
              <div>Teams!!</div>
              <div src={this.getPlayers()}>
                {this.state.players.map(player => <div>{player.name} </div>)}
              </div>
            </Col>
          </Row>
        </Grid>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Huddle Calendar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Create an event</h4>
            <p>
              City,state, indoor/outdoor,location, Time and weather forecast.
            </p>

            <h4>Team Name</h4>
            <p>Enter team name here</p>

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
