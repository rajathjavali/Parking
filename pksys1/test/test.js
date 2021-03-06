var expect = require("chai").expect; // node.js core module
var c = require('../App/app1.js');


describe('PARKING', function(){
  //describe('SPOT', function(){
  	before(function(){
		//console.log("before");
		c.initialize(1);
	})

    it('Successful', function(){
    	//c.initialize(100);
    	var abc = c.park("abc");
      	expect(abc).to.equal(1); 
    })

    it('failed', function(){
    	//c.initialize(100);
    	var abc = c.park("bc");
      	expect(abc).to.equal(-1); 
    })

    it('unpark Successful', function(){
    	//c.initialize(100);
    	var abc = c.unpark("abc");
      	expect(abc).to.equal(1); 
    })

it('unpark unSuccessful', function(){
    	//c.initialize(100);
    	var abc = c.unpark("bc");
      	expect(abc).to.equal(0); 
    })

  //})
});



/*var expect = require("chai").expect;
var parkingManager = require('../App/parkingLot1.js');

describe('Parking',function(){
  var parkingLot1 = parkingManager(3);
  it('Successful', function(){
      //c.initialize(100);
      console.log("value"+parkingLot1);
      var abc = parkingLot1.park("abc");
      console.log("status"+abc);
        expect(abc).to.equal(1); 
    })
});*/