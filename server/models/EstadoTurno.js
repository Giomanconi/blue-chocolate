const Sequelize = require('sequelize');
const db = require('../config/database');

const EstadoTurno = db.define('EstadoTurno', {
    EstadoTurnoId: {
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

module.exports = EstadoTurno;