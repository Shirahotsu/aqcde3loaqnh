$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('#blankBtn').on('click', toggleBlank);

});
function toggleBlank(){
    $("#cBlank").removeClass("blank2");
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#banner").removeClass("container");
    } else {
       $("#banner").addClass("container");
    }
}

var x = window.matchMedia("(max-width: 1300px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

