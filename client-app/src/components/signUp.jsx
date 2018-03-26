import React, { Component } from "react";
import { connect } from "react-redux";
// import services from "../services";

// console.log(this.handleInputOnChange);
// const mapStateToProps = state => ({ ...state.auth });
// const mapDispatchToProps = dispatch => ({
//   onSubmit: (email, password) =>
//     dispatch({ type: "LOGIN", payload: services.Auth.login(email, password) })
// });
class signUp extends Component {
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
      <form onSubmit={this.handleSubmit} className="signUp">
        <h1 /> Sign In
        <div className="signIn">
          <label for="Email">Email:</label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="your email"
            id="Email"
            type="email"
            name="email"
            required
          />
          <label for="Password">Password</label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="your password"
            id="Password"
            type="password"
            maxlength="10"
            minlength="5"
            name="password"
            required
          />
          <div>
            <input type="submit" />
          </div>
        </div>
      </form>
    );
  }
}
export default signUp;
// export default connect(mapStateToProps, mapDispatchToProps)(signUp);
