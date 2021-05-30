const btnHamburger = document.getElementById('btnHamburger');

btnHamburger.addEventListener('click', function () {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }

});

// Mouse Tracking Image Feature
const mainImage = $(".main-img-place");

$(document).mousemove(function (e) {
    var x = e.pageX;
    var pageWidth = $(document).width();
    var breakpoint = pageWidth / 5
    if (x < breakpoint) {
        mainImage.attr("src", "/assets/images/-2.jpg");
    } else if (x > breakpoint && x < 2 * breakpoint) {
        mainImage.attr("src", "/assets/images/-1.jpg");
    } else if (x > 2 * breakpoint && x < 3 * breakpoint) {
        mainImage.attr("src", "/assets/images/0.jpg");
    } else if (x > 3 * breakpoint && x < 4 * breakpoint) {
        mainImage.attr("src", "/assets/images/1.jpg");
    } else if (x > 4 * breakpoint && x < pageWidth) {
        mainImage.attr("src", "/assets/images/2.jpg");
    }
});