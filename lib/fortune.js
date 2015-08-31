// 设置一个数组, 供随机抽取
var fortunes = [
	'战胜他们或被他们战胜',
	'不积小流,无以成江海',
	'不要害怕未知的东西',
	'你会有一个大惊喜',
	'无论何时, 做到简单就行'
];

exports.getFortune =  function(){
	var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	return fortune;
};