var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (!isAndroid) {
    $('#drop>a,#android1').hide();
}
