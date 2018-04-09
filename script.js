$( window ).scroll(function() {
    if($(window).scrollTop() > 400){
        $( "#header" ).addClass( "navbar-fixed" );
        $( "#header" ).removeClass( "header" );

    }else{
        $( "#header" ).addClass( "header" );
        $( "#header" ).removeClass( "navbar-fixed" );


    }

});
// $(document).ready(function(){
//     $(".button-collapse").sideNav();
//
// });

$(document).ready(function(){
    $(".button-collapse").sideNav();
});
