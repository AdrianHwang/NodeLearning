var http = require('http');

function createPage(res, httpcode,text){
	res.writeHead(httpcode, {'Content-Type': 'text/plain'});
	res.end(text);
}

http.createServer(function(req, res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
			createPage(res, '200',  "HomePage");
			break;
		case '/about':
			createPage(res, '200', "about me");
			break;
		default:
			createPage(res, '404', "not found");
			break;

	}
}).listen(3000);

console.log("程序开始运行!");