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
