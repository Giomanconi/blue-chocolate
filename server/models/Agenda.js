'use strict';

module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define('Agenda', {
        agendaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'AgendaId'
        },
        fechaInicio: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            field: 'FechaInicio'
        },
        fechaFin: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            field: 'FechaFin'
        },
        tiempoTurno: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TiempoTurno'
        },
        sobreturno: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Sobreturno'
        },
        prestadorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Prestador',
                key: 'PrestadorId'
            },
            field: 'PrestadorId'
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            field: 'Activo'
        }
    }, {
        tableName: 'Agenda',
        timestamps: false,
        freezeTableName: true
    });

    Agenda.asociate = function (model) {
        model.Agenda.belongsTo(model.Prestador, {
            foreignKey: 'PrestadorId'
        });
        model.Agenda.hasMany(model.HorarioAtencion, {
            foreignKey: 'AgendaId'
        });
    };

    return Agenda;
};
