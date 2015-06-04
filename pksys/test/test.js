var expect = require("chai").expect;
var assert = require("assert");
var parkingManager = require('../App/parkingLot1.js');


describe('Parking System',function(){
  var parkingLot1;
  // = parkingManager(3);
  /*it('Successfull', function(){
      
    var status = parkingLot1.isFull();
    console.log("-------------Parking System-----------");
    if(status == true){
      console.log("~~~~~~~~~~~~Parking Lot Full~~~~~~~~~");
    }
    else
      console.log("~~~~~~~~~~~~Parking Available~~~~~~~~");
    var car;

  // ######################  CAR PARKING #######################      
    for(car_no = 0; car_no < 5 ; car_no ++ ){
      car = parkingLot1.park("car"+car_no);

      console.log("\n#car"+car_no+" parking");
      //console.log("car location"+car)
      assert(car == 1 , "car"+car_no+" parking Successfull");
      assert(car == 0 , "car"+car_no+" parking Successfull and parking full");
      assert(car == -1 , "car"+car_no+" parking Successfull");
      if(car == 1 )
        console.log("car"+car_no+" parking Successfull");
      else if(car == 0){
        console.log("car"+car_no+" parking Successfull");
        console.log("\n~~~~~~~~~~~~Parking Lot Full~~~~~~~~~");
      }
      else
        console.log("car"+car_no+" parking UnSuccessfull");
    }


  //######################   CAR UNPARKING ######################
    car = parkingLot1.unpark("car2");
    console.log("\n#car"+car_no+" unparking");
    if(car == 1 ){
      console.log("car"+car_no+" Unparking Successfull");
      console.log("\n~~~~~~~~~~~~Parking Available~~~~~~~~");
    }
     
    else
      console.log("car"+car_no+" not found");


  //######################  CAR PARKING #######################        
    for(car_no = 5; car_no < 10; car_no ++ ){
      car = parkingLot1.park("car"+car_no);
      console.log("\n#car"+car_no+" parking");
      //console.log("car location"+car)
      if(car == 1 )
        console.log("car"+car_no+" parking Successfull");
      else if(car == 0){
        console.log("car"+car_no+" parking Successfull");
        console.log("\n~~~~~~~~~~~~Parking Lot Full~~~~~~~~~");
      }
      else
        console.log("car"+car_no+" parking UnSuccessfull");
    }
  })
  */
  beforeEach(function(){
    parkingLot1 = parkingManager(3);
  })

  it('Parking Success',function(){
    assert.equal(parkingLot1.park("aaa"),"success");
    assert.equal(parkingLot1.park("bbb"),"success");
    //assert.equal(parkingLot1.park("ccc"),1);

  })

  it('Parking Full',function(){
    assert.equal(parkingLot1.park("aaa"),"success");
    assert.equal(parkingLot1.park("bbb"),"success");
    assert.equal(parkingLot1.park("ccc"),"full");
  })

  it('Parking Available',function(){
    assert.equal(parkingLot1.park("aaa"),"success");
    assert.equal(parkingLot1.park("bbb"),"success");
    assert.equal(parkingLot1.park("ccc"),"full");
    assert.equal(parkingLot1.unpark("bbb"),"success");
    assert.equal(parkingLot1.park("ddd"),"full");
  
  })

  it('parking assistant', function(){
    assert.equal(parkingLot1.parkAssistant("aaa",1),"success");
    console.log("      car aaa is at slot : "+parkingLot1.findCar("aaa"));
  })

});

