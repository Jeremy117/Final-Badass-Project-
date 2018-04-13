import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";

import ListErrors from "./ListErrors";

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
      <div className="">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h2 className="text-xs-center">Sign In</h2>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>
              <ListErrors errors={this.props.errors} />
              <form onSubmit={this.handleOnSubmit}>
                <field>
                  <field className="">
                    <input
                      onChange={this.handleInputOnChange}
                      className=""
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </field>

                  <field className="">
                    <input
                      onChange={this.handleInputOnChange}
                      className=""
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </field>

                  <button
                    className="btn primary"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Sign in
                  </button>
                </field>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
