const MovieFoodController = require("../../controllers/MovieFoodController");

export default function(app) {

    console.log("in routes/api/movieFood.js");  //deb

    console.log("****************");  //deb
    console.log(app);  //deb
    console.log("****************");  //deb
    
    app.route("/api/movieFood/")
        .get(MovieFoodController.get);
}
