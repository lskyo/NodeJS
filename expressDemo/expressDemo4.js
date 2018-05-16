var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile('./public/index.html');
});

app.get('/process_get', function (req, res) {
	var response = {
		'Firstname' : req.query.first_name,
		'Lastname' : req.query.last_name
	};

	res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodeParser, function (req, res) {
	var response = {
		'Firstname' : req.body.first_name,
		'Lastname' : req.body.last_name
	};
	res.end(JSON.stringify(response));
});

var server = app.listen(80, function () {
	console.log('Server listen at localhost:80');
});