/*
Aufgabe 7
Name: Luise Fehrenbach
Matrikel: 254668
Datum: 12.5.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    class Bee {
        constructor(_x, _y) {
            console.log("Ich bin der constructor Bee");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
            this.setRandomColor();
        }
        draw() {
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#C6E2FF";
            aufgabe8.crc2.arc(this.x - 4, this.y - 7, 10, 0, 2 * Math.PI);
            aufgabe8.crc2.fill();
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#000000";
            aufgabe8.crc2.rect(this.x - 10, this.y, 10, 10);
            aufgabe8.crc2.fill();
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = this.color; //"#ffff00";
            aufgabe8.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe8.crc2.fill();
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#000000";
            aufgabe8.crc2.arc(this.x + 2, this.y - 2, 2, 0, 2 * Math.PI);
            aufgabe8.crc2.fill();
            aufgabe8.crc2.closePath();
        }
        move() {
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
        setRandomColor() {
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
    aufgabe8.Bee = Bee;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8bee.js.map