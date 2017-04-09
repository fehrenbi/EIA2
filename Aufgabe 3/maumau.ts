/*
Aufgabe 3b
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 6.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

/*let karten: string[] = ["Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKönig", "KaroAss",
                        "Herz7", "Herz8", "Herz9", "Herz10", "HerzBube", "HerzDame", "HerzKönig", "HerzAss",
                        "Pik7", "Pik8", "Pik9", "Pik10", "PikBube", "PikDame", "PikKönig", "PikAss",
                        "Kreuz7", "Kreuz8", "Kreuz9", "Kreuz10", "KreuzBube", "KreuzDame", "KreuzKönig", "KreuzAss"];
let kartenAufHand: number = 0;
let abgelegteKarten: number = 0;
let restkarten: number = karten.length - KartenAufHand;

document.getElementById("ziehstapel").addEventListener("click", function() {
    if (kartenAufHand < 5 && restkarten > 0) {
        let zufälligeKarte: number = Math.floor((Math.random() * 31) + 0); 
        while (karten[zufälligeKarte]) == undefined) {
            zufälligeKarte = Math.floor((Math.random() * 31) + 0);
    }
    
*/
    
document.addEventListener('DOMContentLoaded', function () {
    let allCards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    let deck = document.getElementById("ziehstapel");
    let discard = document.getElementById("ablegestapel");
    let hand = document.getElementById("hand");
    let handCards = []; //Array mit 5 gezogenen Karten 
    let i = 0;
    deck.addEventListener("click", take);
    function take(_event) {
        if (i < 5) {
            let handCard = document.createElement("div"); //gezogene Karte
            document.body.appendChild(handCard); //Div an den Body hängen
            let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
            handCard.innerText += randomCard; //Zufallswert in gezogener Karte speichern
            i++; //Anzahl der Karten in der Hand plus 1
            handCards[i] = randomCard;
            handCard.addEventListener("click", giveAway);
        }
        console.log(Event, handCards);
    }
    function giveAway(_event) {
        let clickedCard = _event.target;
        let cardContent = clickedCard.innerText;
        clickedCard.style.display = "none"; //Karte ausblenden
        i--;
        discard.innerText = cardContent; //Wert der geklickten Karte auf dem Ablagestapel anzeigen
        console.log(cardContent, Event);
    }
});