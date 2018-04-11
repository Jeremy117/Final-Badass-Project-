import React, { Component } from "react";
import { connect } from "react-redux";
import services from "../../services";
import mainImage from "../../images/prototype-home-desktop.jpg";

const mapStateToProps = state => ({
  appName: state.common.appName,
  articles: state.home.articles
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "HOME_PAGE_LOADED", payload })
});

class Home extends Component {
  componentDidMount() {
    this.props.onLoad(services.Articles.all());
  }

  render() {
    return (
      <div>
        <div class="row container">
          <div class="col m4 center">
            <h4>Manage Your Team</h4>
            With Huddle, Coach can manage his or her team’s schedule. No other
            app makes it as easy as ours to be a parent in a sports team. Every
            feature is made to make sure that information reaches the right
            person.
          </div>
          <div class="col m4 center">
            <h4>Share Photos</h4>
            The web application has a news feed that allows each player or
            parent to post photos and comments on each game. Parents can add
            photos and comments after every game.
          </div>
          <div class="col m4 center">
            <h4>Player Roster</h4>
            Huddle also has a roster so everyone is up to date on who’s playing
            or not and why. The roster is current and has all of the contact
            information for each player.
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
