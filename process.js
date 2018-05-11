// process.on('exit', function () {
// 	console.log('exit!');

// });
// process.on('beforeExit', function () {
// 	console.log('beforeExit');
// 	setTimeout(function() {
//     	console.log("Timeout!");
//   	}, 1000);
// });

process.stdout.write('stdout!\n');

process.argv.forEach(function (val, index, array) {
	console.log(index + ': ' + val);
});

console.log(process.execPath);

console.log(process.platform);

console.log(process.arch);