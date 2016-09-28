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

/******************************************************
********** Third script: Simple function **************
*******************************************************/

//A simple function that update a node text content
var msg = "Sign up to receive our newsletter for 10% off!";
function updateMessage() {
  var elMessage = document.getElementById('message');
  elMessage.textContent = msg;
}
updateMessage();


/******************************************************
********** Fourth script: Array returning function ****
******************************************************/

function updateSize(){

//Create variables to store the geometric form dimensions entered by the user

  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var depth = document.getElementById('depth').value;

  // Creating a function to do the calculation and returning an array of the results

  function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
  }

//Updating the nodes text content with the returned values

  var elArea = document.getElementById('area');
  elArea.textContent = getSize(width, height, depth)[0];

  var elVolume = document.getElementById('volume');
  elVolume.textContent = getSize(width, height, depth)[1];

}

/******************************************************
********** Fifth script: Objects ****
******************************************************/

// Creating my meter Object

// Temperature Object

var meter = {
  name: 'Temperatures',
  unit: ' °C',
  value: 0,
  convertedUnit: ' °F',
  colorR: 52,
  colorG: 152,
  colorB: 219,
  add: 1,
  substract: 1,
  // Converting the Celcius value to Fahrenheit and rounding it to 1 decimal
  conversionToF: function(){
    return Math.round((this.value*1.8+32) * 10) / 10;
  },
  // Adding to the base value and updating the content and background color
  buttonAdd: function(){
    this.value += this.add;
    elResult.textContent = meter.value + meter.unit;
    elConverted.textContent = meter.conversionToF() + meter.convertedUnit;
    elResult.style.backgroundColor = meter.colorBG();
  },
  // Substracting to the base value and updating the content and background color
  buttonSubstract: function(){
    this.value -= this.substract;
    elResult.textContent = meter.value + meter.unit;
    elConverted.textContent = meter.conversionToF() + meter.convertedUnit;
    elResult.style.backgroundColor = meter.colorBG();
  },
  // Update the background color
  colorBG: function(){
    this.colorR = Math.round(3.520833333*0.001 * (this.value * this.value * this.value) - 0.02125 * (this.value * this.value) - 1.283333333 * this.value + 52);
    this.colorG = Math.round(-4.729166667*0.001 * (this.value * this.value * this.value) + 0.035 * (this.value * this.value) + 3.791666667 * this.value + 152);
    this.colorB = Math.round(3.666666667*0.001 * (this.value * this.value * this.value) - 0.175 * (this.value * this.value) - 3.266666667 * this.value + 219);
    colorRGB ='rgb(' + this.colorR + ', ' + this.colorG + ', ' + this.colorB +')';
    if (this.value < -20){
      colorRGB ='rgb(41,128,185)';
    }
    else if (this.value > 40){
      colorRGB ='rgb(192, 57, 43)';
    }
    return colorRGB;
  }
}

/*
// Kilometer Object
var meter = {
  name: 'Kilometers',
  unit: ' km',
  value: 0,
  convertedUnit: ' mi',
  add: 0.5,
  substract: 0.5,
  // Converting the kilometer value to miles and rounding it to 2 decimals
  conversionToF: function(){
    return Math.round(this.value*0.621371 * 100) / 100;
  },
  // Adding to the base value
  buttonAdd: function(){
    this.value += this.add;
    elResult.textContent = meter.value + meter.unit;
    elConverted.textContent = meter.conversionToF() + meter.convertedUnit;
    return this.value;
  },
  // Substracting to the base value
  buttonSubstract: function(){
    this.value -= this.substract;
    elResult.textContent = meter.value + meter.unit;
    elConverted.textContent = meter.conversionToF() + meter.convertedUnit;
    return this.value;
  }
}
*/


// Updating the static display text content
var elTitle = document.getElementById('title');
elTitle.textContent = meter.name;

var elResult = document.getElementById('result');
elResult.textContent = meter.value + meter.unit;
elResult.style.backgroundColor = meter.colorBG();

