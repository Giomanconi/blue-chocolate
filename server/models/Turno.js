'use strict';

module.exports = (sequelize, DataTypes) => {
    const Turno = sequelize.define('Turno', {
        turnoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'TurnoId'
        },
        horarioAtencionId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'HorarioAtencion',
                key: 'HorarioAtencionId'
            },
            field: 'HorarioAtencionId'
        },
        prestadorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PrestadorId'
        },
        pacienteId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Paciente',
                key: 'PacienteId'
            },
            field: 'PacienteId'
        },
        hora: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'Hora'
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            field: 'Fecha'
        },
        estadoTurnoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'EstadoTurno',
                key: 'EstadoTurnoId'
            },
            field: 'EstadoTurnoId'
        }
    }, {
        tableName: 'Turno',
        timestamps: false,
        freezeTableName: true
    });

    // Prestador.associate = function (models) {
    //     models.Prestador.hasMany(models.Agenda, {
    //         foreignKey: 'PrestadorId',
    //     });
    // };

    return Turno;

};
