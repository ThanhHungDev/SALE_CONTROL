
$(function(){

	$('.headline').hide().fadeIn(2000);
    $(window).scroll(function (){

        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){

              $(this).addClass('active');
							setTimeout(function(){
								document.body && myCreate();
								window.addEventListener('resize', function(event) {
									document.body && myCreate() || window.addEventListener("load", myCreate);
								}, true);
							},700);

            }
        });

    });
});