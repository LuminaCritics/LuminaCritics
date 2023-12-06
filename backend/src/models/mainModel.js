require('dotenv').config()
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: process.env.DB_PORT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = { db, sequelize };
