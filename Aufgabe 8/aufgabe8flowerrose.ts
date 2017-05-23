/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class FlowerRose extends Flower {

        constructor(_x: number, _y: number) {
            super(_x, _y, "");
            console.log("create FlowerRose");
        }
        
        draw(): void {
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