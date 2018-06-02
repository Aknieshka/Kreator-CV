
$(document).ready(function($) {

    $('.accordion').find('.separator').click(function(e){

        $(".accordion-text").css("color", "white");

        e.preventDefault();

        $(this).next().slideToggle(800);
        //$(this).css("color", "black");

        $(".accordion-text").not($(this).next()).slideUp(800);

    });
});