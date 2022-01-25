let myStr = "test"; //dit is een variabele van het datatype string, waarom? omdat het een tekst is, en voor teksten gebruik je een string.
let myInt = 5; //dit is een variabele van het datatype integer waarom? omdat het een getal is en voor getallen zonder decimaal gebruik je integer.

//Waarom staat er let voor de variabelen? Als je voor het eerst een variabele aanmaakt, moet je hem declareren. Dat doe je met let.

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen? Op lijn 17.

    // vul in wat naam is: naam is de Parameter
    // vul in: naam heeft de waarde Mohamed, de waarde noemen we een Argument

    alert(naam); //dit toont een popup op het scherm met de tekst 'mohamed' deze tekst staan op regel 17 van de HTML
}

function hideMe(){ //mag je de naam van de functie veranderen? Nee want dan werkt de html code niet meer.
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? Deze functie verstopt een afbeelding en toont dan een afbeelding. en waar wordt deze in je HTML aangeroepen? op regel 23
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML. op regel 25.
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? Deze methode selecteert een element.
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? Deze functie toont de afbeelding en verstopt dan een afbeelding.
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _32_ en wanneer wordt deze aangeroepen? Als er op de button word gedrukt.

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan: van regel 2 in dit document. en waar komt de waarde van getal vandaan? van regel 32 in de HTML file

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? De gueryselector gebruikt de waarde die overeenkomt met de waarde die voor de css selector gebruikt. Wat is antwoord hier? Het antwoord is de uitkomst van de functie rekenen().
    //wat gebeurt er in deze functie? Deze fucntie berekend en toont het antwoord.

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? Het getal verandert dan. Dus in de HTML staat 8 en nu hier 5. Dan word het antwoord 13.
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? Ja de hele som verandert.
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen? 44

    element.style.color = kleur; //waar komt de waarde van element vandaan? Dit word uit het html document.
    element.style.fontSize = size; //waar komt de waarde van size vandaan? Dit word ook in het html document gedefinieert.

    //wat gebeurt er in deze functie? De kleur en grote van de tekst verandert.
}

getName(myStr);
// wat gebeurd er hierboven? De code hierboven toont een popup. en wanneer gebeurt dat? Dit gebeurt zodra je de pagina refresht (voordat je de rest van de pagina ziet.)
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? De tekst van de popup verandert.