let boekenlijst = [
    {titel: "The theory of everything", auteur: "Stephen King", gelezen: "Ja"},
    {titel: "12 Rules for life", auteur: "Jordan Peterson", gelezen: "Nee"}
];

for (let teller = 0; teller < boekenlijst.length; teller++) {
    let boek = document.createElement("li");
    let boekInhoud = document.createTextNode(" Titel: " + boekenlijst[teller].titel + ", auteur: " + boekenlijst[teller].auteur) + ", gelezen: "
        + boekenlijst[teller].gelezen);
    boek.appendChild(boekInhoud);
    document.getElementById("boekenlijst").appendChild(boek);
}
// Belangrijk, je moet je code zodanig schrijven dat er extra boeken kunnen worden toegevoegd, aangezien je technisch gezien niet weet hoeveel er zijn in een databank
// Je moet dus werken met een lus

