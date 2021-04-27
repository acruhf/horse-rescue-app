const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HorseSchema = new Schema(
  {
    name: String,
    breed: String,
    age:  Number,
    height: Number,
    intakeDate: Date,
    vetRecords: Document,
    nutrition: Document,
    activeStatus: Boolean,
    evalForm: Document,
    lastVetAppt: Date,
    farrierDate: Date,
    farrierCycle: String,
    deworming: Date,
    dewormingCycle: String,
    img: 
    { data: Buffer,
      contentType: String
    },
    adoptionContract: Document
  }
);

const Horse = mongoose.model("Horse", HorseSchema);

module.exports = Horse;