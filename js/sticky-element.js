(function($){
    /**
     * Sticky Header
     */
    let offset = $(".site-main").offset();
    $(window).scroll(function(){
        let header = $(".site-header");
        let stickerClass = "sticky-header";
        let stickyLoginClass = "sticky-header-login";
        let wp_bar = $("#wpadminbar");
        if(window.pageYOffset >= offset.top){
            header.addClass(stickerClass);
            if(wp_bar.length) header.addClass(stickyLoginClass);
        }else{
            header.removeClass(stickerClass);
            if(wp_bar.length) header.removeClass(stickyLoginClass);
        }
    });
}(jQuery));