var fs = require('fs');
var data = '';
var i = 0;
var readStream = fs.createReadStream('test.txt');

readStream.setEncoding('UTF8');

readStream.on('data', function (chunk) {
	data += chunk;
});

readStream.on('end', function () {
	console.log(data);
});

readStream.on('error', function (err) {
	console.log(err.stack);
});

console.log('read done!');

var data2 = 'lskyo1122';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data2, 'UTF8');

writerStream.end();

writerStream.on('finish', function () {
	console.log('write finish');
});

writerStream.on('error',function (err) {
	console.log(err.satck);
});

console.log('write done!');

var input = fs.createReadStream('test.txt');

var output = fs.createWriteStream('output2.txt');

input.on('error',function (err) {
	console.log(err.stack);
});

input.pipe(output);