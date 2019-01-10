// $(window).load(function() {
//     $(".loader").fadeOut("slow", function(){
//     $(".loaders").delay(300).fadeOut("slow");
//     });
// });

var revapi;
$(document).ready(function() {
    revapi = $('.tp-banner').revolution(
    {
        delay:9000,
        startwidth:1170,
        startheight:720,
        hideThumbs:10,
        lazyLoad:"on"
    });
});

(function() {
            
    var docElem = document.documentElement,
        didScroll = false,
        changeHeaderOn = 100;
        changeHeaderOnMotor = 1200;
        changeHeaderOnSecond = 2400;
        document.querySelector( 'header' );
        
    function init() {
        window.addEventListener( 'scroll', function() {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
    
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $(".slider-full").addClass("slider-padding");
            $(".motor-fixed").addClass("display-block");
        }
        else {
            $(".slider-full").removeClass("slider-padding");
            $(".motor-fixed").removeClass("display-block");
        }
        if ( sy >= changeHeaderOnSecond ) {
            $(".slider-full-2").addClass("slider-padding");
        }
        else {
            $(".slider-full-2").removeClass("slider-padding");
        }
        if ( sy >= changeHeaderOnMotor ) {
            $(".motor-fixed-home").addClass("display-block");
        }
        else {
            $(".motor-fixed-home").removeClass("display-block");
        }
        didScroll = false;
    }
    
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    
    init();
    
})();

var animate = {
    'time':	1000,
    'randMin': 100,
    'randMax': 200
};