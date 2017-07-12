// Main Scripts

(function($) {
  function initSocial() {
    $('.trigger-social').on('click', function(){
        $('.text-wrap').fadeOut(300);
        setTimeout(function(){
          $('.social-wrap').fadeIn(300);
        }, 400);
    });
  }
  initSocial();

  function closeSocial() {
    $('.close-social').on('click', function(){
        $('.social-wrap').fadeOut(300);
        setTimeout(function(){
          $('.text-wrap').fadeIn(300);
        }, 400);
    });
  }
  closeSocial();

})(jQuery);