$(document).ready(function() {
	var toggle = 0;
	$('.icon-hamburger').click(function() {
		if (toggle == 1) {
			$('.icon-hamburger').attr('class', 'icon-hamburger icon-hamburger--hamburger');
            $('body').addClass('nav-closed').removeClass('nav-open');
		} else {
			$('.icon-hamburger').attr('class', 'icon-hamburger icon-hamburger--cross');
            $('body').removeClass('nav-closed').addClass('nav-open');
		}
		toggle = (toggle + 1) % 2
	});
});
