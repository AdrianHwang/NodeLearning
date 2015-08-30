var express = require('express');
var app =  express();

//设置express静态文件路径
app.use(express.static(__dirname + '/public'));


//加入handlebars模板引擎 注意
var handlebars = require('express3-handlebars').create({defaultLayout: 'layout'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//设置运行端口
app.set('port', process.env.PORT || 3000);

// 设置一个数组, 供随机抽取
var fortunes = [
	'战胜他们或被他们战胜',
	'不积小流,无以成江海',
	'不要害怕未知的东西',
	'你会有一个大惊喜',
	'无论何时, 做到简单就行'
]

//加上路由 注意如果没有设置状态码, 默认返回的状态码是200
app.get('/', function(req,res){
	res.render('home');
})

app.get('/about', function(req, res){
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {randomFortune: randomFortune});
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