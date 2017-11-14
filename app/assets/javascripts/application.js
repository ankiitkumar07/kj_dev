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
//*****************************************************
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
//_______________________________________________________




//*****************************************************
//*****************************************************
//*****************************************************
//angle Down
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
//_______________________________________________________


//*****************************************************
//*****************************************************
//Post Box animations
$(document).ready(function() {
	$(".post-box").mouseover(function() {
		$(this).find(".heading-and-excerpt").stop().animate({height:183},300);
		$(this).find(".excerpt>p").stop().animate({opacity:1},300);
	})
})
$(document).ready(function() {
	$(".post-box").mouseout(function() {
		$(this).find(".heading-and-excerpt").stop().animate({height:113},300);
		$(this).find(".excerpt>p").stop().animate({opacity:0},300);
	})
})
//_______________________________________________________

//*****************************************************
//*****************************************************
//*****************************************************
//Form
$(document).ready(function(){
	$('.myColsForm button').on('click',function(){
		var name = document.getElementById('name').value.toUpperCase();
		if(name=="" || document.getElementById('message').value == "")
		{
			alert("Please Enter All values");
		}
		else
		{
			if(alert('Thanks ' + name + ' for your support'))
			{}
			else    
				window.location.reload();
		}
		

	})
})
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