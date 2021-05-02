const router = require("express").Router();
const horsesController = require("../../controllers/horsesController");

// Matches with "/api/horse"
router.route("/")
  .get(horsesController.findAll)
  .post(horsesController.create);

  router
  .route("/:id")
  .get(horsesController.findById)
  .put(horsesController.update)
  .delete(horsesController.remove);


module.exports = router;