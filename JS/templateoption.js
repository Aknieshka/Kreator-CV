wybor = 0;
wyborkoloru = 0;

$( "#template1" ).click(function() {

    wybor=1;
    $("#template2").css("color", "white");
    $("#template2").css("filter", "contrast(100%)");
    $("#template1").css("color", "black");
    $("#template1").css("filter", "contrast(80%)");

});

$( "#template2" ).click(function() {

    wybor=2;
    $("#template1").css("color", "white");
    $("#template1").css("filter", "contrast(100%)");
    $("#template2").css("color", "black");
    $("#template2").css("filter", "contrast(80%)");

});

$( "#bluecolor" ).click(function() {
    wyborkoloru=1;
    $("#bluecolor").css("filter", "contrast(180%)");
    $("#greencolor").css("filter", "contrast(100%)");
    $("#graycolor").css("filter", "contrast(100%)");
    $("#orangecolor").css("filter", "contrast(100%)");
    $("#bluecolor").css("opacity", "0.3");
    $("#greencolor").css("opacity", "1");
    $("#graycolor").css("opacity", "1");
    $("#orangecolor").css("opacity", "1");
});

$( "#greencolor" ).click(function() {
    wyborkoloru=4;
    $("#bluecolor").css("filter", "contrast(100%)");
    $("#greencolor").css("filter", "contrast(180%)");
    $("#graycolor").css("filter", "contrast(100%)");
    $("#orangecolor").css("filter", "contrast(100%)");
    $("#bluecolor").css("opacity", "1");
    $("#greencolor").css("opacity", "0.3");
    $("#graycolor").css("opacity", "1");
    $("#orangecolor").css("opacity", "1");
});

$( "#graycolor" ).click(function() {
    wyborkoloru=2;
    $("#bluecolor").css("filter", "contrast(100%)");
    $("#greencolor").css("filter", "contrast(100%)");
    $("#graycolor").css("filter", "contrast(180%)");
    $("#orangecolor").css("filter", "contrast(100%)");
    $("#bluecolor").css("opacity", "1");
    $("#greencolor").css("opacity", "1");
    $("#graycolor").css("opacity", "0.3");
    $("#orangecolor").css("opacity", "1");
});

$( "#orangecolor" ).click(function() {
    wyborkoloru=3;
    $("#bluecolor").css("filter", "contrast(100%)");
    $("#greencolor").css("filter", "contrast(100%)");
    $("#graycolor").css("filter", "contrast(100%)");
    $("#orangecolor").css("filter", "contrast(180%)");
    $("#bluecolor").css("opacity", "1");
    $("#greencolor").css("opacity", "1");
    $("#graycolor").css("opacity", "1");
    $("#orangecolor").css("opacity", "0.3");
});
