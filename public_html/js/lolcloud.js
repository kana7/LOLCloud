$(function () {
    $(".guide").hide();

    var _hash = window.location.hash.substr(1);
    console.log(_hash);
    $("#lolCloudGuides div").eq(_hash).fadeIn();

    $(".guidePics").lightBox();
    $(".guidePicsa").lightBox();
    $(".guidePics1").lightBox();
    $(".guidePics2").lightBox();
    $(".guidePics3").lightBox();
    $(".guidePics4").lightBox();
    $(".guidePicsA").lightBox();
    $(".guidePicsA2").lightBox();
    $(".guidePicsA3").lightBox();
    $(".guidePicsA4").lightBox();
    $(".guidePicsM").lightBox();
    $(".guidePicsM2").lightBox();
    $(".guidePicsM3").lightBox();
    $(".guidePicsi").lightBox();
    $(".guidePicsi2").lightBox();
    $(".guidePicsi3").lightBox();
    $(".guidePicsi4").lightBox();

    $("#lolCloudIcons li").click(function () {
        var button = $(this);
        $("#lolCloudIcons li").not(button).each(function () {
            $(this).removeClass("lolCloudIconsActive");
        });
        button.addClass("lolCloudIconsActive");
        $("#lolCloudGuides .guide").hide();
        console.log($(this).index());
        $("#lolCloudGuides .guide").eq($(this).index()).fadeIn();
    });
    $("#lolCloudIcons li").eq(_hash).click();

});