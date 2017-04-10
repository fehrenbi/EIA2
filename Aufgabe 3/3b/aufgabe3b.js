document.addEventListener("DOMContentLoaded", function () {
    let allCards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    let nachziehStapel = document.getElementById("deck");
    nachziehStapel.addEventListener("click", function () {
        //Zufallskarte generieren
        let zufallsKarte = allCards.splice(Math.round(Math.random() * (allCards.length - 1)), 1)[0];
        // Variable für funktion anlegen
        let leerKarte = sucheLeerKarte();
        function sucheLeerKarte() {
            for (let i = 0; i < handKarten.length; i++) {
                if (handKarten[i].textContent === "") {
                    return handKarten[i];
                }
            }
            return null;
        }
        if (leerKarte != null) {
            leerKarte.innerText = zufallsKarte;
        }
        if (allCards.length === 0) {
            nachziehStapel.innerText = "leer";
            nachziehStapel.style.display = "none";
        }
    });
    // ABLAGE 
    let ablage = document.getElementById("discard");
    let handKarten = document.getElementsByClassName("Handkarten");
    for (let v = 0; v < handKarten.length; v++) {
        //Karten von Hand in die Ablage
        handKarten[v].addEventListener("click", function (event) {
            let karteHand = event.target;
            ablage.textContent = karteHand.textContent;
            karteHand.textContent = "";
        });
    }
});
//# sourceMappingURL=aufgabe3b.js.map