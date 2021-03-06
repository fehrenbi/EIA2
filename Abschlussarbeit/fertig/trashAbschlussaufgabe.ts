/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark {
    export class Trash {
        x: number;
        y: number;
        
        constructor (_x: number, _y: number) {
            console.log("Ich bin der constructor Trash");
            this.x = _x;
            this.y = _y;
        }
        update(): void {
            this.draw();
            this.move();
           // this.setRandomColor();
        }
        draw(): void {
            trashDraw.beginPath();
            trashDraw.fillStyle = "#778899";
            trashDraw.strokeStyle = "#76B900";
            trashDraw.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            trashDraw.closePath();
            trashDraw.fill();
            trashDraw.stroke();
            trashDraw.beginPath();
            trashDraw.fillStyle = "#778899";
            trashDraw.strokeStyle = "#76B900";
            trashDraw.arc(this.x - 9, this.y, 7, 0, 2 * Math.PI);
            trashDraw.closePath();
            trashDraw.fill();
            trashDraw.stroke();
            trashDraw.beginPath();
            trashDraw.fillStyle = "#778899";
            trashDraw.arc(this.x - 4.5, this.y - 5, 7, 0, 2 * Math.PI);
            trashDraw.closePath();
            trashDraw.fill();
        }
        move(): void {
            this.x += Math.random() * 0 - 0.5;
            this.y += Math.random() * 4 - 2;
            if (this.y < 0) {
                this.y = 600;
            }
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 1200) {
                this.x = 0; 
            }
            if (this.x < 0) {
                this.x = 1200;
            }
        }
        
        redraw(): void {
            trashDraw.clearRect(0, 0, 1200, 600);
            trashDraw.beginPath();
            trashDraw.closePath();
            }
        }
    }