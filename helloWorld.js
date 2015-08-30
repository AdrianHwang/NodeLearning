var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': 'Text-plain'});
	res.end('hello world!');
}).listen(3000);

console.log("程序开始运行!");