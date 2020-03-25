const express = require('express');
const router = express.Router();
const HorarioAtencion = require('../models/HorarioAtencion');

router.get('/', function (req, res) {

    HorarioAtencion.findAll()
        .then(p => {
            console.log(p)
            res.sendStatus(200);
        })
        .catch(err => console.log(err))

});

module.exports = router;
