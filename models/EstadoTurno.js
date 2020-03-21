const Sequelize = require('sequelize');
const db = require('../config/connection');

const EstadoTurno = db.define('EstadoTurno', {
    EstadoTurnoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Descripcion: Sequelize.STRING

});

module.exports = EstadoTurno;