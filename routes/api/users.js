const UsersController = require("../../controllers/UsersController");
import passport from "passport";

export default function(app) {

  app.use(passport.authenticate("jwt", {session: false}));
      // Any routes that NEED to be secure, basically any routes AFTER user has logged in, need to have this passport.authenticate part.

  app.route("/api/users/:id")
    .get(UsersController.get)

  app.route("/api/users/")
    .post(UsersController.create);
}

// Move the create user route into the auth.js