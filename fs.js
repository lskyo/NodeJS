var fs = require("fs");
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log("done!");

// fs.readFile('test2.txt', function(err,data2){
// 	if(err) {
// 		console.log(err.stack);
// 		return ;
// 	}
// 	console.log(data2.toString());
// });
// console.log("done2!");

// fs.open('input.txt', 'r+', function (err, fd) {
// 	if(err){
// 		return console.log('err');
// 	}
// 	console.log('open success');
// });

// fs.stat('fs.js', function (err, stats) {
// 	console.log(stats);
//     console.log(stats.isFile());         //true
// });

// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile('input.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });

// var buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function (err, fd) {
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('open success');

// 	fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
// 		if(err){
// 			console.log(err);
// 		}
// 		console.log(bytes + ' bytes has been read!');

// 		if(bytes > 0){
// 			console.log(buf.slice(0, bytes).toString());
// 		}
// 	});

// 	fs.close(fd, function (err) {
// 		if(err){
// 			console.log(err);
// 		}
// 		console.log('close file success!');
// 	})
// });


// var buf2 = new Buffer(1024);
// fs.open('input.txt', 'r+', function (err, fd) {
// 	if(err){
// 		console.log(err.stack);
// 	}

// 	fs.ftruncate(fd, 10, function (err) {
// 		if(err){
// 			console.log(err.stack);
// 		}

// 		fs.read(fd, buf2, 0, buf2.length, 0, function (err, bytes) {
// 			if(err){
// 				console.log(err.stack);
// 			}

// 			if(bytes > 0){
// 				console.log(buf2.slice(0, bytes).toString());
// 			}

// 			fs.close(fd);
// 		})
// 	})
// });

// fs.unlink('test.txt', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
// });
fs.mkdir("test",function(err){
   if (err) {
       return console.error(err.stack);
   }
   console.log("目录创建成功。");
});


fs.writeFile('./test/test.txt', 'test', function (err) {
	if(err){
		console.log(err.stack);
	}
});


fs.readdir("./test/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach(function (file){
       console.log( file );
   });
});