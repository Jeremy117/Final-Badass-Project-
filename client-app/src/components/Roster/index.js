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
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: "ROSTER_LOADED", payload })
});

class Roster extends Component {
  componentDidMount() {
    const team = this.props.match.params.team;
    this.props.onLoad(services.Players.get(team));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.players !== this.props.players) {
      console.log(nextProps);
    }
  }

  render() {
    return <div />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roster);
