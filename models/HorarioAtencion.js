const Sequelize = require('sequelize');
const db = require('../config/connection');
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

});

module.exports = HorarioAtencion;
