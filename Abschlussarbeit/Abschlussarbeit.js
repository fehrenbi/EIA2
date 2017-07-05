/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschlussarbeit;
(function (abschlussarbeit) {
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        abschlussarbeit.crc2 = canvas.getContext("2d");
        drawGround();
    }
    // alle Funktionen für Canvas-Elemente
    function drawGround() {
        abschlussarbeit.crc2.beginPath();
        abschlussarbeit.crc2.fillStyle = "#CDAA7D";
        abschlussarbeit.crc2.rect(0, 0, 1150, 700);
        abschlussarbeit.crc2.fill();
        abschlussarbeit.crc2.closePath();
    }
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=Abschlussarbeit.js.map