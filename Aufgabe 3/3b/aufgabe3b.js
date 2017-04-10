document.addEventListener("DOMContentLoaded", function () {
    //Array anlegen
    let kartenSammlung = ['Pik 7', 'Pik 8', 'Pik 9',
        'Pik 10', 'Pik Bube', 'Pik Dame',
        'Pik König', 'Pik As',
        'Kreuz 7', 'Kreuz 8', 'Kreuz 9',
        'Kreuz 10', 'Kreuz Bube', 'Kreuz Dame',
        'Kreuz König', 'Kreuz As',
        'Karo 7', 'Karo 8', 'Karo 9',
        'Karo 10', 'Karo Bube', 'Karo Dame',
        'Karo König', 'Karo As',
        'Herz 7', 'Herz 8', 'Herz 9',
        'Herz 10', 'Herz Bube', 'Herz Dame',
        'Herz König', 'Herz As'];
    // Nachziehstapel (deck) 
    let nachziehStapel = document.getElementById("deck");
    //Eventlistener auf den Nachziehstapel
    nachziehStapel.addEventListener("click", function () {
        //Zufallskarte generieren
        let zufallsKarte = kartenSammlung.splice(Math.round(Math.random() * (kartenSammlung.length - 1)), 1)[0];
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
        if (kartenSammlung.length === 0) {
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