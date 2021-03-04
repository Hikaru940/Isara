$(function() {

    
    
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