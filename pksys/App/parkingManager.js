
//var expect = require("chai").expect;
var parkingSystem = require('parkingLot1.js');
var parkingLot1 = parkingSystem(3);
var success = 1;
//function parkCar() {
	//var carName = document.getElementById('value').value;
	var status = parkingLot1.park("abc");
	if(status == success){
		console.log("Parking Successfull");
	}
	else
		console.log("Parking Failed");
//}
//function unparkCar(){
	//var carName = document.getElementById('value').value;
	var status = parkingLot1.unpark(carName);
	if(status == success){
		console.log("Unparking Successfull");
	}
	else
		console.log("Car Not found");
//}