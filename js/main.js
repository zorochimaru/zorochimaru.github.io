$(document).ready(function() {
    $('#fullpage').fullpage({
       	// lockAnchors: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#myMenu',
        verticalCentered: true,
    });


    new WOW().init();

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