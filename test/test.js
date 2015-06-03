var assert = require("assert"); // node.js core module
var c = require('../app1.js');
describe('PARKING', function(){
  //describe('SPOT', function(){
    it('Successful', function(){
    	c.initialize(100);
      	assert.equal(1,c.park('abc')); // 4 is not present in this array so indexOf returns -1
    })
  //})
});