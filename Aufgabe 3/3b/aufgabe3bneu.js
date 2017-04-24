/*
Aufgabe 4
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 20.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
//document.addEventListener("DOMContentLoaded", function(): void {
var aufgabe3b;
(function (aufgabe3b) {
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        let allCards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
            "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
            "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
            "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
        let ablage = document.getElementById("discard");
        let handKarten = document.getElementsByClassName("Handkarten");
        let nachziehStapel = document.getElementById("deck");
        nachziehStapel.addEventListener("click", randomCard);
        function randomCard(_event) {
            let zufallsKarte = allCards.splice(Math.round(Math.random() * (allCards.length - 1)), 1)[0];
            let leerKarte = sucheLeerKarte();
            if (leerKarte != null) {
                leerKarte.innerText = zufallsKarte;
            }
            if (allCards.length === 0) {
                nachziehStapel.innerText = "leer";
                nachziehStapel.style.display = "none";
            }
        }
        function sucheLeerKarte() {
            for (let i = 0; i < handKarten.length; i++) {
                if (handKarten[i].textContent == "") {
                    return handKarten[i];
                }
            }
            return null;
        }
        //Karten von Hand in die Ablage
        for (let v = 0; v < handKarten.length; v++) {
            handKarten[v].addEventListener("click", karteAblegen);
        }
        function karteAblegen(_event) {
            let karteHand = event.target;
            ablage.textContent = karteHand.textContent;
            karteHand.textContent = "";
        }
    }
})(aufgabe3b || (aufgabe3b = {}));
//# sourceMappingURL=aufgabe3bneu.js.map