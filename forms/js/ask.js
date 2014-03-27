$.validator.addMethod("matches", function(value, element, param) {
    return this.optional(element) || value.match(param);
},
'Please enter a valid value.');

$(document).ready(function() {
    $('#theForm').validate({
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
					return $("input[name*=Extension]").val() == 0
				},
				number: true,
				minlength: 10,
				maxlength: 10
			},
			Extension: {
				required: function(element) {
					return $("input[name*=Phone_Num]").val() == 0
				},
				number: true,
				minlength: 4,
				maxlength: 4
			},
			Question: {
				required: true,
				minlength: 20
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
			Question: "<br>Your question is too short."
		},
		submitHandler: function(form) {
			$.ajax({
		        url: "verifyAsk.php",
		        type: "post",
		        data: $(form).serialize(),
		        // callback handler that will be called on success
		        success: function(response){
		            if (response==1 && $("#theForm").valid()) {
		                document.location.href="querySubmission.php";
		            } else if (response==0) {
			                $("#after_submit").html('');
			                $("#reset").after('<div><label class="error" id="after_submit">Invalid captcha code.</label></div>');
		              }
			    }
	        });
		}
	});
});