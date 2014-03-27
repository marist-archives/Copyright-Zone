/*
Author: Weon Yuan
Original Author: Tristan Denyer (based on Charlie Griefer's original clone code)
Date: August 27, 2013
*/
$(function () {
    $('#buttonAdd-book').click(function () {
        var num1     = $('.clonedInput1').length - 1, // how many "duplicable" input fields we currently have
         	newNum1  = new Number(num1 + 1),      // the numeric ID of the new input field being added
            newElem1 = $('#book_input0').clone().attr('id', 'book_input' + newNum1).attr('name', 'Book_Input' + '[' + newNum1 + ']').val(''); // create the new element via clone(), and manipulate it's ID using newNum value
    // manipulate the name/id values of the input inside the new element
    	newElem1.find('#label_book_ttl label').attr('for', 'book_title' + '[' + newNum1 + ']');
        newElem1.find('#input_book_ttl input').attr('id', 'book_title' + '[' + newNum1 + ']').attr('name', 'Book_Title' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_auth label').attr('for', 'author' + '[' + newNum1 + ']');
        newElem1.find('#input_auth input').attr('id', 'author' + '[' + newNum1 + ']').attr('name', 'Author' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_book_pub label').attr('for', 'book_pub' + '[' + newNum1 + ']');
        newElem1.find('#input_book_pub input').attr('id', 'book_pub' + '[' + newNum1 + ']').attr('name', 'Book_Publisher' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_book_pubYear label').attr('for', 'book_pubYear' + '[' + newNum1 + ']');
        newElem1.find('#input_book_pubYear input').attr('id', 'book_pubYear' + '[' + newNum1 + ']').attr('name', 'Book_PubYear' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_isbn label').attr('for', 'isbn' + '[' + newNum1 + ']');
        newElem1.find('#input_isbn input').attr('id', 'isbn' + '[' + newNum1 + ']').attr('name', 'ISBN' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_edition label').attr('for', 'edition' + '[' + newNum1 + ']');
        newElem1.find('#input_edition input').attr('id', 'edition' + '[' + newNum1 + ']').attr('name', 'Edition' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_book_format label').attr('for', 'book_format' + '[' + newNum1 + ']');
        newElem1.find('#select_book_format select').attr('id', 'book_format' + '[' + newNum1 + ']').attr('name', 'Book_Format' + '[' + newNum1 + ']').val('');
        newElem1.find('#label_book_priority label').attr('for', 'book_priority' + '[' + newNum1 + ']');
        newElem1.find('#select_book_priority select').attr('id', 'book_priority' + '[' + newNum1 + ']').attr('name', 'Book_Priority' + '[' + newNum1 + ']').val('');

    // insert the new element after the last "duplicatable" input field
        $(newElem1).after(newElem1).appendTo('#content');
		
		$('#buttonDelete-book').attr('disabled', false).css('opacity', 1);
		
    // right now you can only add 3 sections. change '3' below to the max number of times the form can be duplicated
        if (newNum1 == 1) {
        	$('.empty').remove();
        }
        
        if (newNum1 == 3) {
        	$('#buttonAdd-book').attr('disabled', true).prop('value', "+").css('opacity', 0.5);
        	alert("You have reached the maximum limit for Books.");
        }
        
        if (!$.trim( $('#content').html() ).length) {
        	$('#submit').attr('disabled', true);
    	} else {
			$('#submit').attr('disabled', false);
		}
    });
	
	$('#buttonDelete-book').click(function () {
    // confirmation
        if (confirm("Are you sure you wish to remove a Book?"))
            {
                var num1 = ($('.clonedInput1').length) - 1;
                // how many "duplicatable" input fields we currently have
                $('#content #book_input' + num1).slideUp('fast', function () {$(this).remove(); 
                
                if (!$.trim( $('#content').html() ).length) {
		        	$('#submit').attr('disabled', true);
		    	} else {
					$('#submit').attr('disabled', false);
				}
                
                // if only one element remains, disable the "remove" button
                    if (num1 === 1)
                $('#buttonDelete-book').attr('disabled', true).css('opacity', 0.5);
                // enable the "add" button
                $('#buttonAdd-book').attr('disabled', false).prop('value', "+").css('opacity', 1);
                });
            }
        return false;
             // remove the last element
    // enable the "add" button
        $('#buttonAdd-book').attr('disabled', false).css('opacity', 1);
        
        
    });
	
    $('#buttonDelete-book').attr('disabled', true).css('opacity', 0.5);
	
    $('#buttonAdd-dvd').click(function () {
        var num2     = $('.clonedInput2').length - 1, // how many "duplicable" input fields we currently have
            newNum2  = new Number(num2 + 1),      // the numeric ID of the new input field being added
            newElem2 = $('#dvd_input0').clone().attr('id', 'dvd_input' + newNum2).attr('name', 'DVD_Input' + '[' + newNum2 + ']').val(''); // create the new element via clone(), and manipulate it's ID using newNum value
    // manipulate the name/id values of the input inside the new element
    	newElem2.find('#label_dvd_ttl label').attr('for', 'dvd_title' + '[' + newNum2 + ']');
        newElem2.find('#input_dvd_ttl input').attr('id', 'dvd_title' + '[' + newNum2 + ']').attr('name', 'DVD_Title' + '[' + newNum2 + ']').val('');
        newElem2.find('#label_dir label').attr('for', 'director' + '[' + newNum2 + ']');
        newElem2.find('#input_dir input').attr('id', 'director' + '[' + newNum2 + ']').attr('name', 'Director' + '[' + newNum2 + ']').val('');
        newElem2.find('#label_dist label').attr('for', 'distributor' + '[' + newNum2 + ']');
        newElem2.find('#input_dist input').attr('id', 'distributor' + '[' + newNum2 + ']').attr('name', 'Distributor' + '[' + newNum2 + ']').val('');
        newElem2.find('#label_release label').attr('for', 'release_date' + '[' + newNum2 + ']');
        newElem2.find('#input_release input').attr('id', 'release_date' + '[' + newNum2 + ']').attr('name', 'Release_Date' + '[' + newNum2 + ']').val('');
        newElem2.find('#label_dvd_priority label').attr('for', 'dvd_priority' + '[' + newNum2 + ']');
        newElem2.find('#select_dvd_priority select').attr('id', 'dvd_priority' + '[' + newNum2 + ']').attr('name', 'DVD_Priority' + '[' + newNum2 + ']').val('');
        
    // insert the new element after the last "duplicable" input field
        $(newElem2).after(newElem2).appendTo('#content');
		
		$('#buttonDelete-dvd').attr('disabled', false).css('opacity', 1);
    // right now you can only add 3 sections. change '3' below to the max number of times the form can be duplicated
        if (newNum2 == 1) {
        	$('.empty').remove();
        }
        
        if (newNum2 == 3) {
        	$('#buttonAdd-dvd').attr('disabled', true).prop('value', "+").css('opacity', 0.5);
        	alert("You have reached the maximum limit for DVDs.");
        }
        
        if (!$.trim( $('#content').html() ).length) {
        	$('#submit').attr('disabled', true);
    	} else {
			$('#submit').attr('disabled', false);
		}
    });

	$('#buttonDelete-dvd').click(function () {
    // confirmation
        if (confirm("Are you sure you wish to remove a DVD?"))
            {
                var num2 = ($('.clonedInput2').length) - 1;
                // how many "duplicatable" input fields we currently have
                $('#content #dvd_input' + num2).slideUp('fast', function () {$(this).remove();
            	
            	if (!$.trim( $('#content').html() ).length) {
		        	$('#submit').attr('disabled', true);
		    	} else {
					$('#submit').attr('disabled', false);
				}
				
                // if only one element remains, disable the "remove" button
                    if (num2 === 1)
                $('#buttonDelete-dvd').attr('disabled', true).css('opacity', 0.5);
                // enable the "add" button
                $('#buttonAdd-dvd').attr('disabled', false).prop('value', "+").css('opacity', 1);});
            }
        return false;
             // remove the last element
 
    // enable the "add" button
        $('#buttonAdd-dvd').attr('disabled', false).css('opacity', 1);
    });
	
    $('#buttonDelete-dvd').attr('disabled', true).css('opacity', 0.5);
	
	$('#buttonAdd-periodical').click(function () {
        var num3     = $('.clonedInput3').length - 1, // how many "duplicable" input fields we currently have
            newNum3  = new Number(num3 + 1),      // the numeric ID of the new input field being added
            newElem3 = $('#periodical_input0').clone().attr('id', 'periodical_input' + newNum3).attr('name', 'Periodical_Input' + '[' + newNum3 + ']').val(''); // create the new element via clone(), and manipulate it's ID using newNum value
    // manipulate the name/id values of the input inside the new element

        newElem3.find('#label_periodical_ttl label').attr('for', 'periodical_title' + '[' + newNum3 + ']');
        newElem3.find('#input_periodical_ttl input').attr('id', 'periodical_title' + '[' + newNum3 + ']').attr('name', 'Periodical_Title' + '[' + newNum3 + ']').val('');
        newElem3.find('#label_periodical_pub label').attr('for', 'periodical_publisher' + '[' + newNum3 + ']');
        newElem3.find('#input_periodical_pub input').attr('id', 'periodical_publisher' + '[' + newNum3 + ']').attr('name', 'Periodical_Publisher' + '[' + newNum3 + ']').val('');
		newElem3.find('#label_periodical_pubYear label').attr('for', 'periodical_pubYear' + '[' + newNum3 + ']');
        newElem3.find('#input_periodical_pubYear input').attr('id', 'periodical_pubYear' + '[' + newNum3 + ']').attr('name', 'Periodical_PubYear' + '[' + newNum3 + ']').val('');
        newElem3.find('#label_periodical_format label').attr('for', 'periodical_format' + '[' + newNum3 + ']');
        newElem3.find('#select_periodical_format select').attr('id', 'periodical_format' + '[' + newNum3 + ']').attr('name', 'Periodical_Format' + '[' + newNum3 + ']').val('');
        newElem3.find('#label_periodical_priority label').attr('for', 'periodical_priority' + '[' + newNum3 + ']');
        newElem3.find('#select_periodical_priority select').attr('id', 'periodical_priority' + '[' + newNum3 + ']').attr('name', 'Periodical_Priority' + '[' + newNum3 + ']').val('');
        
    // insert the new element after the last "duplicatable" input field
        $(newElem3).after(newElem3).appendTo('#content');
		
		$('#buttonDelete-periodical').attr('disabled', false).css('opacity', 1);
    // right now you can only add 3 sections. change '3' below to the max number of times the form can be duplicated
        if (newNum3 == 1) {
        	$('.empty').remove();
        }
        
        if (newNum3 == 3) {
        	$('#buttonAdd-periodical').attr('disabled', true).prop('value', "+").css('opacity', 0.5);
        	alert("You have reached the maximum limit for Periodicals.");
        }
        
        if (!$.trim( $('#content').html() ).length) {
        	$('#submit').attr('disabled', true);
    	} else {
			$('#submit').attr('disabled', false);
		}
    });
    
    $('#buttonDelete-periodical').click(function () {
    // confirmation
        if (confirm("Are you sure you wish to remove a Periodical?"))
            {
                var num3 = ($('.clonedInput3').length) - 1;
                // how many "duplicatable" input fields we currently have
                $('#content #periodical_input' + num3).slideUp('fast', function () {$(this).remove();
            	
            	if (!$.trim( $('#content').html() ).length) {
		        	$('#submit').attr('disabled', true);
		    	} else {
					$('#submit').attr('disabled', false);
				}
            	
                // if only one element remains, disable the "remove" button
                    if (num3 === 1)
                $('#buttonDelete-periodical').attr('disabled', true).css('opacity', 0.5);
                // enable the "add" button
                $('#buttonAdd-periodical').attr('disabled', false).prop('value', "+").css('opacity', 1);});
            }
        return false;
             // remove the last element
 
    // enable the "add" button
        $('#buttonAdd-periodical').attr('disabled', false).css('opacity', 1);
    });
	
    $('#buttonDelete-periodical').attr('disabled', true).css('opacity', 0.5);
    
    $('#buttonAdd-website').click(function () {
        var num4     = $('.clonedInput4').length - 1, // how many "duplicable" input fields we currently have
            newNum4  = new Number(num4 + 1),      // the numeric ID of the new input field being added
            newElem4 = $('#website_input0').clone().attr('id', 'website_input' + newNum4).attr('name', 'Website_Input' + '[' + newNum4 + ']').val(''); // create the new element via clone(), and manipulate it's ID using newNum value
    // manipulate the name/id values of the input inside the new element
        newElem4.find('#label_website_ttl label').attr('for', 'website_title' + '[' + newNum4 + ']');
        newElem4.find('#input_website_ttl input').attr('id', 'website_title' + '[' + newNum4 + ']').attr('name', 'Website_Title' + '[' + newNum4 + ']').val('');
        newElem4.find('#label_subjectGuide label').attr('for', 'subject_guide' + '[' + newNum4 + ']');
        newElem4.find('#input_subjectGuide input').attr('id', 'subject_guide' + '[' + newNum4 + ']').attr('name', 'Subject_Guide' + '[' + newNum4 + ']').val('');
        newElem4.find('#label_url label').attr('for', 'url' + '[' + newNum4 + ']');
        newElem4.find('#input_url input').attr('id', 'url' + '[' + newNum4 + ']').attr('name', 'URL' + '[' + newNum4 + ']').val('');
        newElem4.find('#label_website_pubYear label').attr('for', 'website_pubYear' + '[' + newNum4 + ']');
        newElem4.find('#input_website_pubYear input').attr('id', 'website_pubYear' + '[' + newNum4 + ']').attr('name', 'Website_PubYear' + '[' + newNum4 + ']').val('');
        newElem4.find('#label_website_priority label').attr('for', 'website_priority' + '[' + newNum4 + ']');
        newElem4.find('#select_website_priority select').attr('id', 'website_priority' + '[' + newNum4 + ']').attr('name', 'Website_Priority' + '[' + newNum4 + ']').val('');
        
    // insert the new element after the last "duplicatable" input field
        $(newElem4).after(newElem4).appendTo('#content');
		
		$('#buttonDelete-website').attr('disabled', false).css('opacity', 1);
    // right now you can only add 3 sections. change '3' below to the max number of times the form can be duplicated
        if (newNum4 == 1) {
        	$('.empty').remove();
        }
        
        if (newNum4 == 3) {
        	$('#buttonAdd-website').attr('disabled', true).prop('value', "+").css('opacity', 0.5);
        	alert("You have reached the maximum limit for Websites.");
        }
        
        if (!$.trim( $('#content').html() ).length) {
        	$('#submit').attr('disabled', true);
    	} else {
			$('#submit').attr('disabled', false);
		}
    });
    
    $('#buttonDelete-website').click(function () {
    // confirmation
        if (confirm("Are you sure you wish to remove a Website?"))
            {
                var num4 = ($('.clonedInput4').length) - 1;
                // how many "duplicatable" input fields we currently have
                $('#content #website_input' + num4).slideUp('fast', function () {$(this).remove();
            	
            	if (!$.trim( $('#content').html() ).length) {
		        	$('#submit').attr('disabled', true);
		    	} else {
					$('#submit').attr('disabled', false);
				}
            	
                // if only one element remains, disable the "remove" button
                    if (num4 === 1)
                $('#buttonDelete-website').attr('disabled', true).css('opacity', 0.5);
                // enable the "add" button
                $('#buttonAdd-website').attr('disabled', false).prop('value', "+").css('opacity', 1);});
            }
        return false;
             // remove the last element
 
    // enable the "add" button
        $('#buttonAdd-website').attr('disabled', false).css('opacity', 1);
    });
	
    $('#buttonDelete-website').attr('disabled', true).css('opacity', 0.5);
});