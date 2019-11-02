const SavedDatesController = require("../../controllers/SavedDatesController");

export default function(app) {

    app.route("/api/savedDates/")
        .post(SavedDatesController.create);

    app.route("/api/savedDates/:id")
        .get(SavedDatesController.get)
        .delete(SavedDatesController.delete);

    app.route('/api/user_info').get(function(request, response) {
        response.json(request.user);
    })
}
