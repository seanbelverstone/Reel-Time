"use strict";

module.exports = (sequelize, DataTypes) => {
  const SavedDate = sequelize.define("SavedDate", {
    movieTitle: DataTypes.STRING,
    movieImage: DataTypes.STRING,
    movieSynopsis: DataTypes.STRING,
    recipeTitle: DataTypes.STRING,
    recipeIngredients: DataTypes.STRING,
    recipeMethod: DataTypes.STRING,
    rating: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {});
  // SavedDate.associate = function(models) {
  //   SavedDate.belongsTo(models.User)
  // };
  SavedDate.sync();
  return SavedDate;
};