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
        if (numeriSlide < 6) {
            slideNext();
            numeriSlide++;
        } else if (numeriSlide === 6) {
            clearInterval(clock);
        }
    }, 2000)

    $('.images img').mouseenter(function(){
        clearInterval(clock);
    })
    $('.images img').mouseleave(function(){
        var clock = setInterval(function(){
            if (numeriSlide < 6) {
                slideNext();
                numeriSlide++;
            } else if (numeriSlide === 6) {
                clearInterval(clock);
            }
        }, 2000)
    })

    $('.fas fa-play').click(function(){
        var clock = setInterval(function(){
            slideNext();
        }, 2000);
    });
    $('.fas fa-pause').click(function(){
        clearInterval(clock);
    });

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
