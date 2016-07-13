// Unhide Language navigation

$("body").on("click", "#hamburger-icon", function(){
	$("#lang-mobile").toggleClass("hidden-xs hidden-sm");
});

// Left to right sliding menu javascript.
// When toggle button is pressed, the menu is sliding from left to right.

jQuery(function($){
    $('.navbar-toggle').click(function(){
    	// $('body').toggleClass('body-shading');
	    $('.navbar-collapse').toggleClass('show-menu');
	    $('.navbar-toggle').toggleClass('indexcity');
    });
});

// Testimonial caurousel script

$("body").on("click", ".client-selector", function(){
    var index = $(this).index();
    $("[id^='client-']:not(.client-selector)").addClass('hide');
    $("#client-"+(index+1)).removeClass('hide');
    $(".client-selector").removeClass("active-client");
    $(this).addClass("active-client");
});
