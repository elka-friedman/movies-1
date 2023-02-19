const db = require('./database');
const Movie = require('./Movie');
const User = require('./User');

Movie.belongsTo(User);
User.hasMany(Movie);

module.exports = {
  db,
  Movie,
  User,
};
