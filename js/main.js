//PRELOADER
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
    $('.container').delay(350).css({ 'display': 'grid' });
});


//FULLPAGEJS
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#myMenu',
        verticalCentered: true,
        //CIRCLE PROGRESS BARS ANIMATION
        afterLoad: function(anchorLink) {
            if (anchorLink == 'page3') {
                window.randomize = function() {
                    $('#python').attr('data-progress', Math.floor(70));
                    $('#c').attr('data-progress', Math.floor(60));
                    $('#java').attr('data-progress', Math.floor(30));
                    $('#js').attr('data-progress', Math.floor(70));
                }
                setTimeout(window.randomize, 500);
                $('.ko-progress-circle').click(window.randomize);
            }
        },
        onLeave: function(index, nextIndex) {
            if (index == 3) {
                $('.ko-progress-circle').attr('data-progress', Math.floor(0));
            }

        },

    });

    new WOW().init(); //wow script for animations while scroll

    // images zooming
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
});