var elConverted = document.getElementById('converted');
elConverted.textContent = meter.conversionToF() + meter.convertedUnit;





/******************************************************
********** Sixth script: Objects Constructor **********
******************************************************/

//Create the Object Constructor

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

//Create 2 objects using the Constructor

var hiltonHotel = new Hotel('Hilton', 135, 79);
var toyokoinnHotel = new Hotel('Toyoko-Inn', 57, 45);


// Update the page with the new content
var details1 = hiltonHotel.name + ' rooms: ' + hiltonHotel.checkAvailability();
var elHotel1 = document.getElementById('item1');
elHotel1.textContent = details1;

var details2 = toyokoinnHotel.name + ' rooms: ' + toyokoinnHotel.checkAvailability();
var elHotel2 = document.getElementById('item2');
elHotel2.textContent = details2;


/******************************************************
********** Seventh script: Browser Object Model *******
******************************************************/

var elWindowWidth = document.getElementById('windowWidth');
elWindowWidth.textContent = window.innerWidth;

var elWindowHeight = document.getElementById('windowHeight');
elWindowHeight.textContent = window.innerHeight;

var elHistory = document.getElementById('history');
elHistory.textContent = window.history.length;

var elScreenWidth = document.getElementById('screenWidth');
elScreenWidth.textContent = window.screen.width;

var elScreenHeight = document.getElementById('screenHeight');
elScreenHeight.textContent = window.screen.height;

var elWindowLoc = document.getElementById('address');
elWindowLoc.textContent = window.location;


/******************************************************
********** Eighth script: Document Object Model *******
******************************************************/

var msg = '<p><i>Page title: </i><b>' + document.title + '</b> <br />';
msg += '<i>Page address: </i><b>' + document.URL + '</b> <br />';
msg += '<i>Last modified: </i><b>' + document.lastModified + '</b> </p>';

var elPage = document.getElementById('aboutPage');
elPage.innerHTML = msg;


/******************************************************
********** Ninth script: Global Objects : String ******
******************************************************/
var saying = 'Sample string test ';
elSaying = document.getElementById('saying');
elSaying.textContent = saying;

var stringMsg = '<tr><td><i>Length: </i><b>' + saying.length + '</b></td></tr>';
stringMsg += '<tr><td><i>Uppercase: </i><b>' + saying.toUpperCase() + '</b> </td></tr>';
stringMsg += '<tr><td><i>Lowercase: </i><b>' + saying.toLowerCase() + '</b> </td></tr>';
stringMsg += '<tr><td><i>5th character: </i><b>' + saying.charAt(4) + '</b> </td></tr>';
stringMsg += '<tr><td><i>Where is "in": </i><b>' + saying.indexOf('in') + '</b> </td></tr>';
stringMsg += '<tr><td><i>Where is the last "s": </i><b>' + saying.lastIndexOf('s') + '</b> </td></tr>';
stringMsg += '<tr><td><i>What are the characters between p and g: </i><b>' + saying.substring(4,12) + '</b> </td></tr>';
stringMsg += '<tr><td><i>What are the words here : </i><b>' + saying.split(' ') + '</b> </td></tr>';
stringMsg += '<tr><td><i>Delete the ending space: </i><b>' + saying.trim() + '</b> </td></tr>';
stringMsg += '<tr><td><i>Replace "string" with "phrase" : </i><b>' + saying.replace('string','phrase') + '</b> </td></tr>';

elResult = document.getElementById('stringResult');
elResult.innerHTML = stringMsg;


/******************************************************
********** Tenth script: Global Objects : Numbers *****
******************************************************/

var originalNumber = 10.23456789;
var pi = Math.PI;

var elOriginal = document.getElementById('originalNumber');
elOriginal.textContent = originalNumber;

var elFixed = document.getElementById('fixedDigits');
elFixed.textContent = originalNumber.toFixed(3);

var elPrecised = document.getElementById('precisedDigits');
elPrecised.textContent = originalNumber.toPrecision(3);

