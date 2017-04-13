/*
Aufgabe 4
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 13.4.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2;
    crc2 = canvas.getContext("2d");
    //Blumenwiese
    crc2.beginPath();
    crc2.fillStyle = "#32CD32";
    crc2.rect(0, 0, canvas.width, canvas.height);
    crc2.fill();
    crc2.closePath();
    //Himmel
    crc2.beginPath();
    crc2.fillStyle = "#B0E2FF";
    crc2.rect(0, 0, canvas.width, 250);
    crc2.fill();
    crc2.closePath();
    drawMountain(1040, 250, "#7D7D7D");
    drawMountain(740, 250, "#7D7D7D");
    drawMountain(890, 250, "#BEBEBE");
    drawSun(400, 250);
    drawTree();
    drawKleeblatt(500, 400);
    //Funktionen
    function drawMountain(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 100, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();
    }
    function drawSun(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.arc(500, 250, 120, 0, Math.PI * 3, true);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree() {
        crc2.beginPath();
        crc2.fillStyle = "#8B5A2B";
        crc2.rect(0, 0, 150, canvas.height);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.moveTo(250, 150);
        //arc(..., ..., Radius, startwinkel, endwinkel)
        crc2.arc(210, 110, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(30, 200, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(250, 0, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
        crc2.arc(0, 0, 150, 0, 360);
        crc2.closePath();
        crc2.fill();
    }
    function drawKleeblatt(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#228B22";
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 30, 0, 80);
        crc2.arc(_x, _y, 30, 60, 170);
        crc2.arc(_x, _y, 30, 180, 230);
        crc2.arc(_x, _y, 30, 240, 350);
        crc2.closePath();
        crc2.fill();
    }
});
//# sourceMappingURL=blumenwiese.js.map