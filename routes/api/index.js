const router = require("express").Router();
const horseRoutes = require("./horses");

// Book routes
router.use("/horses", horseRoutes);

module.exports = router;
