$(function () {
    /* Fixed Header */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(header, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(header, introH);
    });

    function checkScroll(header, introH) {
        if (scrollPos > introH - 60) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    $('[data-scroll]').on("click", function (e) {
        e.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 60
        }, 700);

    });

    /* Burger */
    navToggle.on("click", function (e) {
        e.preventDefault();

        nav.addClass('show');
    })

    $('.header__burger').click(function (event) {
        $('.header__burger,.nav').toggleClass('active');
        // $('body').toggleClass('lock');
    });

    /* Reviews */
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });


});