$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1,
	});


	$('.owl-prev').html('<img src="img/prev.png" alt="prev">');
	$('.owl-next').html('<img src="img/next.png" alt="next">');


	/*nav on small divices*/

    $("#navigation").click(function(){
    	$("header nav").slideToggle("fast");
    });
});