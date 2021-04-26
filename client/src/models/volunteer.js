const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    volunteerApp: {
      type: String,
    },
    liabilityWaiver: {
      type: String,
    }
  }
);

const volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;