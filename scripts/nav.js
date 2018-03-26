$(document).ready(function() {

    var NavY = $('.nav').offset().top; 
     var stickyNav = function()
     {
         var ScrollY = $(window).scrollTop();
      
         if (ScrollY > NavY) 
         { 
             $('.nav').addClass('sticky');
             $('.fb-btn').addClass('fb-fixed');
         }
          
         else
         {
             $('.nav').removeClass('sticky'); 
             $('.fb-btn').removeClass('fb-fixed');
         }
     };

     stickyNav();

     $(window).scroll(function() 
     {
         stickyNav();
     });

});


