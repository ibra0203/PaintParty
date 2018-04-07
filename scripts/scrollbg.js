var _scrl=0;
$(document).ready(function(){
    if($(".scroll-bg").length)
        {
            if($(".scroll-bg").length)
                {
                    $(window).scroll(ScrollBG);
                    $(window).resize(ScrollBG);
                    ScrollBG();
                }
            
        }
});

function ScrollBG()
{
    _scrl = $(window).scrollTop()/29;
     
    console.log($(".scroll-bg").innerWidth());
    if($(".scroll-bg").innerWidth()> 1000)
        $(".scroll-bg").css('background-size', 100+_scrl +'%');
    else
        $(".scroll-bg").css('background-size','cover');
}