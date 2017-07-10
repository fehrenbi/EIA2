/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class Shark extends abschlussaufgabe.Fish {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("create Shark");
        }
        draw() {
            //Schwanz
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.strokeStyle = "#9C9C9C";
            abschlussaufgabe.crc2.fillStyle = "#CCCCCC";
            abschlussaufgabe.crc2.moveTo(this.x, this.y);
            abschlussaufgabe.crc2.lineTo(this.x - 20, this.y - 24);
            //crc2.lineTo(this.x + 8, this.y - 16);
            //crc2.lineTo(this.x, this.y - 24);
            //crc2.lineTo(this.x - 8, this.y - 16);
            abschlussaufgabe.crc2.lineTo(this.x - 20, this.y + 24);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            //Körper
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#CCCCC";
            abschlussaufgabe.crc2.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#9C9C9C";
            abschlussaufgabe.crc2.arc(this.x + 7, this.y, 20, 0, 1 * Math.PI);
            abschlussaufgabe.crc2.closePath();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.fill();
        }
    }
    abschlussaufgabe.Shark = Shark;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=sharkAbschlussaufgabe.js.map