/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace abschlussaufgabe {
    export class Shark extends Fish {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("create Shark");
        }
        
        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            //Schwanz
            crc2.beginPath();
            crc2.strokeStyle = "#9C9C9C";
            crc2.fillStyle = "#CCCCCC";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 20, this.y - 24);
            //crc2.lineTo(this.x + 8, this.y - 16);
            //crc2.lineTo(this.x, this.y - 24);
            //crc2.lineTo(this.x - 8, this.y - 16);
            crc2.lineTo(this.x - 20, this.y + 24);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //Körper
            crc2.beginPath();
            crc2.fillStyle = "#CCCCC";
            crc2.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#9C9C9C";
            crc2.arc(this.x + 7, this.y, 20, 0, 1 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        
        move(): void {
            var mouseX: number = event.ClientX;
            var mouseY: number = event.ClientY;
            this.x = mouseX;
            this.y = mouseY;
        }
    }
}