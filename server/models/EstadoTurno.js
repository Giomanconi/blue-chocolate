'use strict';

module.exports =  (sequelize, DataTypes) => {
    const EstadoTurno = sequelize.define('EstadoTurno', {
        estadoTurnoId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'EstadoTurnoId'
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Descripcion'
		}
	}, {
		tableName: 'EstadoTurno',
        timestamps: false,
        freezeTableName: true
	});

        // Prestador.associate = function (models) {
    //     models.Prestador.hasMany(models.Agenda, {
    //         foreignKey: 'PrestadorId',
    //     });
    // };

    return EstadoTurno;
};
