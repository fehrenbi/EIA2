/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class FlowerPink extends aufgabe8.Flower {
        constructor(_x, _y) {
            super(_x, _y, "");
            console.log("FlowerRose");
        }
        drawFlowerPink() {
            //Blüte
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#FF1493";
            aufgabe8.crc2.moveTo(this.x, this.y);
            aufgabe8.crc2.lineTo(this.x + 16, this.y - 24);
            aufgabe8.crc2.lineTo(this.x + 8, this.y - 16);
            aufgabe8.crc2.lineTo(this.x, this.y - 24);
            aufgabe8.crc2.lineTo(this.x - 8, this.y - 16);
            aufgabe8.crc2.lineTo(this.x - 16, this.y - 24);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            //Stengel
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.strokeStyle = "#228B22";
            aufgabe8.crc2.fillStyle = "#228B22";
            aufgabe8.crc2.moveTo(this.x, this.y);
            aufgabe8.crc2.lineTo(this.x, this.y + 30);
            aufgabe8.crc2.lineTo(this.x + 10, this.y + 10);
            aufgabe8.crc2.lineTo(this.x, this.y + 15);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            aufgabe8.crc2.stroke();
        }
    }
    aufgabe8.FlowerPink = FlowerPink;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8flowerpink.js.map