$(function() {

    $('a[href="#link').click(function() {
        let headerHight = 70;
        let speed = 300;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top-headerHight;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    jQuery(window).on("scroll", function() {
        if(jQuery(this).scrollTop() > 100) {
            jQuery('.c-floating').show();
        } else {
            jQuery('.c-floating').hide();
        }
    });

    $('.c-floating').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
    
    
    if (window.matchMedia( "(max-width: 600px)" ).matches) {
        $(".p-flow__feature-panel2").css("display", "none");
        $("#js-flow-activate").addClass("open");
        $("#js-flow-activate-first").css("display", "block");
        // $(".p-flow__feature-panel2").css("display", "none");
        $(".p-flow__feature-panel1").click(function () {
            $(".p-flow__feature-panel1").not(this).removeClass("open");
            $(".p-flow__feature-panel1").not(this).next().slideUp(200);
            $(this).toggleClass("open");
            $(this).next().slideToggle(200);
        });
    };
    
    $(".p-faq__content__text").css("display", "none");
    $("#js-faq-activate").addClass("open");
    $("#js-faq-activate-first").css("display", "block");
    
    $(".p-faq__content__head").on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('open', 300);
    });

});