// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


// animation for quote box 1

$(function() {
	$(window).on('scroll', function() {
		var hT = $('#q1_left').offset().top,
		    // hH = $('.left').outerHeight(),
		    wH = $(window).height(),
		    wS = $(this).scrollTop();
		    console.log((hT-wH) , wS);
   			if (wS > (hT-wH)){
		$('#q1_left').addClass('animated slideInLeft');
		$('#q1_right').addClass('animated slideInRight');}
	});
});

$(function() {
	$(window).on('scroll', function() {
		var hT = $('#q2_left').offset().top,
		    // hH = $('.left').outerHeight(),
		    wH = $(window).height(),
		    wS = $(this).scrollTop();
		    console.log((hT-wH) , wS);
   			if (wS > (hT-wH)){
		$('#q2_left').addClass('animated slideInLeft');
		$('#q2_right').addClass('animated slideInRight');}
	});
});

$(function() {
	$(window).on('load', function() {
		$('a.navbar-brand').addClass('animated bounceInDown');
	});
});

$(function() {
	$(window).on('scroll', function() {
		var hT = $('.intro-box img').offset().top,
		    // hH = $('.left').outerHeight(),
		    wH = $(window).height(),
		    wS = $(this).scrollTop();
		    console.log((hT-wH) , wS);
   			if (wS > (hT-wH)){
		$('.intro-box img').addClass('animated bounceIn');
		$('.intro-box h1').addClass('animated bounceInDown');
		$('.intro-box p').addClass('animated bounceInUp');}
	});
});




// scrolling jQuery section

$(function() {
	$('#linkBlog').on('click', function() {
		$('html,body').animate({
			scrollTop: $('#blog').offset().top
		}, 2000);
	});
});
$(function() {
	$('#linkPhoto').on('click', function() {
		$('html,body').animate({
			scrollTop: $('#photos').offset().top
		}, 2000);
	});
});
$(function() {
	$('#linkIntro').on('click', function() {
		$('html,body').animate({
			scrollTop: $('#intro').offset().top
		}, 2000);
	});
});



// navbar JavaScript

// $(document).ready(function() {
// 				$('#home').on("mouseover",function() {
// 					$('#home').addClass('animated flipInX').one('webkitAnimationEnd moxAnimationEnd MSAniamtionEnd oanimationend animation',function() {
// 						$('#home').removeClass('animated flipInX');
// 					});
// 				});

// 				$('#blog').on("mouseover",function() {
// 					$('#blog').addClass('animated flipInX').one('webkitAnimationEnd moxAnimationEnd MSAniamtionEnd oanimationend animation',function() {
// 						$('#blog').removeClass('animated flipInX');
// 					});
// 				});
// 				$('#photo').on("mouseover",function() {
// 					$('#photo').addClass('animated flipInX').one('webkitAnimationEnd moxAnimationEnd MSAniamtionEnd oanimationend animation',function() {
// 						$('#photo').removeClass('animated flipInX');
// 					});
// 				});
// 				$('#intro').on("mouseover",function() {
// 					$('#intro').addClass('animated flipInX').one('webkitAnimationEnd moxAnimationEnd MSAniamtionEnd oanimationend animation',function() {
// 						$('#intro').removeClass('animated flipInX');
// 					});
// 				});
// 			});

			$(document).ready(function() {
				$(window).on('scroll', function() {
					var scroll = $(window).scrollTop();
					$('.fixedpara').text('Sroll Value : ' + scroll);
				});
			});


			$(document).ready(function() {
				$(window).on('scroll', function() {
					var sc = $(window).scrollTop();
					if(sc <= 651)
					{
						$('#hidnav').css({"visibility":"hidden", "top":"-50px"});
					}
					else{
						$('#hidnav').css({"visibility":"visible", "top":"0px"});
					}
				});
			});
