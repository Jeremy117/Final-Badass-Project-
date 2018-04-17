import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';



import services from "../services";
import ListErrors from "./ListErrors";

const style = {
  marginLeft: 20,
};

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, email, password) => {
    dispatch({
      type: "REGISTER",
      payload: services.Auth.register(username, email, password)
    });
  }
});

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    this.props.onSubmit(username, email, password);
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container">
          <div className="row">

            <h3 className="text-xs-center">Sign Up</h3>

            <Link to="login">Have an account?</Link>


            <ListErrors errors={this.props.errors} />

            <form onSubmit={e => this.submitForm(e)}>
              <Paper zDepth={5}>
                <TextField
                  hintText="username"
                  style={style}
                  underlineShow={false}
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="email"
                  style={style}
                  underlineShow={false}
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <Divider />

                <TextField
                  hintText="password"
                  style={style}
                  underlineShow={false}
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                <Divider />
              </Paper>

              <br />

              <button class="btn blue" disabled={this.state.inProgress}>Join Huddle</button>

            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
