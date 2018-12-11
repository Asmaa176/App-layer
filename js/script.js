
$(document).ready(function(){

    // $('.page').click(function(){
    //     $('#inner-list').slideToggle();
    // });

    $('.menu').click(function(){
        $('#list').slideToggle();
    });

     $(window).resize(function(){
        if($(window).width() > 767) {
            $('#list').toggleClass('responsive-nav').css('display','');
        }
    });  
    
    
    // var myIcone = document.getElementById('first');
    // myIcone.onmouseover = function(){
    // myIcone.classList.add("first-rotate");
    // }
    // myIcone.onmouseout = function(){
    // myIcone.classList.add("first-rotate-back");
    // }
    
});
