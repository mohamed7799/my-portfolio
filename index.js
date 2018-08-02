//the code for smooth scrolling
$(document).ready(function(){
    let navbarHeight=$(".navbar").outerHeight();
    $(".link").click(function(e){
        let linkHerf=$(this).attr('href');
        $('html,body').animate({scrollTop:$(linkHerf).offset().top},1500);
        e.preventDefault();
    })
});

//for starting the animation on scrolling
function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
    $( ".animated" ).each(function() {
        isOnView = isElementVisible($(this));
        if(isOnView){
            $(this).removeClass('invisible');
            $(this).addClass('fadeInUp');
        }
    });
});


