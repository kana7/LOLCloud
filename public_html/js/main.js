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
});
