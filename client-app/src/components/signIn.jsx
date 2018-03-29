import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";

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
      <form onSubmit={this.handleSubmit} className="signIn">
        <div className="signIn">
          <div className="row1">
            <div className="col-sm-2 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center" />
            </div>
          </div>

          <div className="form-group">
            <label for="Email" className="col-sm-10 col-form-label">
              Email address
            </label>
            <div className="col-sm-5">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Email"
                className="form-control"
                placeholder="Enter email "
                id="Email"
                name="email"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <label for="Password" className="col-sm-10 col-form-label">
              Password
            </label>
            <div className="col-sm-5">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control form-control-sm"
                placeholder="Password"
                id="Password"
                type="Password"
                maxlength="10"
                minlength="5"
                name="password"
                required
              />
              <div>
                <button
                  className="btn btn-primary pull-xs-right"
                  type="submit"
                  disabled={this.props.inProgress}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default signIn;
