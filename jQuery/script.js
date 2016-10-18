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

  // each()

  $('a.shoppingItem').each(function(){
    var ids = this.id;
    $(this).prepend(ids + ' - ');
  });

  // Events

  $(function(){
    var $listItems = $('a.shoppingItem');

    $listItems.on('mouseover click', function(){
      $listItems.children('span').remove();
      $(this).append(' <span class="text-danger pull-xs-right font-italic">Top priority</span>');
    });

    $listItems.on('mouseout', function(){
      $(this).children('span').remove();
    });
  });

  // Event Object

  var $inputForm = $('input#inputForm');

  $inputForm.on('keydown',function(e) {
    var keyPressed = e.which;
    var date = new Date();
    var entered = date.toString();
    console.log(entered);
    $inputForm.siblings('p').remove();
    $inputForm.after('<p>' + e.target + ' has changed @' + entered + ' .<br>Key pressed: ' + keyPressed + ' (' + String.fromCharCode(keyPressed) + ')' + '</p>');
  });

  // Event delegation
  var listItem, itemStatus, eventType, msg;

  $(function(){
    $('#shoppingList').on('click mouseover', ':not(#4)', {status: 'important'}, function(e){
      listItem = 'Item: ' + e.target.textContent + '<br/>';
      itemStatus = 'Status: ' + e.data.status + '<br/>';
      eventType = 'Event: ' + e.type;
      msg = '<p>' + listItem + itemStatus + eventType + '</p>';

      $('#shoppingList').siblings('p').remove();

      $('#shoppingList').after(msg);
    });

  });

  // Effects

  $(function(){

    $('#firstRow').hide().fadeIn(3000);



    $('#firstRow').on('click', '.cell', function(){
      $(this).slideUp(900);
    });

    $('.cell').on('click', function(){
      var $posLeft = $(this).offset().left;
      $(this).css('position', 'absolute');
      $(this).css('left', $posLeft + 'px');
      $(this).animate({
        opacity: 0.0,
        left: "+=250"
      }, 1000, function(){
        $(this).remove();
      });
    });
  });

  // Traverse the DOM

  $(function () {

    var $showButton = $('.myButton');

    $showButton.on('click', function(){
      $showButton.next().toggle(500);
      if ($showButton.text() === "Show") {
        $showButton.text("Hide");
      } else {
        $showButton.text("Show");
      }
    });

    var $cell = $('.cell');
    $cell.filter('.odd').prepend('* ');
    $cell.not('.odd').append(' *');

    $cell.eq(0). prepend('(First item)');
    $('.cell:gt(10)').prepend('(Items>10)');


  });

  // Forms

    var  $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('#newItemForm input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function(){
      $newItemButton.hide();
      $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
      e.preventDefault();
      var newText = $textInput.val();
      $('a:last').after('<a class="list-group-item list-group-item-action">' + newText + '</a>')
      $newItemButton.show();
      $newItemForm.hide();
      $textInput.val('');


    });

  // Cutting part of the DOM

  $(function(){
    var $p = $('p#todoComment');
    var $clonedComment = $p.clone();

    $p.remove();
    $clonedComment.insertAfter('.list');

    var $moveItem = $('.todo a:first').detach();
    $moveItem.insertAfter('.todo .list-group-item:last');

  });

  // Dimension

  $(function () {
    var outerHeight = $('.outerBox').outerHeight();
    $('.outerBox').append('<p>Outer Height of the Outer Box: ' + outerHeight + 'px</p>');

    var height = $('.midBox').height();
    $('.midBox').append('<p>Height of the Mid Box: ' + height + 'px (no margin/border/padding)</p>');

    var innerHeight = $('.innerBox').innerHeight();
    $('.innerBox').append('<p>Inner Height of the Inner Box: ' + innerHeight + 'px</p>');
    $('.innerBox').width('50%');

  });

  // Scroll to bottom
  /*$('html, body').animate({
    scrollTop: $(document).height()-$(window).height()},
    1000,
    'swing'
  );*/

  // Parallax footer

  $(function () {
    var $window = $(window);
    var $slideMsg = $('.end');
    var endZone = $('.footer').offset().top - $window.height() -250;

    $window.on('scroll', function(){
      if ((endZone) < $window.scrollTop()) {
        $slideMsg.animate({
          opacity: 1.0,
        }, 700);
        console.log('true' + endZone);
      } else {
        $slideMsg.stop(true).animate({
          opacity: 0.0,
        }, 700);
        console.log('false' + endZone);
      }
    });

  });

});
