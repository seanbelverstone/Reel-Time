const SavedDatesController = require("../../controllers/SavedDatesController");
import passport from "passport";


export default function(app) {

    app.use(passport.authenticate("jwt", {session: false}));

    app.route("/api/savedDates/")
        .post(SavedDatesController.create);

    app.route("/api/savedDates/:id")
        .get(SavedDatesController.get)
        .delete(SavedDatesController.delete);
}
