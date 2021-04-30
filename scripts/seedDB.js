const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Pony-Express"
);

const horseSeed = [
{
   
    name: "Apple",
    // breed: "Mustang",
    // age: 16,
    // height: 15,
    // intakeDate: {"$date": "2020-03-05"},
    // vetRecords: "",
    // nutrition: "",
    // activeStatus: true,
    // evalForm: "",
    // lastVetAppt: {"$date": "2021-04-03"},
    // farrierDate: {"$date": "2021-04-22"},
    // farrierCycle: "6 weeks",
    // deworming: {"$date": "2021-04-01"},
    // dewormingCycle: "6 months",
    // img: "",
    // adoptionContract: ""
 

}];

db.Horse.remove({})
  .then(() => db.Horse.collection.insertMany(horseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });