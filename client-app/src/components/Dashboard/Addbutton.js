import React, { Component } from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

class Addbutton extends Component {
  render() {
    return (
      <div>
        <RaisedButton fullWidth={true}>
          <Link to="/Addplayer">Add Player</Link>
        </RaisedButton>
      </div>
    );
  }
}

export default Addbutton;
