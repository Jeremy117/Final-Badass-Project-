import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const style = {
  marginLeft: 20,
};



class SettingsForm extends Component {
  state = {
    image: "",
    username: "",
    bio: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.setState({
        ...this.state,
        ...this.props.currentUser
      });
    }
  }


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
              <Avatar src="https://cmgpbgametimehighschoolbuzz.files.wordpress.com/2017/07/williams.jpg"
                size={100} />
            }
          >

          </ListItem>
        </List>
        <br />
        <br />
        <br />
        <br />




        <Paper zDepth={2}>
          <TextField
            hintText="Username"
            style={style}
            underlineShow={false}
            value={this.state.username}
            onChange={this.updateState("username")}
          />
          <Divider />



          <TextField
            hintText="Bio"
            style={style}
            underlineShow={false}
            value={this.state.bio}
            onChange={this.updateState("bio")}
          />
          <Divider />


          <TextField
            hintText="email"
            style={style}
            underlineShow={false}
            value={this.state.email}
            onChange={this.updateState("email")}
          />
          <Divider />




          <TextField
            hintText=" New Password"
            style={style}
            underlineShow={false}
            value={this.state.password}
            onChange={this.updateState("password")}
          />
          <Divider />


        </Paper>


        <br />

        <button class="btn blue" disabled={this.state.inProgress}>Update Settings</button>


        <br />





      </form >
    );
  }
}

export default SettingsForm;
