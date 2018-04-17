const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }
});

PlayerSchema.methods.toJSONFor = function() {
  return {
    name: this.name,
    position: this.position,
    team: this.team.toJSONFor()
  };
};

mongoose.model("Player", PlayerSchema);
