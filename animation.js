"use strict";

function headerFixed() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header-2');
        }
        else {
            $('header').removeClass('header-2');
        }
    });
}

function buttonsAnimation() {
    $('.goal-row-1-department').parallaxContent({
        duration: 1,
        shift: 50
    });
    $('.goal-row-2-car').parallaxContent({
        duration: 1,
        shift: 120
    });
    $('.goal-row-3-expertise').parallaxContent({
        duration: 1,
        shift: 100
    });
    $('.goal-row-4-travel').parallaxContent({
        duration: 1,
        shift: 50
    });
}

function devicesScroll() {
    if ($(".main-devices").length && $(".item-text").length) {
        var n = $(window).scrollTop(),
            o = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            r = -1 * o;

        $(".item-text").each(function (e) {
            var t = $(this),
                i,
                a = $(this).offset().top - n;
            a <= (o / 2) && r / (2 < a)
                ? $($(".img-device")[e]).addClass("active")
                : $($(".img-device")[e]).removeClass("active")
        })
    }
}

$(document).ready(function () {
    headerFixed();
    devicesScroll();
    if ($(window).width() <= 769) {
        $('.buttons').parallaxContent({
            duration: 1,
            shift: 50
        });
        return;
    }
    buttonsAnimation();
});

$(window).scroll(function () {
    devicesScroll();
})

//TODO. cambar iconitos de al cerrar abrir modal
