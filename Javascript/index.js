$(document).ready(function(){
	
    $('.arrow').click(function(){
    
       var heightOfIndex = $('.index').outerHeight() + $('header').outerHeight() + 3;
      $('body,html').animate({scrollTop: heightOfIndex},200);
     });                  
  
});


