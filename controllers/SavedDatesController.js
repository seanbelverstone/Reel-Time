const db = require("../models");

module.exports = {
  get: (request, response) => {
    db.SavedDate.findAll().then((savedDates) => {
      response.json(savedDates);
    });
  },

  create: (request, response) => {
    db.SavedDate
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(err => response.status(422).json(err));
  },

  delete: (request, response) => {
    const id = request.params.id
    db.SavedDate
      .destroy({
        where: { id: id }
      })
      .then(deletedDate => {
          response.json(deletedDate)
      })
      .catch(err => response.status(422).json(err));
  }
};