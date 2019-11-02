/* eslint-disable prettier/prettier */

module.exports = (sequelize, DataTypes) => {
  const SavedDate = sequelize.define('SavedDate', {
    movieTitle: DataTypes.STRING,
    movieImage: DataTypes.STRING,
    movieSynopsis: DataTypes.STRING,
    recipeTitle: DataTypes.STRING,
    recipeImage: DataTypes.STRING,
    recipeLink: DataTypes.STRING,
    rating: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
  }, {});

  SavedDate.sync();
  return SavedDate;
};
