import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";

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
import Events from "./Events";
import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

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
      // dateShow: [],
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
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} lg={3} className="container1">
              <InfiniteCalendar
                width={260}
                height={390}
                selected={today}
                disabledDays={[0, 6]}
                minDate={lastWeek}
                onSelect={this.handleShow}
              />
            </Col>
            <Col sm={6} md={3} className="container1">
              <List>
                <ListItem>
                  <button onClick={this.getRequest}>Get Newsfeed!</button>
                </ListItem>
                <div>
                  {this.state.articles.map(article => (
                    <img src={article.body} />
                  ))}
                </div>
              </List>
            </Col>
            <Col sm={6} md={3} className="container1">
              <List>
                <Subheader>
                  <h3>
                    <strong />Players
                  </h3>
                </Subheader>
                <strong />
                <div src={this.getPlayers()}>
                  {this.state.players.map(player => (
                    <div>
                      <Link to="./settings">
                        <ListItem
                          primaryText={player.name}
                          leftAvatar={<Avatar src="images/ok-128.jpg" />}
                          rightIcon={<CommunicationChatBubble />}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </List>
            </Col>
          </Row>
        </Grid>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Huddel Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Create Event:</h4>
            {Events}
          </Modal.Body>
          <Modal.Footer>
            <RaisedButton
              label="Close"
              onClick={this.handleClose}
              primary={true}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
//export default FlatButtonExampleSimple;
