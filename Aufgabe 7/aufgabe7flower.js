/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe7;
(function (aufgabe7) {
    class Flower {
        constructor(_x, _y, _sorte) {
            this.x = _x;
            this.y = _y;
            this.sorte = _sorte;
        }
        setRandomFlower() {
            for (var n = 0; n < 50; n++) {
                var zufallBlume = Math.floor((Math.random() * 3) + 0);
                this.x = (Math.random() * (1150 - 150)) + 150;
                this.y = (Math.random() * (700 - 250)) + 250;
                switch (zufallBlume) {
                    case 0:
                        this.drawKleeblatt();
                        break;
                    case 1:
                        this.drawFlowerPink();
                        break;
                    case 2:
                        this.drawFlowerRose();
                        break;
                }
            }
        }
        draw() {
            switch (this.sorte) {
                case "Kleeblatt":
                    this.drawKleeblatt();
                    break;
                case "Pink":
                    this.drawFlowerPink();
                    break;
                case "Rose":
                default:
                    this.drawFlowerRose();
            }
        }
        drawKleeblatt() {
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.arc(this.x + 15, this.y, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.arc(this.x + 15, this.y + 15, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.arc(this.x, this.y + 15, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.strokeStyle = "#228B22";
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.moveTo(this.x + 5, this.y + 5);
            aufgabe7.crc2.lineTo(this.x + 5, this.y + 30);
            aufgabe7.crc2.lineTo(this.x + 10, this.y + 10);
            aufgabe7.crc2.lineTo(this.x, this.y + 15);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.stroke();
        }
        drawFlowerPink() {
            //Blüte
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FF1493";
            aufgabe7.crc2.moveTo(this.x, this.y);
            aufgabe7.crc2.lineTo(this.x + 16, this.y - 24);
            aufgabe7.crc2.lineTo(this.x + 8, this.y - 16);
            aufgabe7.crc2.lineTo(this.x, this.y - 24);
            aufgabe7.crc2.lineTo(this.x - 8, this.y - 16);
            aufgabe7.crc2.lineTo(this.x - 16, this.y - 24);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            //Stengel
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.strokeStyle = "#228B22";
            aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.moveTo(this.x, this.y);
            aufgabe7.crc2.lineTo(this.x, this.y + 30);
            aufgabe7.crc2.lineTo(this.x + 10, this.y + 10);
            aufgabe7.crc2.lineTo(this.x, this.y + 15);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.stroke();
        }
        drawFlowerRose() {
            this.sorte = "FlowerRose";
            //Blütenblätter
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FFB5C5";
            aufgabe7.crc2.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FFB5C5";
            aufgabe7.crc2.arc(this.x + 10, this.y - 10, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FFB5C5";
            aufgabe7.crc2.arc(this.x - 10, this.y + 10, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FFB5C5";
            aufgabe7.crc2.arc(this.x - 10, this.y - 10, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            //Blüte
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#FFFF00";
            aufgabe7.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            //Stengel
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.strokeStyle =
                aufgabe7.crc2.fillStyle = "#228B22";
            aufgabe7.crc2.moveTo(this.x, this.y + 10);
            aufgabe7.crc2.lineTo(this.x, this.y + 40);
            aufgabe7.crc2.lineTo(this.x + 10, this.y + 20);
            aufgabe7.crc2.lineTo(this.x, this.y + 30);
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.fill();
            aufgabe7.crc2.stroke();
        }
    }
    aufgabe7.Flower = Flower;
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=aufgabe7flower.js.map