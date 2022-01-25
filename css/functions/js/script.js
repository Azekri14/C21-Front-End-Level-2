let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ______________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ waarom? ____________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ____________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een A__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _______ op het scherm met de tekst _________ deze tekst staan op regel _______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ___________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ___________________ en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ___________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______________ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______________ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ___________________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _____________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _____________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ______________ en waar komt de waarde van kleur vandaan? ____________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ____________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _____________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ___________ en wanneer gebeurt dat __________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ___________________ vul je antwoord in op de lijn.