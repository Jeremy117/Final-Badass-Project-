import React, { Component } from "react";
import "./Dashboard.css";
import DatePicker from "material-ui/DatePicker";
import TextField from "material-ui/TextField";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <TextField hintText="Hint Text" />
        <br />
        <DatePicker hintText="Portrait Dialog" />
      </div>
    );
  }
}

export default Dashboard;
