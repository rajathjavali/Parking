
module.exports = function (num){
	var size = num;
	var occupied = 0;
	var spot = new Array(num);
	var success = 1;
	var full = 0;
	var fail = -1;
	//var spaceAvailable = true;
	var park = function (name) {
	  
	    var place = 0 , flag = 0;
	    while(place < size && spot[place] != null)//&& spaceAvailable) 
		{
			place++;
		}
		if(place < size){
	    	spot[place] = name; 
	    	occupied++;
	    	flag=1;
		}
	    if(occupied == size && flag == success)
	    	return full;
	    else if(occupied == size && flag != success)
	    	return fail;
	    else if(flag == success)
	    	return success;
		else
			return fail;
	    //var status = isFull();

	};

	var isFull = function (){
		if(occupied < size){
			return false;
		}
		else
			return true;
		/*var spaceFinder =0;
	   	while(spot[spaceFinder] != null){
	   		spaceFinder++;
	   	}
	   	if(spaceFinder == size){
	   		spaceAvailable = false;
	   	}
	   	else
	   	{
	   		spaceAvailable = true;
	   	}*/
	}

	var unpark= function(name){
		  
		var carFinder=0;
		var place = 0;
		while(carFinder < size && spot[carFinder]!=name){
			carFinder ++;
		}
		if(carFinder < size){		
			spot[carFinder] = null;
			occupied --;
			return success;
		}
		else{
			return fail;
		}
		
	};

	return {
		isFull: isFull,
		park: park,
		unpark:unpark
	};
}
