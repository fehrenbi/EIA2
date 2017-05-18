/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class FlowerPink extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y, "");
            console.log("FlowerPink");
        }

        draw(): void {
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
    }
}