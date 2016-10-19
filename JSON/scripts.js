// Events
events();
function events(){
  var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
  xhr.onload = function () {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through the object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '"';
      newContent += 'alt="' + responseObject.events[i].location + '"/>';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br/>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update element
    document.getElementById('eventsContainer').innerHTML = newContent;

  };

  xhr.open('GET', 'data.json', true); // Prepare the request
  xhr.send(null); // Send the request
};


// Quotes
quotes();
function quotes(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '<div class="quote"><table class="table table-inverse table-striped table-bordered table-hover">';
    newContent += '<thead><tr><th>#</th><th>Name</th><th>Quote</th></tr></thead><tbody>';

    for (var i = 0; i < responseObject.quotes.length; i++) {
      newContent += '<tr>';
      newContent += '<th scope="row">' + responseObject.quotes[i].id + '</th>';
      newContent += '<td>' + responseObject.quotes[i].author + '</td>';
      newContent += '<td>' + responseObject.quotes[i].quote + '</td>';
      newContent += '</tr>';
    }
    newContent += '</tbody></table></div>';

    console.log(newContent);

    document.getElementById('quotesContainer').innerHTML = newContent;
  };

  xhr.open('GET', 'quotes.json', true);
  xhr.send(null);

};
