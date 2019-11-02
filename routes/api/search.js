const SearchController = require("../../controllers/SearchController");

export default function(app) {

    app.route("/api/search/:movie")
    .get(SearchController.api)
}

