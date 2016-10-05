  /////////////////////////////////////////
 ///////// Intermediary Scripts //////////
/////////////////////////////////////////

/****************************************
********** Targeting Scripts ***********
****************************************/

// Target a single element

//getElementById

function getId() {
  var elId = document.getElementById('one');
  elId.textContent = "getElementById";
}

//querySelector

function querySel() {
  var elQuery = document.querySelector('li.hot');
  if (elQuery) {
    elQuery.textContent = "querySelector";
    elQuery.className = "fresh";
  }
}

// Target one or more element

//getElementByClassName

function getClass(){
  var elClass = document.getElementsByClassName('hoverable');
  if (elClass.length >= 1) {
    for (var i = 0; i < elClass.length; i++) {
      elClass[i].textContent = "getElementsByClassName";
      elClass[i].className = "hoverable fresh";
    }
  }
}

//getElementsByTagName

function getTag() {
  var elTag = document.getElementsByTagName('li');
  if (elTag.length >= 1) {
    for (var i = 0; i < elTag.length; i++) {
      elTag[i].textContent = "getElementsByTagName";
    }
  }
}

//querySelectorAll

function queryAll(){
  var elQueryAll = document.querySelectorAll('li.hot');
  if (elQueryAll.length >= 1) {
    for (var i = 0; i < elQueryAll.length; i++) {
      elQueryAll[i].textContent = 'querySelectorAll';
      elQueryAll[i].className = 'hoverable fresh';
    }
  }
}

/****************************************
********** Traversing the DOM Scripts ***
****************************************/

function travDom() {
  var myEl = document.getElementById('one');

  var nextSibling = myEl.nextSibling;
  nextSibling.textContent = 'Next sibling in a whitespace node';

  var parent = myEl.parentNode;
  parent.className = ('font');
}

/****************************************
********** DOM manipulation *************
****************************************/

function addItem() {
  // Variable to store parent location
  var myList = document.getElementById('myUL');

  // Var storing new element node and text content
  var newEl = document.createElement('li');
  var newText = document.createTextNode('banana');

  // Append the text node to the new item node then to the parent node
  newEl.appendChild(newText);
  myList.appendChild(newEl);
}

function deleteItem() {
  // Variable to store the element to remove
  var deleteEl = document.getElementsByTagName('li')[3];

  // Variable to store the parent container
  var containerEl = deleteEl.parentNode;

  // Remove the node element from its parent
  containerEl.removeChild(deleteEl);
}

/****************************************
************** Attributes ***************
****************************************/

function attr() {
  var firstItem = document.getElementById('one');

  if (firstItem.hasAttribute('class')) {
    firstItem.setAttribute('class', 'fresh');
  }

  var secondItem = document.getElementById('two');
  secondItem.removeAttribute('class');
}


/****************************************
************** Events *******************
****************************************/

// Event handlers

function checkEmail() {
  var elMsg = document.getElementById('messageEmail');
  if (this.value.indexOf('@') < 0) { // Return -1 if the character is not found
    elMsg.textContent = '* Please enter a valid email adress *';
  }else{
    elMsg.textContent = '';
  }
}

var elEmail = document.getElementById('email');
elEmail.addEventListener('blur', checkEmail, false);

// Event listeners

function checkUsername (){
  var elMsg = document.getElementById('messageUsername');
  if (this.value.length < 5) {
    elMsg.textContent = '* Username must be 5 characters or more *';
  }else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,false);

// Parameters with event handlers/listeners
// with IE 8 and older support

function checkPassword(minLength) {
  var elMsg = document.getElementById('messagePassword');
  if (elPassword.value.length < minLength) { // can't use this here, must refer to the element
    elMsg.textContent = 'Password must be ' + minLength + ' characters or more';
  } else {
    elMsg = '';
  }
}

var elPassword = document.getElementById('password');

if (elPassword.addEventListener) {
  elPassword.addEventListener('blur', function(){
    checkPassword(6);
  }, false);
} else {
  elPassword.attachEvent('onblur', function(){
    checkPassword(6);
  });
}

// Event Object (with IE8 and older support)

function checkLength(e, minLength) {
  var el, elMsg;
  if(!e) {                // If event object doesn't exist
    e = window.event;     // Use IE fallback
  }
  el = e.target || e.srcElement;  // Get target of event
  elMsg = el.previousElementSibling.childNodes[1];    // Get its previous sibling's first child ([0] point to the div.row text node)

  if (el.value.length < minLength) {
    elMsg.textContent = 'Your comment must be ' + minLength + ' characters or more';
  } else {
    elMsg.textContent = '';
  }
}

var elComment = document.getElementById('comment');
if (elComment.addEventListener) {
  elComment.addEventListener('blur', function (e) {
    checkLength(e, 20);
  }, false);
} else {
  elComment.attachEvent('onblur', function(e){
    checkLength(e, 20);
  });
}

// Event delegation with IE8 and older support

  // Workaround if using old IE and there is no event object
function getTarget(e){
  if(!e){
    e = window.event;
  }
  return e.target || e.srcElement;
}

  // Function to remove item

