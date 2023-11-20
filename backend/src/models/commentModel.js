const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("./mainModel");

class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comments',
  timestamps: false
});

module.exports = Comments;
