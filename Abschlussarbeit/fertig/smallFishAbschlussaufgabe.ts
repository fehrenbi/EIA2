/*
Aufgabe 8
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 18.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark {
    export class SmallFish extends Fish {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("create SmallFish");
        }

        draw(): void {
            //Körper
            fischDraw.beginPath();
            fischDraw.fillStyle = "#FF4040";
            fischDraw.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            fischDraw.fill();
            fischDraw.closePath();
            //Auge
            fischDraw.beginPath();
            fischDraw.fillStyle = "#000000";
            fischDraw.arc(this.x + 2, this.y - 1, 2, 0, 2 * Math.PI);
            fischDraw.fill();
            fischDraw.closePath();
            //Flosse
            fischDraw.beginPath();
            fischDraw.fillStyle = "#FF4040";
            fischDraw.moveTo(this.x, this.y);
            fischDraw.lineTo(this.x - 15, this.y - 9);
            fischDraw.lineTo(this.x - 15, this.y + 9);
            fischDraw.lineTo(this.x, this.y);
            fischDraw.fill();
            fischDraw.closePath();
        }

        redraw(): void {
            fischDraw.clearRect(0, 0, 1200, 600);
            fischDraw.beginPath();
            fischDraw.closePath();
        }


    }
}