const express = require('express');
const db = require('./config/database');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080;
const app = express();


/*Test DB*/
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err));
/*********/

//Body parser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

//Index route
app.get('/', (req, res) => res.send('INDEX'));

//Agenda Routes
app.use('/agenda', require('./routes/agenda'));
app.use('/horario', require('./routes/horarioAtencion'));
app.use('/turno', require('./routes/turno'));
app.use('/prestador', require('./routes/prestador'));


app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}...`);
});
