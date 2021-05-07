const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HorseSchema = new Schema({
  name: { type: String },
  date: { type: Date, default: Date.now },
  breed: { type: String },
});

// const HorseSchema = new Schema(
//   {
//     name: String,
    // breed: String,
    // age:  Number,
    // height: Number,
    // intakeDate: Date,
    // vetRecords: String,
    // nutrition: String,
    // activeStatus: Boolean,
    // evalForm: String,
    // lastVetAppt: Date,
    // farrierDate: Date,
    // farrierCycle: String,
    // deworming: Date,
    // dewormingCycle: String,
    // img: 
    // { data: Buffer,
    //   contentType: String
    // },
    // adoptionContract: String
//   }
// );

const Horse = mongoose.model("Horse", HorseSchema);

module.exports = Horse;