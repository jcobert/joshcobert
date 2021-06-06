// Mobile Menu
const btnHamburger = document.getElementById('btnHamburger');

btnHamburger.addEventListener('click', function () {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }
    $('#navModal').modal('toggle');
});


// Projects page animation
$(function () {
    if ($('body.has-see-more').length > 0) {
        var projects = []
        for (let i = 0; i < $(".see-more").length; i++) {
            projects.push($(".project-card")[i]);
        }
        $.map(projects, function (p) {
            seeMore($(p).attr("id"));
        });
        
        let activated = false;
        if (window.location.hash != "" && activated === false) {
            goToProject();
            activated = true;
        }
    }
});

function seeMore(id) {
    const details = $(`#${id} .project-details`);

    $(`#${id} .see-more`).click(function () {
        details.slideToggle(150);

        if (details.hasClass("hidden")) {
            details.removeClass("hidden");
            $(this).html('Show less<i class="fas fa-angle-up">');
        } else {
            details.addClass("hidden");
            $(this).html('See more<i class="fas fa-angle-down">');
        }
    });
}

function goToProject() {
    let hash = window.location.hash;
    let key = hash.indexOf('-') + 1;
    let id = hash.slice(key);
    const details = $(`#${id} .project-details`);
    details.slideToggle(150);

    if (details.hasClass("hidden")) {
        details.removeClass("hidden");
        $(`#${id} .see-more`).html('Show less<i class="fas fa-angle-up">');
    } else {
        details.addClass("hidden");
        $(`#${id} .see-more`).html('See more<i class="fas fa-angle-down">');
    }
}





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
    var bounds = [pageHeight / 2 - 100, pageWidth / 2 + 100, pageHeight / 2 + 100, pageWidth / 2 - 100];

    // x axis
    if (y > bounds[0] && y < bounds[2]) {
        for (var i = 0; i <= numImgsX; i++) {
            if (x > i * breakpointX && x < (i + 1) * breakpointX) {
                mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/x/${i-Math.floor(numImgsX/2)}x.png")`);
            }
        }
    }

    // y axis
    if (x > bounds[3] && x < bounds[1]) {
        for (var i = 0; i <= numImgsY; i++) {
            if (y > i * breakpointY && y < (i + 1) * breakpointY) {
                mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/y/${i-Math.floor(numImgsY/2)}y.png")`);
            }
        }
    }

    // quadrant 1
    if (x > bounds[1] && y < bounds[0]) {
        mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/diag/1x-1y.png")`);
    }

    // quadrant 2
    if (x < bounds[3] && y < bounds[0]) {
        mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/diag/-1x-1y.png")`);
    }

    // quadrant 3
    if (x < bounds[3] && y > bounds[2]) {
        mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/diag/-1x1y.png")`);
    }

    // quadrant 4
    if (x > bounds[1] && y > bounds[2]) {
        mainImage.css("background-image", `url("/assets/images/logo-warp-imgs/diag/1x1y.png")`);
    }
});