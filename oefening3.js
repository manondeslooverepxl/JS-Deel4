// tekstkleur paragraaf
document.getElementById("red").style.color = "darkred";


// verwijder paragraaf
document.getElementById("weg").remove();
//Zo kan het ook:
// document.getElementById("main").removeChild(document.getElementById("weg"));


// hoofding toevoegen
let paragraaf = document.createElement("h1");
let paragraafTekst = document.createTextNode("Welkom PandiX");
let heading = document.getElementById("header");
heading.appendChild(paragraaf);
paragraaf.appendChild(paragraafTekst);


// aside toevoegen
let adres = document.getElementById("main");
let aside = document.createElement("aside");
let asideP = document.createElement("p");
let asideTekst = document.createTextNode("Elfde-Liniestraat 24");
adres.appendChild(aside);
aside.appendChild(asideP);
asideP.appendChild(asideTekst);