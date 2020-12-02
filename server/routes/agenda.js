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
    let { fechaInicio, tiempoTurno, sobreturno, prestadorId } = await req.body;
    console.log("======================== Agenda Add ===============================")
    // let errors = [];
    const newAgenda = await models.Agenda.create({
        fechaInicio,
        tiempoTurno,
        sobreturno,
        prestadorId,
        activo: 1
    })
    res.send(newAgenda)
    console.log("======================== Agenda Add ===============================")
});

module.exports = router;
