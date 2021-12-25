// Run on DOM Ready
$(function () {
    // Mobile menu
    const btnHamburger = $("#btnHamburger");

    btnHamburger.click(function () {
        if (btnHamburger.hasClass('open')) {
            btnHamburger.removeClass('open');
        } else {
            btnHamburger.addClass('open');
        }
        $('#navModal').modal('toggle');
    });

    // Project page
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

    // Project preview card heights
    cardHeightNormalization("#project-previews .project-card");
});


// Run on Window Load
$(window).on("load", function() {
    // Project preview card heights
    cardHeightNormalization("#project-previews .project-card");
    console.log("Window loaded.");
});


// Projects Page Animation
function seeMore(id) {
    const details = $(`#${id} .project-details`);

    $(`#${id} .see-more`).click(function () {
        details.slideToggle(700);

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
    details.slideToggle(700);

    if (details.hasClass("hidden")) {
        details.removeClass("hidden");
        $(`#${id} .see-more`).html('Show less<i class="fas fa-angle-up">');
    } else {
        details.addClass("hidden");
        $(`#${id} .see-more`).html('See more<i class="fas fa-angle-down">');
    }
}


// Normalize Card Heights
function cardHeightNormalization(cards) {
    var items = $(cards),
        heights = [],
        tallest;

    if (items.length) {
        function normalizeHeights() {
            items.each(function () {
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights);
            items.each(function () {
                $(this).css('min-height', tallest + 'px');
            });
        };
        normalizeHeights();

        $(window).on('resize orientationchange', function () {
            tallest = 0, heights.length = 0;
            items.each(function () {
                $(this).css('min-height', '0');
            });
            normalizeHeights();
        });
    }
}


