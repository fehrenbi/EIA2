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
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        abschlussarbeit.crc2 = canvas.getContext("2d");
        drawGround();
        drawSpider(200, 200);
    }
    // alle Funktionen für Canvas-Elemente
    function drawGround() {
        abschlussarbeit.crc2.beginPath();
        abschlussarbeit.crc2.fillStyle = "#CDAA7D";
        abschlussarbeit.crc2.rect(0, 0, 1200, 600);
        abschlussarbeit.crc2.fill();
        abschlussarbeit.crc2.closePath();
    }
    function drawSpider(_x, _y) {
        abschlussarbeit.crc2.beginPath();
        abschlussarbeit.crc2.fillStyle = "#000000";
        abschlussarbeit.crc2.arc(_x + 2, _y - 2, 5, 0, 2 * Math.PI);
        abschlussarbeit.crc2.fill();
        abschlussarbeit.crc2.closePath();
        abschlussarbeit.crc2.beginPath();
        abschlussarbeit.crc2.strokeStyle = "#000000";
        abschlussarbeit.crc2.moveTo(_x, _y);
        abschlussarbeit.crc2.lineTo(_x - 10, _y - 5);
        abschlussarbeit.crc2.moveTo(_x, _y);
        abschlussarbeit.crc2.lineTo(_x - 10, _y + 5);
        abschlussarbeit.crc2.moveTo(_x, _y);
        abschlussarbeit.crc2.lineTo(_x + 14, _y - 5);
        abschlussarbeit.crc2.moveTo(_x, _y);
        abschlussarbeit.crc2.lineTo(_x + 14, _y + 5);
        abschlussarbeit.crc2.closePath();
        abschlussarbeit.crc2.stroke();
        abschlussarbeit.crc2.beginPath();
        abschlussarbeit.crc2.fillStyle = "#FFFFFF";
        abschlussarbeit.crc2.arc(_x, _y - 3, 1, 0, 2 * Math.PI);
        abschlussarbeit.crc2.arc(_x + 4, _y - 3, 1, 0, 2 * Math.PI);
        abschlussarbeit.crc2.fill();
        abschlussarbeit.crc2.closePath();
    }
})(abschlussarbeit || (abschlussarbeit = {}));
//# sourceMappingURL=Abschlussarbeit.js.map