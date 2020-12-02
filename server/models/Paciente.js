'use strict';

module.exports = (sequelize, DataTypes) => {
    var Paciente = sequelize.define('Paciente', {
        pacienteId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'PacienteId'
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Descripcion'
        }
    }, {
        tableName: 'Paciente',
        timestamps: false,
        freezeTableName: true
    });
    // User.associate = function (models) {
    //     models.User.hasMany(models.Task);
    // };

    return Paciente;
};