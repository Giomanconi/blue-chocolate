'use strict';

module.exports = (sequelize, DataTypes) => {
    var HorarioAtencion = sequelize.define('HorarioAtencion', {
        horarioAtencionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'HorarioAtencionId'
        },
        agendaId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Agenda',
                key: 'AgendaId'
            },
            field: 'AgendaId'
        },
        dia: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Dia'
        },
        horaInicio: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'HoraInicio'
        },
        horaFin: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'HoraFin'
        },
        estadoHorario: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            field: 'EstadoHorario'
        }
    }, {
        tableName: 'HorarioAtencion',
        timestamps: false,
        freezeTableName: true
    });

    HorarioAtencion.associate = function (models) {
        models.HorarioAtencion.belongsTo(models.Agenda, {
            as: 'horarios'
            // foreignKey: 'AgendaId',
        });

    };


    return HorarioAtencion;
};

