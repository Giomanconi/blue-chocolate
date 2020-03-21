const Sequelize = require('sequelize');
const db = require('../config/connection');

const Paciente = db.define('Paciente', {
    PacienteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Descripcion: Sequelize.STRING

});

module.exports = Paciente;