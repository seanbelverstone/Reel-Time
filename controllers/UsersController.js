const db = require("../models");

module.exports = {
  get: (request, response) => {
    db.User.findAll().then((users) => {
      response.json(users);
    });
  },
  create: (request, response) => {
    db.User
      .create(request.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => response.status(422).json(err));
  }
};