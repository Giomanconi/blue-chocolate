const Sequelize = require('sequelize');
const db = require('../config/database');

const Prestador = db.define('Prestador', {
    PrestadorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    RazonSocial: Sequelize.STRING

},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Prestador;