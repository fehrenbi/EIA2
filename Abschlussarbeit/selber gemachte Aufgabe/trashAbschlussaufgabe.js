/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class Trash {
        constructor(_x, _y) {
            console.log("Ich bin der constructor Trash");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
            // this.setRandomColor();
        }
        draw() {
            abschlussaufgabe.crc2.beginPath();
            abschlussaufgabe.crc2.fillStyle = "#F0F0F0";
            abschlussaufgabe.crc2.strokeStyle = "#00000";
            abschlussaufgabe.crc2.rect(this.x, this.y, 20, 20);
            abschlussaufgabe.crc2.fill();
            abschlussaufgabe.crc2.stroke();
            abschlussaufgabe.crc2.closePath();
        }
        move() {
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
    }
    abschlussaufgabe.Trash = Trash;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=trashAbschlussaufgabe.js.map