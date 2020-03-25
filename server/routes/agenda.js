const express = require('express');
const router = express.Router();
const Agenda = require('../models/Agenda');

router.get('/', function (req, res) {

    Agenda.findAll()
        .then(p => {
            console.log(p)
            res.sendStatus(200);
        })
        .catch(err => console.log('Error:::::::::' + err + '-----------------------------'))

});

module.exports = router;
