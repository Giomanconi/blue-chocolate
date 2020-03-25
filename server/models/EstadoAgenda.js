const Sequelize = require('sequelize');
const db = require('../config/database');

const EstadoAgenda = db.define('EstadoAgenda', {
    EstadoAgendaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Descripcion: Sequelize.STRING

},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = EstadoAgenda;