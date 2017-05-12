var aufgabe7;
(function (aufgabe7) {
    class Bee {
        //size: boolean;
        constructor(_x, _y) {
            console.log("Ich bin der constructor");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.drawBee();
            this.move();
            this.setRandomColor();
        }
        drawBee() {
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#C6E2FF";
            aufgabe7.crc2.arc(this.x - 4, this.y - 7, 10, 0, 2 * Math.PI);
            aufgabe7.crc2.fill();
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#000000";
            aufgabe7.crc2.rect(this.x - 10, this.y, 10, 10);
            aufgabe7.crc2.fill();
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = this.color; //"#ffff00";
            aufgabe7.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe7.crc2.fill();
            aufgabe7.crc2.closePath();
            aufgabe7.crc2.beginPath();
            aufgabe7.crc2.fillStyle = "#000000";
            aufgabe7.crc2.arc(this.x + 2, this.y - 2, 2, 0, 2 * Math.PI);
            aufgabe7.crc2.fill();
            aufgabe7.crc2.closePath();
        }
        move() {
            this.x += Math.random() * 5 - 2.2;
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
    aufgabe7.Bee = Bee;
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=Bee.js.map