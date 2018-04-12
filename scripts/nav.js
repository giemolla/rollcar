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

     var toggleNav = function() {
        $('.bar1').toggleClass('change-bar1');
        $('.bar2').toggleClass('change-bar2');
        $('.bar3').toggleClass('change-bar3');
        $('body').toggleClass('overflow-hidden');
        $('.nav-list-mobile-wrapper').slideToggle('expand');
    };

    $('#open-nav').on('click', function() {
        toggleNav();
    });

});


