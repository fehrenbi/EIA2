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
let divList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
for (let i: number = 0; i < 9; i++) {
        divList[i].addEventListener("click", function() {
        this.classList.toggle("selected");
        showSummeKoerner();
    }
            
function showSummeKoerner():void {
    let selectedDivs : NodeListOf<Element> = document.getElementsByClassName("selected");
    let summeKoerner : number = 0;

    if (selectedDivs.length == 0){  /* Zeigt die Tooltip Box nur an, wenn Felder selektiert sind */
        document.getElementById("tooltip").style.display = "none";
    }
    else {
        document.getElementById("tooltip").style.display = "inline-block";
    }

    for (let i = 0; i < selectedDivs.length; i++) {  /* Schreibt die Summe der Körner auf den selektierten Feldern in die Tooltip Box */
        summeKoerner += Number(selectedDivs[i].textContent);
        document.getElementById("tooltip").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + summeKoerner.toString() + "\r\n" + "Hexadezimal: " + summeKoerner.toString(16);
    }
}



document.addEventListener("mousemove", function(Event) { /* Sorgt dafür, dass die Tooltip Box die Maus verfolgt */
    document.getElementById("tooltip").style.left = (Event.clientX+10) + "px";
    document.getElementById("tooltip").style.top = (Event.clientY+10) + "px";
}