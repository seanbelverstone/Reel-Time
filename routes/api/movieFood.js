const MovieFoodController = require("../../controllers/MovieFoodController");

export default function(app) {

    // app.route("/api/savedDates/")
    //     .post(SavedDatesController.create);

    app.route("/api/movieFood/")
        .get(MovieFoodController.get);
}
