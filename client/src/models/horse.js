const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HorseSchema = new Schema(
  {
    name: {
      type: String,
    },
    breed: {
      type: String,
    },
    age: {
      type: Number,
    },
    height: {
      type: Number,
    },
    intakeDate: {
      type: Date,
    },
    vetRecords: {
      type: Document,
    },
    nutrition: {
      type: Document,
    },
    activeStatus: {
      type: Boolean,
    },
    evalForm: {
      type: Document,
    },
    lastVetAppt: {
      type: Date,
    },
    farrier: {
        type: Date,
    },
    farrierCycle: {
      type: String,
    },
    deworming: {
      type: Date,
    },
    dewormingCycle: {
      type: String,
    },
    photos: {
      type: Document,
    },
    adoptionContract: {
      type: Document,
    },
  }
);

const Horse = mongoose.model("Horse", HorseSchema);

module.exports = Horse;