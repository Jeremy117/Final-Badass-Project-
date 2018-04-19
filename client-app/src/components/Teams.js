import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";
import TableExampleSimple from "./teamstable";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const style = {
  marginLeft: 20,
  width: "95%"
};

const mapStateToProps = state => ({
  ...state.team,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, name, description, sport) => {
    dispatch({
      type: "TEAM_ADDED",
      payload: services.Teams.post(email, name, description, sport)
    });
  },
  onLoad: email => {
    dispatch({
      type: "TEAMS_LOADED",
      payload: services.Teams.getTeams(email)
    });
  }
});

class Teams extends Component {
  componentDidMount() {
    const email = this.props.match.params.email;
    this.props.onLoad(email);
    console.log(this.props);
  }

  state = {
    name: "",
    description: "",
    sport: ""
  };
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { name, description, sport } = this.state;
    this.props.onSubmit(this.props.currentUser.email, name, description, sport);
  };

  render() {
    const { name, description, sport } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h3 class="text-xs-center">Create Your Team</h3>
            <form onSubmit={e => this.submitForm(e)}>
              <Paper zDepth={5}>
                <TextField
                  hintText="Team Name"
                  style={style}
                  underlineShow={false}
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="Description of Team"
                  style={style}
                  fullWidth={true}
                  multiLine={true}
                  underlineShow={false}
                  name="description"
                  value={description}
                  onChange={this.handleInputChange}
                  rows="3"
                />
                <Divider />

                <TextField
                  hintText="Sport"
                  style={style}
                  underlineShow={false}
                  name="sport"
                  value={sport}
                  onChange={this.handleInputChange}
                />
                <Divider />
              </Paper>

              <br />

              <button
                class="btn blue"
                disabled={this.state.inProgress}
                onClick={this.submitForm}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="container roster">
          <div class="row">
            <div class="col s12">
              <h3 class="text-xs-center">Teams List</h3>
              <TableExampleSimple />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
