$(document).ready(function(){

    $('.index__arrow').click(function(){
       var heightOfIndex = $('.index').outerHeight() + $('header').outerHeight() + 3;
      $('body,html').animate({scrollTop: heightOfIndex},200);
    });    
                  
var myIndex = 0;
function carousel() {
    var i;
    var x = $('.slideshow__img');
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();
});