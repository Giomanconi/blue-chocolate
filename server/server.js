const express = require('express');
const db = require('./config/database');
const PORT = process.env.PORT || 8080;
const app = express();

/*Test DB*/
db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err));
/*********/

app.get('/', (req, res) => res.send('INDEX'));


//Agenda Routes
app.use('/agendas', require('./routes/agenda'));


app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}...`);
});
