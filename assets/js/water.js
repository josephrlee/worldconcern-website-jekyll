(function($) {
    // DOM ready
    $(document).ready(function() {
        //$('base').attr('href','');

        // SetupTasks.viewportSetup();
        // SetupTasks.spacingAdjust();
        SetupTasks.navButton();

        // // handle window resizing
        // $(window).resize(function() {
        //     SetupTasks.spacingAdjust();
        // });
    });

    var SetupTasks = {
        // viewportSetup: function() {
        //     var isMobile = false;
        //     if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //         isMobile = true;
        //     }

        //     if (!isMobile) {
        //         // Enable parallax
        //         $(window).scroll(function() {
        //             $('#banner-image').css('background-position-y', $(window).scrollTop() * -0.15 + 'px');
        //         });
        //     }
        // },

        navButton: function() {
            // Nav toggle button
            var nav_timer;
            $('#nav_toggle').click(function(e) {
                $('.top-bar-section').fadeIn();
                nav_timer = setTimeout(function() {
                    $('.top-bar-section').fadeOut(1000);
                }, 3000);
                return false;
            });

            $('.top-bar-section').bind({
                mouseout: function(e) {
                    nav_timer = setTimeout(function() {
                        $('.top-bar-section').fadeOut(1000);
                    }, 3000);
                },
                mouseover: function(e) {
                    clearTimeout(nav_timer);
                }
            });

            // arrow down smooth
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

            // dismiss menu
            $('html').bind('click touchstart', function() {
                //Hide the menus if visible
                var menu = $('.top-bar-section');
                if ($(menu).is(':visible')) {
                    $(menu).fadeOut();
                }
            });
            $('.top-bar-section').click(function(e) {
                event.stopPropagation();
            });
        }

        // spacingAdjust: function() {
        //     var viewportHeight = $(window).height();
        //     // default to 480px
        //     viewportHeight = (viewportHeight > 480) ? viewportHeight : 480;

        //     // make banner one screen unit
        //     $('.banner').css('height', viewportHeight + 'px');
        //     $('#banner-image').css('height', viewportHeight + 'px');

        //     // position title      
        //     $('div.title-container').css('bottom', (viewportHeight * 0.1) + 'px');

        //     // space the intro section
        //     $('#introduction').css('height', viewportHeight + 'px');

        //     // pad introduction
        //     var introContentHeight = 0;
        //     var intro = $("#introduction");
        //     intro.children().each(function() {
        //         introContentHeight += $(this).outerHeight();
        //     });
        //     var introPadding = (viewportHeight / 2) - (introContentHeight / 2);
        //     intro.css('padding-top', introPadding + 'px')
        //         .css('margin-top', '0');

        // }
    }

    // Run immediately
})(jQuery);
