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
//= require instafeed
//= require jquery3
//= require popper
//= require bootstrap
//= require jquery_ujs
//= require_tree .


	
//*****************************************************
//Facebook Like and share Integration
    $(document).ready(function(){
      window.fbAsyncInit = function() {
          FB.init({
            appId      : '355001904913193',
            xfbml      : true,
            version    : 'v2.10'
          });
          FB.AppEvents.logPageView();
       };
    });

    $(document).ready(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=355001904913193";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//Facebook Like and share Integration
//_______________________________________________________






//*****************************************************
//*****************************************************
//Social integration div extender
$(document).ready(function(){
    $(".fb-show").hover(function(){
    	 var toggleHeight = $(".fb-div").hasClass('expanded') ? "0" : "70px";
         $('.fb-div').stop().animate({ height: toggleHeight }, function(){
            $(this).toggleClass('expanded');
        });
    });
});
$(document).ready(function(){
    $(".twitter-show").hover(function(){
    	 var toggleHeight = $(".twitter-div").hasClass('expanded') ? "0" : "50px";
         $('.twitter-div').stop().animate({ height: toggleHeight }, function(){
            $(this).toggleClass('expanded');
        });
    });
});
$(document).ready(function(){
    $(".gplus-show").hover(function(){
    	 var toggleHeight = $(".gplus-div").hasClass('expanded') ? "0" : "50px";
         $('.gplus-div').stop().animate({ height: toggleHeight }, function(){
            $(this).toggleClass('expanded');
        });
    });
});
$(document).ready(function(){
    $(".fb-share").hover(function(){
    	 var toggleHeight = $(".fb-share-div").hasClass('expanded') ? "0" : "70px";
         $('.fb-share-div').stop().animate({ height: toggleHeight }, function(){
            $(this).toggleClass('expanded');
        });
    });
});
//_______________________________________________________





//*****************************************************
//*****************************************************
// All animations for home section


//_______________________________________________________







//*****************************************************
//*****************************************************
//*****************************************************
//function for Modal
function openModal(){
	var modalBox = document.getElementById('modal');
	modalBox.style.display = "block";
	modalBox.style.opacity = 1;
	document.body.style.overflow = "hidden";
}
function closeModal(){
	var modalBox = document.getElementById('modal');
	modalBox.style.display = "none";
	modalBox.style.opacity = 0;
	document.body.style.overflow = "auto";
}
//_______________________________________________________

//*****************************************************
//*****************************************************
//*****************************************************
//function for toolkit

$(document).ready(function(){
	$("#toolkit-button").click(function(){
	  $("#toolkit-button > i").toggleClass("rotated");
	  $(".option").toggleClass("stacked");
	})

	var add_link = '<div class="w-70 my-5 mx-auto d-flex"><div class="left w-30 overflow-hidden"><img src="" alt=""></div><div class="right w-70 overflow-hidden"><a href="#" class="expanded"><h1 class="heading-3 mt-3 fw-3">This is post title <span>This is post description.</span></h1></a><div id="exploder"></div></div></div>';
	var add_photo = '<div class="photo-container"><figure class="figure"><img src="..." class="figure-img img-fluid rounded" alt="..."><figcaption class="figure-caption">...</figcaption></figure></div>';
	var add_carousel = '<div class="scene"><div class="slider" id="scene"><div class="slide"><img src="..." alt="..."></div></div><div class="controls"><button name="prev"><i class="fas fa-angle-left"></i></button><button name="next"><i class="fas fa-angle-right"></i></button></div></div>';

	$("#add_link").click(function(){
	  $("textarea#post_body").val($("textarea#post_body").val() + add_link);
	})

	$("#add_photo").click(function(){
	  $("textarea#post_body").val($("textarea#post_body").val() + add_photo);
	})

	$("#add_carousel").click(function(){
	  $("textarea#post_body").val($("textarea#post_body").val() + add_carousel);
})
})
//_______________________________________________________

//*****************************************************
//function for 3d carousel
$(document).ready(function(){
	var child = $('.slider .slide').length;
	var base_angle = 360/child;
	var angle=0;
	var slide_width = $('.slide').width();
	var radius = Math.round( ( slide_width / 2 ) /  Math.tan( Math.PI / child ) );
	var rotate_angle = 0;
	
	$('.slider').css({transform: "rotateY(0deg) translateZ(-" + (radius+100) + "px)"});
		
	$('.slide:nth-child(n)').each(function(){
	    $(this).css({transform: "rotateY(" + angle + "deg) translateZ(" + (radius+50) + "px)"});
	    angle = angle + base_angle;
	 })
	
	$('button[name="prev"]').click(function() {
	  rotate_angle = rotate_angle + base_angle;
	  $(".slider").css({transform: 'translateZ(-'+(radius+50)+'px) rotateY('+rotate_angle+'deg)'})
	});

	$('button[name="next"]').click(function() {
	  rotate_angle = rotate_angle - base_angle;
	  $(".slider").css({transform: 'translateZ(-'+(radius+50)+'px) rotateY('+rotate_angle+'deg)'})
	});
})
//_______________________________________________________
