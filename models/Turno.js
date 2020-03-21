const Sequelize = require('sequelize');
const db = require('../config/connection');
const HorarioAtencion = require('./HorarioAtencion');
const Prestador = require('./Prestador');
const Paciente = require('./Paciente');
const EstadoTurno = require('./EstadoTurno');

const Turno = db.define('Turno', {
    TurnoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    HorarioAtencionId: {
        type: Sequelize.INTEGER,
        references: {
            model: HorarioAtencion,
            key: 'id'
        }
    },
    PrestadorId: {
        type: Sequelize.INTEGER,
        references: {
            model: Prestador,
            key: 'id'
        }
    },
    PacienteId: {
        type: Sequelize.INTEGER,
        references: {
            model: Paciente,
            key: 'id'
        }
    },
    Hora: Sequelize.TIME,
    Fecha: Sequelize.DATE,
    EstadoTurnoId: {
        type: Sequelize.INTEGER,
        references: {
            model: EstadoTurno,
            key: 'id'
        }
    }

});

module.exports = Turno;