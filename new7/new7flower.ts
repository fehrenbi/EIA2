/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace new7 {
    export class Flower {
        x: number;
        y: number;
        sorte: string;
        
        constructor (_x: number, _y: number, _sorte: string) {
            this.x = _x;
            this.y = _y;
            this.sorte = _sorte;
        }
        setRandomFlower(): void {
            for (var n: number = 0; n < 50; n++) {
                var zufallBlume: number = Math.floor((Math.random() * 3) + 0);
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
        draw(): void {
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
            
        drawKleeblatt(): void {
            crc2.beginPath();
            crc2.fillStyle = "#228B22";
            crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#228B22";
            crc2.arc(this.x + 15, this.y, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#228B22";
            crc2.arc(this.x + 15, this.y + 15, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#228B22";
            crc2.arc(this.x, this.y + 15, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "#228B22";
            crc2.fillStyle = "#228B22";
            crc2.moveTo(this.x + 5, this.y + 5);
            crc2.lineTo(this.x + 5, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawFlowerPink(): void {
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#FF1493";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 16, this.y - 24);
            crc2.lineTo(this.x + 8, this.y - 16);
            crc2.lineTo(this.x, this.y - 24);
            crc2.lineTo(this.x - 8, this.y - 16);
            crc2.lineTo(this.x - 16, this.y - 24);
            crc2.closePath();
            crc2.fill();
            //Stengel
            crc2.beginPath();
            crc2.strokeStyle = "#228B22";
            crc2.fillStyle = "#228B22";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x, this.y + 15);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        drawFlowerRose(): void {
            this.sorte = "FlowerRose";
            //Blütenblätter
            crc2.beginPath();
            crc2.fillStyle = "#FFB5C5";
            crc2.arc(this.x + 10, this.y + 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#FFB5C5";
            crc2.arc(this.x + 10, this.y - 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#FFB5C5";
            crc2.arc(this.x - 10, this.y + 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#FFB5C5";
            crc2.arc(this.x - 10, this.y - 10, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //Stengel
            crc2.beginPath();
            crc2.strokeStyle =
                crc2.fillStyle = "#228B22";
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y + 40);
            crc2.lineTo(this.x + 10, this.y + 20);
            crc2.lineTo(this.x, this.y + 30);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}
    