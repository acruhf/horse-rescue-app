const mongoose = require("mongoose");
const db = require("../models");


// This file empties the Horses collection and inserts the horses below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Pony-Express",
  { useUnifiedTopology: true, useNewURLParser: true }
);

const horseSeed = [
  {
    name: "Apple",
    intakeDate: new Date(Date.now()),
    breed: "Mustang",
    age: 16,
    height: 15,
    lastVetAppt: "4/3/2021",
    farrierDate: "4/22/2021",
    farrierCycle: "6 weeks",
    deworming: "4/22/2021",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620761911/vspzferuwbpm3xctliln.jpg"

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
    breed: "Tennessee Walking Horse",
    age: 4,
    height: 16,
    lastVetAppt: "2021-03-09",
    farrierDate: "2021-03-17",
    farrierCycle: "6 weeks",
    deworming: "2021-02-19",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762388/rhkyiu4cavs3nqnii3ru.jpg"
  },
  {
    name: "Cinnamon",
    intakeDate: new Date(Date.now()),
    breed: "Quarter Horse",
    age: 8,
    height: 15,
    lastVetAppt: "2021-04-03",
    farrierDate: "2021-04-22",
    farrierCycle: "6 weeks",
    deworming: "2021-04-01",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762702/gyseo3x436vywq63nmve.jpg"
  },
  {
    name: "Buttercup",
    intakeDate: new Date(Date.now()),
    breed: "Friesian Horse",
    age: 13,
    height: 16,
    lastVetAppt: "2021-02-03",
    farrierDate: "2021-02-22",
    farrierCycle: "6 weeks",
    deworming: "2021-02-01",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762788/jf5ai4ixyfraofznhzsg.jpg"
  },
  {
    name: "Charlotte",
    intakeDate: new Date(Date.now()),
    breed: "Belgian Horse",
    age: 5,
    height: 14,
    lastVetAppt: "2021-02-24",
    farrierDate: "2021-02-17",
    farrierCycle: "6 weeks",
    deworming: "2021-02-16",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762825/c44jfkzybrbrplnr8lfg.jpg"
  },
  {
    name: "Crab",
    intakeDate: new Date(Date.now()),
    breed: "Arabian Horse",
    age: 8,
    height: 15,
    lastVetAppt: "2021-03-24",
    farrierDate: "2021-03-17",
    farrierCycle: "6 weeks",
    deworming: "2021-03-16",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762854/gkhsriyue3ykgjz8aa9o.jpg"
  },
  {
    name: "Fernando",
    intakeDate: new Date(Date.now()),
    breed: "Andalusian Horse",
    age: 17,
    height: 15,
    lastVetAppt: "2021-03-15",
    farrierDate: "2021-03-15",
    farrierCycle: "6 weeks",
    deworming: "2021-03-15",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762882/tlwvc6ch260sv6u6w79v.jpg"
  },
  {
    name: "Lil' Sebastian",
    intakeDate: new Date(Date.now()),
    breed: "Miniature Horse",
    age: 14,
    height: 7,
    lastVetAppt: "2021-04-15",
    farrierDate: "2021-04-15",
    farrierCycle: "6 weeks",
    deworming: "2021-04-15",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762920/rf94qvklpkjzbhqwwghp.jpg"
  },
  {
    name: "Neil",
    intakeDate: new Date(Date.now()),
    breed: "Mustang",
    age: 6,
    height: 15,
    lastVetAppt: "2021-04-12",
    farrierDate: "2021-04-12",
    farrierCycle: "6 weeks",
    deworming: "2021-04-11",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620762982/wdd2pvd6auupk2cjddoh.jpg"
  },
  {
    name: "Rasmus",
    intakeDate: new Date(Date.now()),
    breed: "Clydesdale",
    age: 13,
    height: 17,
    lastVetAppt: "2021-03-12",
    farrierDate: "2021-03-12",
    farrierCycle: "6 weeks",
    deworming: "2021-03-11",
    dewormingCycle: "6 months",
    pictureURL: "https://res.cloudinary.com/sleepytomatoes/image/upload/v1620763002/vxujxrnroaspcehibxtj.jpg"
  },
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