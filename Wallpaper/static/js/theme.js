/* =================================================================
* Template JS
* 
* Template:		Sepia - Photography Portfolio HTML Website Template
* Author:		Themetorium
* URL:			http://themetorium.net
*
================================================================= */


/* Table of Content
====================
# Page transitions / preloader
# Disable right click
# Smooth scrolling
# Header
# Main menu
# Page header
# Defer videos
# Isotope
# OWL Carousel
# lightGallery
# YTPlayer
# Add to favorite button
# Universal PHP Mail Feedback Script
# Fade out element with page scroll
# Parallax effect
# Remove input placeholder on focus
# Albums
# Single gallery
# Limit number of characters/words in element
# Footer
# Scroll to top button
# Miscellaneous
*/


(function ($) {
	'use strict';



	// ===============================================
	// Page transitions / preloader (Animsition)
	// More info: http://git.blivesta.com/animsition/
	// ===============================================

	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 800,
		outDuration: 500,
		// linkElement:   '.animsition-link',
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class*="lg-trigger"]):not([class*="sksw-btn"])', // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'html', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="assets/img/loading.svg" />'
		timeout: true,
		timeoutCountdown: 4000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'], // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'html',
		transition: function(url){ window.location.href = url; }
	});



	// ==========================================
	// Disable right click (uncomment if needed)
	// ==========================================

	// $(document)[0].oncontextmenu = function() { return false; }
	// $(document).mousedown(function(e) {
	//   if( e.button == 2 ) {
	//       alert('Sorry, this functionality is disabled!');
	//       return false;
	//   } else {
	//       return true;
	//   }
	// });



	// =========================================================================
	// Smooth scrolling 
	// Note: requires Easing plugin - http://gsgd.co.uk/sandbox/jquery/easing/
	// =========================================================================

	$('.sm-scroll').on("click",function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000, 'easeInOutExpo');
				return false;
			}
		}
	});



	// ===================================================
	// Header
	// ===================================================

	// if #header contains class "header-transparent" add class "header-transparent-on" to <pody>.
	if ($('#header').hasClass('header-transparent')) {
		$('body').addClass('header-transparent-on');
	}


	// Hide header on scroll down, show on scroll up
	// More info: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
	// ===================================================
	var didScroll;
	var lastScrollTop = 0;
	var delta = 120;
	var navbarHeight = $('.header-show-hide-on-scroll').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 50);

	function hasScrolled() {
		var st = $(window).scrollTop();
	  
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

			// If they scrolled down and are past the header, add class .fly-up.
			// This is necessary so you never see what is "behind" the header.
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$('.header-show-hide-on-scroll').addClass('fly-up');
			} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.header-show-hide-on-scroll').removeClass('fly-up');
			}
		}

		lastScrollTop = st;
	}


	// Header Filled (cbpAnimatedHeader) 
	// More info: http://tympanus.net/codrops/2013/06/06/on-scroll-animated-header/
	// ====================================
	var cbpAnimatedHeader = (function() {

		var docElem = document.documentElement,
			header = document.querySelector( '#header' ),
			didScroll = false,
			changeHeaderOn = 1;

		function init() {
			window.addEventListener( 'scroll', function( event ) {
				 if( !didScroll ) {
					  didScroll = true;
					  setTimeout( scrollPage, 300 );
				 }
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ($(this).scrollTop() > 150){  
				$('#header.header-fixed-top, #header.header-show-hide-on-scroll').addClass("header-filled");
			}
			else{
				$('#header.header-fixed-top, #header.header-show-hide-on-scroll').removeClass("header-filled");
			}
				didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();


	// Set padding-top to <body> if needed
	// ====================================
	$(window).resize(function() {

		// Make <body> padding-top equal to "#header" height if "#header" contains one of these classes: "header-fixed-top", "header-show-hide-on-scroll".
		if ($('#header').is('.header-fixed-top, .header-show-hide-on-scroll')) {
		  $('body').css( 'padding-top', $('#header').css('height'));
		}

		// Set "body" padding-top to "0" if "#header" contains class: "header-transparent".
		if ($('#header').is('.header-transparent')) {
		  $('body').css('padding-top', 0);
		}

	}).resize();



	// =======================
	// Main menu 
	// =======================

	// Add caret (little arrow down) if menu link contains dropdown
	$('.tt-submenu-wrap > a').append('<span class="tt-caret"></span>');

	// tt submenu (open submenu on hover)
	$('.tt-submenu-wrap').on("mouseenter",function(){
		$(this).addClass('tt-submenu-open');
	}).on("mouseleave",function(){
		$(this).removeClass('tt-submenu-open');
	});


	// Open/close mobile menu on toggle button click
	// ==============================================
	$('#tt-m-menu-toggle-btn').on('click',function() {
		// Add class "tt-m-menu-open" to <body> if menu is open
		$('body').toggleClass('tt-m-menu-open');

		// Mobile menu collapse
		$('.tt-menu-collapse').stop().slideToggle(300);

		// Close all dropdowns on mobile menu toggle button click
		$('.tt-submenu').slideUp(300);

		// Remove class "tt-m-dropdown-open" on dropdown toggle button click
		$('.tt-m-submenu-toggle').removeClass('tt-m-dropdown-open');
	});


	// Mobile submenu toggle button
	// =============================
	$('.tt-submenu-wrap').append('<div class="tt-m-submenu-toggle"></div>');

	// Open/close mobile dropdown on dropdown toggle button click
	$('.tt-m-submenu-toggle').on('click', function() {
		$(this).toggleClass('tt-m-dropdown-open');
		$(this).prev('ul').stop().slideToggle(300);
	});
 

	// Keeping sub-menus inside screen (useful if multi level sub-menus are used). Effect on large screens only!
	// More info: http://stackoverflow.com/questions/17985334/jquery-solution-for-keeping-dropdown-dropdown-inside-screen
	// ===========================
	if ($(window).width() > 768) {

		// If "<body>" contains class "tt-rtl".
		if ($('body').hasClass('tt-rtl')) {
			$('.tt-submenu-master .tt-submenu-wrap > a').parent().hover(function() {
				var menu = $('> .tt-submenu',this);
				var menupos = $(menu).offset();
				if (menupos.left < 0 ) {     
					var newpos = menupos.left + $(menu).width() * 2;
					menu.css({ left: $(menu).width() });
					menu.css({ right: 'auto' });
				}
			});

		} else {

			$('.tt-submenu-master .tt-submenu-wrap > a').parent().hover(function() {
				var menu = $('> .tt-submenu',this);
				var menupos = $(menu).offset();

				if (menupos.left + menu.width() > $(window).width()) {
					var newpos = -$(menu).width();
					menu.css({ left: newpos });
				}
			});
		}
	}


	// Menu tools
	// ===========

	// tt dropdown (open dropdown on hover)
	$('.tt-dropdown-wrap').on("mouseenter",function(){
		$(this).addClass('tt-dropdown-open');
	}).on("mouseleave",function(){
		$(this).removeClass('tt-dropdown-open');
	});

	// tt clobal search toggle
	$('.tt-clobal-search-trigger').on('click', function() {
		$('.tt-clobal-search').fadeIn(300, function() {
			$(this).addClass('search-open');
		});

		return false;    
	});
	$('.tt-clobal-search-close').on('click', function() {
		$('.tt-clobal-search').fadeOut(300, function() {
			$(this).removeClass('search-open');
		}); 
	});



	// ===============================
	// Page header
	// ===============================

	// if #page-header exist add class "page-header-on" to <body>.
	if ($('#page-header').length) {
		$('body').addClass('page-header-on');
	}

	// if page header contains background image add class "ph-image-on" to #page-header.
	if ($('.page-header-image').length) {
		$('#page-header').addClass('ph-image-on');
	}

	// if class "hide-ph-image" exist remove class "ph-image-on".
	if ($('.page-header-image').hasClass('hide-ph-image')) {
		$('#page-header').removeClass('ph-image-on');
	}



	// =======================================================================================
	// Defer videos (Youtube, Vimeo)
	// Note: When you have embed videos in your webpages it causes your page to load slower.
	// Deffering will allow your page to load quickly.
	// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
	// =======================================================================================

	function init() {
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
	if(vidDefer[i].getAttribute('data-src')) {
	vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
	} } }
	window.onload = init;



	// ===================================================================================
	// Isotope
	// Source: http://isotope.metafizzy.co
	// Note: "imagesloaded" blugin is required: https://github.com/desandro/imagesloaded
	// ===================================================================================

	// init Isotope
	var $container = $('.isotope-items-wrap');

		// if RTL enabled
		var origLeft = true;
		if( $('body').hasClass('tt-rtl')) {
			origLeft = false;
		}

	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.isotope-item',
			transitionDuration: '0.7s',
			originLeft: origLeft,
			masonry: {
				columnWidth: '.grid-sizer',
				horizontalOrder: false
			}
		});
	});

	// Filter
	$('.isotope-filter-links a').on("click",function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});

	// Filter item active
	var filterItemActive = $('.isotope-filter-links a');
	filterItemActive.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemActive.removeClass('active');
			$this.addClass('active');
		}
	});


	// If "isotope-top-content" exist add class ".iso-top-content-on" to <body>.
	if ($('.isotope-top-content').length) {
		$('body').addClass('iso-top-content-on');
	}

	// If ".isotope-filter" contains class "fi-to-button" add class "fi-to-button-on" to ".isotope-top-content".
	if ($('.isotope-filter').hasClass('fi-to-button')) {
		$('.isotope-top-content').addClass('fi-to-button-on');
	}

	// If ".isotope-filter" contains class "fi-to-button" add class "fi-to-button-on" to ".isotope-top-content".
	if ($('.gallery-share').length) {
		$('.isotope-top-content').addClass('gallery-share-on');
	}

	// Filter button clickable/hover (clickable on small screens)
	if ( $(window).width() < 992) {

		// Filter button clickable (effect on small screens)
		$('.isotope-filter-button').on("click",function(){
			$('.isotope-filter').toggleClass('iso-filter-open');
		});

		// Close filter button if click on filter links (effect only on small screens)
		$('ul.isotope-filter-links > li > a').on("click",function() {
			$(".isotope-filter-button").click();
		});

	} else {

		// Filter button on hover
		$('.isotope-filter').on("mouseenter",function(){
			$('.isotope-filter').addClass('iso-filter-open');
		}).on("mouseleave",function(){
			$('.isotope-filter').removeClass('iso-filter-open');
		});

	}


	// if class "isotope" exist.
	if ($('.isotope').length){
		
		// add overflow scroll to <html> (isotope items gaps fix).
		if ( document.querySelector('body').offsetHeight > window.innerHeight ) {
			document.documentElement.style.overflowY = 'scroll';
		}

		// Add class "isotope-on" to <body>.
		$('body').addClass('isotope-on');
	}


	// Add class "iso-gutter-*-on" to <body> if ".isotope" contains class "gutter-*".
	if ($('.isotope').hasClass('gutter-1')) {
		$('body').addClass('iso-gutter-1-on');
	}

	if ($('.isotope').hasClass('gutter-2')) {
		$('body').addClass('iso-gutter-2-on');
	}

	if ($('.isotope').hasClass('gutter-3')) {
		$('body').addClass('iso-gutter-3-on');
	}


	// Add class "iso-tt-wrap-on" to <body> if ".isotope-wrap" contains class "tt-wrap".
	if ($('.isotope-wrap').hasClass('tt-wrap')) {
		$('body').addClass('iso-tt-wrap-on');
	}



	// =====================================================
	// OWL Carousel
	// Source: http://owlcarousel2.github.io/OwlCarousel2/
	// =====================================================

	$(window).on('load', function() { // fixes Owl Carousel "autoWidth: true" issue (https://github.com/OwlCarousel2/OwlCarousel2/issues/1139).

		$('.owl-carousel').each(function(){
			var $carousel = $(this);
			$carousel.owlCarousel({

				items: $carousel.data("items"),
				loop: $carousel.data("loop"),
				margin: $carousel.data("margin"),
				center: $carousel.data("center"),
				startPosition: $carousel.data("start-position"),
				animateIn: $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoWidth: $carousel.data("autowidth"),
				autoHeight: $carousel.data("autoheight"),
				autoplay: $carousel.data("autoplay"),
				autoplayTimeout: $carousel.data("autoplay-timeout"),
				autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
				autoplaySpeed: $carousel.data("autoplay-speed"),
				nav: $carousel.data("nav"),
				navText: ['', ''],
				navSpeed: $carousel.data("nav-speed"),
				dots: $carousel.data("dots"),
				dotsSpeed: $carousel.data("dots-speed"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				dragEndSpeed: $carousel.data("drag-end-speed"),
				lazyLoad: $carousel.data("lazy-load"),
				video: true,
				responsive: {
					0: {
						items: $carousel.data("mobile-portrait"),
						center: false,
					},
					480: {
						items: $carousel.data("mobile-landscape"),
						center: false,
					},
					768: {
						items: $carousel.data("tablet-portrait"),
						center: false,
					},
					992: {
						items: $carousel.data("tablet-landscape"),
					},
					1200: {
						items: $carousel.data("items"),
					}
				}

			});

		});

		// Mousewheel plugin
		var owlMouse = $('.owl-mousewheel');
		owlMouse.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owlMouse.trigger('prev.owl', [800]);
			} else {
				owlMouse.trigger('next.owl', [800]);
			}
			e.preventDefault();
		});

		// Keyboard (prev/next arrow) events for navigating
		// https://github.com/OwlCarousel2/OwlCarousel2/issues/492#issuecomment-55629470
		var owlKeyboard = $('.owl-carousel');
		$(document).keyup(function(i){
			if(i.keyCode==37) {
				owlKeyboard.trigger('prev.owl', [800]);
			} else if (i.keyCode==39) {
				owlKeyboard.trigger('next.owl', [800]);
			}
		});

	});


	// CC item hover
	$('.cc-item').on('mouseenter',function() {
		$('.owl-carousel').addClass('cc-item-hovered');
	});
	$('.cc-item').on('mouseleave',function() {
		$('.owl-carousel').removeClass('cc-item-hovered');
	});

	// If ".cc-caption" exist add class "cc-caption-on" to ".cc-item".
	$('.cc-item').each(function() {
		if ($(this).find('.cc-caption').length) {
			$(this).addClass('cc-caption-on');
		}
	});



	// =====================================================
	// lightGallery (lightbox plugin)
	// Source: http://sachinchoolur.github.io/lightGallery
	// =====================================================

	$(".lightgallery").lightGallery({

		// Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

		// lightgallery core 
		selector: '.lg-trigger',
		mode: 'lg-fade', // Type of transition between images ('lg-fade' or 'lg-slide').
		height: '100%', // Height of the gallery (ex: '100%' or '300px').
		width: '100%', // Width of the gallery (ex: '100%' or '300px').
		iframeMaxWidth: '100%', // Set maximum width for iframe.
		loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
		speed: 600, // Transition duration (in ms).
		closable: true, // Allows clicks on dimmer to close gallery.
		escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
		keyPress: true, // Enable keyboard navigation.
		hideBarsDelay: 5000, // Delay for hiding gallery controls (in ms).
		controls: true, // If false, prev/next buttons will not be displayed.
		mousewheel: true, // Chane slide on mousewheel.
		download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
		counter: true, // Whether to show total number of images and index number of currently displayed image.
		swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
		enableDrag: true, // Enables desktop mouse drag support.
		enableTouch: true, // Enables touch support.

		// thumbnial plugin
		thumbnail: true, // Enable thumbnails for the gallery.
		showThumbByDefault: false, // Show/hide thumbnails by default.
		thumbMargin: 5, // Spacing between each thumbnails.
		toogleThumb: true, // Whether to display thumbnail toggle button.
		enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
		exThumbImage: 'data-exthumbnail', // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

		// autoplay plugin
		autoplay: false, // Enable gallery autoplay.
		autoplayControls: true, // Show/hide autoplay controls.
		pause: 6000, // The time (in ms) between each auto transition.
		progressBar: true, // Enable autoplay progress bar.
		fourceAutoplay: false, // If false autoplay will be stopped after first user action

		// fullScreen plugin
		fullScreen: true, // Enable/Disable fullscreen mode.

		// zoom plugin
		zoom: true, // Enable/Disable zoom option.
		scale: 0.5, // Value of zoom should be incremented/decremented.
		enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

		// video options
		videoMaxWidth: '1000px', // Set limit for video maximal width.

		// Youtube video options
		loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
		youtubeThumbSize: 'default', // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
		youtubePlayerParams: { // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
			modestbranding: 0,
			showinfo: 1,
			controls: 1
		},

		// Vimeo video options
		loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
		vimeoThumbSize: 'thumbnail_medium', // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
		vimeoPlayerParams: { // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters 
			byline : 1,
			portrait : 1,
			title: 1,
			color : 'CCCCCC',
			autopause: 1
		},

		// hash plugin (unique url for each slides)
		hash: true, // Enable/Disable hash plugin.
		hgalleryId: 1, // Unique id for each gallery. It is mandatory when you use hash plugin for multiple galleries on the same page.

		// share plugin
		share: false, // Enable/Disable share plugin.
			facebook: true, // Enable Facebook share.
			facebookDropdownText: 'Facebook', // Facebok dropdown text.
			twitter: true, // Enable Twitter share.
			twitterDropdownText: 'Twitter', // Twitter dropdown text.
			googlePlus: true, // Enable Google Plus share.
			googlePlusDropdownText: 'Google+', // Google Plus dropdown text.
			pinterest: true, // Enable Pinterest share.
			pinterestDropdownText: 'Pinterest' // Pinterest dropdown text.

	});



	// =======================================================
	// YTPlayer (Background Youtube video)
	// Source: https://github.com/pupunzi/jquery.mb.YTPlayer
	// =======================================================

	// Disabled on mobile devices, because video background doesn't work on mobile devices (instead the background image is displayed).
	if (!jQuery.browser.mobile) { 
		$(".youtube-bg").mb_YTPlayer();
	}



	// ==============================================================================
	// Add to favorite button
	// Source: http://www.webdesigncrowd.com/demo/circle-reveal-animation-12.23.13/
	// ==============================================================================

	$(".fav-count").on("click",function() {
		var total = parseInt($(this).html(), 10);
		if ($(this).parent().hasClass("active")) {
			total -= 1;
		} else {
			total += 1;
		}
		$(this).html(total);
		$(this).parent().toggleClass("active");
	});

	$(".icon-heart").on("click",function() {
		var total = parseInt($(this).parent().siblings(".fav-count").first().html(), 10);
		if ($(this).parent().parent().hasClass("active")) {
			total -= 1;
		} else {
			total += 1;
		}
		$(this).parent().siblings(".fav-count").first().html(total);
		$(this).parent().parent().toggleClass("active");
	});



	// ===============================================
	// Universal PHP Mail Feedback Script
	// Source: https://github.com/agragregra/uniMail
	// ===============================================

	// E-mail Ajax Send
	$("#contact-form").submit(function() { // Change (your contact form ID)
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", // Change (mail.php path)
			data: th.serialize()
		}).done(function() {
			alert("Thank you. Your message has been sent!");
			setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	// ==================================
	// Fade out element with page scroll
	// ==================================

	$(window).scroll(function(){
		$(".fade-out-scroll-1").css("opacity", 1 - $(window).scrollTop() / 150);
		$(".fade-out-scroll-2").css("opacity", 1 - $(window).scrollTop() / 250);
		$(".fade-out-scroll-3").css("opacity", 1 - $(window).scrollTop() / 350);
		$(".fade-out-scroll-4").css("opacity", 1 - $(window).scrollTop() / 450);
		$(".fade-out-scroll-5").css("opacity", 1 - $(window).scrollTop() / 550);
		$(".fade-out-scroll-6").css("opacity", 1 - $(window).scrollTop() / 650);
		$(".fade-out-scroll-7").css("opacity", 1 - $(window).scrollTop() / 750);
		$(".fade-out-scroll-8").css("opacity", 1 - $(window).scrollTop() / 850);
	});



	// ========================
	// Parallax effect
	// ========================

	$(window).scroll(function(){
		var plxbgScroll = $(this).scrollTop();

		// parallax - image background position
		$('.parallax-bg-1').css('background-position','center '+ ((plxbgScroll * 0.1)) +'px');
		$('.parallax-bg-2').css('background-position','center '+ ((plxbgScroll * 0.2)) +'px');
		$('.parallax-bg-3').css('background-position','center '+ ((plxbgScroll * 0.3)) +'px');
		$('.parallax-bg-4').css('background-position','center '+ ((plxbgScroll * 0.4)) +'px');
		$('.parallax-bg-5').css('background-position','center '+ ((plxbgScroll * 0.5)) +'px');
		$('.parallax-bg-6').css('background-position','center '+ ((plxbgScroll * 0.6)) +'px');

	});

	$(window).scroll(function(){
		var plxScroll = $(this).scrollTop();
		
		// parallax - transform
		$('.parallax-1').css('transform', 'translate3d(0, '+ ((plxScroll * 0.1)) +'px, 0)');
		$('.parallax-2').css('transform', 'translate3d(0, '+ ((plxScroll * 0.2)) +'px, 0)');
		$('.parallax-3').css('transform', 'translate3d(0, '+ ((plxScroll * 0.3)) +'px, 0)');
		$('.parallax-4').css('transform', 'translate3d(0, '+ ((plxScroll * 0.4)) +'px, 0)');
		$('.parallax-5').css('transform', 'translate3d(0, '+ ((plxScroll * 0.5)) +'px, 0)');
		$('.parallax-6').css('transform', 'translate3d(0, '+ ((plxScroll * 0.6)) +'px, 0)');
	});


	
	// ==================================
	// Remove input placeholder on focus
	// ==================================

	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
			.attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});



	// ==================================
	// Albums
	// ==================================

	// Rotate thumb-list items randomly (in gallery-list-carousel)
	$(".thumb-list.tl-rotate > li").each( function() {
		var rNum = (Math.random()*50)-25;  
			$(this).css( {
			'-webkit-transform': 'rotate('+rNum+'2deg)',
			'-moz-transform': 'rotate('+rNum+'2deg)'  
		});  
	});



	// ==================================
	// Single gallery
	// ==================================

	// Gallery single carousel 
	// ========================

	// Make carousel info same width as ".gs-carousel-wrap" on small devices
	$(window).resize(function() {
		if ($(window).width() < 768) {
			var gscwWidth = $('.gs-carousel-wrap').width();
			$('.gs-carousel-info').css({
				'width': gscwWidth
			});
		} else {
			$('.gs-carousel-info').css({
				'width': 440
			});
		}
	}).resize();



	// ============================================
	// Limit number of characters/words in element
	// ============================================

	// Limit number of characters in element (example: data-max-characters="120")
	$("div, p, a").each(function() {
		var textMaxChar = $(this).attr('data-max-characters');

		length = $(this).text().length;
		if(length > textMaxChar) {
			$(this).text($(this).text().substr(0, textMaxChar)+'...');
		}
	});

	// Limit number of words in element (example: data-max-words="40")
	$("div, p, a").each(function() {
		var textMaxWords = $(this).attr('data-max-words');
		var text = $(this).text();

		length = text.split(' ').length;
		if(length > textMaxWords) {
			var lastWord = text.split(' ')[textMaxWords];
			var lastWordIndex = text.indexOf(lastWord);
				$(this).text(text.substr(0, lastWordIndex) + '...');
		}
	});



	// ======================
	// Footer
	// ======================

	// If "#footer" contains class "footer-minimal" add class "footer-minimal-on" to <body>.
	if ($('#footer').hasClass('footer-minimal')) {
		$('body').addClass('footer-minimal-on');
	}



	// ======================
	// Scroll to top button
	// ======================

	// Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrolltotop').fadeIn();
		} else {
			$('.scrolltotop').fadeOut();
		}
	});



	// ===============
	// Miscellaneous
	// ===============

	// Bootstrap-3 modal fix
	$('.modal').appendTo("body")


	// Bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip()


	// Bootstrap popover
	$('[data-toggle="popover"]').popover({
		html: true
	});

	// Hover fix for iOS
	$('*').on('touchstart',function() {
		$(this).trigger('hover') ;
	}).on('touchend',function() {
		$(this).trigger('hover') ;
	});



})(jQuery); 
