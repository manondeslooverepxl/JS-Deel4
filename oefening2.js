
let personen = [{naam: 'Desloovere', voornaam: 'Manon', adres: 'Eflde-Liniestraat 24, 3500 Hasselt', hobby: 'sims'}];

let paragraafNaam = document.createElement("p");
let paragraafVoornaam = document.createElement("p");
let paragraafAdres = document.createElement("p");
let paragraafHobby = document.createElement("p");

let paragraafNaamTekst = document.createTextNode(personen[0].naam);
let paragraafVoornaamTekst = document.createTextNode(personen[0].voornaam);
let paragraafAdresTekst = document.createTextNode(personen[0].adres);
let paragraafHobbyTekst = document.createTextNode(personen[0].hobby);

paragraafNaam.appendChild(paragraafNaamTekst);
paragraafVoornaam.appendChild(paragraafVoornaamTekst);
paragraafAdres.appendChild(paragraafAdresTekst);
paragraafHobby.appendChild(paragraafHobbyTekst);

let informatieblok = document.getElementById("info1");
informatieblok.appendChild(paragraafNaam);
informatieblok.appendChild(paragraafVoornaam);
informatieblok.appendChild(paragraafAdres);
informatieblok.appendChild(paragraafHobby);

document.getElementsByTagName("body")[0].style.fontFamily = "Arial, Verdana, sans-serif";
paragraafNaam.style.fontWeight = "bold";
paragraafVoornaam.style.fontWeight = "bold";
paragraafNaam.style.fontStylet = "italic";
paragraafVoornaam.style.fontStyle = "italic";

let titels = document.getElementsByTagName("h1");
for (let teller = 0; teller < titels.length; teller++) {
    titels[teller].style.color = "darkgreen";
    titels[teller].style.textDecoration = "underline";
}




/*
// Eigen JS
// font van hele webpagina
document.getElementsByTagName("body")[0].style.fontFamily = "Arial, Verdana, sans-serif";

// titelkleur + onderlijning
document.getElementsByTagName("h1")[0].style.color = "green";
document.getElementsByTagName("h1")[0].style.textDecoration = "underline";

// naam vet + schuin
document.getElementsByTagName("p")[0].style.fontWeight = "bold";
document.getElementsByTagName("p")[0].style.fontStyle = "italic";
*/
