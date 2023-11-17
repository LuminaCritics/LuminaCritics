const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../models/mainModel");
const FavoriteAnime = require("./favoriteAnimeModel")

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
);

User.hasMany(FavoriteAnime);
FavoriteAnime.belongsTo(User);

module.exports = User;
