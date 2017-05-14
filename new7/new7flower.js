/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var new7;
(function (new7) {
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
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.arc(this.x + 15, this.y, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.arc(this.x + 15, this.y + 15, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.arc(this.x, this.y + 15, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.strokeStyle = "#228B22";
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.moveTo(this.x + 5, this.y + 5);
            new7.crc2.lineTo(this.x + 5, this.y + 30);
            new7.crc2.lineTo(this.x + 10, this.y + 10);
            new7.crc2.lineTo(this.x, this.y + 15);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.stroke();
        }
        drawFlowerPink() {
            //Blüte
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FF1493";
            new7.crc2.moveTo(this.x, this.y);
            new7.crc2.lineTo(this.x + 16, this.y - 24);
            new7.crc2.lineTo(this.x + 8, this.y - 16);
            new7.crc2.lineTo(this.x, this.y - 24);
            new7.crc2.lineTo(this.x - 8, this.y - 16);
            new7.crc2.lineTo(this.x - 16, this.y - 24);
            new7.crc2.closePath();
            new7.crc2.fill();
            //Stengel
            new7.crc2.beginPath();
            new7.crc2.strokeStyle = "#228B22";
            new7.crc2.fillStyle = "#228B22";
            new7.crc2.moveTo(this.x, this.y);
            new7.crc2.lineTo(this.x, this.y + 30);
            new7.crc2.lineTo(this.x + 10, this.y + 10);
            new7.crc2.lineTo(this.x, this.y + 15);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.stroke();
        }
        drawFlowerRose() {
            this.sorte = "FlowerRose";
            //Blütenblätter
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FFB5C5";
            new7.crc2.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FFB5C5";
            new7.crc2.arc(this.x + 10, this.y - 10, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FFB5C5";
            new7.crc2.arc(this.x - 10, this.y + 10, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FFB5C5";
            new7.crc2.arc(this.x - 10, this.y - 10, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            //Blüte
            new7.crc2.beginPath();
            new7.crc2.fillStyle = "#FFFF00";
            new7.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            new7.crc2.closePath();
            new7.crc2.fill();
            //Stengel
            new7.crc2.beginPath();
            new7.crc2.strokeStyle =
                new7.crc2.fillStyle = "#228B22";
            new7.crc2.moveTo(this.x, this.y + 10);
            new7.crc2.lineTo(this.x, this.y + 40);
            new7.crc2.lineTo(this.x + 10, this.y + 20);
            new7.crc2.lineTo(this.x, this.y + 30);
            new7.crc2.closePath();
            new7.crc2.fill();
            new7.crc2.stroke();
        }
    }
    new7.Flower = Flower;
})(new7 || (new7 = {}));
//# sourceMappingURL=new7flower.js.map