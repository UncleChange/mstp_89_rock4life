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

/////////////////* COMMENTS */////////////////////////

var cmnts = $('#read-comments');
cmnts.on("click", function () {
    "use strict";
    $('body').find('.comments_block').slideDown(1000);
    $('body').find('.comment-link').fadeOut();
});

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

/////////////////* Go to top link */////////////////////////

$("#credits").find('#top').on("click", function () {
    "use strict";
    var bdy = $('html, body');
    bdy.animate({ scrollTop: 0 }, 'slow');
});

/* Sidebar Menu */
var sidemenu = $("nav ul li");

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

/////////////////* Gallery */////////////////////////


$("body").find('#tiles').imagesLoaded(function () {
    "use strict";
    var filter = '';
    var handler;
    var options = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#main'), // Optional, used for some extra CSS styling
        offset: 10, // Optional, the distance between grid items
        itemWidth: 205 // Optional, the width of a grid item
    };
    var refresh = function () {
        if (handler) {
            handler.wookmarkClear();
            handler = null;
        }
        $("body").find('#tiles li').addClass('hide');
        handler = $(filter);
        handler.removeClass("hide");
        handler.wookmark(options);
    };
    var updateFilters = function () {
        var oldFilter = filter;
        filter = '';
        var filters = [];
        var lis = $("body").find('#filters li');
        var i = 0, length = lis.length, li;
        for (; i < length; i++) {
            li = $(lis[i]);
            if (li.hasClass('active')) {
                filters.push('#tiles li.' + li.attr('data-filter'));
            }
        }
        if (filters.length === 0) {
            filters.push('#tiles li');
        }
        filter = filters.join(', ');
        if (oldFilter !== filter) {
            refresh();
        }
    };
    var onClickFilter = function (event) {
        var item = $(event.currentTarget);
        $("body").find('#filters li').removeClass('active');
        item.toggleClass('active');
        updateFilters();
    };
    $("body").find('#filters li').click(onClickFilter);
    updateFilters();
});
