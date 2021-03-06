/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.
*/

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
	if (customerData.hasOwnProperty(firstName)) {
	  if(customerData[firstName].visits === 1) {
    	  greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
	  } else {
	      greeting = "Welcome back, " + firstName + "! So glad to see you again!";
	  }
	} else {
	  greeting = "Welcome! Is this your first time?"
	}
  return greeting;
}
