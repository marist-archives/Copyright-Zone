



$(function() {

            var $items = $('#vtab>ul>li');

            $items.mouseover(function() {

                $items.removeClass('selected');

                $(this).addClass('selected');



                var index = $items.index($(this));

                $('#vtab>div').hide().eq(index).show();

            }).eq(1).mouseover();

        });
        
        


//hide/show
function hide(x) {
dom = document.getElementById(x).style;



if(dom.visibility=="hidden"){
dom.visibility="visible";
}
else{
dom.visibility="hidden"; 
}

//hide(y);
}

function show(y) {
dom = document.getElementById(y).style;
if(dom.top=="-400px"){
dom.top="30px";
}
else{
dom.top="-400px"; 
}
}

//switches search from book to video etc.
function searchSwitch(media){
	var book = document.getElementById('books');
	var video = document.getElementById('videos');
	var doc = document.getElementById('journals');
	
	switch(media){
		case books:
		x="visible";
		y="hidden";
		z="hidden";
		break;
		
		case videos:
		x="hidden";
		y="visible";
		z="hidden";
		break;
		
		case journals:
		x="hidden";
		y="hidden";
		z="visible";		
		break;
	
	}
	book.style.visibility = x;
	video.style.visibility = y;
	doc.style.visibility = z;
}

function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    var $next = $active.next();

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});





