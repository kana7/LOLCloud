$(function () {
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
    
    $('#dropdown>li').on('click',function(){
        console.log($(this).children('a.link.bleu').prop("tagName"));
        var url = $(this).children().children().attr('href');
        console.log(url);
        if(url != 'undefined') {
            window.location = url;
        }
    });
});
