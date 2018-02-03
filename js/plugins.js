/**
*
* -------------------------------------------------
*
* Template : M - One Page Personal Portfolio Template
* Author   : Hamza Mensouri
* Version  : 1.0
*
* --------------------------------------------------

01.Plugin For Preloader
02.Plugin for Smooth Scrolling
03.Plugin for Navbar Scrolling
04.Plugin for Typed Text
05.Plugin for Projects Counter
06.Plugin for Google Map
07.Plugin For Scrolling To The Top
08.Plugin For Magnific popup for portfolio
09.Plugin For Wow Animation
* --------------------------------------------------
*
**/
(function ($) {
    "use strict";
	
jQuery(document).ready(function($){
	
	
/** 01.Plugin For Preloader **/
$(window).on('load', function() {
		$(document).ready(function(){
		$('html').animate({scrollTop:0}, 1);
		$('body').animate({scrollTop:0}, 1);
		});
        var preloaderDelay = 850,
            preloaderFadeOutTime = 800;
        function hidePreloader() {
        var loadingAnimation = $('.loader'),
            preloader = $('.preloader');
            loadingAnimation.fadeOut();
            preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
        }

        hidePreloader();
});


/** 02.Plugin for Smooth Scrolling **/
$('.section-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
});


/** 03.Plugin for Navbar Scrolling **/
$(window).scroll(function() {
    if($(this).scrollTop() >= 100) {
        $('body').addClass('nav-scroll');
    } else {
        $('body').removeClass('nav-scroll');
    }
});


/** 04.Plugin for Typed Text **/
$(function(){
	$(".typed").typed({
		strings: ["Web Designer.","Freelancer.","Logo Design.","PSD.","Responsive Design."],
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
   
/** 05.Plugin for Projects Counter **/ 
$('.number').countTo();

/** 06.Plugin for Google Map **/
 if($("#map").length > 0){  
        var myOptions = {  
            zoom: 16,
            center: new google.maps.LatLng(33.9991612, -6.8474842), //change the coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: false,
            styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
        };		 
        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
                map: map,
				icon: "img/marker/map-marker.png",
                position: new google.maps.LatLng(33.9996612, -6.8474842)  //change the coordinates
        });
}
 
/** 07.Plugin For Scrolling To The Top **/
$('.scrollToTop').on('click', function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
});


/** 08.Plugin For Magnific popup for portfolio **/
$('.portfolio-box').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
})


/** 9.Plugin For Wow Animation **/
	new WOW().init();
	
    });
})(jQuery);