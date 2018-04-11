import React, { Component } from "react";

class SettingsForm extends Component {
  state = {
    image: "",
    username: "",
    bio: "",
    email: "",
    password: ""
  };
  //On Mount we want to assign all the currentUser props to the forms state,
  //so it's filled out
  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        ...this.state,
        ...this.props.currentUser
      });
    }
  }

  //we also need the form to update after possible rehydration, or changes to currentUser
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState({
        ...this.state,
        image: nextProps.currentUser.image || "",
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      });
    }
  }

  submitForm = event => {
    event.preventDefault();

    const user = Object.assign({}, this.state);
    //we don't want to HTTP PUT a blank user
    if (!user.password) {
      delete user.password;
    }

    this.props.onSubmitForm(user);
  };

  updateState = field => event => {
    const state = this.state;
    const newState = Object.assign({}, state, { [field]: event.target.value });
    this.setState(newState);
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <field className="">
          <input
            className=""
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.updateState("username")}
          />
        </field>

        <field className="">
          <textarea
            className=""
            rows="8"
            placeholder="Enter profile description"
            value={this.state.bio}
            onChange={this.updateState("bio")}
          />
        </field>

        <field className="">
          <input
            className=""
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateState("email")}
          />
        </field>

        <field className="">
          <input
            className=""
            type="password"
            placeholder="New Password"
            value={this.state.password}
            onChange={this.updateState("password")}
          />
        </field>

        <button
          className="btn primary"
          type="submit"
          disabled={this.state.inProgress}
        >
          Update Settings
        </button>
      </form>
    );
  }
}

export default SettingsForm;
