const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("./mainModel");

class Movie extends Model {}

Movie.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  genres: {
    type: DataTypes.JSON,
    allowNull: false
  },
  popularity: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  backdrop_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poster_path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Movies',
  timestamps: false
});

module.exports = Movie;
