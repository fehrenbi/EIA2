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
    //Himmel
    crc2.beginPath();
    crc2.fillStyle = "#B0E2FF";
    crc2.rect(0, 0, canvas.width, 130);
    crc2.fill();
});
//# sourceMappingURL=blumenwiese.js.map