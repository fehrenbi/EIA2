/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    export class Bee {
        x: number;
        y: number;
        color: string;
        //size: boolean;
        
        constructor (_x: number, _y: number) {
            console.log("Ich bin der constructor");
            this.x = _x;
            this.y = _y;
        }
        update(): void {
            this.draw();
            this.move();
            this.setRandomColor();
        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#C6E2FF";
            crc2.arc(this.x - 4, this.y - 7, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.rect(this.x - 10, this.y, 10, 10);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.color; //"#ffff00";
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 2, this.y - 2, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
        move(): void {
            this.x += Math.random() * 5 - 1.5;
            this.y += Math.random() * 4 - 2;
            if (this.x > 1150) {
                this.x = 0;
            }
            if (this.y > 700) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = 700;
            }
        }
        setRandomColor(): void {
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

            }
        }
    }