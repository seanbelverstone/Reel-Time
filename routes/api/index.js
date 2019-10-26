const router = require("express").Router();
const userRoutes = require("./users");
const dateRoutes = require("./savedDates");

router.use("/users", userRoutes);
router.use("/savedDates", dateRoutes);

module.exports = router;