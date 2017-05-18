/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class Kleeblatt extends Flower {
        
        constructor(_x: number, _y: number) {
            super(_x, _y, "");
            console.log("create Kleeblatt");
        }

        draw(): void {
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
    }
}