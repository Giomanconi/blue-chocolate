const express = require('express');
const router = express.Router();
const Agenda = require('../models/Agenda');

router.get('/', function (req, res) {

    Agenda.findAll()
        .then(agenda => {
            console.log(agenda)
            res.sendStatus(200);
        })
        .catch(err => console.log(err))

});

module.exports = router;
