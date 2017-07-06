/*
Abschlussarbeit:
Objektorientierte Programmierung: Snake
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 5.7.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace hai {
    export class Fish {
        x: number;
        y: number;
    }

    constructor(_x: number, _y: number) {
        console.log("Fische erstellt");
        this.x = _x;
        this.y = _y;
    }
    
    draw(): void {
        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#FF4040";
        crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x + 2, this.y - 1 , 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //Flosse
        crc2.beginPath();
        crc2.fillStyle = "#FF4040";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 15, this.y - 9);
        crc2.lineTo(this.x - 15, this.y + 9);
        crc2.lineTo(this.x, this.y);
        crc2.fill();
        crc2.closePath();
    }


}