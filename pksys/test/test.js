var expect = require("chai").expect;

var parkingManager = require('../App/parkingLot1.js');


describe('Parking System',function(){
  var parkingLot1 = parkingManager(3);
  it('Successfull', function(){
      
    var status = parkingLot1.isFull();
    console.log("-------------Parking System-----------");
    if(status == true){
      console.log("~~~~~~~~~~~~Parking Lot Full~~~~~~~~~");
    }
    else
      console.log("~~~~~~~~~~~~Parking Available~~~~~~~~");

/* ######################  CAR PARKING #######################*/    
    var car;
    for(car_no = 0; car_no < 5 ; car_no ++ ){
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


/*######################   CAR UNPARKING ######################*/
    car = parkingLot1.unpark("car2");
    console.log("\n#car"+car_no+" unparking");
    if(car == 1 ){
      console.log("car"+car_no+" Unparking Successfull");
      console.log("\n~~~~~~~~~~~~Parking Available~~~~~~~~");
    }
     
    else
      console.log("car"+car_no+" not found");
  })

});

