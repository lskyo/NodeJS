var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello Get /');
});

app.post('/', function (req, res) {
	res.send('Hello Post /');
});

app.get('/ab*cd', function (req, res) {
	res.send('Hello Get /ab*cd');
});

var server = app.listen(80, function () {
	console.log('Server listen at localhost:80');
});