const router = require("express").Router();
const Horse = require("../models/horse.js");
const Volunteer = require("../models/volunteer.js")

router.post("/api/horse", ({body}, res) => {
    Horse.create(body)
      .then(dbHorse => {
        res.json(dbHorse);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  router.post("/api/horse/bulk", ({body}, res) => {
    Horse.insertMany(body)
      .then(dbHorse => {
        res.json(dbHorse);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
  
  router.get("/api/horse", (req, res) => {
    Horse.find({}).sort({date: -1})
      .then(dbHorse => {
        res.json(dbHorse);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

router.post("/api/volunteer", ({body}, res) => {
  Volunteer.create(body)
    .then(dbVolunteer => {
      res.json(dbVolunteer);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/volunteer/bulk", ({body}, res) => {
  Volunteer.insertMany(body)
    .then(dbVolunteer => {
      res.json(dbVolunteer);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/volunteer", (req, res) => {
  Volunteer.find({}).sort({date: -1})
    .then(dbVolunteer => {
      res.json(dbVolunteer);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;