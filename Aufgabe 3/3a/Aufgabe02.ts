/*
Aufgabe 2a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 31.03.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


let sum = 0;
document.addEventListener("DOMContentLoaded", function () {
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
  
        if (i < 8) {
            element.addEventListener("click", mark);
            }
        }
    
    let mouseBox = document.createElement("div");
    document.body.appendChild(mouseBox);
    mouseBox.className = "mouseBox2";
    document.addEventListener("mousemove", moveBox);
    function moveBox(Event) {
        mouseBox.style.left = (Event.clientX + 30) + "px";
        mouseBox.style.top = (Event.clientY + 30) + "px";
    }
    
    function mark(event) {
        


