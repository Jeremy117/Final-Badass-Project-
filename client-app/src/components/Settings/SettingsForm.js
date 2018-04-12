import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";

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
        <List>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                src="https://cmgpbgametimehighschoolbuzz.files.wordpress.com/2017/07/williams.jpg"
                size={100}
              />
            }
          />
        </List>
        <br />
        <br />
        <br />
        <br />

        {/* <TextField
          style={{
            width: "700px"
          }}
          type="text"
          placeholder="URL of profile picture"
          value={this.state.image}
          onChange={this.updateState("image")}
        /><br /> */}

        <TextField
          style={{
            width: "700px"
          }}
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.updateState("username")}
        />
        <br />

        <TextField
          style={{
            width: "700px"
          }}
          placeholder="Short bio about you"
          value={this.state.bio}
          onChange={this.updateState("bio")}
        />
        <br />

        <TextField
          style={{
            width: "700px"
          }}
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.updateState("email")}
        />
        <br />

        <TextField
          style={{
            width: "700px"
          }}
          type="password"
          placeholder="New Password"
          value={this.state.password}
          onChange={this.updateState("password")}
        />
        <br />

        <RaisedButton
          label="Update Settings"
          primary={true}
          style={{
            width: "700px"
          }}
          type="submit"
          disabled={this.state.inProgress}
        />
      </form>
    );
  }
}

export default SettingsForm;
