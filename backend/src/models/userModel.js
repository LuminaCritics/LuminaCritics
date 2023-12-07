const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../models/mainModel");
const Comment = require("./commentModel");
const Rating = require("./ratingModel");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    modelName: "Users",
    timestamps: false,
  }
);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

module.exports = User;
