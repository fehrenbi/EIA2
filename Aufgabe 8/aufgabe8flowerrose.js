/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class FlowerRose extends aufgabe8.Flower {
        constructor(_x, _y) {
            super(_x, _y, "");
            console.log("create FlowerRose");
        }
        draw() {
            this.sorte = "FlowerRose";
            //Blütenblätter
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FFB5C5";
            aufgabe8.crc2.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FFB5C5";
            aufgabe8.crc2.arc(this.x + 10, this.y - 10, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FFB5C5";
            aufgabe8.crc2.arc(this.x - 10, this.y + 10, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FFB5C5";
            aufgabe8.crc2.arc(this.x - 10, this.y - 10, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            //Blüte
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FFFF00";
            aufgabe8.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            //Stengel
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.strokeStyle =
                aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.moveTo(this.x, this.y + 10);
            aufgabe8.crc2.lineTo(this.x, this.y + 40);
            aufgabe8.crc2.lineTo(this.x + 10, this.y + 20);
            aufgabe8.crc2.lineTo(this.x, this.y + 30);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.stroke();
        }
    }
    aufgabe8.FlowerRose = FlowerRose;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8flowerrose.js.map