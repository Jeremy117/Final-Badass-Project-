import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
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
  players: state.player.players,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (team, name, position) => {
    dispatch({
      type: "PLAYER_ADDED",
      payload: services.Players.post(team, name, position)
    });
  },
  onLoad: team => {
    dispatch({
      type: "PLAYERS_LOADED",
      payload: services.Players.get(team)
    });
  }
});

class Addplayer extends Component {
  componentDidMount() {
    const team = this.props.match.params.team;
    this.props.onLoad(team);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  state = {
    name: "",
    position: ""
  };
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { name, position } = this.state;
    this.props.onSubmit(this.props.match.params.team, name, position);
  };

  render() {
    const players = this.props.players ? this.props.players : [];
    const { name, position } = this.state;
    return (
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h3 class="text-xs-center">Add Player</h3>
            <form onSubmit={e => this.submitForm(e)}>
              <Paper zDepth={5}>
                <TextField
                  hintText="Player Name"
                  name="name"
                  style={style}
                  underlineShow={false}
                  value={name}
                  onChange={this.handleInputChange}
                />
                <Divider />
                <Divider />
                <TextField
                  hintText="Position"
                  name="position"
                  style={style}
                  underlineShow={false}
                  value={position}
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
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Position</TableHeaderColumn>
                <TableHeaderColumn>id</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map(player => {
                return (
                  <TableRow>
                    <TableRowColumn>{player.name}</TableRowColumn>
                    <TableRowColumn>{player.position}</TableRowColumn>
                    <TableRowColumn>{player._id}</TableRowColumn>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addplayer);
