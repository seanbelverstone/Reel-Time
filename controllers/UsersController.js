const db = require("../models");

module.exports = {
  get: (request, response) => {
    db.User.findOne({
      where: {
        id: request.params.id
      }
    }).then((users) => {
      response.json(users);
    });
  },
   
  create: (request, response) => {
    console.log(request.body);  //t
    db.User
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(err => response.status(422).json(err));
  }
};