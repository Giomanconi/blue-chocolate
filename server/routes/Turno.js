const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res) {

    models.Turno.findAll()
        .then(p => {
            console.log(p)
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
});

module.exports = router;
