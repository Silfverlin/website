/* =================== ARROW ANIMATION ==================== */
$(document).ready(function(){

    $('.index__arrow').click(function(){
       var heightOfIndex = $('.index').outerHeight() + $('header').outerHeight() + 3;
      $('body,html').animate({scrollTop: heightOfIndex},200);
    });    
          
 
 /* =================== SLIDESHOW ==================== */

var slideIndex = 1;
var t = setInterval(function () {
  plusDivs(1);
}, 1000);

showDivs(slideIndex);

function changeState(el) {
  var text = '';
  if (!t) {
    t = setInterval(function () {
      plusDivs(1);
    }, 1000);
    text = 'PAUSE ||';
  } else {
    clearInterval(t);
    t = false;
    text = 'PLAY';
  }
  el.innerText= text;
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow__img");
  //var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
 
  x[slideIndex - 1].style.display = "block";
 
}

    $('.slideshow__controller').click(function() {
        changeState(this);
    });

});
