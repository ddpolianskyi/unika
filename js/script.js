$(document).ready(function(){
    // Anchors
    $("a").click(function(event){
        event.preventDefault();
        console.log(event);
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 800);
    });
    // HeaderOnScroll
    $(window).scroll(function(){
        if ( $(window).scrollTop() > $(".main").height() - $(".header").height() ){
            $(".header").css({"background": "#FFF"});
            $(".header__logo").css({"fill": "#000"});
            $(".header__nav-link").css({"color": "#000"});
            $(".header__hamburger-btn-line").css({"background": "#000"});
        } else {
            $(".header").css({"background": "transparent"});
            $(".header__logo").css({"fill": "#FFF"});
            $(".header__nav-link").css({"color": "#FFF"});
            $(".header__hamburger-btn-line").css({"background": "#FFF"});
        };
    });
    // Header hamburger
    $(".header__hamburger-nav").css({"top": "-" + $(".header__hamburger-nav").height() + "px"})
    $(".header__hamburger-btn").click(function(){
        $(".header__hamburger-nav").toggleClass("header__hamburger-nav_active");
    });
    // Works btn
    $(".works__nav-btn").click(function(){
        $(".works__nav-btn").removeClass("works__nav-btn_active");
        $(this).addClass("works__nav-btn_active");
    });
    // Slick sliders
    $(".reviews__slider").slick({
        arrows: false,
        dots: true,
        infinite: false,
    });
    $(".partners__slider").slick({
        arrows: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            },
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        }]
    })
    // Contacts btn
    $(".contacts__form-btn").click(function(){
        $(this).html("Sended!");
        $(this).css({"pointer-events": "none"});
        setTimeout(function(){
            $(".contacts__form-btn").html("Send");
            $(".contacts__form-btn").css({"pointer-events": "auto"});
        }, 2000);
    });
});