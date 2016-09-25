/******************************************************
********** First script: Custom Sign Script ***********
*******************************************************/

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

//////////////////////////////////////////////////////////////////

/******************************************************
********** Second script: Order check Script ***********
*******************************************************/

//Create variables for the welcome message
var greeting = 'Hello ';
var name = 'Myna';
var message = ', please check your order:';
  //Concatenate the 3 variables to create the message
var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'My awesome sign';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace its content with the personalized message
el.textContent = welcome;

//Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
