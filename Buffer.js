var buffer = Buffer.from('hello!');

console.log(buffer);

const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10,1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test', 'latin1');

var buf = Buffer.alloc(256);
var len = buf.write('www.lskyo.com');

console.log('len = ' + len);

for(var i = 0; i < 26; i++){
	buf[i] = i + 97;
}

console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString(undefined));

const buf7 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf7);

const buf8 = Buffer.from('buf8');
const json2 = JSON.stringify(buf8);

console.log(json);
console.log(json2);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});

console.log(copy);

var buffer1 = Buffer.from('lskyo');
var buffer2 = Buffer.from('1122');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('buffer3: ' + buffer3.toString());

var buffer1 = Buffer.from('AD');
var buffer2 = Buffer.from('BC');
var result = buffer1.compare(buffer2);

console.log('result: ' + result);

var buffer1 = Buffer.from('abcdefghijkl');
var buffer2 = Buffer.from('1122');

buffer2.copy(buffer1, 2);

console.log(buffer1 + buffer2);

var buffer2 = buffer1.slice(0,2);

console.log(buffer2.toString());
console.log(buffer2);
console.log(buffer2.length);