$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH)
    $(window).on("scroll  resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);


    });

    function checkScroll() {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }
    }


    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");

        $("html,body").animate({
            scrollTop: elementOffset - 70
        }, 700);



    });

    let nav = $("#nav");
    $('#navToggle').on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");




    });


});