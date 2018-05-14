var http = require("http");
http.createServer(function (req,res){
	res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
	res.write(util.inspect(url.parse(req.url, true)));
	var params = url.parse(req.url, true).query;
	res.write('\nname=' + params.name);
	res.write('\nage=' + params.age);
	res.end();

}).listen(80);
console.log('Server running at http://127.0.0.1:80');