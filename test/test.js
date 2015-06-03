var assert = require("assert"); // node.js core module
var c = require('../app1.js');
describe('PARKING', function(){
  describe('PARK', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(1, [1,2,3].indexOf(2)); // 4 is not present in this array so indexOf returns -1
    })
  })
});