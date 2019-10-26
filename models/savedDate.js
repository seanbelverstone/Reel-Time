"use strict";

module.exports = (sequelize, DataTypes) => {
  const SavedDate = sequelize.define("SavedDate", {
    movieTitle: DataTypes.STRING,
    movieImage: DataTypes.STRING,
    movieSynopsis: DataTypes.STRING,
    recipeTitle: DataTypes.STRING,
    recipeIngredients: DataTypes.STRING,
    recipeMethod: DataTypes.STRING
  }, {});
  SavedDate.associate = function(models) {
    // associations can be defined here
  };
  SavedDate.sync();
  return SavedDate;
};