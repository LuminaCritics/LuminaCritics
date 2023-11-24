const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./mainModel");

class FavoriteAnime extends Model {}

FavoriteAnime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    animeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "FavoriteAnime",
    timestamps: false,
  }
);

module.exports = FavoriteAnime;
