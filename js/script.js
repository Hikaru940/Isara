$(function() {


    if (window.matchMedia( "(max-width: 600px)" ).matches) {
        // $(".p-flow__feature-panel2").css("display", "none");
        $(".p-flow__feature-panel1").click(function () {
            $(".p-flow__feature-panel1").not(this).removeClass("open");
            $(".p-flow__feature-panel1").not(this).next().slideUp(200);
            $(this).toggleClass("open");
            $(this).next().slideToggle(200);
        });
    }
});