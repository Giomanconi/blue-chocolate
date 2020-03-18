const Sequelize = require('sequelize');


// Create connection to database
module.exports = new Sequelize('GestionSanatorial', 'conexion', 'conexion', {
  host: 'localhost',
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});