'use strict';

$(function() {
    $('a[href^="#"]').on('click', function() {
        let href = $(this).attr('href');
        let target = $(href == '#' || href == '' ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, 500, 'swing');
        return false;
    });

    $('#top').hide();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    });
    console.log($('#about').position().top);
    console.log($('#about').css('margin-top'));
    const aboutarea = $('#about').offset().top;
    $(window).on('scroll', function() {
        let scroll_top = $(this).scrollTop();
        if (scroll_top > aboutarea) {
            $('.prof_txt').css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }
    });
    
    $(document).on("scroll", function() {
        let status = getCurrentState("#skills");
        console.log(status);

        if (prevStatus != "in" && status == "in") {
            if (!isDoing) {
                animationStart();
            }
        }

        if (prevStatus != "out" && status == "out") {
            animationReset();
        }

        prevStatus = status;
    });
    
    $(document).trigger("scroll");
});

function getCurrentState(areaId) {
    let windowTop = 0;
    let windowBottom = $(window).innerHeight();

    let area = $(areaId);
    let areaTop = area.offset().top - $(window).scrollTop();
    let areaBottom = areaTop + area.height();

    if (areaBottom < windowTop || windowBottom < areaTop) {
        return "out";
    }
    else if ((windowTop <= areaTop && areaBottom <= windowBottom) || (windowTop > areaTop && areaBottom > windowBottom)) {
        return "in";
    }

    return "intersect";
}

let prevStatus = "out";
let isDoing = false;
const charts = document.querySelectorAll('#chart li');

function animationStart() {
    if (isDoing) {
        return;
    }
    const frameCount = 22;
    let offSetFrame = -100;
    let frame = 0;

    function backgroundSet() {
        charts.forEach(chart => {
            let percent = parseInt(chart.dataset.percent, 10);
            let targetPercent = 5 * frame;
            if (percent >= targetPercent) {　　 chart.style.backgroundPositionY = `${offSetFrame * frame}px`;　 }　
        });
    }
    let intervalId = setInterval(function() {
        backgroundSet();
        frame++;
        if (frame >= 22) {
            clearInterval(intervalId);
        }
    }, 20);
    isDoing = true;
}

function animationReset() {　
    charts.forEach(chart => {
        chart.style.backgroundPositionY = '0px';
    });

    /*console.log(charts.length);*/
    isDoing = false;
}

