/*
Aufgabe 2a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 31.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.onload = function () {
    placeDivs();
};

function placeDivs(): void {
    var rice: number = 1;
    var zeile: number = 0;
    for (var i: number = 0; i < 64; i++) {
        var element = document.createElement("div");
        if (((i + zeile) % 2) == 0) {
            element.className = "board white";
        }
        else {
            element.className = "board black";
        }
        if (((i + 1) % 8) == 0) {
            zeile++;
        }
        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}
let divList : NodeListOf<HTMLElement> = document.getElementsByTagName("div");
for (let i: number = 0; i < 9; i++) {
        divList[i].addEventListener("click", function() {
        this.classList.toggle("selected");
        showSummeKoerner();
    }