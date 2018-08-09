(function(){
	function st() {
		return $('html').scrollTop();
	}
	var b1 = $('.wrapper__block-1'), 
	b2 = $('.wrapper__block-2'), 
	b3 = $('.wrapper__block-3'),
	b4 = $('.wrapper__block-4'),
	b5 = $('.wrapper__block-5');
	$('.wrapper__block-1__intro__button').on('click', function() {
		$('html, body').animate({
			scrollTop: b2.offset().top
		});
		return false;
	});
}());