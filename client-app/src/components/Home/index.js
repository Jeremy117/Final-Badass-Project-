import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import "./Home.css";

import mainImage from "../../images/prototype-home-desktop2.jpg";
import calendarImage from "../../images/calendar-icon.png";
import newsfeedImage from "../../images/newsfeed-icon.png";
import rosterImage from "../../images/paper2-icon.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-image">
          <img src={mainImage} alt="alt" />
        </div>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
              <img src={calendarImage} alt="alt" />
              <h3>Calendar</h3>
              <p>
                With Huddle, Coach can manage his or her team’s schedule. No
                other app makes it as easy as ours to be a parent in a sports
                team. Every feature is made to make sure that information
                reaches the right person
              </p>
            </Col>
            <Col xs={12} sm={4}>
              <img src={newsfeedImage} alt="alt" />
              <h3>Newsfeed</h3>
              <p>
                The web application has a news feed that allows each player or
                parent to post photos and comments on each game. Parents can add
                photos and comments after every game.
              </p>
            </Col>
            <Col xs={12} sm={4}>
              <img src={rosterImage} alt="alt" />
              <h3>Roster</h3>
              <p>
                Huddle also has a roster so everyone is up to date on who’s
                playing or not and why. The roster is current and has all of the
                contact information for each player.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect()(Home);
