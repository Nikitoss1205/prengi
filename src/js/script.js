$(document).ready(function() {
    $('.decision__slider').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
        centerMode: true,
        /* centerPadding: '-10px', */
        responsive: [{
			breakpoint: 992,
			settings: {
			dots: true,
			arrows: false
            }
        }]
    });

    $('.decision__text').click(function(e) {
        e.preventDefault();
    });

    $('#a-0').click(function() {
        $('.decision__slider').slick('goTo', 0);
    });
    $('#a-1').click(function() {
        $('.decision__slider').slick('goTo', 1);
    });
    $('#a-2').click(function() {
        $('.decision__slider').slick('goTo', 2);
    });
    $('#a-3').click(function() {
        $('.decision__slider').slick('goTo', 3);
    });
    $('#a-4').click(function() {
        $('.decision__slider').slick('goTo', 4);
    });
    $('#a-5').click(function() {
        $('.decision__slider').slick('goTo', 5);
    });
})