import React, { Component } from "react";
import { connect } from "react-redux";
import services from "../../services";
import mainImage from "../../images/prototype-home-desktop-logo.jpg";
import "./home.css";

const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.home.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

const Background = function(props) {
  return <img src={mainImage} className="herobgrd" alt="Huddle" />;
};

class Home extends Component {
  componentDidMount() {
    this.props.onLoad(services.Articles.all());
  }
  render() {
    return (
      <div>
        <div className="herobgrd">
          <Background />
        </div>

        {/* begin 3 column descrption section */}
        <div
          className="row container"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
        >
          <div className="col m4 center">
            <h4>Your Team</h4>
            With Huddle, Coach can manage his or her team’s schedule. No other
            app makes it as easy as ours to be a parent in a sports team.
            Everything about games and practices in one place.
          </div>
          <div className="col m4 center">
            <h4>Share Memories</h4>
            The web application has a news feed that allows each player or
            parent to post comments on each game. An easy way to share with
            everyone that didn’t make it to the game.
          </div>
          <div className="col m4 center">
            <h4>Player Roster</h4>
            Huddle also has a roster so everyone is up to date on who’s playing
            or not and why. The roster is current and has all of the contact
            information for each player.
          </div>
        </div>
        {/* end 3 colum description section */}
        {/* begin 4 columm stats section  */}
        <div
          className="grey white-text"
          style={{
            paddingTop: "30px",
            paddingBottom: "50px"
          }}
        >
          <div className="container row center">
            <div
              className="col l3 m6 s12 center"
              style={{
                paddingTop: "20px"
              }}
            >
              <h5 className="white-text">Scheduling</h5>
              Everything about games and practices in one place, with automatic
              reminders to parents and players.
              <br />
            </div>
            <div
              className="col l3 m6 s12 center"
              style={{
                paddingTop: "20px"
              }}
            >
              <h5 className="white-text">Made for Parents</h5>
              Every feature is made to make sure that information reaches the
              right person.
              <br />
            </div>
            <div
              className="col l3 m6 s12 center"
              style={{
                paddingTop: "20px"
              }}
            >
              <h5 className="white-text">Multiple Teams</h5>
              Huddle makes it easy for parents with kids on multiple teams, with
              all team info in one place.
              <br />
            </div>
            <div
              className="col l3 m6 s12 center"
              style={{
                paddingTop: "20px"
              }}
            >
              <h5 className="white-text">Availability</h5>
              Keep updated on who’s attending games and practices, and when and
              why someone can’t.
              <br />
            </div>
          </div>
        </div>
        {/* end 4 column stats section */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
