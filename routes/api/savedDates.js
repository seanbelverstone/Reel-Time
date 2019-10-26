const router = require("express").Router();
const SavedDatesController = require("../../controllers/SavedDatesController");

router.route("/")
  .get(SavedDatesController.get)
  .post(SavedDatesController.create);

module.exports = router;