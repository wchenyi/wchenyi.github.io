/* =================================================================
* Template demo panel JS
* 
* Template:		Sepia - Photography Portfolio HTML Website Template
* Author:		Themetorium
* URL:			http://themetorium.net
*
================================================================= */

// Demo Panel
// ============

$('.demo-panel-trigger').on("click", function(e) {
	$('.demo-panel').toggleClass('demo-panel-open');
});
$(document).on('click', function(event) {
	if (!$(event.target).closest('.demo-panel').length)  {
		$(".demo-panel").removeClass("demo-panel-open");
	}
});



// Light switcher
// =================
$(".light-switcher").on("click",function() {
	$("body").toggleClass("tt-dark-style");
	$("body").hasClass("tt-dark-style") ? (localStorage.setItem("darkstyle", "true"), 
	$(".light-switcher").addClass("is-dark")) : (localStorage.setItem("darkstyle", "false"), 
	$(".light-switcher").removeClass("is-dark"));

	location.reload();
});

// localStorage (not work in IE on localhost!)
var d = localStorage.getItem("darkstyle");
d == "true" ? ($("body").addClass("tt-dark-style"),
	$(".light-switcher").addClass("is-dark")) : ($("body").removeClass("tt-dark-style"),
	$(".light-switcher").removeClass("is-dark"));


// Toggle dark stylesheet
if ($('body').hasClass('tt-dark-style')) {
	$('link[href="assets/css/dark-style.css"]').prop( "disabled", false );
} else {
	$('link[href="assets/css/dark-style.css"]').prop( "disabled", true );
}



// RTL switcher
// =================
$(".rtl-switcher").on("click",function() {
	$("body").toggleClass("tt-rtl");
	$("body").hasClass("tt-rtl") ? (localStorage.setItem("rtlstyle", "true"), 
	$(".rtl-switcher").addClass("is-rtl")) : (localStorage.setItem("rtlstyle", "false"), 
	$(".rtl-switcher").removeClass("is-rtl"));

	location.reload();
});

// localStorage (not work in IE on localhost!)
var d = localStorage.getItem("rtlstyle");
d == "true" ? ($("body").addClass("tt-rtl"),
	$(".rtl-switcher").addClass("is-rtl")) : ($("body").removeClass("tt-rtl"),
	$(".rtl-switcher").removeClass("is-rtl"));


// If class "tt-rtl" exist in <body> tag.
if ($('body').hasClass('tt-rtl')) {
	$('.demo-panel').addClass('dp-right');

	$('head').append($('<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap-rtl/bootstrap-rtl.min.css">'));
	$('head').append($('<link rel="stylesheet" href="assets/css/rtl/theme-rtl.css">'));
	$('head').append($('<link rel="stylesheet" href="assets/css/rtl/helper-rtl.css">'));
}



// Round style switcher
// =======================
$(".round-switcher").on("click",function() {
	$("body").toggleClass("tt-round");
	$("body").hasClass("tt-round") ? (localStorage.setItem("roundstyle", "true"), 
	$(".round-switcher").addClass("is-round")) : (localStorage.setItem("roundstyle", "false"), 
	$(".round-switcher").removeClass("is-round"));

	location.reload();
});

// localStorage (not work in IE on localhost!)
var d = localStorage.getItem("roundstyle");
d == "true" ? ($("body").addClass("tt-round"),
	$(".round-switcher").addClass("is-round")) : ($("body").removeClass("tt-round"),
	$(".round-switcher").removeClass("is-round"));

// Toggle round style stylesheet
if ($('body').hasClass('tt-round')) {
	$('link[href="assets/css/round-style.css"]').prop( "disabled", false );
} else {
	$('link[href="assets/css/round-style.css"]').prop( "disabled", true );
}
