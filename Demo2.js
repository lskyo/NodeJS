var fs = require("fs");
var data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log("done!");

fs.readFile('test2.txt', function(err,data2){
	if(err) {
		console.log(err.stack);
		return ;
	}
	console.log(data2.toString());
})
console.log("done2!");