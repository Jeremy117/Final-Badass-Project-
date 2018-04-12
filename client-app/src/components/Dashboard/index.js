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
    this.toggleWeather = this.toggleWeather.bind(this);
    this.state = {
      show: false,
      newsfeed: false,
      articles: [],
      playerShow: false,
      players: [],
      weather: true
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

  toggleWeather = () => {
    const { weather } = this.state;
    this.setState({ weather: !weather });
  };

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.toggleWeather}>
          Weather On/Off
        </Button>
        {this.state.weather && <Box />}
        <div>
          <ul className="show-grid">
            <div>
              <br />
              <div className="cal">
                <InfiniteCalendar
                  width={260}
                  height={340}
                  selected={today}
                  disabledDays={[0, 6]}
                  minDate={lastWeek}
                  onSelect={this.handleShow}
                />,
              </div>
            </div>
            <div className="news">
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
            </div>
            <div className="roster">
              <div>
                <List className="player">
                  <Subheader>
                    <h3 className="text">
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
                <br />
              </div>
            </div>
          </ul>
        </div>
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

class Box extends Component {
  render() {
    return (
      <div>
        <iframe
          className="body"
          id="forecast_embed"
          frameBorder="2"
          height="220"
          width="100%"
          src="//forecast.io/embed/#lat=33.494170&lon=-111.926052&name=Scottsdale"
        />
      </div>
    );
  }
}
// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
//export default FlatButtonExampleSimple;
