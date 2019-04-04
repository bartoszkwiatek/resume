		$('.accordion').next().hide();
		$('.active').next().slideDown();
	 $('.accordion').click(function() {
	 	if( $(this).hasClass('active')) {
	 		$(this).removeClass('active');
	 		$(this).next().slideUp();
	 		$(this).find('.icon-expand').toggleClass('hidden');

	 	} else {
	 		$(this).addClass('active');
	 		$(this).next().slideDown();
	 		$(this).find('.icon-expand').toggleClass('hidden');

	 	}
  });