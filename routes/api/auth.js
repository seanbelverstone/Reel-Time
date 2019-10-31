const AuthController = require("../../controllers/AuthController");

export default function(app) {
    app.route("/api/auth/")
        .post(AuthController.validate);
}
