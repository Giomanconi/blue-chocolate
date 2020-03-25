const Sequelize = require('sequelize');
const db = require('../config/database');
const Prestador = require('./Prestador');
const EstadoAgenda = require('./EstadoAgenda');

const Agenda = db.define('Agenda', {
    AgendaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FechaInicio: Sequelize.DATE,
    FechaFin: Sequelize.DATE,
    TiempoTurno: Sequelize.INTEGER,
    SobreTurno: Sequelize.INTEGER,
    PrestadorId: {
        type: Sequelize.INTEGER,
        references: {
            model: Prestador,
            key: 'id'
        }
    },
    EstadoAgendaId: {
        type: Sequelize.INTEGER,
        references: {
            model: EstadoAgenda,
            key: 'id'
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});

// Agenda.hasMany(Prestador);

module.exports = Agenda;
