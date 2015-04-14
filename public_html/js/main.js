$(function () {
    var windw = this;

    $.fn.followTo = function (pos) {
        var top = $(this).css('top');
        var left = $(this).css('left');
        var $this = this,
                $window = $(windw);

        $window.scroll(function (e) {
            if (($window.scrollTop() + $('#info').height() + 50) > pos) {
                $this.css({
                    position: 'static'
                });
            } else {
                $this.css({
                    position: 'fixed'
                });
            }
        });
    };

    //size of viewport
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {width: e[ a + 'Width' ], height: e[ a + 'Height' ]};
    }

    $('#drop').on('click', function () {
        $(this).toggleClass('active');
        $('#dropdown').toggleClass('open');
    });

    $(window).resize(function () {
        $('#dropdown').removeClass('open');
        $('#drop').removeClass('active');
    });

    $(document).click(function (e) {
        if ($(e.target).closest('#drop,#dropdown').length != 0) {
            return false;
        }
        $('#dropdown').removeClass('open');
        $('#drop').removeClass('active');
    });

    $('#dropdown>li').on('click', function () {
        console.log($(this).children('a.link.bleu').prop("tagName"));
        var url = $(this).children().children().attr('href');
        console.log(url);
        if (url != 'undefined') {
            window.location = url;
        }
    });
    
    /*
    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });
    
    console.log(viewport().width);
    if (viewport().width>992){
         $('#info div.left').followTo($('#base').offset().top);
    }
    */
});
