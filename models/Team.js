const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: String,
  description: String,
  sport: String,
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

TeamSchema.methods.toJSONFor = function() {
  return {
    name: this.name,
    description: this.description,
    sport: this.sport,
    players: this.players,
    events: this.events,
    articles: this.articles,
    user: this.user
  };
};

mongoose.model("Team", TeamSchema);
