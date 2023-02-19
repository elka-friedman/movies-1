const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/movies', {
  logging: false,
});

module.exports = db;
