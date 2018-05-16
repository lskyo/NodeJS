var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('Hello!');
});

var server = app.listen(80, function () {
	console.log('Server listen at localhost:80');
})
