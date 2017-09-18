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
//= require bootstrap-sprockets
//= require bootstrap
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//Facebook Like and share Integration
    $(document).on('turbolinks:load',function(){
      window.fbAsyncInit = function() {
          FB.init({
            appId      : '355001904913193',
            xfbml      : true,
            version    : 'v2.10'
          });
          FB.AppEvents.logPageView();
       };
    });

    $(document).on('turbolinks:load',function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=355001904913193";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//Facebook Like and share Integration


			$(document).on('turbolinks:load',function(){
			    $(".fb-show").hover(function(){
			    	 var toggleHeight = $(".fb-div").hasClass('expanded') ? "0" : "50px";
			         $('.fb-div').stop().animate({ height: toggleHeight }, function(){
		                $(this).toggleClass('expanded');
		            });
			    });
			});
			$(document).on('turbolinks:load',function(){
			    $(".twitter-show").hover(function(){
			    	 var toggleHeight = $(".twitter-div").hasClass('expanded') ? "0" : "50px";
			         $('.twitter-div').stop().animate({ height: toggleHeight }, function(){
		                $(this).toggleClass('expanded');
		            });
			    });
			});
			$(document).on('turbolinks:load',function(){
			    $(".gplus-show").hover(function(){
			    	 var toggleHeight = $(".gplus-div").hasClass('expanded') ? "0" : "50px";
			         $('.gplus-div').stop().animate({ height: toggleHeight }, function(){
		                $(this).toggleClass('expanded');
		            });
			    });
			});


	


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


			$(document).ready(function() {
				$(window).on('scroll', function() {
					var scrolled = $(window).scrollTop();

					$('.site-brand').css('top', (280+(scrolled*.50))+'px');
				});
			});

			$(document).ready(function(){
			  // Add smooth scrolling to all links
			  $("a.scrollers").on('click', function(event) {

			    // Make sure this.hash has a value before overriding default behavior
			    if (this.hash !== "") {
			      // Prevent default anchor click behavior
			      event.preventDefault();

			      // Store hash
			      var hash = this.hash;

			      // Using jQuery's animate() method to add smooth page scroll
			      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			      $('html, body').animate({
			        scrollTop: $(hash).offset().top
			      }, 1800, function(){
			   
			        // Add hash (#) to URL when done scrolling (default click behavior)
			        window.location.hash = hash;
			      });
			    } // End if
			  });
			});


			$(document).ready(function(){
				$(window).on('scroll', function(){
					var sc = $(window).scrollTop();
					if(sc <= 40)
					{
						$('.fa-angle-down').css({"visibility":"visible"});
					}
					else{
						$('.fa-angle-down').css({"visibility":"hidden","transition":"300ms"});
					}
				});
			});

			$(document).ready(function(){
				$(window).on('scroll', function(){
					var hT = $('.masonry div').offset().top,
				    // hH = $('.left').outerHeight(),
				    wH = $(window).height(),
				    wS = $(this).scrollTop();
				    console.log((hT-wH) , wS);
		   			if (wS > (hT-wH)){
				$('.masonry div').addClass('animated bounceIn');}
				});
			});
