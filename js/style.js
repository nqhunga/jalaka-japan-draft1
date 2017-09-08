$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('#myNavbar').addClass('shrink');
	}
	else {
		$('#myNavbar').removeClass('shrink');
	}
});