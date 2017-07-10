/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace abschlussaufgabe {
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
            crc2.beginPath();
            crc2.fillStyle = "#FFC0CB";
            crc2.rect(this.x, this.y, 20, 20);
            crc2.fill();
            crc2.closePath();
        }
        move(): void {
            this.x += Math.random() * 0 - 0.5;
            this.y += Math.random() * 4 - 2;
            if (this.y < 0) {
                this.y = 600;
            }
            if (this.x > 1200) {
                this.x = 0;
            }
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