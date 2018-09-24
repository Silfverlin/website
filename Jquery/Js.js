function x(){
    alert("Hello");
}

/*Skapa en egen funktion som tar ett tal som argument och returnerar kvadraten på det talet. Infoga
funktionen i ditt HTML-dokument. Talet som skickas som argument ska skrivas in av användaren och
användaren ska sedan få resultatet utskrivet på skärmen.
*/
var tal;
function skrivEttTal(){
    tal = prompt('skriv ett tal:', tal);
}

function getKvadrat(tal){
   if(tal != null)
    {
        return Math.sqrt(parseInt(tal));
    }
    else 
    {
        alert("Du måste skriva ett tal!");
    }
}
function skrivTal(){
    document.write(getKvadrat(tal));
}

function kör(){
    skrivEttTal(tal);
    getKvadrat(tal);
    skrivTal(tal);
}
function skrivEttTillFem(){
    var i=1;
    while(i<6){
        document.write(i + "<br>");
        i++;
    }      
}

function For1Till5(){
    var siffror;
    var i;
    for(i=1; i <6; i++)
    {
        siffror = i;
        document.write(siffror + "<br>");
    } 
}

