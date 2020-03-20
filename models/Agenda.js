const Sequelize = require('sequelize');
const db = require('../config/connection');

const Agenda = db.define('Agenda', {
    AgendaTurnoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FechaDesde: Sequelize.DATE,
    FechaHasta: Sequelize.DATE,
    PrestadorId: {
        type: Sequelize.INTEGER,
        references: {
            model: Prestador,
            key: 'id'
        }
    },
    EstablecimientoId: {
        type: Sequelize.INTEGER,
        references: {
            model: Establecimiento,
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

});

module.exports = Agenda;
