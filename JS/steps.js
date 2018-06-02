$(function() {
    $('ul.accordion').addClass('js');

    $('#info').each(function() {
        const $a = $(this).find('a'); 

        $a.on('click', function(e) {
            const $this = $(this);

            const href = $this.attr('href');
            const $target = $(href);

            if ($target.length) {
                e.preventDefault(); 
                $this.siblings('a').removeClass('active');
                //$this.siblings('a').css("color", "#afb1b8");
                //$('a.steptab').not($(this)).css("color", "#afb1b8");
                $this.addClass('active');
                //$this.css("color", '#606060');

                $target.siblings('.insidetab').removeClass('active');
                $target.addClass('active');
            }
        });
    });
});

$('#arrow1').click(function(){
    $('#arrow1').css("filter", "contrast(130%)");
    $('#arrow2').css("filter", "contrast(100%)");
    $('#arrow3').css("filter", "contrast(100%)");
});

$('#arrow2').click(function(){
    $('#arrow2').css("filter", "contrast(130%)");
    $('#arrow1').css("filter", "contrast(100%)");
    $('#arrow3').css("filter", "contrast(100%)");
});

$('#arrow3').click(function(){
    $('#arrow3').css("filter", "contrast(130%)");
    $('#arrow2').css("filter", "contrast(100%)");
    $('#arrow1').css("filter", "contrast(100%)");
});