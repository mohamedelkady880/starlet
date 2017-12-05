$(document).ready(function () {
     
     $("html").niceScroll();

	 $('.carousel').carousel({
	 interval: 3000


});
      


  // show color option div when click on the Gear

	$(".gear-check").click(function()
	{
		$(".color-option").fadeToggle();
	});



});


	


