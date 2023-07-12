$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-time');
        $('header').toggleClass('toggle');

    });

    $(windows).on('scroll load',function(){
        $('#menu').removeClass('fa-time');
        $('header').removeClass('toggle');

});
// smoth scrolling
$('a[href*="#"]').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href'))offset().top,
    ),
    500,
    'linear'

    });
});
});
