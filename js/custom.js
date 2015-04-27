/* Opening Animations */
var homebody = $("#home");
var section = $("section");
var sidemenu = $("nav ul li");
$(document).ready(function () {
    "use strict";
    section.eq(0).addClass("show");
    $('#arrows').find('#prev').hide();
    background();
    mobileheader();
    if ($(window).width() < 480) {
        $('.content').find(".grids").slideUp(100);
    }
});
function loading() {
    "use strict";
    $('body').find('#loading').fadeOut();
}

function mobileheader() {
    "use strict";
    if ($(window).width() < 480) {
        $('.main').find('#mobile-header-image').show();
    } else {
        $('.main').find('#mobile-header-image').hide();
    }
}

/* Article Opening Effect */
function openeffect() {
    "use strict";
    if ($(window).width() > 1024) {
        var clm = $(".show .column");
        clm.each(function (i) {
            var e = $(this);
            e.fadeTo(0, 0);
            setTimeout(function () {
                e.fadeTo(350, 1);
            }, i * 350);
        });
    }
}

/* Article Backgrounds */
function background() {
    "use strict";
    if ($(window).width() > 480) {
        homebody.backstretch("images/photos/concert.jpg");
        $('.main').find(".about").backstretch("images/photos/1.jpg");
        $('.main').find(".albums").backstretch("images/photos/2.jpg");
        $('.main').find(".news").backstretch("images/photos/5.jpg");
        $('.main').find(".events").backstretch("images/photos/6.jpg");
        $('.main').find(".blog").backstretch("images/photos/4.jpg");
        $('.main').find(".contact").backstretch("images/photos/7.jpg");
    }
}

/* Clear Background Images */
function clear() {
    "use strict";
    $('.main').find(".backstretch img").remove();

}

/* Menu Icons Effect */
var menuitem = $(".menuitem");
menuitem.hover(

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(menuitem);
    var $allListElements = menuitem.find('.info');
    $theid.find($allListElements).slideDown(100);
    $theid.find($allListElements).addClass('animated tada');

},

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(menuitem);
    var $allListElements = menuitem.find('.info');
    $theid.find($allListElements).slideUp(100);
    $theid.find($allListElements).removeClass('animated tada');
});

/* Events Effect */
var grd = $(".events .grid-3");
grd.hover(

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(grd);
    var $allListElements = grd.find('h6');
    $theid.find($allListElements).fadeIn(100);

},

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(grd);
    var $allListElements = grd.find('h6');
    $theid.find($allListElements).fadeOut(100);
});

$(window).resize(function () {
    "use strict";
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) === false) {
        location.reload();
    }
});

