/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class Kleeblatt extends aufgabe8.Flower {
        constructor(_x, _y) {
            super(_x, _y, "");
            console.log("create Kleeblatt");
        }
        draw() {
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.arc(this.x + 15, this.y, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.arc(this.x + 15, this.y + 15, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.arc(this.x, this.y + 15, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.strokeStyle = "#228B22";
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.moveTo(this.x + 5, this.y + 5);
            aufgabe8.crc2.lineTo(this.x + 5, this.y + 30);
            aufgabe8.crc2.lineTo(this.x + 10, this.y + 10);
            aufgabe8.crc2.lineTo(this.x, this.y + 15);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.stroke();
        }
    }
    aufgabe8.Kleeblatt = Kleeblatt;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8kleeblatt.js.map