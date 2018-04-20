import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Playerstable from "./Playerstable";

const style = {
  marginLeft: 20,
  width: "95%"
};

class Addplayer extends Component {
  state = {
    email: null,
    password: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert("A email and password was submitted: " + this.state.props);
    this.props.onSubmit(this.state.email, this.state.password);
  };
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h3 class="text-xs-center">Add Player</h3>
            <form onSubmit={e => this.submitForm(e)}>
              <Paper zDepth={5}>
                <TextField
                  hintText="Player Name"
                  style={style}
                  underlineShow={false}
                />
                <Divider />
                <Divider />
                <TextField
                  hintText="Position"
                  style={style}
                  underlineShow={false}
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
        <div class="container">
          <div class="row">
            <div class="col s12">
              <Playerstable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addplayer;
