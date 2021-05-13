(function($) {
  // DOM ready
  $(document).ready(function() {
    SetupTasks.viewportSetup();
    SetupTasks.spacingAdjust();

    // handle window resizing
    $(window).resize(function() {
      SetupTasks.spacingAdjust();
    });
  });

  var SetupTasks = {
    viewportSetup: function() {
      var isMobile = false;
      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
      }

      if (!isMobile) {
        // Enable parallax
        $(window).scroll(function() {
          $('#banner-image').css('background-position-y', $(window).scrollTop() * -0.05 + 'px');
        });
      }
    },

    spacingAdjust: function() {
      var viewportHeight = $(window).height();
      // default to 480px
      viewportHeight = (viewportHeight > 480) ? viewportHeight : 480;

      // make banner one screen unit
      $('.banner').css('height', viewportHeight + 'px');
      $('#banner-image').css('height', viewportHeight + 'px');
    }
  }
  // Run immediately
})(jQuery);

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
      window.location.hash = target;
    });
  });
});
