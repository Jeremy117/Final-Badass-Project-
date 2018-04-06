//This file will accomplish a few things.
//1. It will define the actions associated with the Roster
//2. It will contain the markup for the roster itself
//3. It will have the appropriate life-cycle methods for the roster

//Actions Associated with the Roster
//1. Roster Loaded
//2. Add Player

//Styling for the Roster
//1. We will need an infinite scrolling page that allows us to link to player profiles.
//2. We need a search box that pops up which allows us to search and add players in the database to the roster

//Lifecycle Methods
//1. We need a lifecycle method which will pull players for the associated team when the component mounts


import React, { Component } from "react";
import services from "../../services";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.roster,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ROSTER_LOADED", payload })
});

//this is where we fetch from the API endpoint
class Roster extends Component {
  componentDidMount() {
    this.props.onLoad(
        Promise.all([
          services.Teams.roster,
        ])
      );
    }
  }

  componentWillReceiveProps() {
    if (nextProps.player !== this.props.player) {
      console.log(nextProps);
    }
  }

  render() {
    const roster = this.props.roster;
    if (!player) {
      return null;
    }
    const markup = { __html: marked(player.body) };
    const canModify =
      this.props.currentUser &&
      this.props.currentUser.username === player.author.username;
    return (
      <div>
        <div className="banner">
          <div className="container">
            <h1>{teamid.title}</h1>
            <Roster article={this.props.roster} canModify={canModify} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);