new WOW().init();

$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		speed:600,

		autoplay:true,
			/*Интервал автоматического переключения слайдера*/
			autoplaySpeed:2500,
					/*пауза при щелчке на любое место  в блоке слайдера*/
					pauseOnFocus:true,
					/*пауза при навидении на слайдер */
					pauseOnHover:true,
					/*пауза  при навидении на точки */
					pauseOnDotsFocus:true,
	});
});


$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.mobile-nav')	.toggleClass('active');
	});
});