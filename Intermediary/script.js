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

function checkUsername (){
  var elMsg = document.getElementById('message');
  if (this.value.length < 5) {
    elMsg.textContent = '* Username must be 5 characters or more *';
  }else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,false);
