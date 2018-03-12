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