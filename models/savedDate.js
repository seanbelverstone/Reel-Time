"use strict";

module.exports = (sequelize, DataTypes) => {
  const SavedDate = sequelize.define("SavedDate", {
    movieTitle: DataTypes.STRING,
    movieImage: DataTypes.STRING,
    movieSynopsis: DataTypes.STRING(1000),
    recipeTitle: DataTypes.STRING,
    recipeImage: DataTypes.STRING,
    recipeLink: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});

  SavedDate.sync();
  return SavedDate;
};