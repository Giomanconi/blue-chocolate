const express = require('express');
const sequelize = require('sequelize')
const router = express.Router();
const Agenda = require('../models/Agenda');
const db = require('../config/database')

//get all agendas
router.get('/', async function (req, res) {

    try {
        const agenda = await Agenda.findAll({ raw: true });
        // console.log(paciente.every(p => p instanceof Paciente)); // true
        res.status(200).send(agenda)

    } catch (e) {
        console.log('Error getting agendas: ' + e)
    }
});

// Add new agenda
router.post('/add', async function (req, res) {

    let { FechaInicio, TiempoTurno, SobreTurno, PrestadorId } = await req.body;
    console.log("=======================================================" + req.body)
    // let errors = [];

    const newAgenda = await Agenda.create({
        FechaInicio,
        TiempoTurno,
        SobreTurno,
        PrestadorId,
    })

    res.send(newAgenda)
});


module.exports = router;
