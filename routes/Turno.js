const express = require('express');
const router = express.Router();
const Turno = require('../models/Turno');

router.get('/', function (req, res) {

    Turno.findAll()
        .then(Turno => {
            console.log(Turno)
            res.sendStatus(200);
        })
        .catch(err => console.log(err))

});

module.exports = router;