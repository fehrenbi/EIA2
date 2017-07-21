/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark {
    export class Shark extends Fish {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("create Shark");
            this.x = _x;
            this.y = _y;
        }
        
        
        draw(): void {
            //Schwanz
            draw.clearRect(0, 0, 1200, 600);
            draw.beginPath();
            draw.strokeStyle = "#9C9C9C";
            draw.fillStyle = "#CCCCCC";
            draw.moveTo(this.x, this.y);
            draw.lineTo(this.x - 20, this.y - 24);
            draw.lineTo(this.x - 20, this.y + 24);
            draw.closePath();
            draw.stroke();
            draw.fill();
            //Körper
            draw.beginPath();
            draw.fillStyle = "#CCCCC";
            draw.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            draw.closePath();
            draw.stroke(); 
            draw.fill();
            //Auge
            draw.beginPath();
            draw.fillStyle = "#000000";
            draw.arc(this.x + 11, this.y - 3, 2, 0, 2 * Math.PI);
            draw.closePath();
            draw.fill();
            //Maul
            draw.beginPath();
            draw.strokeStyle = "#000000";
            draw.moveTo(this.x + 10, this.y + 7);
            draw.lineTo(this.x + 20, this.y + 12);
            draw.closePath();
            draw.stroke();
            draw.beginPath();
            draw.strokeStyle = "#000000";
            draw.moveTo(this.x + 10, this.y + 7);
            draw.lineTo(this.x + 22, this.y - 5);
            draw.closePath();
            draw.stroke();
        }
        
        move(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
           
        }
    }
}