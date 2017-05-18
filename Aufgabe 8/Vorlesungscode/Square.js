var L8_Inheritance;
(function (L8_Inheritance) {
    class Square extends L8_Inheritance.MovingShape {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create square");
        }
        draw() {
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    L8_Inheritance.Square = Square;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Square.js.map