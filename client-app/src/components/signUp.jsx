import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../services";
import axios from "axios";

const URL3 =
  "https://api.mlab.com/api/1/databases/heroku_57qw8z8r/collections/users?apiKey=h-OMydwAhmajzJr_hWshGs0gjrPxVKKa";

class signUp extends Component {
  state = {
    usertoggle: false,
    usersinfo: []
  };

  pass = () => {
    axios.get(URL3).then(res => {
      this.setState({
        usertoggle: true,
        usersinfo: res.data
      });
      console.log(res.data);
    });
  };

  verify =("test1")=>{
    if ("test1"===this.state.usersinfo.username){
      return "positive"
    }else{
  }

  render() {
    return (
      <div className="auth-page">
        <button
          className="btn btn-lg btn-primary pull-xs-right"
          onClick={this.pass}
        >
          Sign in
        </button>
      </div>
    );
  }
}

export default signUp;

{
  /* <form>
  <form onSubmit={this.handleOnSubmit}>
  <fieldset>
    <fieldset className="form-group">
      <input
        onChange={this.handleInputOnChange}
        className="form-control form-control-lg"
        type="email"
        placeholder="Email"
        name="email"
      />
    </fieldset>

    <fieldset className="form-group">
      <input
        onChange={this.handleInputOnChange}
        className="form-control form-control-lg"
        type="password"
        placeholder="Password"
        name="password"
      />
    </fieldset>

    <button
      className="btn btn-lg btn-primary pull-xs-right"
      type="submit"
      onClick={this.passVer}
      disabled={this.props.inProgress}
    >
      Sign in
    </button>
  </fieldset>
</form> */
}
