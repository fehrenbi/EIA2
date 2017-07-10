/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class SmallFish extends abschlussaufgabe.Fish {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("create SmallFish");
        }
        draw() {
            //Körper
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#FF4040";
            abschlussaufgabe.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            abschlussaufgabe.crc2.fill();
            abschlussaufgabe.crc2.closePath();
            //Auge
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#000000";
            abschlussaufgabe.crc2.arc(this.x + 2, this.y - 1, 2, 0, 2 * Math.PI);
            abschlussaufgabe.crc2.fill();
            abschlussaufgabe.crc2.closePath();
            //Flosse
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#FF4040";
            abschlussaufgabe.crc2.moveTo(this.x, this.y);
            abschlussaufgabe.crc2.lineTo(this.x - 15, this.y - 9);
            abschlussaufgabe.crc2.lineTo(this.x - 15, this.y + 9);
            abschlussaufgabe.crc2.lineTo(this.x, this.y);
            abschlussaufgabe.crc2.fill();
            abschlussaufgabe.crc2.closePath();
        }
    }
    abschlussaufgabe.SmallFish = SmallFish;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=smallFishAbschlussaufgabe.js.map