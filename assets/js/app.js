// Smooth scroll

$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var blockID = $(this).data('scroll'),
        blockOffset = $(blockID).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});
