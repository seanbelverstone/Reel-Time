const router = require("express").Router();
const SavedDatesController = require("../../controllers/SavedDatesController");

router.route("/")
    .get(SavedDatesController.get)
    .post(SavedDatesController.create);


router.route("/:id")
    .delete(SavedDatesController.delete);

module.exports = router;