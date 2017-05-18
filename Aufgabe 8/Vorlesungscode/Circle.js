var L8_Inheritance;
(function (L8_Inheritance) {
    class Circle extends L8_Inheritance.MovingShape {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomPosition();
            this.setRandomTargetPosition();
        }
        setRandomTargetPosition() {
            this.xTarget = Math.random() * L8_Inheritance.crc2.canvas.width;
            this.yTarget = Math.random() * L8_Inheritance.crc2.canvas.height;
        }
        draw() {
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L8_Inheritance.crc2.fill();
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    L8_Inheritance.Circle = Circle;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Circle.js.map