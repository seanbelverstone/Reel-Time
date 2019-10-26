const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

router.route("/:id")
  .get(UsersController.get)

router.route("/")
  .post(UsersController.create);

module.exports = router;