const router = require("express").Router();
const SavedDatesController = require("../../controllers/SavedDatesController");

router.route("/")
    .post(SavedDatesController.create);


router.route("/:id")
    .get(SavedDatesController.get)
    .delete(SavedDatesController.delete);

module.exports = router;