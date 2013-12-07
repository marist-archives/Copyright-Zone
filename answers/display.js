//cards v.0.2
//game.js
//manages the display properties of the cards

//initialize - current location is 0
function init() {
  goTo(15);
  updateIcon(cards[currentLocation].iconChange());
  $('#Yes, #No').show();
  $('#cardControls p').hide();
  $('#Restart').hide();
}

//this is when user reaches end of tree
function end() {
  $('#Yes, #No').hide();
  $('#cardControls p').show();
  $('#Restart').show();
}

function goTo(nextLocation) {
  if(cards[currentLocation].status != cards[nextLocation].status) {
    updateIcon(cards[nextLocation].iconChange());
  }
  if(nextLocation === 9 ||
     nextLocation === 10) {
    $('#status .dot').css('background-color', '#b31b1b');
  } else if(nextLocation === 15) {
    $('#status .dot').css('background-color', '#00aa00');
  }
  updateStatus(cards[nextLocation].toString1());
  updateMessage(cards[nextLocation]);
  currentLocation = nextLocation;
}

//prints message onto the message div
function updateMessage(message) {
  var message = message;
  $('#message').empty();
  $('#message').append('<p>' + message + '</p>');
}

function updateStatus(status) {
  var status = status;
  $('#statusTitle').empty();
  $('#statusTitle').append(status);
}

function updateIcon(icon) {
  var icon = icon;
  $('#icon').empty();
  $('#icon').append('<img src="' + icon + '"/>');
}