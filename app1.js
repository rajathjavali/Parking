function verifyorder() {
		
        var order = document.getElementById('value').value;
        if (order > 0) {
            alert(order);
            return true;
        }
        else {
            alert("Sorry, you need to enter a positive integer value, try again");
            document.getElementById('error').innerHTML = "Sorry, you need to enter a positive integer value, try again";
        }
    }