var elPi = document.getElementById('pi');
elPi.textContent = Math.PI;

var elRound = document.getElementById('round');
elRound.textContent = Math.round(pi);

var elSquare = document.getElementById('square');
elSquare.textContent = Math.sqrt(9);

var elCeil = document.getElementById('ceil');
elCeil.textContent = Math.ceil(pi);

var elFloor = document.getElementById('floor');
elFloor.textContent = Math.floor(pi);

var elRandom = document.getElementById('random');
elRandom.textContent = Math.random();

var elInteger1 = document.getElementById('randomInteger1');
elInteger1.textContent = Math.floor(Math.random() * 10);

var elInteger2 = document.getElementById('randomInteger2');
elInteger2.textContent = '5 ≤ n ≤ 15 ⇒ ' + Math.floor(Math.random() * 11 + 5);

var elInteger3 = document.getElementById('randomInteger3');
elInteger3.textContent = '100 ≤ n ≤ 900 ⇒ ' + Math.floor(Math.random() * 900 + 100);


/******************************************************
********** Eleventh script: Global Objects : Date *****
*******************************************************/
// Create the today object using date constructor
var today = new Date();

// Get the day of the week (number from 0 to 6), make an array with all days' name
// Retrieve the name of today's day using the dayOfTheWeek index in nameOfTheDay array
var dayOfTheWeek = today.getDay();
var nameOfTheDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfToday = nameOfTheDay[dayOfTheWeek];

// Get the day of the month
var day = today.getDate();

// Get the month (number from 0 to 11)
var month = today.getMonth();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthOfToday = monthNames[month];

// Get the year
var year = today.getYear();

// Get the hour and the minutes
var hours = today.getHours();
var minutes = today.getMinutes();
if (minutes < 10) {
  minutes = '0' + minutes;
}

// Create an array containing messages depending of the hour of the day
// Add condition statement to retrieve the right greeting depending of hour value
var greeting = ['Hello', 'Good morning!', 'Good afternoon!', 'Good evening!'];
var greetingNow = greeting[0];

if (hours  >= 0 && hours < 12) {
  greetingNow = greeting[1];
} else if (hours >= 12 && hours < 18) {
  greetingNow = greeting[2];
} else if (hours >= 18) {
  greetingNow = greeting[3];
}

// Create a new date using the constructor and set the date
// Create a variable to get the difference between now and this date
// (result in ms so need to divide it by the number of ms in a day/month/year...)
var freelanceDate = new Date('May 12, 2016 11:00:00');
var difference = today.getTime() - freelanceDate.getTime();
var differenceDays = (difference / 86400000);
var differenceHours = (difference / 3600000);

//
function updateTimer() {
  var endOfTime = new Date('January 1, 2017 00:00:00');
  var diffUntilTheEnd = endOfTime.getTime() - today.getTime();

    //Get hours from milliseconds
    var diffHours = diffUntilTheEnd / (1000*60*60);
    var absoluteHours = Math.floor(diffHours);
    var diffH = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours

    //Get remainder from hours and convert to minutes
    var diffMinutes = (diffHours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(diffMinutes);
    var diffM = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var diffSeconds = (diffMinutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(diffSeconds);
    var diffS = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    // Update the node content
    var elTimer = document.getElementById('timer');
    elTimer.textContent = diffH + ':' + diffM +':' + diffS;

    setTimeout(updateTimer,1000);
}
updateTimer();

//Update the content
var elTodayMessage = document.getElementById('timeMessage');
elTodayMessage.textContent = greetingNow + ' Today we are ' + dayOfToday + ', ' + monthOfToday + ' ' + day + ', ' + year;

var elTime = document.getElementById('clockTime');
elTime.textContent = hours + ':' + minutes;

var elWorking = document.getElementById('working');
elWorking.textContent = differenceDays.toFixed(0) + ' days ( ' + differenceHours.toFixed(2) + ' hours)';
