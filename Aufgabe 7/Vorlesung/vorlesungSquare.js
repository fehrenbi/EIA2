var L7_Classes;
(function (L7_Classes) {
    class Square {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        setRandomPosition() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    L7_Classes.Square = Square;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=vorlesungSquare.js.map