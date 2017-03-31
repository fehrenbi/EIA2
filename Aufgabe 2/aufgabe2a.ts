/*
Aufgabe 2a
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 30.03.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function () {
    
    let n: number = 64;
    var reihe: number = 1
    var farbe;
    for (var i = 0; i < n, i++;) {
        if (reihe % 2 ==1 ){
            if (i % 2 ==0 ){
                farbe = "black";
                }
            else {
                farbe = "white";
                }
            }
         else {
            if (i % 2 == 0) {
                color = "white";
            }
            else {
                color = "black";
            }
        }
        x = (i % 8) * size;
        y = (reihe - 1) * size;
        placeDiv(color, x, y, size, i);
        if (x == (7 * size)) {
            reihe++;
        }
    }
