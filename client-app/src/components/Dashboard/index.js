import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import ArticleView from "../ArticleView";

import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import axios from "axios";
import Events from "./Events";
// import RaisedButton from "material-ui/RaisedButton";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";

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

  render() {
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
                />
              </div>
              <div>
                <List>
                  <Subheader>
                    The Events haha really..<i class="fas fa-blind fa-9x" />where
                    are the events
                  </Subheader>
                  <ListItem
                  // leftAvatar={<i class="fas fa-user-secret" />}
                  // rightIcon={<CommunicationChatBubble />}
                  />

                  <div>
                    <Subheader>Create an Event here.</Subheader>
                    <form>
                      <TextField hintText="Place of Event" />
                      <i class="far fa-calendar-plus" />
                      <br />
                      <TextField hintText="Describe Event" />
                      <i class="far fa-calendar-plus" />
                      <br />
                      <DatePicker hintText="Date of Event" />
                      <i class="far fa-calendar-plus" />
                      <br />
                      <FlatButton label="Submit" primary={true} />
                      <FlatButton label="Delete" secondary={true} />
                    </form>
                  </div>
                </List>
              </div>
              <br />
              {/* Googlemaps code below */}
              <div className="cal">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      width="535"
                      height="535"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Woz U, North 90th Street, Scottsdale, AZ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
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
            <div className="roster">
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
                            leftAvatar={<Avatar src="" />}
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
