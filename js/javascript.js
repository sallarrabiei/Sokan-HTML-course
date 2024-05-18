(function($) {

    // Mobile Nav
    const skaMobileNav = function() {

        const $skatoggleBTN = $('.ska-header-toggle');
        const $skaNav = $('.ska-header-nav');

        $skatoggleBTN.on('click', function(event) {
            event.preventDefault();
            $skatoggleBTN.toggleClass('is-clicked');
            $skaNav.slideToggle(500);
        });



    };

    // initialize
    (function skaInit() {

        skaMobileNav();
    })();

})(jQuery);