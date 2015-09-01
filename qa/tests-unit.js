var fortune = require('../lib/fortune.js');
var assert = require('chai').assert;

suite('Fortune cookie test', function(){
	test('getFortune() should return a fortune', function(){
		var f = fortune.getFortune();
		assert(typeof f === 'string');
	});
});