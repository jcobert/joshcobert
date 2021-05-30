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
    var numImgs = 13;
    var breakpoint = pageWidth / numImgs

    for (var i = 0; i <= numImgs; i++) {
        if (x > i * breakpoint && x < (i + 1) * breakpoint) {
            mainImage.css("background-image", `url("/assets/images/${i-Math.floor(numImgs/2)}.png")`);
        }
    }
});