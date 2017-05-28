$(document).ready(function() {
	
	// like/dislike button toggle event
	$('.thumbs').on('click', function(){
		$('.thumbs').not(this).removeClass('thumb-active');
		$(this).toggleClass('thumb-active');
	})

	// display the thank you message on submit once the form is valid
	$('#contactForm').submit(function(e){
		e.preventDefault();
		var userName = $('input[name=name]').val();
		$('.thanks-user').html('Thank you ' + userName + " ! Your message has been sent.  ");
		$('.panel').hide();
		$('.thank-you').show();	
	})
	
});
