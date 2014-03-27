$.validator.addMethod("matches", function(value, element, param) {
    return this.optional(element) || value.match(param);
},
'Please enter a valid value.');

$(document).ready(function() {
    $("#theForm").validate({
		groups: {
		  Phone_Num: "Phone_Num Extension"
		},
		rules: {
			Name: {
				required: true,
				minlength: 2
			},
			Email: {
				required: true,
				matches: ".+@marist.edu"
			},
			Phone_Num: {
				required: function(element) {
					return $("input[name*=Extension]").val() == 0;
				},
				number: true,
				minlength: 10,
				maxlength: 10
			},
			Extension: {
				required: function(element) {
					return $("input[name*=Phone_Num]").val() == 0;
				},
				number: true,
				minlength: 4,
				maxlength: 4
			},
			Publication_Year: {
				required: true,
				minlength: 4,
				maxlength: 7
			},
			Start_Page: {
				required: true
			},
			End_Page: {
				required: true
			},
			Num_Students: {
				number: true
			}
		},
		messages: {
			Name: "<br>Please enter your full name.",
			Email: {
				required: "<br>Please enter a valid marist.edu email address.",
				matches: "<br>Please enter a valid marist.edu email address."
			},
			Phone_Num: "<br>Please enter a valid phone number.",
			Extension: "<br>Invalid extension.",
			Publication_Year: "<br>Please enter the publication year.",
			Start_Page: "Invalid start page.",
			End_Page: "Invalid end page.",
			Num_Students: "<br>Please enter a valid number."
		},
		submitHandler: function(form) {
			$.ajax({
		        url: "verifyCopyright.php",
		        type: "post",
		        data: $(form).serialize(),
		        // callback handler that will be called on success
		        success: function(response){
		            if (response==1 && $("#theForm").valid()) {
		                document.location.href="querySubmissionCopyright.php";
		            } else if (response==0) {
			                $("#after_submit").html('');
			                $("#reset").after('<div><label class="error" id="after_submit">Invalid captcha code.</label></div>');
		              }
			    }
	        });
		}
	});
});