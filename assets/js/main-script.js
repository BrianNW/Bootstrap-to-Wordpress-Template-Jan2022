(function($) {
    "user strict";

    // if mobile nav
    if($('.mobile-menu').length) {

        var mobileMenuContent = $('#top-navigation .navigation').html();

        $('.mobile-menu .navigation').append(mobileMenuContent);

        $('.stick-header .navigation').append(mobileMenuContent);

        $('.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visibile');
     });
    }
});