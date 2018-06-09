//the code for smooth scrolling
$(document).ready(function(){
    let navbarHeight=$(".navbar").outerHeight();
    $(".link").click(function(e){
        let linkHerf=$(this).attr('href');
        $('html,body').animate({scrollTop:$(linkHerf).offset().top-navbarHeight},1500);
        e.preventDefault();
    })
})