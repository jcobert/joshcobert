const btnHamburger = document.getElementById('btnHamburger');

btnHamburger.addEventListener('click', function () {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }

});

// Mouse Tracking Image Feature
const mainImage = $(".main-img-container");
$(document).mousemove(function (e) {
    var x = e.pageX;
    var pageWidth = $(document).width();
    var numImgsX = 13;
    var breakpointX = pageWidth / numImgsX
    var y = e.pageY;
    var pageHeight = $(document).height();
    var numImgsY = 21;
    var breakpointY = pageHeight / numImgsY

    // horizontal
    if (y > pageHeight / 2 - 100 && y < pageHeight / 2 + 100) {
        for (var i = 0; i <= numImgsX; i++) {
            if (x > i * breakpointX && x < (i + 1) * breakpointX) {
                mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/x/${i-Math.floor(numImgsX/2)}x.png")`);
            }
        }
    }

    // vertical
    if (x > pageWidth / 2 - 100 && x < pageWidth / 2 + 100) {
        for (var i = 0; i <= numImgsY; i++) {
            if (y > i * breakpointY && y < (i + 1) * breakpointY) {
                mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/y/${i-Math.floor(numImgsY/2)}y.png")`);
            }
        }
    }

});