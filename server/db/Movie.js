const Sequelize = require('sequelize');
const db = require('./database');

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  ratings: {
    type: Sequelize.ENUM([1, 2, 3, 4, 5]),
  },
});

module.exports = Movie;
