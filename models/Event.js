const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  time: String,
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
});

EventSchema.methods.toJSONFor = function() {
  return {
    title: this.name,
    description: this.position,
    date: this.date,
    time: this.time,
    team: this.team
  };
};

mongoose.model("Event", EventSchema);
