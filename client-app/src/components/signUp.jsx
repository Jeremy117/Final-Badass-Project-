import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  appName: state.appName
});

class signUp extends Component {
  render() {
    return (
      <form>
        <div className="signIn">
          <div className="row1">
            <div className="col-sm-2 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
              </p>
            </div>
          </div>

          <div className="form-group">
            <label for="Email" className="col-sm-10 col-form-label">Email address</label>
            <div className="col-sm-5">
              <input
                type="Email"
                className="form-control"
                placeholder="Enter email "
                id="Email"
                name="email"
                required
              />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <label for="Password" className="col-sm-10 col-form-label">Password</label>
            <div className="col-sm-5">
              <input
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

// export default connect(mapStateToProps)(signUp);
export default signUp;
