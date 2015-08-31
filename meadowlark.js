var express = require('express');
var app =  express();
var fortune = require('./lib/fortune.js');

//设置express静态文件路径
app.use(express.static(__dirname + '/public'));


//加入handlebars模板引擎 注意
var handlebars = require('express3-handlebars').create({defaultLayout: 'layout'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//设置运行端口
app.set('port', process.env.PORT || 3000);

// 添加测试路由
app.use(function(req,res,next){
	res.locals.showTests = (app.get('evn') !=='production' && req.query.test === '1');
	next();
})

//加上路由 注意如果没有设置状态码, 默认返回的状态码是200
app.get('/', function(req,res){
	res.render('home');
})

app.get('/about', function(req, res){
	res.render('about', {
		fortune: fortune.getFortune(),
		pageTestScript: "/qa/tests-about.js"
	});
})

app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river');
})

app.get('/tours/request-group-rate', function(req,res){
	res.render('tours/request-group-rate');
})

//定制404页面 app.use是express中间件的一种方法
app.use(function(req, res){
	res.status(404);
	res.render('404');
})

//定制500页面
app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
})