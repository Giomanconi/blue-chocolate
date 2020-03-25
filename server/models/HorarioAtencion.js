const Sequelize = require('sequelize');
const db = require('../config/database');
const Agenda = require('./Agenda');

const HorarioAtencion = db.define('HorarioAtencion', {
    HorarioAtencionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    AgendaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Agenda,
            key: 'id'
        }
    },
    Dia: Sequelize.STRING,
    HoraInicio: Sequelize.TIME,
    HoraFin: Sequelize.TIME,

},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = HorarioAtencion;
