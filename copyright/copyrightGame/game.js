var correctCards = 0;
$(init);

// Create the pile of shuffled cards
var numbers = [1, 2, 3, 2, 1, 3, 3, 3, 1, 1];
var resources = ['Create a Powerpoint with images downloaded from ARtstor and upload it into iLearn.', 'Embed a video from Youtube.', 'Upload into iLearn an article downloaded from a database.', 'Photocopy or print a few chapters from a book.', 'Use a video for an assignment and would cite it properly.', 'Create a Prezi show for my class by making screen shots of some interesting photos I found on the web.', ' Upload into iLearn the article that I received in PDF format via ILL.', 'Download PDFs for 5 articles from Jstor and then upload those into iLearn.', 'Quote a paragraph from a book as the basis of an essay question on a test.', 'Embed a three minute clip of congressional testimony from C-SPAN.'];
var reasons = ['This is fine because the Artstor’s “Terms of Use” specifically allow for this sort of classroom use.  You cannot share this Powerpoint openly on the web because it is not a password protected environment like iLearn.', 'Since the producer didn’t upload the video, it is likely that the post is a copyright violation. Search Fox Hunt limiting by video. Marist has over 6000 videos online.', 'This is a violation of copyright.  You are making a work by someone else widely available without consulting the copyright holder.  Copyright holders are due some consideration and compensation for sharing their work with others.  You will need to ask permission to use the work and often times you may need to pay for permission to use it.', 'This is what is called a one-time exception, it is an emergency, you cannot do the assignment without the book and due to forces beyond your control you do not have it.  The general expectation is that you will buy the book and not copy chapters as you need them.  It is not really a good idea to do this overall so it is on verge of being a red zone issue.', 'This is absolutely fine as you have cited it properly.', 'This may be a violation of copyright. You should always contact the site where you found the content. Alternatively, you could use Creative Commons which is a non profit organization that facilitates the sharing and use of materials through free legal tools.  [Link: <a href="http://www.creativecommons.org" target="_blank">Creative Commons</a>]', 'This is a violation of copyright. Alternatively, Find something similar in Library collection, either by the same author(s) or similar in content.  For example, you may find a chapter\ of a book in ebrary by the same author that makes small changes to the original article.  [Links: <a href="http://marist.summon.serialssolutions.com" target="_blank">Fox Hunt</a>, <a href="http://site.ebrary.com.online.library.marist.edu/lib/marist/home.action" target="_blank">ebrary</a>]', 'This is a copyright violation. Rather than uploading you should post links to those articles.', 'This is fine as it is only a small portion of the book.', 'C-SPAN’s copyright policy allows the use of video coverage of Federal Government events online for non commercial purposes with attributions.'];
function init() {
	$('div#info').empty();
	$('div#info').css('background-color', '#ffffff');

	// Hide the success message
	$('#successMessage').hide();

	// Reset the game
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');

	for (var i = 0; i < 10; i++) {
		$('<div><p class="resource">' + resources[i] + '</p></div>').data('number', numbers[i]).attr('name', resources[i]).attr('id', i).appendTo('#cardPile').draggable({
			containment : '#content',
			stack : '#cardPile div',
			cursor : 'move',
			revert : true
		});
	}

	// Create the card slots
	var words = ['SAFETY ZONE<br/> [Prepaid resources from Marist Library]', 'MODERATELY SAFE ZONE<br/> [Uncertain]', 'DANGER ZONE</br> [Resources=$$$]'];
	for (var i = 1; i <= 3; i++) {
		var j = i + 'slot';
		$('<div id="' + j + '" class="' + i + '">' + words[i - 1] + '</div>').data('number', i).appendTo('#cardSlots').droppable({
			accept : '#cardPile div',
			hoverClass : 'hovered',
			drop : handleCardDrop
		});
	}

	$('div#1slot').css('background-color', 'GREEN');
	$('div#2slot').css('background-color', 'ORANGE');
	$('div#3slot').css('background-color', '#b31b1b');
	
	// This is the red ribbon's pull animation that views the results directly
	$('#resultsTab').mousedown(function() {
	    $(this).animate({left: "-=30", width: "60px"}, 100);
	}).mouseleave(function() {
		$(this).animate({left: "-16", width: "30px"}, 100);
	});
}

function handleCardDrop(event, ui) {
	var slotNumber = $(this).data('number');
	var rid = ui.draggable.attr('id');
	var cardNumber = ui.draggable.data('number');
	var resourceTitle = ui.draggable.attr('name');

	// If the card was dropped to the correct slot,
	// change the card colour, position it directly
	// on top of the slot, and prevent it being dragged
	// again

	if (slotNumber == cardNumber) {
		ui.draggable.addClass('correct');
		ui.draggable.draggable('disable');

		$(this).append('<ul style="text-align:left;"><li>' + resourceTitle + '</li></ul>');
		correctCards++;
		getinfo(rid, 1);

		$(window).scrollTop($('div#info').position().top);
		$('div#info').effect("highlight");
	} else {
		getinfo(rid, 2);
		$(window).scrollTop($('div#info').position().top);
		$('div#info').effect("pulsate");
	}
	// If all the cards have been placed correctly then display a message
	// and reset the cards for another go

	if (correctCards == 10) {
		$('#successMessage').show();
		$('#successMessage').animate();
		$("html, body").animate({
	        scrollTop: 0
	    }, 500);

	}

}

function getinfo(rid, flag) {
	var x;

	if (flag == 1) {
		x = reasons[rid];
		$('div#info div').remove();
		$('div#info').append('<div id="correctMessage"><img src="../images/checkmark.png" width="45" height="45" alt="Well done!" />Well done!</div>');
		$('div#info').css('background-color', '#ddf');
	} else if (flag == 2) {
		x = "Oops! This is incorrect. Try again!";
		$('div#info div').remove();
		$('div#info').css('background-color', '#b31b1b');
	}
	$('div#info p').remove();
	$('div#info').append('<p>' + x + '</p>');
}

function getresults() {
	$('div#cardPile').effect("clip");
	$('div#info').effect("clip");
	$('a#viewresults').hide();
	$('em').hide();

	$('div#1slot ul').remove();
	$('div#2slot ul').remove();
	$('div#3slot ul').remove();

	for (var i = 0; i < 10; i++) {
		if (numbers[i] == 1) {
			$('div#1slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');
		} else if (numbers[i] == 2) {
			$('div#2slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');
		} else {
			$('div#3slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');
		}
		$('div#' + i).effect("explode");
		$('div#cardSlots').effect("highlight", {
			times : 1
		});
	}
	$('div#resultsTab').remove();
}
