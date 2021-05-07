const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Pony-Express", 
  { useUnifiedTopology: true, useNewURLParser: true }
  );

const horseSeed = [
{
   name: "Apple",
   intakeDate: new Date(Date.now()),
   breed: "Mustang",
  //  age: 16,
  //  height: 15,
  //  lastVetAppt: {$date: "2021-04-03"},
  //  farrierDate: {$date: "2021-04-22"},
  //  farrierCycle: "6 weeks",
  //  deworming: {"date": "2021-04-01"},
  //  dewormingCycle: "6 months",

    // img: "",
    // vetRecords: "",
    // nutrition: "",
    // evalForm: "",
    // adoptionContract: ""
    // activeStatus: true,
 },
 { 
   name: "Ruby",
   intakeDate: new Date(Date.now()),
   breed: "Tennesee Walking Horse",
  //  age: 4,
  //  height: 16,
  //  lastVetAppt: {"$date": "2021-03-09"},
  //  farrierDate: {"$date": "2021-03-17"},
  //  farrierCycle: "6 weeks",
  //  deworming: {"$date": "2021-02-019"},
  //  dewormingCycle: "6 months",
 },
 { 
   name: "Cinnamon",
   intakeDate: new Date(Date.now()),
   breed: "Quarter Horse",
  //  age: 16,
  //  height: 15,
  //  lastVetAppt: {"$date": "2021-04-03"},
  //  farrierDate: {"$date": "2021-04-22"},
  //  farrierCycle: "6 weeks",
  //  deworming: {"$date": "2021-04-01"},
  //  dewormingCycle: "6 months",
}
];

db.Horse.deleteMany({})
  .then(() => db.Horse.collection.insertMany(horseSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });