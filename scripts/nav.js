$(document).ready(function() {

    var NavY = $('.nav').offset().top; 
     var stickyNav = function()
     {
         var ScrollY = $(window).scrollTop();
      
         if (ScrollY > NavY) 
         { 
             $('.nav').addClass('sticky');
             $('.fb-btn').addClass('fb-fixed');
             
             if ($('.logo-wrapper').hasClass('blocked-logo') === false) {
                $('.logo-wrapper').addClass('show-logo');
             }

         }
          
         else
         {
             $('.nav').removeClass('sticky'); 
             $('.fb-btn').removeClass('fb-fixed');
             
             if ($('.logo-wrapper').hasClass('blocked-logo') === false) {
                $('.logo-wrapper').removeClass('show-logo');
             }

         }
     };

     stickyNav();

     $(window).scroll(function() 
     {
         stickyNav();
         hideLang();
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

    var hideLang = function() {
        $('.lang-options').fadeOut('show-lang');
    };

    var toggleLang = function() {
        $('.lang-options').fadeToggle('show-lang');
    };

    $('.btn-lang').on('click', toggleLang);



});


