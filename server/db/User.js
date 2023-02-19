const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  ratings: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
