var readline = require('readline');




  /*before(function(){
    var status = parkingLot1.isFull();
    if(status == TRUE){
      console.log("~~~~~~~~~~~~Parking Lot Full~~~~~~~~~");
    }
    else
      console.log("~~~~~~~~~~~~Parking Available~~~~~~~~");
  })
*/



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



    var flag = true;
      /*rl.question('Enter : \n1 - > Park Car\n2 - > Unpark Car\n3 - > Quit\n', function(answer) {
        console.log('Oh, so your favorite food is ' + answer);
      });*/
    console.log("Enter : \n1 - > Park Car\n2 - > Unpark Car\n3 - > Quit\n");
    rl.on('line', function (cmd) {
      //console.log('You just typed: '+cmd);
      
      if(cmd == 1){
        //rl.on('Enter Car Name : ', function (cmd) {
          parkingLot1.park("cmd");        
        //});       
      }
      if(cmd == 2){
        //rl.on('Enter Car Name : ', function (cmd) {
          parkingLot1.park("cmd");        
        //});       
      }
      if(cmd == 3){
        flag = false;       
      }

    });