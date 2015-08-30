var express = require('express');
var app =  express();

//设置运行端口
app.set('port', process.env.PORT || 3000);

//定制404页面
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
})

//定制500页面
app.use(function(err, req, res, next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})