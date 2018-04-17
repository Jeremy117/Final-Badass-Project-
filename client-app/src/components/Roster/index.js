// import MobileTearSheet from "../../../MobileTearSheet";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import React, { Component } from "react";
import services from "../../services";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.team,
  currentUser: state.common.currentUser,
  currentTeam: state.common.currentTeam
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ROSTER_LOADED", payload })
});

class Roster extends Component {
  componentDidMount() {
    const teamid = this.props.match.params.id;
    this.props.onLoad(services.Players.get(this.user.team));
    console.log(teamid);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.players !== this.props.players) {
      console.log(nextProps);
    }
  }

  render() {
    return <div>{this.props.team}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
