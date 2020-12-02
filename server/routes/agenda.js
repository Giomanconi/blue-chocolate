const express = require('express');
const router = express.Router();
const models = require('../models');
const { QueryTypes } = require('sequelize');

//get all agendas
router.get('/', async function (req, res) {
    try {
        const prestador = await models.sequelize.query(
            'select pr.RazonSocial, ag.FechaInicio, ag.FechaFin, ag.Activo, ag.AgendaId from Agenda as ag inner join Prestador as pr on  ag.PrestadorId = pr.PrestadorId order by pr.RazonSocial, ag.FechaInicio',
            {
                type: QueryTypes.SELECT
            }
        );
        res.status(200).send(prestador)
    } catch (e) {
        console.log('Error getting agendas: ' + e)
    }
});


// Add new agenda
router.post('/add', async function (req, res) {
    let {
        fechaInicio,
        tiempoTurno,
        sobreturno,
        prestadorId,
        horarios } = req.body
    // let errors = [];

    //Set transaction to T
    const t = await models.sequelize.transaction();

    try {
        //Insert Agenda to db
        const newAgenda = await models.Agenda.create({
            fechaInicio,
            tiempoTurno,
            sobreturno,
            prestadorId,
            activo: 1,
        },
            {
                transaction: t
            });

        //Add agenda id key to horarios array
        horarios.forEach(p => {
            p.agendaId = newAgenda.agendaId
        },
            {
                transaction: t
            });

        //insert horarios array to db
        await models.HorarioAtencion.bulkCreate(
            horarios,
            {
                transaction: t
            });

        //Commit Transaction
        await t.commit();

        //Send Response
        res.send(newAgenda).status(200);

    } catch (e) {
        //revert transaction
        await t.rollback();
    }

    // models.Agenda.findOne({ where: { prestadorId: prestadorId } })
    //     .then(user => {
    //         if (user) {
    //             console.log('Usuario encontrado:', user);
    //         } else {
    //             throw new Error("No existe el Usuario");
    //         }
    //     })
    //     .catch(error => {
    //         console.log("Error:", error);
    //     });

});

module.exports = router;
