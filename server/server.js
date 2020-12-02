const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use Path
app.use(express.static(path.join(__dirname, 'public')));

//Index route
app.get('/', (req, res) => res.send('INDEX'));

//Defining routes
var agendaRoute = require('./routes/agenda')
var horarioRoute = require('./routes/horarioAtencion')
var turnoRoute = require('./routes/turno')
var prestadorRoute = require('./routes/prestador')

//Using Routes
app.use('/agenda', agendaRoute);
app.use('/horario', horarioRoute);
app.use('/turno', turnoRoute);
app.use('/prestador', prestadorRoute);


module.exports = app;
