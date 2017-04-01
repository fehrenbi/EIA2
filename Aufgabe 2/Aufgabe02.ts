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

function placeDivs() {
    var rice = 1;
    var zeile = 0;
    for (var i = 0; i < 64; i++) {
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
