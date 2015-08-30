var express = require('express');
var app =  express();

//设置运行端口
app.set('port', process.env.PORT || 3000);

//加上路由 注意如果没有设置状态码, 默认返回的状态码是200
app.get('/', function(req,res){
	res.type('text/plain');
	res.send('这是一个旅游网站');
})

app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('这是关于我页面');
})

//定制404页面 app.use是express中间件的一种方法
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