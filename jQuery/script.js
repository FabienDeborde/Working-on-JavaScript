jQuery(document).ready(function($) {
  // Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs

  // Looping

  $('li').addClass('list-group-item-action'); // Don't need to loop through all li, jQuery does it on its own

  //Chaining

  $('li.list-group-item-danger').hide().delay(500).fadeIn(1400); // Can chain most methods that update the DOM

  // Getting content

  var $listItems = $('ul').html();
  $('ul').append($listItems);

  var $listText = $('ul').text();
  $('ul').append('<p>' + $listText + '</p>');

  // Update elements

  $('li.list-group-item-info').html(function(){  // using a function
      return '<em>' + $(this).text() + '</em>'
  });

  $('li.list-group-item-warning').remove(); // remove the item

  // New elements

  var $newEl = $('<li class="list-group-item list-group-item-danger">New Element</li>');
  $('li:last').after($newEl);

  var $newText = '<p>New text</p>';
  $('li:first').prepend($newText);

  // Attributes

  $('li:first').attr('id', 'first');
  $('li#last').removeAttr('id');

  // CSS properties

  var bgColor = $('body').css('background-color');
  $('ul').append('Background Color: ' + bgColor);

  $('li').css('font-weight', 'bold');
});
