/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace shark {
    export class Bubble {
        x: number; 
        y: number;
        //color: string;
        
        constructor (_x: number, _y: number) {
            console.log("Ich bin der constructor Bubble");
            this.x = _x;
            this.y = _y;
        }
        update(): void {
            this.draw();
            this.move();
        }
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#E0FFFF";
            crc2.strokeStyle = "#104E8B";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#E0FFFF";
            crc2.strokeStyle = "#104E8B";
            crc2.arc(this.x + 8, this.y - 15, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#E0FFFF";
            crc2.strokeStyle = "#104E8B";
            crc2.arc(this.x - 5, this.y - 30, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
        move(): void {
            //this.x += Math.random() * 5 - 1.5;
            this.y += Math.random() * 0 - 0.3;
            if (this.y < 0) {
                this.y = 600;
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