function removeItem(e){
  var target = getTarget(e);
  var elParent = target.parentNode;
  var elGrandparent = elParent.parentNode;
  elGrandparent.removeChild(elParent);

  // Prevent the link default behaviour
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

  // Set up the event listeners to call the function on click

var el = document.getElementById('todo');
if (el.addEventListener) {
  el.addEventListener('click', function (e){
    removeItem(e);
  }, false);
} else {
  el.attachEvent('onclick', function(e) {
    removeItem(e);
  });
}

// Load event (the scroll is not working on load but the console.log is...might try this later with jquery)

function bottomPage() {
  var maxHeight = document.body.scrollHeight - 900;
  document.body.scrollTop = maxHeight;
  console.log(maxHeight);
}

window.addEventListener('load', bottomPage, false);

// Focus and Blur events

function checkText(){
  var text = elInput.value;
  if (text.length < 10) {
    elInputMsg.className = 'warning';
    elInputMsg.textContent = 'Too short...';
  } else {
    elInputMsg.textContent = '';
  }
}

function tipText() {
  elInputMsg.className = 'tip';
  elInputMsg.textContent = 'You must enter a text of 10 characters or more';
}

var elInput = document.getElementById('randomInput');
var elInputMsg = document.getElementById('msg');

elInput.addEventListener('focus', tipText, false);
elInput.addEventListener('blur', checkText, false);

// Mouse Events
clickEvent();

function clickEvent() {
   // Create the HTML for the message
  var randomMsg = '<div class=\"myModal\"><span id=\"close\" href=\"#\">close X</span></div>';
  randomMsg += '<div><h2>Only for subscribers</h2></div>';
  randomMsg += 'This content is only accessible for our subscribers';
  randomMsg += 'Subscribe here, and get access to all our content right now!';

  var elNote = document.createElement('div');
  elNote.setAttribute('id', 'note');
  elNote.innerHTML = randomMsg;
  elMouse = document.getElementById('mouse');
  elMouse.appendChild(elNote);

  function dismissNote() {
    elMouse.removeChild(elNote);
  }

  var elClose = document.getElementById('close');
  elClose.addEventListener('click', dismissNote, false);
}

// Get the position

position();

function position() {

  // Define all the variables
  var sx = document.getElementById('sx');
  var sy = document.getElementById('sy');
  var px = document.getElementById('px');
  var py = document.getElementById('py');
  var cx = document.getElementById('cx');
  var cy = document.getElementById('cy');

  // Define my function
  function showPosition(event) {
    sx.textContent = event.screenX;
    sy.textContent = event.screenY;
    px.textContent = event.pageX;
    py.textContent = event.pageY;
    cx.textContent = event.clientX;
    cy.textContent = event.clientY;
  }

  // Add the event listeners
  var el = document.getElementById('body');
  el.addEventListener('mousemove',showPosition, false);

}
// Playing with colors
colors();

function colors(){

  function changeColors(event) {

    var locX =  event.pageX; // Get the cursor X position relative to the page
    var locY = event.pageY; // Get the cursor Y position relative to the page

    var leftOffset = el.offsetLeft; // Get myCanvas left position relative to its offsetParent (nearest relative container, here body element)
    var topOffset = el.offsetTop; // Get myCanvas top position relative to its offsetParent (nearest relative container, here body element)

    var positionX = locX - leftOffset + 1; // Make the cursor X position start at 0 when entering the canvas left side
    var positionY = locY - topOffset + 1; // Make the cursor Y position start at 0 when entering the canvas top side

    var canvasWidth = el.offsetWidth; // Get the canvas width
    var canvasHeight = el.offsetHeight; // Get the canvas height

    var red = 128;
    var green = (positionX*(255/canvasWidth)).toFixed(0); // Formula to convert the width to a 0-255 ranged width
    var blue = (positionY*(255/canvasHeight)).toFixed(0); // Formula to convert the width to a 0-255 ranged width
    var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';

    // Update background color
    el.style.backgroundColor = rgb;
    elMsgColor = document.getElementById('myColor');

    // Write the rgb value
    var msgColor = document.getElementById('myColor');
    msgColor.textContent = rgb.toUpperCase();

  }

  var el = document.getElementById('myCanvas'); // Target my canvas
  el.addEventListener('mousemove', changeColors, false); // Add it an event listener
}

// Keyboard Events

keyboard();

function keyboard() {

  function charCount(e){

    var textEntered = elInput.value; // Get the text entered
    var counter = (100 - (textEntered.length)); // Get how many characters are left

    var charDisplay = document.getElementById('charactersLeft');
    var lastKey = document.getElementById('lastKey');

    charDisplay.textContent = 'You have ' + counter + ' character(s) left';

    lastKey.textContent = 'The last key entered was (in ASCII code): ' + e.keyCode;


  }

var elInput = document.getElementById('userInput');
elInput.addEventListener('keydown', charCount, false); // could have used keypress but it doesn't fire when you use space char

}

// Form events

function checkTerms(event) {
  var checkbox = document.getElementById('check');

  if (!checkbox.checked) {
    var errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = '* You must agree with our Terms of Services. *'
    event.preventDefault();
  }
}

function packageHint () {

  var confirmMsg = document.getElementById('confirmMsg');
  var selectedOption = this.options[this.selectedIndex].value;

  switch (selectedOption) {
    case 'Daily':
      confirmMsg.textContent = 'Thanks a lot!';
      confirmMsg.className = 'blue';
      break;
    case 'Weekly':
      confirmMsg.textContent = 'Thank you!';
      confirmMsg.className = 'green';
      break;
    case 'Monthly':
      confirmMsg.textContent = 'Thank you!';
      confirmMsg.className = 'green';
      break;
    case 'Yearly':
      confirmMsg.textContent = 'Are you sure?';
      confirmMsg.className = 'purple';
      break;
    default:
      confirmMsg.textContent = '';
  }
}

var elForm = document.getElementById('myForm');
elForm.addEventListener('submit', checkTerms, false);

var elSelect = document.getElementById('dropdownExample');
elSelect.addEventListener('change', packageHint, false);
