import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const mapStateToProps = state => ({
  appName: state.appName
});

class Register extends Component {
  render() {
    return (
      <form>
        <div className="register">
          <div className="row">
            <div className="col-md-2 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Register</h1>
              <p className="text-xs-center">
              </p>
            </div>
          </div>

          <div className="form-group">
            <label for="First Name" className="col-sm-10 col-form-label">First Name</label>
            <div className="col-sm-5">
              <input
                className="form-control form-control-sm"
                name="First"
                placeholder="John"
                id="First Name"
                type="text"
                required
              />
            </div>
            <div>
              <label for="Last Name" className="col-sm-10 col-form-label">Last Name</label>
              <div className="col-sm-5">
                <input
                  className="form-control form-control-sm"
                  name="Last"
                  placeholder="Smith"
                  id="Last Name"
                  type="text"
                  required
                />
              </div>

              <div>
                <label for="Email" className="col-sm-10 col-form-label">Email</label>
                <div className="col-sm-5">
                  <input
                    className="form-control form-control-sm"
                    placeholder="Enter Email"
                    id="Email"
                    type="Email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label for="Password" className="col-sm-10 col-form-label">Password</label>
                  <div className="col-sm-5">
                    <input
                      className="form-control form-control-sm"
                      placeholder="Create Password"
                      id="Password"
                      type="Password"
                      maxlength="10"
                      minlength="5"
                      name="password"
                      required
                    />
                    <small id="passwordHelpInline" class="text-muted">Must be 5-10 characters long.</small>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary pull-xs-right"
                      type="submit"
                      disabled={this.props.inProgress}
                    >
                      Register
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>





    );
  }
}
export default Register;
