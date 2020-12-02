'use strict';

module.exports = (sequelize, DataTypes) => {
    var Prestador = sequelize.define('Prestador', {
        prestadorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'PrestadorId'
        },
        razonSocial: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'RazonSocial'
        }
    }, {
        tableName: 'Prestador',
        timestamps: false,
        freezeTableName: true
    });

    Prestador.associate = function (models) {
        models.Prestador.hasMany(models.Agenda, {
            foreignKey: 'PrestadorId',
        });
    };


    return Prestador;
};
