var events = require('events');

var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
// 	console.log('connect success.');
// 	eventEmitter.emit('data_received');
// }
// eventEmitter.on('data_received', function () {
// 	console.log('data received');
// })
// eventEmitter.on('connection', connectHandler);
// eventEmitter.emit('connection');


// eventEmitter.on('boom', function () {
// 	console.log('boom connected!');
// })
// eventEmitter.on('boom', function (arg) {
// 	console.log('boom ' + arg);
// })
// // eventEmitter.emit('boom');
// eventEmitter.emit('boom', 'arg1')


var listener1 = function listener1() {
	console.log('listen1 done!');
}
var listener2 = function listener2() {
	console.log('listen2 done!');
}
eventEmitter.on('connection', listener1);
eventEmitter.on('connection', listener2);
var eventListenCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenCount + ' listener listening!');
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
var eventListenCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenCount + ' listener listening!');
eventEmitter.emit('connection');


console.log('done!');