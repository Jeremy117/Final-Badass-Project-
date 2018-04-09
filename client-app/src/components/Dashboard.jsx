import React, { Component } from "react";
import "./Dashboard.css";
import DatePicker from "material-ui/DatePicker";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DatePicker hintText="Portrait Dialog" />
      </div>
    );
  }
}

export default Dashboard;
