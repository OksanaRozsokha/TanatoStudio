
$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000
    });


    //outline none
    $('button, a').on('focus', function () {
        $(this).blur();
    });

    //  scroll down btn
    $('.scroll').on('click', function () {

        let scrollTo = $(this).attr('data-scrollTo');
        $('body, html').animate({
            "scrollTop": $('.' + scrollTo).offset().top}, 1500);
        return false;
    });
});