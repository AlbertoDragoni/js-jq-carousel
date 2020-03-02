$(document).ready(function(){
    $('.next').click(function(){
        slideNext();
    });
    $('.prev').click(function(){
        slidePrev();
    });

});
function slideNext() {
    $('.next').click(function(){
        if ($('.images img.active').hasClass('last')) {
            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');
        } else {
            var imgAttiva = $('.images img.active');
            var prossimaImg = imgAttiva.next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

        }
});
function slidePrev() {
    if ($('.images img.active').hasClass('first')) {
        $('.images img.active').removeClass('active');
        $('.images img.last').addClass('active')
    } else {
        var imgAttiva = $('.images img.active');
        var previousImg = imgAttiva.prev();

        imgAttiva.removeClass('active');
        previousImg.addClass('active');
    }
});












});
