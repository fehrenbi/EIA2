/*
Aufgabe 3b
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 6.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

let karten: string[] = ["Karo7", "Karo8", "Karo9", "Karo10", "KaroBube", "KaroDame", "KaroKönig", "KaroAss",
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
    

    
    