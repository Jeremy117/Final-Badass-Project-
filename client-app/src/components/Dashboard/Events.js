import DatePicker from "material-ui/DatePicker";
import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import "./Dashboard.css";
import TimePicker from "material-ui/TimePicker";
const Events = (
  <div>
    <form className="event">
      <h4>
        <strong>Add Event</strong>
      </h4>
      <TextField hintText="Place of Event" />
      <br />
      <TextField hintText="Describe Event" />
      <TimePicker hintText="Start Time" autoOk={true} />
      <br />
      <TimePicker hintText="End Time" autoOk={true} />
      <br />
      <DatePicker hintText="Date of Event" />
      <br />
      <FlatButton label="Submit" primary={true} />
      <FlatButton label="Delete" secondary={true} />
    </form>
  </div>
);

export default Events;