if ($(window).width() > 480) {

    /* Homepage Article Effects */
    var clmn = $('.column');
    var curtain = $('#curtain');
    clmn.on("click",

    function (event) {
        "use strict";
        curtain.stop().animate({
            'height': '0%'
        }, 10);
        var $clickedElement = $(event.target);
        var $theid = $clickedElement.closest(clmn);
        $theid.addClass('active');

        clmn.each(function () {
            var e = $(this);
            if (e.hasClass('active')) {
                $(this).stop().fadeOut(1000).delay(500).animate({
                    'width': '100%'
                }, 10).fadeIn(500);
            } else {
                $(this).addClass('animated fadeOutDown').delay(200).stop().fadeOut(1000).animate({
                    'width': '0%'
                }, 10);
            }
        });
        $('.main').find('.active .desc').stop().delay(1000).animate({
            'marginLeft': '25%'
        }, 1000).delay(200).animate({
            'width': '75%',
            'height': '100%',
            'padding-top': '80px'
        }, 1000);
        homebody.find('#music').stop().animate({
            'marginRight': '80px'
        }, 100);
        homebody.find('#menu').stop().animate({
            'marginRight': '80px'
        }, 100);
        homebody.find('#gallery').stop().animate({
            'marginRight': '80px'
        }, 100);
        homebody.find('#blog').stop().animate({
            'marginRight': '80px'
        }, 100);
        homebody.find('#arrows').fadeOut();
        homebody.find('#close').fadeIn();
    });

    homebody.find('#close').on("click",

    function () {
        "use strict";
        clmn.removeClass('animated fadeOutDown');
        curtain.stop().animate({
            'height': '100%'
        }, 500);
        $('.main').find('.active').stop().animate({
            'width': '25%'
        }, 1000);
        clmn.stop().delay(1000).animate({
            'width': '25%'
        }, 1000).delay(200).fadeIn("slow");
        clmn.find('.desc').stop().animate({
            scrollTop: 0,
            'height': '125px',
            'width': '100%',
            'padding-top': '0px'
        }, 800).animate({
            'marginLeft': '0'
        }, 1000);
        homebody.find('#close').fadeOut();
        homebody.find('#menu').stop().animate({
            'marginRight': '0px'
        }, 100);
        homebody.find('#music').stop().animate({
            'marginRight': '0px'
        }, 100);
        homebody.find('#gallery').stop().animate({
            'marginRight': '0px'
        }, 100);
        homebody.find('#blog').stop().animate({
            'marginRight': '0px'
        }, 100);
        homebody.find('#arrows').delay(2000).fadeIn();
        clmn.removeClass('active');
    });

    /* Paging Effects */
    var nextlink = $('#next');
    var prevlink = $('#prev');
    nextlink.on("click", function () {
        "use strict";
        $("body").find(".show").removeClass('show').next().addClass('show');
        clear();
        openeffect();
        background();

        if (section.first().hasClass('show')) {
            prevlink.fadeOut();
        } else {
            prevlink.delay(1500).fadeIn();
        }
        if (section.last().hasClass('show')) {
            nextlink.fadeOut();
        } else {
            nextlink.delay(1500).fadeIn();
        }

    });

    prevlink.on("click", function () {
        "use strict";
        $("body").find(".show").removeClass('show').prev().addClass('show');
        clear();
        openeffect();
        background();

        if (section.first().hasClass('show')) {
            prevlink.fadeOut();
        } else {
            prevlink.delay(1500).fadeIn();
        }
        if (section.last().hasClass('show')) {
            nextlink.fadeOut();
        } else {
            nextlink.delay(1500).fadeIn();
        }

    });

}
if ($(window).width() < 480) {
    var dsc = $('.desc');
    var grds = $('.grids');
    dsc.on("click", function (event) {
        "use strict";
        grds.slideUp(100);
        var $clickedElement = $(event.target);
        var $theid = $clickedElement.closest(dsc);
        var $allListElements = $(grds);
        $allListElements.addClass('active-grid');
        $theid.find($allListElements).slideDown(100);
        $(grds).removeClass('active-grid');
    });
}

/////////////////* TABS */////////////////////////

$(document).ready(function () {
    "use strict";
    $("body").find("#tab-content div").hide();
    $("body").find("#tabs li:first").attr("id", "current");
    $("body").find("#tab-content div:first").fadeIn();

    $("body").find('#tabs a').on("click", function (e) {
        e.preventDefault();
        $("body").find("#tab-content div").hide();
        $("body").find("#tabs li").attr("id", "");
        $(this).parent().attr("id", "current");
        $('#' + $(this).attr('title')).fadeIn();
    });
});

/* Sidebar Menu */
sidemenu.on("click", function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(sidemenu);
    var $allListElements = $theid.find('ul li');
    if ($theid.hasClass('side-active')) {
        $allListElements.slideUp(100);
        $theid.find($allListElements).removeClass('animated fadeInLeft');
        $theid.removeClass('side-active');
    }
    else {
        $theid.addClass('side-active');
        $allListElements.slideDown(100);
        $theid.find($allListElements).addClass('animated fadeInLeft');
    }

});

/////////////////* LOADING ANIMATION ( DON'T REMOVE ! ) */////////////////////////

window.onload = loading;