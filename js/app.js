$(document).ready(function () {
    var altoHeader = $("header").outerHeight();
    var ventanaHeader = $(window).outerHeight();
    //alert(ventanaHeader);
    $("header .menu").css("padding-top", altoHeader);
        $(".portafolio-pag .anuncio-portafolio").css("margin-top", altoHeader);
    $("header .menu").css("height", ventanaHeader)

    $('header .menu').hide();
    $("#menu-x").hide();
    $("#menu").on( "click", function() {
        //$('header .menu').show();
        $('header .menu').fadeIn("slow");
        $("#menu").toggle();
        $("#menu-x").toggle();
        //$("body").css("overflow", "hidden");
        $('body').addClass('stopscrolling')
    });
    $("#menu-x").on( "click", function() {
        //$('header .menu').hide();
        $('header .menu').fadeOut("slow");
        $("#menu").toggle();
        $("#menu-x").toggle();
        //$("body").css("overflow", "true");
        $('body').removeClass('stopscrolling')
    });

    if(window.innerWidth<850){
        $(".menu-pagina").toggle();
    }

    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    $(window).scroll(function(){
        if($(this).scrollTop() <= alto){
            $('.cont-menu-lateral').removeClass('menu-lateral-visible');
            /* ####Portada antigua $('.portada .caja').removeClass('caja-b');*/
        }
        if($(this).scrollTop() > alto) {
            $('.cont-menu-lateral').addClass('menu-lateral-visible');
            //alert("hola");
            /* ####Portada antigua $('.portada .caja').addClass('caja-b');*/
            //alert("hola");
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() < 1){
            $('.menu-lateral').removeClass('menu-lateral-scroll');
        }
        if($(this).scrollTop() > 1) {
            $('.menu-lateral').addClass('menu-lateral-scroll');
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() <= altoHeader){
            $('header').removeClass('header-scroll');
            /* ####Portada antigua $('.portada .caja').removeClass('caja-b');*/
        }
        if($(this).scrollTop() > altoHeader) {
            $('header').addClass('header-scroll');
            //alert("hola");
            /* ####Portada antigua $('.portada .caja').addClass('caja-b');*/
            //alert("hola");
        }
    });
    
    const body = document.body;
    const nav = document.querySelector(".header-scroll");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
    });

    /******************************************************************************
 * Fin
 */
    // smooth scrolling function on anchor tag
    /* Fuente: https://www.delftstack.com/es/howto/javascript/smooth-scroll-javascript/#google_vignette
    */
    $("a").on('click', function(event) {
        // if this.hash contain value
        if (this.hash !== "") {

            //default anchor click prevention
            event.preventDefault();

            // save hash
            var myHash = this.hash;

            // jQuery animate() method to call scroll
            // 1200 milliseconds takes to scroll to the desired area
            $('html, body').animate({
                scrollTop: $(myHash).offset().top
            }, 1200, function(){
                // when done scroll add # to URL
                window.location.hash = myHash;
            });
        } // End if
    });


    $(".ngosoufei-com").click(function(){
        window.open("https://ngosoufei.com");
    });
    $(".cartel-1").click(function(){
        window.open("https://www.instagram.com/p/DAHX88cqL_J/?igsh=NnN0ZzUwM2ZzaG9i");
    });
    /*$(".blog").on('click', function(){
        window.open("https://ngosoufei.com");
    })*/

    $(".loader").fadeOut("slow");
});