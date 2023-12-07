const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("./mainModel");


class Rating extends Model {}

Rating.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
}, {
  sequelize,
  modelName: 'Ratings',
  timestamps: false
});

module.exports = Rating;
