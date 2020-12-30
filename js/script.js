$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.locations-slider-1').slick({
        asNavFor:".locations-slider-nav-1",
        arrows: false,
        fade: true
    });
    $('.locations-slider-nav-1').slick({
        asNavFor:".locations-slider-1",
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth:true,
        arrows: false
    });
    $('.locations-slider-2').slick({
        asNavFor:".locations-slider-nav-2",
        arrows: false,
        fade: true
    });
    $('.locations-slider-nav-2').slick({
        asNavFor:".locations-slider-2",
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth:true,
        arrows: false
    });
    $('.locations-slider-3').slick({
        asNavFor:".locations-slider-nav-3",
        arrows: false,
        fade: true
    });
    $('.locations-slider-nav-3').slick({
        asNavFor:".locations-slider-3",
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth:true,
        arrows: false
    });
    $('.locations-slider-4').slick({
        asNavFor:".locations-slider-nav-4",
        arrows: false,
        fade: true
    });
    $('.locations-slider-nav-4').slick({
        asNavFor:".locations-slider-4",
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth:true,
        arrows: false
    });
});