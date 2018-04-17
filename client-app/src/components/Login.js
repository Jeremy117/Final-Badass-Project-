import React from "react";
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
  onSubmit: (email, password) =>
    dispatch({ type: "LOGIN", payload: services.Auth.login(email, password) })
});

class Login extends React.Component {
  state = {
    email: null,
    password: null
  };

  handleInputOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    //dispatch the login service promise as an action to redux
    this.props.onSubmit(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="auth-page">
        <div className="container">
          <div className="row">

            <h3 className="text-xs-center">Sign In</h3>

            <Link to="/register">Need an account?</Link>


            <ListErrors errors={this.props.errors} />
            <form onSubmit={this.handleOnSubmit}>
              <Paper zDepth={5}>
                <TextField
                  hintText="email"
                  style={style}
                  underlineShow={false}
                  onChange={this.handleInputOnChange}
                  type="email"
                  name="email"
                />
                <Divider />

                <TextField
                  hintText="password"
                  style={style}
                  underlineShow={false}
                  onChange={this.handleInputOnChange}
                  type="password"
                  name="password"
                />
                <Divider />

              </Paper>

              <br />

              <button class="btn blue" disabled={this.state.inProgress}>Sign In</button>

            </form>




          </div>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
