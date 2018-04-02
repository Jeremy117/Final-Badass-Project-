import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";
import "./SignIn.css";

// console.log(this.handleInputOnChange);
// const mapStateToProps = state => ({ ...state.auth });
// const mapDispatchToProps = dispatch => ({
//   onSubmit: (email, password) =>
//     dispatch({ type: "LOGIN", payload: services.Auth.login(email, password) })
// });
class signIn extends Component {
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
      <div className="container">
        <div className="row centered-form-signin">
          <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Sign In <small>Your Team Awaits!</small>
                </h3>
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control input-sm"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control input-sm"
                      placeholder="password"
                    />
                  </div>

                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-info btn-block"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signIn;
