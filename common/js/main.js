
$(function () {
    $("#realestate-home-navigation-placeholder").load("common/html/nav.html");
});

$(function () {
    $("#realestate-home-footer-placeholder").load("common/html/footer.html");
});

$(function () {
    new WOW().init();
});

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

$(function () {
    var panels = $('.accordion > dd').hide();
    panels.first().show();
    $('.accordion > dt > a').click(function () {
        var $this = $(this);
        panels.slideUp();
        $this.parent().next().slideDown();
        return false;

    });
});
$(function () {
    $(".btn-sucess,.closeBtn").on('click', function () {
        $('.collapse').collapse('hide');
    });
});


