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

    for (var i = 0; i < 10; i++) {
      newContent += '<tr>';
      newContent += '<th scope="row">' + responseObject.quotes[i].id + '</th>';
      newContent += '<td>' + responseObject.quotes[i].author + '</td>';
      newContent += '<td>' + responseObject.quotes[i].quote + '</td>';
      newContent += '</tr>';
    }
    newContent += '</tbody></table></div>';

    document.getElementById('quotesContainer').innerHTML = newContent;
  };

  xhr.open('GET', 'quotes.json', true);
  xhr.send(null);

};

// Load HTML with jQuery

$('a#jqueryLink').on('click', function(e){
  e.preventDefault(); // prevent the link to load a new page
  var url = this.href; // get the url from the link

  $('#jqueryHTML').load(url); // load the page in the selected element
})

// Load JSON with jQuery

loadJson();

function loadJson(){
  $.getJSON('quotes.json')
  .done(function(quotes){
    var msg = '<div class="quote"><table class="table table-inverse table-striped table-bordered table-hover">';
    msg += '<thead><tr><th>#</th><th>Name</th><th>Quote</th></tr></thead><tbody>';

    $.each(quotes, function(index, val){
      $.each(val, function(i, v){
        msg += '<tr>';
        msg += '<th scope="row">' + v.id + '</th>';
        msg += '<td>' + v.author + '</td>';
        msg += '<td>' + v.quote + '</td>';
        msg += '</tr>';
      });
    });

    msg += '</tbody></table></div>';
    $('#jsonQuotes').html(msg);
  }).fail(function(){
    $('#jsonQuotes').text("Couldn't access the JSON file")
  });
}


/*


for (var i = 0; i < responseObject.quotes.length; i++) {
  newContent += '<tr>';
  newContent += '<th scope="row">' + responseObject.quotes[i].id + '</th>';
  newContent += '<td>' + responseObject.quotes[i].author + '</td>';
  newContent += '<td>' + responseObject.quotes[i].quote + '</td>';
  newContent += '</tr>';
}
newContent += '</tbody></table></div>';
*/
