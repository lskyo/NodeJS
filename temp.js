var Person = require('./person'); 
person = new Person(); 
person.setName('lskyo'); 
person.sayHello(); 
console.log(__filename);
console.log(__dirname);
setTimeout(function () {
	console.log('1s after !');
}, 1000);
var t = setInterval(function () {
	console.log('2s after !');
	clearInterval(t);
}, 2000);