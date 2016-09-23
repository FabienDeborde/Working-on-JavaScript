/****************************************
********** Custom Sign Script ***********
****************************************/

// Define all variables

var price;
var total;
var signValue;
var signLength;

// Define the price
price = 5;

// Execute this function when user send the form
function updateValue(){
  // Get the text the user entered
  signValue = document.forms["signForm"]['sign'].value;
  // Get its length
  signLength = signValue.length;

  // Calculate the price
  total = price * signLength;

  // Change the price in the red banner
  var elCost = document.getElementById('cost');
  elCost.textContent = '$' + total;

  // Change the preview text
  var elSign = document.getElementById('preview');
  elSign.textContent = signValue;
}
