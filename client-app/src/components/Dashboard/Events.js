import DatePicker from "material-ui/DatePicker";
import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const Events = (
  <div>
    <form>
      <TextField hintText="Place of Event" />
      <br />
      <TextField hintText="Describe Event" />
      <br />
      <DatePicker hintText="Date of Event" />
      <br />
      <FlatButton label="Submit" primary={true} />
      <FlatButton label="Delete" secondary={true} />
    </form>
  </div>
);
// $(button).click(function (){
//   alert ("Hello");
// });

export default Events;
