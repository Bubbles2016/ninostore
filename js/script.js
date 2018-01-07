$('#ddslick-select').ddslick({

});
$(document).ready(function () {
    $('#side-nav-accordion').accordion();

    $('.main-slider').slick({
        autoplay: true,
        arrows: false,
    });
    /* mario owl carousel*/
    $('.first-owl-carousel').owlCarousel({
        autoplay: true,
        autoSlideInterval: 20000,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

    /*zaccordion slider*/
    $("#z-slider").zAccordion({
        auto: false,
        tabWidth: 53,
        speed: 650,
        slideClass: 'slider',
        width: $('.zaccordion-platform').width(),
        height: $('.zaccordion-platform').width() / 2.25,
        easing: 'easeOutBounce',
        timeout: 5500,
        invert: false
    });

    /*best selling (owl) carousel*/
    $('.best-selling').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            321: {
                items:3
            },
            568: {
                items: 5
            },
            768: {
                items: 6
            },
            1024: {
                items: 7
            },

            1367: {
                items: 10
            }
        }
    })
    $(".best-selling .owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".best-selling .owl-next").html('<i class="fa fa-chevron-right"></i>');
    
    /*coming soon (owl) carousel*/
    $('.coming-soon').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
        mouseDrag: false
    })
    $(".coming-soon .owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".coming-soon .owl-next").html('<i class="fa fa-chevron-right"></i>');
    $(".coming-soon .owl-nav").removeClass("disabled");

    /*top selling (owl) carousel*/
    $('.top-selling').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            321: {
                items: 3
            },
            568: {
                items: 5
            },
            768: {
                items: 6
            },
            1024: {
                items: 7
            },
            1367: {
                items: 10
            }
        }
    })
    $(".top-selling .owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".top-selling .owl-next").html('<i class="fa fa-chevron-right"></i>');

    /*make the height of side nav div equals to the height of sliders div*/
    var sliders_height = $('.sliders').height();
    $('.side-nav').height(sliders_height);
});
