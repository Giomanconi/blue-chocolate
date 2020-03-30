const express = require('express');
const router = express.Router();
const Prestador = require('../models/Prestador');

//get all prestadores
router.get('/', async function (req, res) {

    try {
        const prestador = await Prestador.findAll({raw: true});
        // console.log(prestador.every(p => p instanceof Paciente)); // true
        res.status(200).send(prestador)
        
    } catch (e) {
        console.log('Error getting Prestadores: ' + e)
    }
});

module.exports = router;
