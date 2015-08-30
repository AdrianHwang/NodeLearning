var http = require('http'),
	fs = require('fs');

function serveStaticFild(res, path, contenttype, responsecode){
	if(!responsecode) responsecode = 200;
	fs.readFile(__dirname + path, function(err, data){
		if(err){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('500 - Internal Error');
		} else {
			res.writeHead(responsecode, contenttype);
			res.end(data);
		}
	})
}


http.createServer(function(req, res){
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
			serveStaticFild(res, '/public/home.html', 'text/html');
			break;
		case '/about':
			serveStaticFild(res, '/public/about.html', 'text/html');
			break;
		case '/img/logo.jpeg':
			serveStaticFild(res, '/public/img/logo.jpeg', 'image/jpeg');
			break;
		default:
			serveStaticFild(res, '/public/notfound.html', 'text/html', 404);
			break;

	}
}).listen(3000);

console.log("程序开始运行!");