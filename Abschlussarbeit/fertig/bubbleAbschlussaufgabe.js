/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var shark;
(function (shark) {
    class Bubble {
        constructor(_x, _y) {
            console.log("Ich bin der constructor Bubble");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            shark.crc2.beginPath();
            shark.crc2.fillStyle = "#E0FFFF";
            shark.crc2.strokeStyle = "#104E8B";
            shark.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            shark.crc2.fill();
            shark.crc2.stroke();
            shark.crc2.closePath();
            shark.crc2.beginPath();
            shark.crc2.fillStyle = "#E0FFFF";
            shark.crc2.strokeStyle = "#104E8B";
            shark.crc2.arc(this.x + 8, this.y - 15, 6, 0, 2 * Math.PI);
            shark.crc2.fill();
            shark.crc2.stroke();
            shark.crc2.closePath();
            shark.crc2.beginPath();
            shark.crc2.fillStyle = "#E0FFFF";
            shark.crc2.strokeStyle = "#104E8B";
            shark.crc2.arc(this.x - 5, this.y - 30, 7, 0, 2 * Math.PI);
            shark.crc2.fill();
            shark.crc2.stroke();
            shark.crc2.closePath();
        }
        move() {
            //this.x += Math.random() * 5 - 1.5;
            this.y += Math.random() * 0 - 0.3;
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }
    shark.Bubble = Bubble;
})(shark || (shark = {}));
//# sourceMappingURL=bubbleAbschlussaufgabe.js.map