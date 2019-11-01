const db = require("../models");

module.exports = {
  get: (req, resp) => {
    console.log("inside MovieFoodController.js");  //debug

    console.log("next: genreSelected n cuisineTypeSelected");  //deb
    console.log("****************");  //deb
    console.log(req);  //deb
    console.log("****************");  //deb
  }
};