const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Horse Database
const HorseSchema = new Schema({
  name: { type: String },
  date: { type: Date, default: Date.now },
  breed: { type: String },
  image: { type: String },
  age: { type: Number },
  height: { type: Number },
  lastVetAppt: { type: String },
  farrierDate: { type: String },
  farrierCycle: { type: String },
  deworming: { type: String },
  dewormingCycle: { type: String },
  pictureUrl: { type: String }
});

const Horse = mongoose.model("Horse", HorseSchema);

module.exports = Horse;