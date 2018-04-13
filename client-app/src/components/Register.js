import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import services from "../services";
import ListErrors from "./ListErrors";

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
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h2 className="text-xs-center">Sign Up</h2>
              <p className="text-xs-center">
                <Link to="login">Have an account?</Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={e => this.submitForm(e)}>
                <field>
                  <field className="">
                    <input
                      className=""
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleInputChange}
                    />
                  </field>

                  <field className="">
                    <input
                      className=""
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                  </field>

                  <field className="">
                    <input
                      className=""
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                  </field>

                  <button
                    className="btn primary"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Join Huddle
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
