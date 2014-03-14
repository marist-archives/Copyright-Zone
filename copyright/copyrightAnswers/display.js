//cards v.0.4
//display.js
//manages the display properties of the cards

//initialize - current location is 15
function init() {
  goTo(15);
  updateIcon(cards[currentLocation].iconChange());
}

//this is when user reaches end of tree
function end() {
  $('#Yes, #No').hide();
  $('#cardControls p').show();
  $('#Restart').show();
}

function goTo(nextLocation) {
	if(nextLocation == 15){
		$('#Yes, #No').show();
    $('#cardControls p').hide();
    $('#Restart, #Back').hide();
	}
	else {
    $('#Yes, #No, #Back').show();
    $('#cardControls p').hide();
	  $('#Restart').hide();	
	}
	
  if(cards[currentLocation].status != cards[nextLocation].status) {
    updateIcon(cards[nextLocation].iconChange());
  }

  if(nextLocation < 10 || nextLocation === 15 || nextLocation === 16) {
    $('#status .dot').css('background-color', '#00aa00');
  }
  else {
    $('#status .dot').css('background-color', '#b31b1b');
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