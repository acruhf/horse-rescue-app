const router = require("express").Router();
const horseController = require("../../controllers/horseController");

// Matches with "/api/horse"
router.route("/")
  .get(horseController.findAll)
  .post(horseController.create);

// Matches with "/api/horse/:id"
router
  .route("/:id")
  .get(horseController.findById)
  .put(horseController.update)
  .delete(horseController.remove);

module.exports = router;