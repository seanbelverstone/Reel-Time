const SearchController = require("../../controllers/SearchController");

export default function(app) {

    app.route("/api/movie/:movie")
    .get(SearchController.movieApi)

    app.route("/api/recipe/:recipe")
    .get(SearchController.recipeApi)

}

