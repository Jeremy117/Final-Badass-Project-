const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

const TeamSchema = new mongoose.Schema({
  teamId: Number,
  teamName: String,
  teamDescription: String,
  rosterName: Array
});

mongoose.model("Team", TeamSchema);
