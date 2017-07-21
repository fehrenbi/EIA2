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
            trashDraw.fillStyle = "#F0F0F0";
            trashDraw.strokeStyle = "#00000";
            trashDraw.moveTo(this.x, this.y);
            trashDraw.lineTo(this.x + 20, this.y + 10);
            trashDraw.lineTo(this.x + 10, this.y - 10);
            trashDraw.lineTo(this.x, this.y);
            //trashDraw.rect(this.x, this.y, 20, 20);
            trashDraw.fill();
            trashDraw.stroke();
            trashDraw.closePath();
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
       /* setRandomColor(): void {
                switch (Math.floor((Math.random() * 4) + 1)) {
                    case 1:
                        this.color = "blue";
                        break;
                    case 2:
                        this.color = "green";
                        break;
                    case 3:
                        this.color = "red";
                        break;
                    case 4:
                        this.color = "yellow";
                        break;
                }

            }*/
        }
    }