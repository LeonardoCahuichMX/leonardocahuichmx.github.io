$(document).ready(function () {

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
      
});