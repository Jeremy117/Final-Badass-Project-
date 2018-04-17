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
// import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";
import TimePicker from "material-ui/TimePicker";
import Toggle from "material-ui/Toggle";
import ArticleView from "../ArticleView";
import Dialog from "material-ui/Dialog";
// import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import MenuItem from "material-ui/MenuItem";
import Menu from "material-ui/Menu";
// import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
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
// import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";

// const URL =
//   "https://api.mlab.com/api/1/databases/heroku_57qw8z8r/collections/articles?apiKey=h-OMydwAhmajzJr_hWshGs0gjrPxVKKa";

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

  // getRequest = () => {
  //   axios.get(ArticleView).then(res => {
  //     this.setState({
  //       newsfeed: true,
  //       articles: res.data
  //     });
  //     // console.log(res.data);
  //     // console.log(response.status);
  //     // console.log(response.statusText);
  //     // console.log(response.headers);
  //   });
  // };

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

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    // render();
    return (
      <div>
        <ul className="show-grid">
          {/* <button className="btn blue" onClick={this.toggleWeather}>
            Toggle Weather
          </button> */}
          {this.state.weather && <Box />}
        </ul>
        <div>
          <ul className="show-grid">
            <div className="news">
              <br />
              <div className="cal">
                <InfiniteCalendar
                  width={260}
                  height={340}
                  selected={today}
                  disabledDays={[0, 6]}
                  minDate={lastWeek}
                  onSelect={this.handleShow}
                />
              </div>
<<<<<<< HEAD
              <div>
                <List>
                  <Subheader>
                    <i class="fas fa-football-ball fa-7x" />
                    <i class="fas fa-baseball-ball fa-7x" />
                    <i class="fas fa-basketball-ball fa-7x" />
                    <i class="fas fa-volleyball-ball fa-7x" />
                  </Subheader>
                  <ListItem
                  // leftAvatar={<i class="fas fa-user-secret" />}
                  // rightIcon={<CommunicationChatBubble />}
                  />

                  <div>
                    <Subheader>Click here for an Event.</Subheader>
                    <form>
                      <div>
                        <RaisedButton
                          label="Create an Event"
                          onClick={this.handleOpen}
                        />
                        <Dialog
                          title=" Pick your day"
                          actions={actions}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
                          Choose a date.<i class="fas fa-calendar-alt" />
                          <DatePicker hintText="Date Picker" />
                          <div>
                            <TimePicker hintText="Start time" />
                            <TimePicker hintText="End time" />
                            {/* <TimePicker hintText="current time" autoOk={true} /> */}
                            <TimePicker format="24hr" hintText="24hr Format" />
                            <TimePicker disabled={true} format="24hr" />
                          </div>
                        </Dialog>
                      </div>
                    </form>
                  </div>
                </List>
              </div>
=======
>>>>>>> ad4acff6aaba58165845e0b1e2a2efe027e85cd4
              <br />
              {/* Googlemaps code below */}
              <div className="cal">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="260"
                      height="425"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Woz U, North 90th Street, Scottsdale, AZ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    />
                  </div>
                  <a href="https://www.embedgooglemap.net" />
                </div>
              </div>
            </div>
            <div className="news">
              <div className="home-page">
                <div className="container page">
                  <div className="row">
                    <ArticleView articles={this.props.articles} />
                  </div>
                </div>
              </div>
            </div>
            <div className="news roster">
              <div>
                <List className="player">
                  <Subheader>
                    <h4 className="text">
                      <strong />Roster
                    </h4>
                  </Subheader>
                  <strong />
                  <div src={this.getPlayers()}>
                    {this.state.players.map(player => (
                      <div>
                        <Link to="./settings">
                          <ListItem
                            primaryText={player.name}
                            // leftAvatar={<Avatar src="images/ok-128.jpg" />}
                            rightIcon={<i class="fas fa-star" />}
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
        <div
          id="modal1"
          className="modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <div className="modal-content">
            <h4>Create Event:</h4>
            {Events}
          </div>
          <div className="modal-footer">
            {/* <RaisedButton */}
            label="Close" onClick={this.handleClose}
            primary={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <iframe
          title="weather"
          className="weatherpic"
          id="forecast_embed"
          frameBorder="2"
          height="216"
          width="400%"
          src="//forecast.io/embed/#lat=33.494170&lon=-111.926052&name=Scottsdale"
        />
      </div>
    );
  }
}
// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
//export default FlatButtonExampleSimple;
