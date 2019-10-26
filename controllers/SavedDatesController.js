const db = require("../models");

module.exports = {
  get: (request, response) => {
    db.SavedDates.findAll().then((savedDates) => {
      response.json(savedDates);
    });
  },
  create: (request, response) => {
    db.SavedDates
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(err => response.status(422).json(err));
  }
};