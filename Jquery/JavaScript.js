$(document).ready(function(){   //Körs när alla element har laddats

});

$(function(){               //förkortning av ovanstående kod

});

$(document).load(function(){  //avfyras när allt på sidan har laddats.

});


$(document).ready(function(){                   //
    $("#bild1.jpg").attr("src", "bild2.jpg");   //Ger objekt bild1 attributet bild2 (ändrar bild1 till bild2)
});


function changeBild(){                              //byter bild 1 till bild 2
   var enBild =  document.getElementById("bild1");  //Lagrar id bilden till variabel enBild
   enBild.src="bilder/bild2.jpg";                     //get variabel enBild värdet bild2
}

