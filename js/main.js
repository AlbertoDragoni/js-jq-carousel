$(document).ready(function(){
    $('.next').click(function(){
        slideNext();
    });
    $('.prev').click(function(){
        slidePrev();
    });
    var orario = new Date();
    console.log(orario);

    var numeriSlide = 0;
    var clock = setInterval(function(){
        if (numeriSlide < 3) {
            slideNext();
            numeriSlide++;
        } else if (numeriSlide === 3) {
            clearInterval(clock);
        }
    }, 2000)

    function slideNext(){
        if ($('.images img.active').hasClass('last')) {
            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');
        } else {
            var imgAttiva = $('.images img.active');
            var prossimaImg = imgAttiva.next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');
        }
    };

    function slidePrev () {
        if ($('.images img.active').hasClass('first')) {
            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active')
        } else {
            var imgAttiva = $('.images img.active');
            var previousImg = imgAttiva.prev();

            imgAttiva.removeClass('active');
            previousImg.addClass('active');
        }
    };










});
