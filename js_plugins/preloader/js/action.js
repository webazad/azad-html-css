(function($){
    $(document).ready(function(){
        var scrolllink = $('.navigation a');
        
        // SMOOTH SCROLLING
        scrolllink.click(function(e){
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            },1000);
        });
        
        // ACTIVE LINK SWITCHING
        /*
        $(window).scroll(function(){
            var scrollbarlocation = $(this).scrollTop();
            scrolllink.each(function(){
                var sectionOffset = $(this.hash).offset().top;
                if(sectionOffset >= scrollbarlocation){
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });
        */
    });
})(jQuery);

(function($){
    $(document).ready(function(){
        $('#ud_dots').delay(3000).fadeOut(300,function(){
            $('#ud_bg_left').animate({left:'-50%'},300);
            $('#ud_bg_right').animate({right:'-50%'},300,function(){
                $('#ud_preloader').fadeOut(10);
            });
        });
    });
})(jQuery);