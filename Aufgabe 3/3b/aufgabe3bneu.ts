/*
Aufgabe 4
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 20.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener("DOMContentLoaded", function(): void {
    
    let allCards: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    let ablage: HTMLDivElement = <HTMLDivElement>document.getElementById("discard");
    let handKarten: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("Handkarten");
    let nachziehStapel: HTMLElement = document.getElementById("deck");
    
    nachziehStapel.addEventListener("click", randomCard);
    
    function randomCard (): void {
            let zufallsKarte: string = allCards.splice(Math.round(Math.random() * (allCards.length - 1)), 1)[0];
            let leerKarte: HTMLDivElement = sucheLeerKarte();
            if (leerKarte != null) {
                leerKarte.innerText = zufallsKarte;
            }
            if (allCards.length === 0) {
                nachziehStapel.innerText = "leer";
                nachziehStapel.style.display = "none";
            }   
    }
    
    function sucheLeerKarte(): HTMLDivElement {
        for (let i: number = 0; i < handKarten.length; i++) {
            if (handKarten[i].textContent == "") {
                return handKarten[i];    
            }    
        }
        return null;
     }
    
    //Karten von Hand in die Ablage
    
    for (let v: number = 0; v < handKarten.length; v++) {
        handKarten[v].addEventListener("click", karteAblegen);
        }
    
    function karteAblegen (): void {
        let karteHand: HTMLDivElement = <HTMLDivElement>event.target;
        ablage.textContent = karteHand.textContent;
        karteHand.textContent = "";    
    }

});