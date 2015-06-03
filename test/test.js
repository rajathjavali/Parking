var expect = require("chai").expect; // node.js core module
var c = require('../app1.js');
describe('PARKING', function(){
  //describe('SPOT', function(){
    it('Successful', function(){
    	c.initialize(100);
    	var abc = c.park("abc");
      	expect(abc).equal(1); 
    })
  //})
});