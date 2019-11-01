const MovieFoodController = require("../../controllers/MovieFoodController");

export default function(app) {

    console.log("in routes/api/movieFood.js");  //deb

    app.route("/api/movieFood/")
        .get(MovieFoodController.get);
}
