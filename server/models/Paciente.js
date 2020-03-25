const Sequelize = require('sequelize');
const db = require('../config/database');

const Paciente = db.define('Paciente', {
    PacienteId: {
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

module.exports = Paciente;