// Date injection
document.getElementById("copy").innerHTML += new Date().getFullYear();


// Word ny word animation for intro
$(document).ready(function(){
    $("#hi").fadeIn(1000);
    $("#iam").delay(500).fadeIn(1000);
    $('#name').delay(1000).fadeIn(2000);
});


// Animation for logo
$(document).ready(function(){
    $('.logo').fadeIn(2000);
});


// Functionality for scroll arrow
$(document).ready(function(){
    $('.sageata').click(function(){
        var y = $('.sageata').scrollTop();   
        var window_height = window.innerHeight - 46;
        $('html, body').animate({ scrollTop: y + window_height }) 
    }); 
 });



 /*Function for highlighting arrow*/

 $(function(){
    function make_yellow(){
       $(".sageata").css({"border-color": "black"});
    }
    function make_white(){
        $(".sageata").css({"border-color": "rgb(216,216,216)"});
    }
    window.setTimeout( make_yellow, 2000 ); // 3 seconds
    window.setTimeout( make_white, 2500);
 });




/*
if($(window).width() >= 768)
{
    $(document).ready(function(){
        $('#secondary-img').fadeIn(2000);
    });
    
}*/

