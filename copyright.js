var correctCards = 0;
$(init);

// Create the pile of shuffled cards
var numbers = [1, 2, 3, 2, 1, 3, 3, 3, 1, 1];
var resources = ['Create a Powerpoint with images downloaded from ARtstor and upload it into iLearn.', 'Embed a video from Youtube.', 'Upload into iLearn an article dowloaded from a database.', 'Photocopy or print a few chapters from a book.', 'Use a video for an assignment and would cite it properly.', 'Create a Prezi show for my class by making screen shots of some interesting photos I found on the web.', ' Upload into iLearn the article that I received in PDF format via ILL.', 'Download PDFs for 5 articles from Jstor and then upload those into iLearn.', 'Quote a paragraph from a book as the basis of an essay question on a test.', 'Embed a three minute clip of congressional testimony from C-SPAN.'];
var reasons = ['This is fine because the Artstor’s “Terms of Use” specifically allow for this sort of classroom use.  You cannot share this Powerpoint openly on the web because it is not a password protected environment like iLearn.', 'Since the producer didn’t upload the video, it is likely that the post is a copyright violation. Search Fox Hunt limiting by video. Marist has over 6000 videos online.', 'This is a violation of copyright.  You are making a work by someone else widely available without consulting the copyright holder.  Copyright holders are due some consideration and compensation for sharing their work with others.  You will need to ask permission to use the work and often times you may need to pay for permission to use it.', 'This is what is called a one-time exception, it is an emergency, you cannot do the assignment without the book and due to forces beyond your control you do not have it.  The general expectation is that you will buy the book and not copy chapters as you need them.  It is not really a good idea to do this overall so it is on verge of being a red zone issue.', 'This is absolutely fine as you have cited it properly.', 'This may be a violation of copyright. You should always contact the site where you found the content. Alternatively, you could use Creative Commons which is a non profit organization that facilitates the sharing and use of materials through free legal tools.  [Link: <a href="http://www.creativecommons.org" target="_blank">Creative Commons</a>]', 'This is a violation of copyright. Alternatively, Find something similar in Library collection, either by the same author(s) or similar in content.  For example, you may find a chapter\ of a book in ebrary by the same author that makes small changes to the original article.  [Links: <a href="http://marist.summon.serialssolutions.com" target="_blank">Fox Hunt</a>, <a href="http://site.ebrary.com.online.library.marist.edu/lib/marist/home.action" target="_blank">ebrary</a>]', 'This is a copyright violation. Rather than uploading you should post links to those articles.', 'This is fine as it is only a small portion of the book.', 'C-SPAN’s copyright policy allows the use of video coverage of Federal Government events online for non commercial purposes with attributions.'];
function init() {

	// Hide the success message
	/*$('#successMessage').hide();
	$('#successMessage').css({
		left : '580px',
		top : '250px',
		width : 0,
		height : 0
	});*/

	// Reset the game
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');
	// resources.sort( function() { return Math.random() - .5 } );

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
	$('div#1slot').css('background-color', 'GREEN').append('<br/><a href="resources.html?iframe=true&width=55%&height=75%" class="link" rel="prettyphoto[iframes]">Resources</a>');
	$('div#2slot').css('background-color', 'ORANGE').append('<br/><a href="msz.html?iframe=true&width=55%&height=75%" class="link" rel="prettyphoto[iframes]">Resources</a>');
	$('div#3slot').css('background-color', '#b31b1b').append('<br/><a href="danger.html?iframe=true&width=55%&height=75%" class="link" rel="prettyphoto[iframes]">Help</a>');

	// Tabs
	$('ul.tabs').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and it's associated content
		var $active, $content, $links = $(this).find('a');

		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active.attr('href'));

		// Hide the remaining content
		$links.not($active).each(function () {
			$($(this).attr('href')).hide();
		});

		// Bind the click event handler
		$(this).on('click', 'a', function(e){
			// Make the old tab inactive.
			$active.removeClass('active');
			$content.hide();

			// Update the variables with the new link and content
			$active = $(this);
			$content = $($(this).attr('href'));

			// Make the tab active.
			$active.addClass('active');
			$content.show();

			// Prevent the anchor's default click action
			e.preventDefault();
		});
	});
}

function handleCardDrop(event, ui) {
	$('div.wideBox div#tabs').hide();
	$('div#arrow').css('background-image', 'url("images/ARROW1.png")');
	$('div#arrow').css('background-repeat', 'no-repeat');

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
		//$(this).droppable( 'disable' );
		//ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );

		// var pos = ui.draggable.position();
		//alert('top: ' + pos.top + ', left: ' + pos.left);

		//ui.draggable.draggable( 'option', 'revert', false );

		$(this).append('<ul style="text-align:left;"><li>' + resourceTitle + '</li></ul>');
		correctCards++;
		getinfo(rid, 1);

		$(window).scrollTop($('div#info').position().top);
		$('div#info').effect("highlight");
		//$('div#info').append('<p>' + info + '</p>');
	} else {
		getinfo(rid, 2);
		$(window).scrollTop($('div#info').position().top);
		$('div#info').effect("pulsate");
	}
	// If all the cards have been placed correctly then display a message
	// and reset the cards for another go

	if (correctCards == 1) {
		/*$('#successMessage').show();
		$('#successMessage').animate({
			left : '580px',
			top : '500px',
			width : '400px',
			height : '100px',
			opacity : 1
		});*/
		$('#cardPile div').remove();
		$('#cardPile').append('<p id="successMessage">Congratulations!</p><p>You have finished the game by successfully placing all the cards in their zones.</p><p>Click <a href="#" onclick="init();">here</a> to play again.</p>');
		$("html, body").animate({
	        scrollTop: 0
	    }, 500);

	}

}

function getinfo(rid, flag) {
	var x;

	if (flag == 1) {
		//if (rid == 1) {
		x = reasons[rid];
		//}
		$('div#info div').remove();
		$('div#info').append('<div id="correctMessage"><img src="images/checkmark.png" width="45" height="45" alt="Well done!" />Well done!</div>');
		$('div#info').css('background-color', '#ddf');
	} else if (flag == 2) {
		//if (rid == 1) {
		x = "Oops! This is incorrect. Try again!";
		//}
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
	$('div.wideBox div#tabs').hide();

	$('div#1slot ul').remove();
	$('div#2slot ul').remove();
	$('div#3slot ul').remove();

	$('div#arrow').css('background-image', 'url("images/ARROW1.png")');
	$('div#arrow').css('background-repeat', 'no-repeat');

	for (var i = 0; i < 10; i++) {

		if (numbers[i] == 1) {

			$('div#1slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');

		} else if (numbers[i] == 2) {

			$('div#2slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');

		} else {

			$('div#3slot').append('<ul style="text-align:left;"><li>' + resources[i] + '</li></ul>');

		}
		//$(window).scrollTop($('div#cardSlots').position().top);
		$('div#' + i).effect("explode");

		//$('div#cardSlots').effect("pulsate",{times:1});
		//.css('visibility','hidden');

		//$('div#'+i).animate({height:"100%", opacity:0}, 3000);
		$('div#cardSlots').effect("highlight", {
			times : 1
		});

	}
	//	$('div#cardPile').css('visibility','hidden');

}
