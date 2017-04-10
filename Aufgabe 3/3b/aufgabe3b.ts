
document.addEventListener("DOMContentLoaded", function(): void {
    //Array anlegen
    /*let kartenSammlung: string[] = ['Pik 7', 'Pik 8', 'Pik 9',
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
        'Herz König', 'Herz As'];*/

     let allCards: string [] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    // Nachziehstapel (deck) 
    let nachziehStapel: HTMLElement = document.getElementById("deck");

    //Eventlistener auf den Nachziehstapel
    nachziehStapel.addEventListener("click", function(): void {
        //Zufallskarte generieren
        let zufallsKarte: string = allCards.splice(Math.round(Math.random() * (allCards.length - 1)), 1)[0];

        // Variable für funktion anlegen
        let leerKarte: HTMLDivElement = sucheLeerKarte();
        function sucheLeerKarte(): HTMLDivElement {

            for (let i: number = 0; i < handKarten.length; i++) {
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
    })

    // ABLAGE 
    let ablage: HTMLDivElement = <HTMLDivElement>document.getElementById("discard");
    let handKarten: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Handkarten");


    for (let v: number = 0; v < handKarten.length; v++) {

        //Karten von Hand in die Ablage
        handKarten[v].addEventListener("click", function(event: Event): void {
            let karteHand: HTMLDivElement = <HTMLDivElement>event.target;
            ablage.textContent = karteHand.textContent;
            karteHand.textContent = "";

        }
        )}
});